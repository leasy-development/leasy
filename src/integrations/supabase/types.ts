export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      dashboard_widgets: {
        Row: {
          config: Json
          created_at: string
          id: string
          position: Json
          size: string
          title: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          config?: Json
          created_at?: string
          id?: string
          position?: Json
          size?: string
          title: string
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          config?: Json
          created_at?: string
          id?: string
          position?: Json
          size?: string
          title?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      properties: {
        Row: {
          apartment_type: string | null
          bathrooms: number | null
          bedrooms: number | null
          category: string | null
          checkin_time: string | null
          checkout_time: string | null
          city: string | null
          contractual_partner: Json | null
          country: string | null
          created_at: string
          daily_rate: number | null
          description: string | null
          house_rules: string | null
          id: string
          landlord_info: Json | null
          max_guests: number | null
          monthly_rent: number | null
          provides_wgsb: boolean | null
          region: string | null
          square_meters: number | null
          status: string | null
          street_name: string | null
          street_number: string | null
          title: string
          updated_at: string
          user_id: string
          weekly_rate: number | null
          zip_code: string | null
        }
        Insert: {
          apartment_type?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          category?: string | null
          checkin_time?: string | null
          checkout_time?: string | null
          city?: string | null
          contractual_partner?: Json | null
          country?: string | null
          created_at?: string
          daily_rate?: number | null
          description?: string | null
          house_rules?: string | null
          id?: string
          landlord_info?: Json | null
          max_guests?: number | null
          monthly_rent?: number | null
          provides_wgsb?: boolean | null
          region?: string | null
          square_meters?: number | null
          status?: string | null
          street_name?: string | null
          street_number?: string | null
          title: string
          updated_at?: string
          user_id: string
          weekly_rate?: number | null
          zip_code?: string | null
        }
        Update: {
          apartment_type?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          category?: string | null
          checkin_time?: string | null
          checkout_time?: string | null
          city?: string | null
          contractual_partner?: Json | null
          country?: string | null
          created_at?: string
          daily_rate?: number | null
          description?: string | null
          house_rules?: string | null
          id?: string
          landlord_info?: Json | null
          max_guests?: number | null
          monthly_rent?: number | null
          provides_wgsb?: boolean | null
          region?: string | null
          square_meters?: number | null
          status?: string | null
          street_name?: string | null
          street_number?: string | null
          title?: string
          updated_at?: string
          user_id?: string
          weekly_rate?: number | null
          zip_code?: string | null
        }
        Relationships: []
      }
      property_fees: {
        Row: {
          amount: number
          created_at: string
          frequency: string
          id: string
          name: string
          property_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          frequency: string
          id?: string
          name: string
          property_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          frequency?: string
          id?: string
          name?: string
          property_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_fees_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      property_media: {
        Row: {
          category: string | null
          created_at: string
          id: string
          media_type: string
          property_id: string
          sort_order: number | null
          title: string | null
          url: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
          media_type: string
          property_id: string
          sort_order?: number | null
          title?: string | null
          url: string
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
          media_type?: string
          property_id?: string
          sort_order?: number | null
          title?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_media_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      property_sync_status: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          last_synced: string | null
          platform: string
          property_id: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          last_synced?: string | null
          platform: string
          property_id: string
          status: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          last_synced?: string | null
          platform?: string
          property_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_sync_status_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      waitlist_submissions: {
        Row: {
          company: string
          created_at: string
          email: string
          full_name: string
          id: string
          listings_count: string
          source: string | null
        }
        Insert: {
          company: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          listings_count: string
          source?: string | null
        }
        Update: {
          company?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          listings_count?: string
          source?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      changepassword: {
        Args: {
          current_plain_password: string
          new_plain_password: string
          current_id: string
        }
        Returns: string
      }
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
