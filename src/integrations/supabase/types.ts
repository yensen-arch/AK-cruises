export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      accommodation_types: {
        Row: {
          accommodation_name: string | null
          brand_id: number
          carousels: string[]
          created_at: string
          details: string | null
          hotel_name: string
          id: number
        }
        Insert: {
          accommodation_name?: string | null
          brand_id: number
          carousels?: string[]
          created_at?: string
          details?: string | null
          hotel_name: string
          id?: number
        }
        Update: {
          accommodation_name?: string | null
          brand_id?: number
          carousels?: string[]
          created_at?: string
          details?: string | null
          hotel_name?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "accommodation_types_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "hotel_brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "accommodation_types_hotel_name_fkey"
            columns: ["hotel_name"]
            isOneToOne: false
            referencedRelation: "hotel_name_location"
            referencedColumns: ["hotel_name"]
          },
        ]
      }
      country_region: {
        Row: {
          country_code: string
          country_name: string | null
          created_at: string
          id: number
          region: string | null
        }
        Insert: {
          country_code: string
          country_name?: string | null
          created_at?: string
          id?: number
          region?: string | null
        }
        Update: {
          country_code?: string
          country_name?: string | null
          created_at?: string
          id?: number
          region?: string | null
        }
        Relationships: []
      }
      destination_region: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      hotel_brands: {
        Row: {
          brand_description: string | null
          brand_hero_image: string | null
          brand_logo: string | null
          brand_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          brand_description?: string | null
          brand_hero_image?: string | null
          brand_logo?: string | null
          brand_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          brand_description?: string | null
          brand_hero_image?: string | null
          brand_logo?: string | null
          brand_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      hotel_name_location: {
        Row: {
          brand_id: number | null
          created_at: string
          destination_region: string | null
          hotel_address: string | null
          hotel_city: string | null
          hotel_country: string
          hotel_description: string | null
          hotel_latitude: string | null
          hotel_longitude: string | null
          hotel_name: string
          hotel_pin_zip_code: string | null
          hotel_state_territory: string | null
          id: number
          images: string[] | null
          location: string
        }
        Insert: {
          brand_id?: number | null
          created_at?: string
          destination_region?: string | null
          hotel_address?: string | null
          hotel_city?: string | null
          hotel_country: string
          hotel_description?: string | null
          hotel_latitude?: string | null
          hotel_longitude?: string | null
          hotel_name: string
          hotel_pin_zip_code?: string | null
          hotel_state_territory?: string | null
          id?: number
          images?: string[] | null
          location: string
        }
        Update: {
          brand_id?: number | null
          created_at?: string
          destination_region?: string | null
          hotel_address?: string | null
          hotel_city?: string | null
          hotel_country?: string
          hotel_description?: string | null
          hotel_latitude?: string | null
          hotel_longitude?: string | null
          hotel_name?: string
          hotel_pin_zip_code?: string | null
          hotel_state_territory?: string | null
          id?: number
          images?: string[] | null
          location?: string
        }
        Relationships: [
          {
            foreignKeyName: "Hotel_Locations_Brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "hotel_brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Hotel_Name_Location_Destination_region_fkey"
            columns: ["destination_region"]
            isOneToOne: false
            referencedRelation: "destination_region"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "Hotel_Name_Location_Hotel_country_fkey"
            columns: ["hotel_country"]
            isOneToOne: false
            referencedRelation: "country_region"
            referencedColumns: ["country_code"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          id: number
          created_at: string
          first_name: string
          last_name: string
          email: string
          phone: string
          country_code: string
          message: string | null
          interests: string[]
          site_name: string
          terms_accepted: boolean
        }
        Insert: {
          id?: number
          created_at?: string
          first_name: string
          last_name: string
          email: string
          phone: string
          country_code: string
          message?: string | null
          interests: string[]
          site_name: string
          terms_accepted: boolean
        }
        Update: {
          id?: number
          created_at?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          country_code?: string
          message?: string | null
          interests?: string[]
          site_name?: string
          terms_accepted?: boolean
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
