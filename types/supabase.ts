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
      bookings: {
        Row: {
          cabinId: number | null
          cabinPrice: number | null
          created_at: string
          endDate: string | null
          extrasPrice: number | null
          guestId: number | null
          hasBreakfast: boolean | null
          id: number
          isPaid: boolean | null
          numGuests: number | null
          numNights: number | null
          observations: string | null
          startDate: string | null
          status: string | null
          totalPrice: number | null
        }
        Insert: {
          cabinId?: number | null
          cabinPrice?: number | null
          created_at?: string
          endDate?: string | null
          extrasPrice?: number | null
          guestId?: number | null
          hasBreakfast?: boolean | null
          id?: number
          isPaid?: boolean | null
          numGuests?: number | null
          numNights?: number | null
          observations?: string | null
          startDate?: string | null
          status?: string | null
          totalPrice?: number | null
        }
        Update: {
          cabinId?: number | null
          cabinPrice?: number | null
          created_at?: string
          endDate?: string | null
          extrasPrice?: number | null
          guestId?: number | null
          hasBreakfast?: boolean | null
          id?: number
          isPaid?: boolean | null
          numGuests?: number | null
          numNights?: number | null
          observations?: string | null
          startDate?: string | null
          status?: string | null
          totalPrice?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_cabinId_fkey"
            columns: ["cabinId"]
            isOneToOne: false
            referencedRelation: "cabins"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_guestId_fkey"
            columns: ["guestId"]
            isOneToOne: false
            referencedRelation: "guests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "guests"
            referencedColumns: ["id"]
          },
        ]
      }
      cabins: {
        Row: {
          created_at: string
          description: string | null
          discount: number | null
          id: number
          image: string | null
          maxCapacity: number | null
          name: string | null
          regularPrice: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          discount?: number | null
          id?: number
          image?: string | null
          maxCapacity?: number | null
          name?: string | null
          regularPrice?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          discount?: number | null
          id?: number
          image?: string | null
          maxCapacity?: number | null
          name?: string | null
          regularPrice?: number | null
        }
        Relationships: []
      }
      guests: {
        Row: {
          countryFlag: string | null
          created_at: string
          email: string | null
          fullName: string | null
          id: number
          nationalID: string | null
          nationality: string | null
        }
        Insert: {
          countryFlag?: string | null
          created_at?: string
          email?: string | null
          fullName?: string | null
          id?: number
          nationalID?: string | null
          nationality?: string | null
        }
        Update: {
          countryFlag?: string | null
          created_at?: string
          email?: string | null
          fullName?: string | null
          id?: number
          nationalID?: string | null
          nationality?: string | null
        }
        Relationships: []
      }
      settings: {
        Row: {
          breakfastPrice: number | null
          created_at: string
          id: number
          maxBookingLength: number | null
          maxGuestsPerBooking: number | null
          minBookingLength: number | null
        }
        Insert: {
          breakfastPrice?: number | null
          created_at?: string
          id?: number
          maxBookingLength?: number | null
          maxGuestsPerBooking?: number | null
          minBookingLength?: number | null
        }
        Update: {
          breakfastPrice?: number | null
          created_at?: string
          id?: number
          maxBookingLength?: number | null
          maxGuestsPerBooking?: number | null
          minBookingLength?: number | null
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
