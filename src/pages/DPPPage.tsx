import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Leaf,
  Droplets,
  Zap,
  Recycle,
  MapPin,
  Globe,
  Award,
  ArrowLeft,
  Share2,
  Download,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Truck,
  Factory,
  Package,
} from "lucide-react";
import traceMarketLogo from "@/assets/tracemarket-logo.png";

interface DPPData {
  id: string;
  product: {
    id: string;
    name: string;
    description: string;
    image_url: string;
    industry: string;
    slug: string;
  };
  company: {
    id: string;
    name: string;
    logo_url: string;
    slug: string;
  };
  ingredients: Array<{
    id: string;
    name: string;
    percentage: number;
    origin_country: string;
    origin_region: string;
    latitude: number;
    longitude: number;
    transport_method: string;
    distance_km: number;
    is_organic: boolean;
    certifications: string[];
  }>;
  nutrition: {
    serving_size: string;
    calories: number;
    protein_g: number;
    carbs_g: number;
    fat_g: number;
    fiber_g: number;
    sodium_mg: number;
    sugar_g: number;
  } | null;
  lca: {
    co2e_total_kg: number;
    co2e_materials_kg: number;
    co2e_transport_kg: number;
    co2e_manufacturing_kg: number;
    co2e_packaging_kg: number;
    water_footprint_l: number;
    energy_consumption_kwh: number;
    recyclability_score: number;
    data_sources: string[];
  } | null;
  dpp: {
    id: string;
    status: string;
    primary_language: string;
    available_languages: string[];
    eu_compliance_data: Record<string, any>;
    published_at: string;
  };
}

