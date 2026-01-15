import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Droplets, Zap, ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Placeholder products for when no published DPPs exist
const placeholderProducts = [
  {
    id: "1",
    name: "Organic Olive Oil",
    company: "Mediterranean Farms",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=300&fit=crop",
    co2e: 0.19,
    water: 369,
    industry: "Food & Beverage",
    slug: "organic-olive-oil",
    companySlug: "mediterranean-farms"
  },
  {
    id: "2",
    name: "Sustainable Cotton T-Shirt",
    company: "EcoWear",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    co2e: 2.4,
    water: 1200,
    industry: "Textiles",
    slug: "sustainable-cotton-tshirt",
    companySlug: "ecowear"
  },
  {
    id: "3",
    name: "Recycled Aluminum Can",
    company: "GreenPack",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=300&fit=crop",
    co2e: 0.08,
    water: 45,
    industry: "Packaging",
    slug: "recycled-aluminum-can",
    companySlug: "greenpack"
  },
  {
    id: "4",
    name: "Organic Coffee Beans",
    company: "Highland Roasters",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
    co2e: 0.35,
    water: 280,
    industry: "Food & Beverage",
    slug: "organic-coffee-beans",
    companySlug: "highland-roasters"
  }
];

const MarketplacePreviewSection = () => {
  // Fetch published products from database
  const { data: publishedProducts } = useQuery({
    queryKey: ['published-products-preview'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select(`
          id,
          name,
          slug,
          image_url,
          industry,
          companies(name, slug),
          product_lca(co2e_total_kg, water_footprint_l)
        `)
        .limit(4);
      
      if (error) throw error;
      return data;
    }
  });

  // Use published products if available, otherwise show placeholders
  const hasPublishedProducts = publishedProducts && publishedProducts.length > 0;
  const displayProducts = hasPublishedProducts 
    ? publishedProducts.map(p => ({
        id: p.id,
        name: p.name,
        company: (p.companies as any)?.name || 'Unknown',
        image: p.image_url || `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop`,
        co2e: (p.product_lca as any)?.[0]?.co2e_total_kg || 0,
        water: (p.product_lca as any)?.[0]?.water_footprint_l || 0,
        industry: p.industry,
        slug: p.slug,
        companySlug: (p.companies as any)?.slug || ''
      }))
    : placeholderProducts;

  return (
    <section id="marketplace" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-info/10 border border-info/20 mb-6">
            <Leaf className="h-4 w-4 text-info" />
            <span className="text-sm font-medium text-info">
              Marketplace Preview
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore <span className="gradient-text">Verified Products</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real products with transparent supply chains and verified environmental data. 
            {!hasPublishedProducts && " (Showing example products)"}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {displayProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden border border-border/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-muted-foreground">
                    {product.industry}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {product.company}
                </p>

                {/* Environmental Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Leaf className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-foreground">{product.co2e} kg</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Droplets className="h-4 w-4 text-info" />
                    <span className="text-xs font-medium text-foreground">{product.water} L</span>
                  </div>
                </div>

                {/* View DPP Button */}
                {hasPublishedProducts ? (
                  <Link to={`/dpp/${product.companySlug}/${product.slug}`}>
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      View DPP
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </Link>
                ) : (
                  <a 
                    href="https://package.trace.market/?tokenId=0x7ed749dc218f6015412158123097d6314cd9998f22903a5487d73f36d7045061#/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      View Example
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="gap-2" disabled>
            View Full Marketplace
            <ArrowRight className="h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Full marketplace coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreviewSection;
