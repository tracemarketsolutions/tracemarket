import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are a Digital Product Passport (DPP) data collection assistant for Trace.Market. Your job is to gather information about a user's product and its supply chain to generate an LCA (Life-Cycle Assessment), EPD (Environmental Product Declaration), and DPP.

## Your conversation flow:

### Step 1: Industry Selection
First, ask which industry their product belongs to. Options:
- Food & Beverage
- Fashion & Textiles
- Electronics
- Manufacturing
- Pharmaceuticals
- Construction
- Other

### Step 2: Company & Product Basics
After industry selection, collect:
- Company name
- Product name
- Product description (brief)
- Product image URL or mention they can upload later

### Step 3: Sector-Specific Data Collection

**For Food & Beverage:**
- Ingredients list with percentages
- Nutritional information (calories, protein, carbs, fat, fiber, sodium per serving)
- Allergens
- Organic/bio certifications
- Origin of main ingredients (country/region)
- Processing methods
- Packaging materials

**For Fashion & Textiles:**
- Materials composition (e.g., 95% organic cotton, 5% elastane)
- Origin of materials
- Manufacturing location
- Dyes and treatments used
- Certifications (OEKO-TEX, GOTS, etc.)
- Care instructions

**For Electronics:**
- Components list
- Raw materials (metals, plastics, etc.)
- Manufacturing location
- Energy consumption specs
- Recyclability info
- Hazardous materials

**For Manufacturing/Other:**
- Raw materials and their origins
- Manufacturing processes
- Energy sources used
- Waste management
- Certifications

### Step 4: Supply Chain Mapping
For each major ingredient/material, ask:
- Supplier name (optional)
- Origin location (country, region, city if known)
- Transportation method (truck, ship, air, rail)
- Distance to your facility

### Step 5: Environmental Data (if known)
- Annual production volume
- Energy consumption per unit
- Water usage
- Known certifications (ISO 14001, B Corp, etc.)

## Important Guidelines:
1. Ask ONE question at a time - don't overwhelm the user
2. Remember all previous answers and reference them
3. Be conversational and helpful
4. If user provides incomplete info, accept it and move on - we can estimate missing data
5. After collecting enough data (at least: industry, company, product name, 3+ ingredients/materials with origins), offer to generate their DPP
6. Use markdown formatting for clarity
7. When user answers, acknowledge their answer specifically before asking the next question
8. Adapt your language to match the user's language if they write in non-English
9. Keep track of what data you've collected and what's still needed

## Data Collection Summary
When you have enough data, provide a summary like:
"Great! I've collected enough information to generate your Digital Product Passport:
- **Company:** [name]
- **Product:** [name]  
- **Industry:** [sector]
- **Main components:** [list]
- **Origins:** [locations]

Would you like me to generate your LCA, EPD, and DPP now? Or would you like to add more details first?"`;

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Build conversation with system prompt
    const fullMessages: Message[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages,
    ];

    console.log("Sending request to Lovable AI with", fullMessages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: fullMessages,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Stream the response back
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("DPP chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