const DPPPage = () => {
  const { companySlug, productSlug } = useParams();
  const [dppData, setDppData] = useState<DPPData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedIngredient, setExpandedIngredient] = useState<string | null>(null);

  useEffect(() => {
    const fetchDPP = async () => {
      if (!companySlug || !productSlug) {
        setError("Invalid URL");
        setLoading(false);
        return;
      }

      try {
        // Fetch company
        const { data: company, error: companyError } = await supabase
          .from("companies")
          .select("*")
          .eq("slug", companySlug)
          .maybeSingle();

        if (companyError || !company) {
          setError("Company not found");
          setLoading(false);
          return;
        }

        // Fetch product
        const { data: product, error: productError } = await supabase
          .from("products")
          .select("*")
          .eq("company_id", company.id)
          .eq("slug", productSlug)
          .maybeSingle();

        if (productError || !product) {
          setError("Product not found");
          setLoading(false);
          return;
        }

        // Fetch DPP
        const { data: dpp, error: dppError } = await supabase
          .from("product_dpps")
          .select("*")
          .eq("product_id", product.id)
          .eq("status", "published")
          .maybeSingle();

        if (dppError || !dpp) {
          setError("DPP not published yet");
          setLoading(false);
          return;
        }

        // Fetch ingredients
        const { data: ingredients } = await supabase
          .from("product_ingredients")
          .select("*")
          .eq("product_id", product.id)
          .order("percentage", { ascending: false });

        // Fetch nutrition (for food products)
        const { data: nutrition } = await supabase
          .from("product_nutrition")
          .select("*")
          .eq("product_id", product.id)
          .maybeSingle();

        // Fetch LCA
        const { data: lca } = await supabase
          .from("product_lca")
          .select("*")
          .eq("product_id", product.id)
          .maybeSingle();

        setDppData({
          id: dpp.id,
          product: {
            id: product.id,
            name: product.name,
            description: product.description || "",
            image_url: product.image_url || "",
            industry: product.industry,
            slug: product.slug,
          },
          company: {
            id: company.id,
            name: company.name,
            logo_url: company.logo_url || "",
            slug: company.slug,
          },
          ingredients: (ingredients || []).map((i: any) => ({
            id: i.id,
            name: i.name,
            percentage: Number(i.percentage) || 0,
            origin_country: i.origin_country || "Unknown",
            origin_region: i.origin_region || "",
            latitude: Number(i.latitude) || 0,
            longitude: Number(i.longitude) || 0,
            transport_method: i.transport_method || "truck",
            distance_km: Number(i.distance_km) || 0,
            is_organic: i.is_organic || false,
            certifications: i.certifications || [],
          })),
          nutrition: nutrition ? {
            serving_size: nutrition.serving_size || "100g",
            calories: Number(nutrition.calories) || 0,
            protein_g: Number(nutrition.protein_g) || 0,
            carbs_g: Number(nutrition.carbs_g) || 0,
            fat_g: Number(nutrition.fat_g) || 0,
            fiber_g: Number(nutrition.fiber_g) || 0,
            sodium_mg: Number(nutrition.sodium_mg) || 0,
            sugar_g: Number(nutrition.sugar_g) || 0,
          } : null,
        lca: lca ? {
          co2e_total_kg: Number(lca.co2e_total_kg) || 0,
          co2e_materials_kg: Number(lca.co2e_materials_kg) || 0,
          co2e_transport_kg: Number(lca.co2e_transport_kg) || 0,
          co2e_manufacturing_kg: Number(lca.co2e_manufacturing_kg) || 0,
          co2e_packaging_kg: Number(lca.co2e_packaging_kg) || 0,
          water_footprint_l: Number(lca.water_footprint_l) || 0,
          energy_consumption_kwh: Number(lca.energy_consumption_kwh) || 0,
          recyclability_score: Number(lca.recyclability_score) || 0,
          data_sources: Array.isArray(lca.data_sources) 
            ? (lca.data_sources as any[]).map((s: any) => String(s)) 
            : [],
        } : null,
          dpp: {
            id: dpp.id,
            status: dpp.status,
            primary_language: dpp.primary_language,
            available_languages: dpp.available_languages || ["en"],
            eu_compliance_data: typeof dpp.eu_compliance_data === 'object' ? dpp.eu_compliance_data : {},
            published_at: dpp.published_at,
          },
        });
      } catch (err) {
        console.error("Error fetching DPP:", err);
        setError("Failed to load DPP data");
      } finally {
        setLoading(false);
      }
    };

    fetchDPP();
  }, [companySlug, productSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading Digital Product Passport...</p>
        </div>
      </div>
    );
  }

  if (error || !dppData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6 text-center">
            <h1 className="text-xl font-semibold mb-2">DPP Not Found</h1>
            <p className="text-muted-foreground mb-4">{error || "This product passport doesn't exist or hasn't been published yet."}</p>
            <Link to="/">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getTransportIcon = (method: string) => {
    switch (method?.toLowerCase()) {
      case "ship": return "🚢";
      case "air": return "✈️";
      case "rail": return "🚂";
      default: return "🚛";
    }
  };

  const formatCO2e = (kg: number) => {
    if (kg >= 1000) return `${(kg / 1000).toFixed(2)} t`;
    if (kg >= 1) return `${kg.toFixed(2)} kg`;
    return `${(kg * 1000).toFixed(0)} g`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 rounded-lg hover:bg-secondary transition-colors">
              <ArrowLeft className="h-5 w-5 text-muted-foreground" />
            </Link>
            <img src={traceMarketLogo} alt="Trace.Market" className="h-6 w-auto" />
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="gap-1">
              <Globe className="h-3 w-3" />
              EU ESPR Compliant
            </Badge>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative">
            {dppData.product.image_url ? (
              <img
                src={dppData.product.image_url}
                alt={dppData.product.name}
                className="w-full aspect-square object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <Package className="h-24 w-24 text-primary/40" />
              </div>
            )}
            {dppData.ingredients.some(i => i.is_organic) && (
              <Badge className="absolute top-4 left-4 bg-primary">
                <Leaf className="h-3 w-3 mr-1" />
                Organic Certified
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              {dppData.company.logo_url && (
                <img src={dppData.company.logo_url} alt={dppData.company.name} className="h-6 w-auto" />
              )}
              <span className="text-muted-foreground">{dppData.company.name}</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{dppData.product.name}</h1>
            <p className="text-lg text-muted-foreground mb-6">{dppData.product.description}</p>
            
            <Badge variant="outline" className="w-fit mb-6">
              {dppData.product.industry}
            </Badge>

            {/* Quick Stats */}
            {dppData.lca && (
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Leaf className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{formatCO2e(dppData.lca.co2e_total_kg)}</p>
                      <p className="text-xs text-muted-foreground">CO₂e Footprint</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-info/5 border-info/20">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="p-2 rounded-full bg-info/10">
                      <Droplets className="h-5 w-5 text-info" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{dppData.lca.water_footprint_l.toFixed(0)}L</p>
                      <p className="text-xs text-muted-foreground">Water Footprint</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="ingredients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="ingredients">Composition</TabsTrigger>
            <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
            <TabsTrigger value="environmental">Environmental</TabsTrigger>
            {dppData.nutrition && <TabsTrigger value="nutrition">Nutrition</TabsTrigger>}
          </TabsList>

          {/* Ingredients/Composition Tab */}
          <TabsContent value="ingredients" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Product Composition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dppData.ingredients.map((ingredient) => (
                  <div
                    key={ingredient.id}
                    className="border border-border rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                      onClick={() => setExpandedIngredient(
                        expandedIngredient === ingredient.id ? null : ingredient.id
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
                          {ingredient.is_organic ? "🌱" : "🧪"}
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-foreground">{ingredient.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {ingredient.origin_country}
                            {ingredient.origin_region && `, ${ingredient.origin_region}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-xl font-bold text-foreground">{ingredient.percentage}%</p>
                        </div>
                        {expandedIngredient === ingredient.id ? (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </button>
                    {expandedIngredient === ingredient.id && (
                      <div className="px-4 pb-4 pt-2 border-t border-border bg-secondary/30">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Origin</p>
                            <p className="font-medium">{ingredient.origin_country}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Transport</p>
                            <p className="font-medium">{getTransportIcon(ingredient.transport_method)} {ingredient.transport_method}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Distance</p>
                            <p className="font-medium">{ingredient.distance_km ? `${ingredient.distance_km} km` : "N/A"}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Organic</p>
                            <p className="font-medium">{ingredient.is_organic ? "Yes ✓" : "No"}</p>
                          </div>
                        </div>
                        {ingredient.certifications && ingredient.certifications.length > 0 && (
                          <div className="mt-3 flex gap-2">
                            {ingredient.certifications.map((cert, idx) => (
                              <Badge key={idx} variant="secondary">{cert}</Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Supply Chain Tab */}
          <TabsContent value="supply-chain" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Supply Chain Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Simple visual representation - for full Mapbox, would need API key */}
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-border flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                      {/* Simple world map outline placeholder */}
                      <path d="M10,25 Q25,10 40,25 T70,25 T90,25" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </svg>
                  </div>
                  <div className="text-center z-10">
                    <Globe className="h-12 w-12 text-primary/40 mx-auto mb-3" />
                    <p className="text-muted-foreground">Supply chain visualization</p>
                    <p className="text-sm text-muted-foreground">
                      {dppData.ingredients.length} origins across{" "}
                      {new Set(dppData.ingredients.map(i => i.origin_country)).size} countries
                    </p>
                  </div>
                </div>

                {/* Origins list */}
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  {dppData.ingredients.map((ingredient) => (
                    <div key={ingredient.id} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                      <div className="text-2xl">{getTransportIcon(ingredient.transport_method)}</div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{ingredient.name}</p>
                        <p className="text-sm text-muted-foreground">
                          📍 {ingredient.origin_country}
                          {ingredient.distance_km > 0 && ` • ${ingredient.distance_km} km`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Environmental Tab */}
          <TabsContent value="environmental" className="space-y-4">
            {dppData.lca ? (
              <>
                {/* Main metrics */}
                <div className="grid md:grid-cols-4 gap-4">
                  <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
                    <CardContent className="p-6 text-center">
                      <Leaf className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">{formatCO2e(dppData.lca.co2e_total_kg)}</p>
                      <p className="text-sm text-muted-foreground">Total CO₂e</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-info/5 to-info/10">
                    <CardContent className="p-6 text-center">
                      <Droplets className="h-8 w-8 text-info mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">{dppData.lca.water_footprint_l.toFixed(0)}L</p>
                      <p className="text-sm text-muted-foreground">Water Usage</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-warning/5 to-warning/10">
                    <CardContent className="p-6 text-center">
                      <Zap className="h-8 w-8 text-warning mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">{dppData.lca.energy_consumption_kwh.toFixed(1)}</p>
                      <p className="text-sm text-muted-foreground">kWh Energy</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-success/5 to-success/10">
                    <CardContent className="p-6 text-center">
                      <Recycle className="h-8 w-8 text-success mx-auto mb-2" />
                      <p className="text-3xl font-bold text-foreground">{dppData.lca.recyclability_score.toFixed(0)}%</p>
                      <p className="text-sm text-muted-foreground">Recyclability</p>
                    </CardContent>
                  </Card>
                </div>

                {/* CO2e Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle>Carbon Footprint Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-32 text-sm text-muted-foreground flex items-center gap-2">
                          <Factory className="h-4 w-4" /> Materials
                        </div>
                        <div className="flex-1 bg-secondary rounded-full h-4 overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${(dppData.lca.co2e_materials_kg / dppData.lca.co2e_total_kg) * 100}%` }}
                          />
                        </div>
                        <div className="w-20 text-right text-sm font-medium">
                          {formatCO2e(dppData.lca.co2e_materials_kg)}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-32 text-sm text-muted-foreground flex items-center gap-2">
                          <Truck className="h-4 w-4" /> Transport
                        </div>
                        <div className="flex-1 bg-secondary rounded-full h-4 overflow-hidden">
                          <div
                            className="h-full bg-info rounded-full"
                            style={{ width: `${(dppData.lca.co2e_transport_kg / dppData.lca.co2e_total_kg) * 100}%` }}
                          />
                        </div>
                        <div className="w-20 text-right text-sm font-medium">
                          {formatCO2e(dppData.lca.co2e_transport_kg)}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-32 text-sm text-muted-foreground flex items-center gap-2">
                          <Factory className="h-4 w-4" /> Manufacturing
                        </div>
                        <div className="flex-1 bg-secondary rounded-full h-4 overflow-hidden">
                          <div
                            className="h-full bg-warning rounded-full"
                            style={{ width: `${(dppData.lca.co2e_manufacturing_kg / dppData.lca.co2e_total_kg) * 100}%` }}
                          />
                        </div>
                        <div className="w-20 text-right text-sm font-medium">
                          {formatCO2e(dppData.lca.co2e_manufacturing_kg)}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-32 text-sm text-muted-foreground flex items-center gap-2">
                          <Package className="h-4 w-4" /> Packaging
                        </div>
                        <div className="flex-1 bg-secondary rounded-full h-4 overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full"
                            style={{ width: `${(dppData.lca.co2e_packaging_kg / dppData.lca.co2e_total_kg) * 100}%` }}
                          />
                        </div>
                        <div className="w-20 text-right text-sm font-medium">
                          {formatCO2e(dppData.lca.co2e_packaging_kg)}
                        </div>
                      </div>
                    </div>

                    {/* Data sources */}
                    <Separator className="my-6" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Data Sources:</p>
                      <div className="flex flex-wrap gap-2">
                        {dppData.lca.data_sources.map((source, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {source}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <Leaf className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Environmental data not yet calculated</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Nutrition Tab */}
          {dppData.nutrition && (
            <TabsContent value="nutrition">
              <Card>
                <CardHeader>
                  <CardTitle>Nutritional Information</CardTitle>
                  <p className="text-sm text-muted-foreground">Per {dppData.nutrition.serving_size}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-lg bg-secondary/50 text-center">
                      <p className="text-3xl font-bold text-foreground">{dppData.nutrition.calories}</p>
                      <p className="text-sm text-muted-foreground">Calories</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/50 text-center">
                      <p className="text-3xl font-bold text-foreground">{dppData.nutrition.protein_g}g</p>
                      <p className="text-sm text-muted-foreground">Protein</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/50 text-center">
                      <p className="text-3xl font-bold text-foreground">{dppData.nutrition.carbs_g}g</p>
                      <p className="text-sm text-muted-foreground">Carbohydrates</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary/50 text-center">
                      <p className="text-3xl font-bold text-foreground">{dppData.nutrition.fat_g}g</p>
                      <p className="text-sm text-muted-foreground">Fat</p>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-xl font-semibold text-foreground">{dppData.nutrition.fiber_g}g</p>
                      <p className="text-sm text-muted-foreground">Fiber</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-foreground">{dppData.nutrition.sugar_g}g</p>
                      <p className="text-sm text-muted-foreground">Sugar</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-foreground">{dppData.nutrition.sodium_mg}mg</p>
                      <p className="text-sm text-muted-foreground">Sodium</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>

        {/* EU Compliance Footer */}
        <Card className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">EU ESPR Compliant</p>
                  <p className="text-sm text-muted-foreground">
                    This Digital Product Passport meets EU Ecodesign for Sustainable Products Regulation standards
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Download PDF
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Verify
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Published date */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Published: {new Date(dppData.dpp.published_at).toLocaleDateString()} • 
          DPP ID: {dppData.dpp.id.slice(0, 8)}
        </p>
      </main>
    </div>
  );
};

export default DPPPage;
