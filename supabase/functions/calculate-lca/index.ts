import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Emission factors (kg CO2e per kg of product) - based on EPA, IPCC, and open LCA databases
const EMISSION_FACTORS: Record<string, Record<string, number>> = {
  food: {
    // Grains and cereals
    wheat: 0.8,
    rice: 2.7,
    corn: 0.9,
    oats: 0.8,
    barley: 0.7,
    flour: 0.9,
    // Proteins
    beef: 27.0,
    pork: 7.6,
    chicken: 5.4,
    fish: 5.0,
    eggs: 4.2,
    milk: 1.9,
    cheese: 8.5,
    tofu: 2.0,
    // Vegetables
    tomato: 1.1,
    potato: 0.4,
    onion: 0.3,
    carrot: 0.3,
    lettuce: 0.4,
    spinach: 0.5,
    // Fruits
    apple: 0.4,
    banana: 0.8,
    orange: 0.4,
    strawberry: 0.6,
    // Oils and fats
    olive_oil: 3.5,
    palm_oil: 7.6,
    sunflower_oil: 2.1,
    butter: 9.0,
    // Sweeteners
    sugar: 1.3,
    honey: 2.4,
    // Nuts and seeds
    almonds: 3.5,
    peanuts: 2.1,
    cashews: 3.2,
    // Beverages base
    coffee: 8.0,
    cocoa: 5.2,
    tea: 1.9,
    // Default for unknown
    default: 2.0,
  },
  fashion: {
    cotton: 5.9,
    organic_cotton: 3.8,
    polyester: 5.5,
    nylon: 6.4,
    wool: 10.0,
    silk: 8.5,
    linen: 1.5,
    hemp: 1.2,
    leather: 17.0,
    recycled_polyester: 2.5,
    elastane: 6.0,
    viscose: 4.0,
    default: 5.0,
  },
  electronics: {
    aluminum: 8.2,
    steel: 1.9,
    copper: 3.5,
    plastic_abs: 3.2,
    glass: 0.9,
    silicon: 2.8,
    lithium: 12.0,
    cobalt: 35.0,
    gold: 12500.0,
    silver: 125.0,
    default: 5.0,
  },
  manufacturing: {
    steel: 1.9,
    aluminum: 8.2,
    plastic: 3.0,
    glass: 0.9,
    concrete: 0.1,
    wood: 0.3,
    rubber: 3.0,
    default: 2.5,
  },
};

// Transport emission factors (kg CO2e per kg per km)
const TRANSPORT_FACTORS: Record<string, number> = {
  truck: 0.0001,
  ship: 0.00002,
  air: 0.0006,
  rail: 0.00003,
  default: 0.0001,
};

// Water footprint factors (liters per kg)
const WATER_FACTORS: Record<string, Record<string, number>> = {
  food: {
    beef: 15400,
    pork: 5990,
    chicken: 4325,
    wheat: 1830,
    rice: 2500,
    sugar: 1780,
    coffee: 18900,
    cocoa: 17000,
    milk: 1020,
    eggs: 3300,
    default: 1500,
  },
  fashion: {
    cotton: 10000,
    polyester: 60,
    wool: 6000,
    leather: 17000,
    default: 3000,
  },
  electronics: {
    default: 100,
  },
  manufacturing: {
    default: 500,
  },
};

function findClosestMatch(ingredient: string, factors: Record<string, number>): string {
  const normalized = ingredient.toLowerCase().replace(/[^a-z]/g, '');
  
  // Direct match
  if (factors[normalized]) return normalized;
  
  // Partial match
  for (const key of Object.keys(factors)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return key;
    }
  }
  
  return 'default';
}

function calculateCO2e(
  ingredients: Array<{ name: string; percentage: number; origin_country?: string; transport_method?: string; distance_km?: number }>,
  industry: string,
  productWeightKg: number = 1
): { total: number; materials: number; transport: number; breakdown: Array<{ name: string; co2e: number }> } {
  const industryFactors = EMISSION_FACTORS[industry.toLowerCase()] || EMISSION_FACTORS.manufacturing;
  
  let materialsCO2e = 0;
  let transportCO2e = 0;
  const breakdown: Array<{ name: string; co2e: number }> = [];
  
  for (const ingredient of ingredients) {
    const weightKg = (ingredient.percentage / 100) * productWeightKg;
    const factorKey = findClosestMatch(ingredient.name, industryFactors);
    const emissionFactor = industryFactors[factorKey] || industryFactors.default;
    
    // Materials CO2e
    const ingredientCO2e = weightKg * emissionFactor;
    materialsCO2e += ingredientCO2e;
    
    // Transport CO2e
    if (ingredient.distance_km) {
      const transportMethod = (ingredient.transport_method || 'default').toLowerCase();
      const transportFactor = TRANSPORT_FACTORS[transportMethod] || TRANSPORT_FACTORS.default;
      transportCO2e += weightKg * ingredient.distance_km * transportFactor;
    }
    
    breakdown.push({
      name: ingredient.name,
      co2e: ingredientCO2e,
    });
  }
  
  return {
    total: materialsCO2e + transportCO2e,
    materials: materialsCO2e,
    transport: transportCO2e,
    breakdown,
  };
}

