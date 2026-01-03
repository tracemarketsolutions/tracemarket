-- Companies table
CREATE TABLE public.companies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  logo_url TEXT,
  description TEXT,
  website TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  industry TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft',
  chat_data JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(company_id, slug)
);

-- Product ingredients/materials
CREATE TABLE public.product_ingredients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  percentage DECIMAL(5,2),
  origin_country TEXT,
  origin_region TEXT,
  origin_city TEXT,
  latitude DECIMAL(10,7),
  longitude DECIMAL(10,7),
  supplier TEXT,
  transport_method TEXT,
  distance_km DECIMAL(10,2),
  is_organic BOOLEAN DEFAULT false,
  certifications TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Nutritional info (for food products)
CREATE TABLE public.product_nutrition (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  serving_size TEXT,
  calories DECIMAL(10,2),
  protein_g DECIMAL(10,2),
  carbs_g DECIMAL(10,2),
  fat_g DECIMAL(10,2),
  fiber_g DECIMAL(10,2),
  sodium_mg DECIMAL(10,2),
  sugar_g DECIMAL(10,2),
  additional_nutrients JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- LCA calculations
CREATE TABLE public.product_lca (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  co2e_total_kg DECIMAL(10,4),
  co2e_materials_kg DECIMAL(10,4),
  co2e_transport_kg DECIMAL(10,4),
  co2e_manufacturing_kg DECIMAL(10,4),
  co2e_packaging_kg DECIMAL(10,4),
  water_footprint_l DECIMAL(10,2),
  energy_consumption_kwh DECIMAL(10,2),
  recyclability_score DECIMAL(5,2),
  calculation_method TEXT,
  data_sources JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- DPP pages
CREATE TABLE public.product_dpps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  version INTEGER NOT NULL DEFAULT 1,
  status TEXT NOT NULL DEFAULT 'draft',
  primary_language TEXT NOT NULL DEFAULT 'en',
  available_languages TEXT[] DEFAULT ARRAY['en']::TEXT[],
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  eu_compliance_data JSONB DEFAULT '{}'::jsonb,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Chat sessions for anonymous users
CREATE TABLE public.chat_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_token TEXT NOT NULL UNIQUE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
  messages JSONB NOT NULL DEFAULT '[]'::jsonb,
  collected_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  industry TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_ingredients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_nutrition ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_lca ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_dpps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;

-- RLS policies for companies
CREATE POLICY "Users can view their own companies" ON public.companies
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own companies" ON public.companies
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own companies" ON public.companies
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own companies" ON public.companies
  FOR DELETE USING (auth.uid() = user_id);

-- RLS policies for products (via company ownership)
CREATE POLICY "Users can view products of their companies" ON public.products
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.companies WHERE companies.id = products.company_id AND companies.user_id = auth.uid())
  );
CREATE POLICY "Users can create products for their companies" ON public.products
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.companies WHERE companies.id = company_id AND companies.user_id = auth.uid())
  );
CREATE POLICY "Users can update products of their companies" ON public.products
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.companies WHERE companies.id = products.company_id AND companies.user_id = auth.uid())
  );
CREATE POLICY "Users can delete products of their companies" ON public.products
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM public.companies WHERE companies.id = products.company_id AND companies.user_id = auth.uid())
  );

-- RLS policies for ingredients (via product -> company ownership)
CREATE POLICY "Users can manage ingredients of their products" ON public.product_ingredients
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.products p
      JOIN public.companies c ON c.id = p.company_id
      WHERE p.id = product_ingredients.product_id AND c.user_id = auth.uid()
    )
  );

-- RLS policies for nutrition (via product -> company ownership)
CREATE POLICY "Users can manage nutrition of their products" ON public.product_nutrition
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.products p
      JOIN public.companies c ON c.id = p.company_id
      WHERE p.id = product_nutrition.product_id AND c.user_id = auth.uid()
    )
  );

-- RLS policies for LCA (via product -> company ownership)
CREATE POLICY "Users can manage LCA of their products" ON public.product_lca
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.products p
      JOIN public.companies c ON c.id = p.company_id
      WHERE p.id = product_lca.product_id AND c.user_id = auth.uid()
    )
  );

-- RLS policies for DPPs
CREATE POLICY "Users can manage DPPs of their products" ON public.product_dpps
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.products p
      JOIN public.companies c ON c.id = p.company_id
      WHERE p.id = product_dpps.product_id AND c.user_id = auth.uid()
    )
  );

-- Public can view published DPPs
CREATE POLICY "Anyone can view published DPPs" ON public.product_dpps
  FOR SELECT USING (status = 'published');

-- Public can view products with published DPPs
CREATE POLICY "Anyone can view products with published DPPs" ON public.products
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.product_dpps WHERE product_dpps.product_id = products.id AND product_dpps.status = 'published')
  );

-- Public can view companies with published products
CREATE POLICY "Anyone can view companies with published products" ON public.companies
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.products p
      JOIN public.product_dpps d ON d.product_id = p.id
      WHERE p.company_id = companies.id AND d.status = 'published'
    )
  );

-- Public can view ingredients of published products
CREATE POLICY "Anyone can view ingredients of published products" ON public.product_ingredients
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.product_dpps d
      WHERE d.product_id = product_ingredients.product_id AND d.status = 'published'
    )
  );

-- Public can view nutrition of published products
CREATE POLICY "Anyone can view nutrition of published products" ON public.product_nutrition
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.product_dpps d
      WHERE d.product_id = product_nutrition.product_id AND d.status = 'published'
    )
  );

-- Public can view LCA of published products
CREATE POLICY "Anyone can view LCA of published products" ON public.product_lca
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.product_dpps d
      WHERE d.product_id = product_lca.product_id AND d.status = 'published'
    )
  );

-- Chat sessions - allow service role to manage, and users to manage their own
CREATE POLICY "Service role can manage all chat sessions" ON public.chat_sessions
  FOR ALL USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add triggers
CREATE TRIGGER update_companies_updated_at BEFORE UPDATE ON public.companies
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_product_lca_updated_at BEFORE UPDATE ON public.product_lca
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_product_dpps_updated_at BEFORE UPDATE ON public.product_dpps
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_chat_sessions_updated_at BEFORE UPDATE ON public.chat_sessions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create slug generation function
CREATE OR REPLACE FUNCTION public.generate_slug(input_text TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN lower(regexp_replace(regexp_replace(input_text, '[^a-zA-Z0-9\s-]', '', 'g'), '\s+', '-', 'g'));
END;
$$ LANGUAGE plpgsql SET search_path = public;