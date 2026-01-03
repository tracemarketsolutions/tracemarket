export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      chat_sessions: {
        Row: {
          collected_data: Json
          created_at: string
          id: string
          industry: string | null
          messages: Json
          product_id: string | null
          session_token: string
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          collected_data?: Json
          created_at?: string
          id?: string
          industry?: string | null
          messages?: Json
          product_id?: string | null
          session_token: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          collected_data?: Json
          created_at?: string
          id?: string
          industry?: string | null
          messages?: Json
          product_id?: string | null
          session_token?: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_sessions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          created_at: string
          description: string | null
          id: string
          logo_url: string | null
          name: string
          slug: string
          updated_at: string
          user_id: string | null
          website: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          name: string
          slug: string
          updated_at?: string
          user_id?: string | null
          website?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          slug?: string
          updated_at?: string
          user_id?: string | null
          website?: string | null
        }
        Relationships: []
      }
      product_dpps: {
        Row: {
          available_languages: string[] | null
          content: Json
          created_at: string
          eu_compliance_data: Json | null
          id: string
          primary_language: string
          product_id: string
          published_at: string | null
          status: string
          updated_at: string
          version: number
        }
        Insert: {
          available_languages?: string[] | null
          content?: Json
          created_at?: string
          eu_compliance_data?: Json | null
          id?: string
          primary_language?: string
          product_id: string
          published_at?: string | null
          status?: string
          updated_at?: string
          version?: number
        }
        Update: {
          available_languages?: string[] | null
          content?: Json
          created_at?: string
          eu_compliance_data?: Json | null
          id?: string
          primary_language?: string
          product_id?: string
          published_at?: string | null
          status?: string
          updated_at?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "product_dpps_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_ingredients: {
        Row: {
          certifications: string[] | null
          created_at: string
          distance_km: number | null
          id: string
          is_organic: boolean | null
          latitude: number | null
          longitude: number | null
          name: string
          origin_city: string | null
          origin_country: string | null
          origin_region: string | null
          percentage: number | null
          product_id: string
          supplier: string | null
          transport_method: string | null
        }
        Insert: {
          certifications?: string[] | null
          created_at?: string
          distance_km?: number | null
          id?: string
          is_organic?: boolean | null
          latitude?: number | null
          longitude?: number | null
          name: string
          origin_city?: string | null
          origin_country?: string | null
          origin_region?: string | null
          percentage?: number | null
          product_id: string
          supplier?: string | null
          transport_method?: string | null
        }
        Update: {
          certifications?: string[] | null
          created_at?: string
          distance_km?: number | null
          id?: string
          is_organic?: boolean | null
          latitude?: number | null
          longitude?: number | null
          name?: string
          origin_city?: string | null
          origin_country?: string | null
          origin_region?: string | null
          percentage?: number | null
          product_id?: string
          supplier?: string | null
          transport_method?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_ingredients_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_lca: {
        Row: {
          calculation_method: string | null
          co2e_manufacturing_kg: number | null
          co2e_materials_kg: number | null
          co2e_packaging_kg: number | null
          co2e_total_kg: number | null
          co2e_transport_kg: number | null
          created_at: string
          data_sources: Json | null
          energy_consumption_kwh: number | null
          id: string
          product_id: string
          recyclability_score: number | null
          updated_at: string
          water_footprint_l: number | null
        }
        Insert: {
          calculation_method?: string | null
          co2e_manufacturing_kg?: number | null
          co2e_materials_kg?: number | null
          co2e_packaging_kg?: number | null
          co2e_total_kg?: number | null
          co2e_transport_kg?: number | null
          created_at?: string
          data_sources?: Json | null
          energy_consumption_kwh?: number | null
          id?: string
          product_id: string
          recyclability_score?: number | null
          updated_at?: string
          water_footprint_l?: number | null
        }
        Update: {
          calculation_method?: string | null
          co2e_manufacturing_kg?: number | null
          co2e_materials_kg?: number | null
          co2e_packaging_kg?: number | null
          co2e_total_kg?: number | null
          co2e_transport_kg?: number | null
          created_at?: string
          data_sources?: Json | null
          energy_consumption_kwh?: number | null
          id?: string
          product_id?: string
          recyclability_score?: number | null
          updated_at?: string
          water_footprint_l?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_lca_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_nutrition: {
        Row: {
          additional_nutrients: Json | null
          calories: number | null
          carbs_g: number | null
          created_at: string
          fat_g: number | null
          fiber_g: number | null
          id: string
          product_id: string
          protein_g: number | null
          serving_size: string | null
          sodium_mg: number | null
          sugar_g: number | null
        }
        Insert: {
          additional_nutrients?: Json | null
          calories?: number | null
          carbs_g?: number | null
          created_at?: string
          fat_g?: number | null
          fiber_g?: number | null
          id?: string
          product_id: string
          protein_g?: number | null
          serving_size?: string | null
          sodium_mg?: number | null
          sugar_g?: number | null
        }
        Update: {
          additional_nutrients?: Json | null
          calories?: number | null
          carbs_g?: number | null
          created_at?: string
          fat_g?: number | null
          fiber_g?: number | null
          id?: string
          product_id?: string
          protein_g?: number | null
          serving_size?: string | null
          sodium_mg?: number | null
          sugar_g?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_nutrition_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          chat_data: Json | null
          company_id: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          industry: string
          name: string
          slug: string
          status: string
          updated_at: string
        }
        Insert: {
          chat_data?: Json | null
          company_id: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          industry: string
          name: string
          slug: string
          status?: string
          updated_at?: string
        }
        Update: {
          chat_data?: Json | null
          company_id?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          industry?: string
          name?: string
          slug?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_slug: { Args: { input_text: string }; Returns: string }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
