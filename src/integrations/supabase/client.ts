// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qufdulqabcijpngfzozv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1ZmR1bHFhYmNpanBuZ2Z6b3p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MjUyOTYsImV4cCI6MjA2NTUwMTI5Nn0.8sE9odB8s0ndtBbZMEForQ6EEPNOU0BwQ2b2-NU5E-E";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);