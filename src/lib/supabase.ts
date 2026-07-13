import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type HomeSize =
  | 'studio'
  | 'apartment-1br'
  | 'apartment-2br'
  | 'apartment-3br'
  | 'villa'
  | 'office';

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface BookingRequest {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  from_area: string;
  to_area: string;
  move_date: string;
  home_size: HomeSize;
  notes: string | null;
  status: BookingStatus;
  created_at: string;
}

export type NewBookingRequest = Omit<BookingRequest, 'id' | 'status' | 'created_at'>;
