import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    if (!url) {
      return new Response(JSON.stringify({ error: "URL is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Fetching URL for analysis:", url);

    // Fetch the URL content
    let pageContent = "";
    let pageTitle = "";
    
    try {
      const pageResponse = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      });
      
      if (pageResponse.ok) {
        const html = await pageResponse.text();
        
        // Extract title
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
        pageTitle = titleMatch ? titleMatch[1].trim() : "";
        
        // Extract text content from HTML (basic extraction)
        // Remove scripts and styles
        let cleanHtml = html
          .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
          .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim();
        
        // Limit content length for AI processing
        pageContent = cleanHtml.substring(0, 15000);
      }
    } catch (fetchError) {
      console.error("Failed to fetch URL:", fetchError);
      pageContent = `Could not fetch URL directly. The URL is: ${url}`;
    }

    // Use AI to analyze the content and extract product/company data
    const analysisPrompt = `You are an expert at analyzing web pages to extract product and company information for Digital Product Passport creation.

Analyze the following web page content and extract all relevant information:

**URL:** ${url}
**Page Title:** ${pageTitle}
**Content:**
${pageContent}

Extract and return a structured analysis with the following information (only include what you can find):

1. **Company Information:**
   - Company name
   - Company description
   - Website
   - Location/country

2. **Product Information:**
   - Product name(s)
   - Product descriptions
   - Product categories
   - Prices if mentioned

3. **Supply Chain Data:**
   - Ingredients or materials mentioned
   - Origins/sources
   - Suppliers mentioned
   - Manufacturing locations

4. **Sustainability & Certifications:**
   - Any certifications mentioned (organic, fair trade, etc.)
   - Environmental claims
   - Sustainability practices

5. **Contact Information:**
   - Email
   - Phone
   - Address

Format your response as a clear, structured report that can be used to populate a DPP form.
Be precise and only include information that is actually present in the content.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "user", content: analysisPrompt }
        ],
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

    const data = await response.json();
    const analysis = data.choices?.[0]?.message?.content || "Unable to analyze the URL content.";

    return new Response(JSON.stringify({ 
      success: true,
      url,
      pageTitle,
      analysis 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("URL analysis error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
