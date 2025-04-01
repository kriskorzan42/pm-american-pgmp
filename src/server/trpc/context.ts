import { type User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/server';

/**
 * Context type containing request-scoped data and utilities
 */
export type Context = {
  user: User | null;
  supabase: ReturnType<typeof createClient>;
};

/**
 * Creates context for an incoming request
 * @param opts - Server request context
 */
export async function createContext({ req }: { req: Request }): Promise<Context> {
  const supabase = createClient();

  try {
    // Get the user from Supabase session
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
      console.error('Error fetching user:', error);
      return { user: null, supabase };
    }

    return {
      user,
      supabase,
    };
  } catch (error) {
    console.error('Error in context creation:', error);
    return { user: null, supabase };
  }
} 