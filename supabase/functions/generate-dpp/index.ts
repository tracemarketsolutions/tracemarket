import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { productData, sessionToken } = await req.json();
    
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const {
      industry,
      companyName,
      productName,
      productDescription,
      productImageUrl,
      ingredients,
      nutritionInfo,
      certifications,
      packagingMaterials,
    } = productData;

    if (!companyName || !productName || !industry) {
      return new Response(
        JSON.stringify({ error: "Missing required data: companyName, productName, industry" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Generating DPP for ${companyName} - ${productName}`);

    // 1. Create or get company
    const companySlug = generateSlug(companyName);
    let { data: company, error: companyError } = await supabase
      .from("companies")
      .select("*")
      .eq("slug", companySlug)
      .maybeSingle();

    if (!company) {
      const { data: newCompany, error: createError } = await supabase
        .from("companies")
        .insert({
          name: companyName,
          slug: companySlug,
          user_id: null, // Anonymous for now
        })
        .select()
        .single();

      if (createError) {
        console.error("Error creating company:", createError);
        throw new Error("Failed to create company");
      }
      company = newCompany;
    }

    // 2. Create product
    const productSlug = generateSlug(productName);
    const { data: product, error: productError } = await supabase
      .from("products")
      .insert({
        company_id: company.id,
        name: productName,
        slug: productSlug,
        description: productDescription,
        image_url: productImageUrl,
        industry: industry,
        status: "active",
        chat_data: productData,
      })
      .select()
      .single();

    if (productError) {
      console.error("Error creating product:", productError);
      throw new Error("Failed to create product: " + productError.message);
    }

    // 3. Insert ingredients
    if (ingredients && Array.isArray(ingredients) && ingredients.length > 0) {
      const ingredientRecords = ingredients.map((ing: any) => ({
        product_id: product.id,
        name: ing.name,
        percentage: ing.percentage,
        origin_country: ing.origin_country || ing.origin,
        origin_region: ing.origin_region,
        origin_city: ing.origin_city,
        latitude: ing.latitude,
        longitude: ing.longitude,
        supplier: ing.supplier,
        transport_method: ing.transport_method,
        distance_km: ing.distance_km,
        is_organic: ing.is_organic || false,
        certifications: ing.certifications || [],
      }));

      const { error: ingredientError } = await supabase
        .from("product_ingredients")
        .insert(ingredientRecords);

      if (ingredientError) {
        console.error("Error inserting ingredients:", ingredientError);
      }
    }

    // 4. Insert nutrition info (for food products)
    if (industry.toLowerCase() === "food & beverage" && nutritionInfo) {
      const { error: nutritionError } = await supabase
        .from("product_nutrition")
        .insert({
          product_id: product.id,
          serving_size: nutritionInfo.serving_size,
          calories: nutritionInfo.calories,
          protein_g: nutritionInfo.protein_g,
          carbs_g: nutritionInfo.carbs_g,
          fat_g: nutritionInfo.fat_g,
          fiber_g: nutritionInfo.fiber_g,
          sodium_mg: nutritionInfo.sodium_mg,
          sugar_g: nutritionInfo.sugar_g,
          additional_nutrients: nutritionInfo.additional || {},
        });

      if (nutritionError) {
        console.error("Error inserting nutrition:", nutritionError);
      }
    }

    // 5. Calculate LCA
    const lcaResponse = await fetch(`${supabaseUrl}/functions/v1/calculate-lca`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${supabaseServiceKey}`,
      },
      body: JSON.stringify({
        productId: product.id,
        productData: {
          industry,
          ingredients: ingredients || [],
          productWeightKg: 1,
        },
      }),
    });

    const lcaResult = await lcaResponse.json();
    console.log("LCA calculation result:", lcaResult);

    // 6. Create DPP record
    const dppContent = {
      product: {
        name: productName,
        description: productDescription,
        image_url: productImageUrl,
        industry,
      },
      company: {
        name: companyName,
        logo_url: company.logo_url,
      },
      ingredients: ingredients || [],
      nutrition: nutritionInfo || null,
      certifications: certifications || [],
      packaging: packagingMaterials || [],
      lca: lcaResult.lca || null,
      generated_at: new Date().toISOString(),
    };

    const { data: dpp, error: dppError } = await supabase
      .from("product_dpps")
      .insert({
        product_id: product.id,
        status: "published",
        primary_language: "en",
        available_languages: ["en"],
        content: dppContent,
        eu_compliance_data: {
          espr_compliant: true,
          data_completeness: calculateDataCompleteness(productData),
          verification_status: "self-declared",
        },
        published_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (dppError) {
      console.error("Error creating DPP:", dppError);
      throw new Error("Failed to create DPP");
    }

    // 7. Update chat session if token provided
    if (sessionToken) {
      await supabase
        .from("chat_sessions")
        .update({
          product_id: product.id,
          status: "completed",
        })
        .eq("session_token", sessionToken);
    }

    const dppUrl = `/dpp/${companySlug}/${productSlug}`;

    return new Response(
      JSON.stringify({
        success: true,
        dpp: {
          id: dpp.id,
          url: dppUrl,
          product_id: product.id,
          company_id: company.id,
          content: dppContent,
        },
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("DPP generation error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function calculateDataCompleteness(data: any): number {
  let score = 0;
  const maxScore = 10;

  if (data.companyName) score += 1;
  if (data.productName) score += 1;
  if (data.productDescription) score += 1;
  if (data.industry) score += 1;
  if (data.ingredients?.length > 0) score += 2;
  if (data.ingredients?.some((i: any) => i.origin_country)) score += 1;
  if (data.nutritionInfo) score += 1;
  if (data.certifications?.length > 0) score += 1;
  if (data.packagingMaterials?.length > 0) score += 1;

  return Math.round((score / maxScore) * 100);
}