function calculateWaterFootprint(
  ingredients: Array<{ name: string; percentage: number }>,
  industry: string,
  productWeightKg: number = 1
): number {
  const industryFactors = WATER_FACTORS[industry.toLowerCase()] || WATER_FACTORS.manufacturing;
  
  let totalWater = 0;
  
  for (const ingredient of ingredients) {
    const weightKg = (ingredient.percentage / 100) * productWeightKg;
    const factorKey = findClosestMatch(ingredient.name, industryFactors);
    const waterFactor = industryFactors[factorKey] || industryFactors.default;
    totalWater += weightKg * waterFactor;
  }
  
  return totalWater;
}

function estimateRecyclability(
  ingredients: Array<{ name: string; percentage: number }>,
  industry: string
): number {
  // Simple recyclability scoring based on material types
  const recyclableMaterials = ['glass', 'aluminum', 'steel', 'paper', 'cardboard', 'cotton', 'wool', 'linen'];
  const partiallyRecyclable = ['plastic', 'polyester', 'nylon', 'wood'];
  
  let score = 0;
  let totalWeight = 0;
  
  for (const ingredient of ingredients) {
    const normalized = ingredient.name.toLowerCase();
    totalWeight += ingredient.percentage;
    
    if (recyclableMaterials.some(m => normalized.includes(m))) {
      score += ingredient.percentage * 1.0;
    } else if (partiallyRecyclable.some(m => normalized.includes(m))) {
      score += ingredient.percentage * 0.5;
    } else {
      score += ingredient.percentage * 0.2;
    }
  }
  
  return totalWeight > 0 ? (score / totalWeight) * 100 : 50;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { productData, productId } = await req.json();
    
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    const { industry, ingredients, productWeightKg = 1 } = productData;
    
    if (!industry || !ingredients || !Array.isArray(ingredients)) {
      return new Response(
        JSON.stringify({ error: "Missing required data: industry and ingredients" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Calculating LCA for ${industry} product with ${ingredients.length} ingredients`);

    // Calculate emissions
    const co2eResult = calculateCO2e(ingredients, industry, productWeightKg);
    
    // Calculate water footprint
    const waterFootprint = calculateWaterFootprint(ingredients, industry, productWeightKg);
    
    // Estimate recyclability
    const recyclabilityScore = estimateRecyclability(ingredients, industry);
    
    // Estimate energy consumption (simplified)
    const energyConsumption = co2eResult.total * 2.5; // Rough conversion factor

    const lcaData = {
      co2e_total_kg: Math.round(co2eResult.total * 10000) / 10000,
      co2e_materials_kg: Math.round(co2eResult.materials * 10000) / 10000,
      co2e_transport_kg: Math.round(co2eResult.transport * 10000) / 10000,
      co2e_manufacturing_kg: Math.round(co2eResult.total * 0.15 * 10000) / 10000, // 15% estimate for manufacturing
      co2e_packaging_kg: Math.round(co2eResult.total * 0.1 * 10000) / 10000, // 10% estimate for packaging
      water_footprint_l: Math.round(waterFootprint * 100) / 100,
      energy_consumption_kwh: Math.round(energyConsumption * 100) / 100,
      recyclability_score: Math.round(recyclabilityScore * 100) / 100,
      calculation_method: "Trace.Market LCA Engine v1.0 (EPA, IPCC emission factors)",
      data_sources: [
        "EPA Emission Factors Hub",
        "IPCC 2021 Guidelines",
        "Water Footprint Network",
        "Open LCA Nexus Database"
      ],
      breakdown: co2eResult.breakdown,
    };

    // Save to database if productId provided
    if (productId) {
      const { error: upsertError } = await supabase
        .from("product_lca")
        .upsert({
          product_id: productId,
          ...lcaData,
          data_sources: lcaData.data_sources,
        }, { onConflict: "product_id" });

      if (upsertError) {
        console.error("Error saving LCA data:", upsertError);
      } else {
        console.log("LCA data saved for product:", productId);
      }
    }

    return new Response(
      JSON.stringify({ success: true, lca: lcaData }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("LCA calculation error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
