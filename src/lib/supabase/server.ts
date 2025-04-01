import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { CookieOptions } from '@supabase/ssr';

export function createClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          const cookieStore = cookies();
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          const cookieStore = cookies();
          cookieStore.set({
            name,
            value,
            ...options,
            // Ensure these required options are set
            path: options.path ?? '/',
            sameSite: options.sameSite ?? (options.secure ? 'strict' : 'lax')
          });
        },
        remove(name: string, options: CookieOptions) {
          const cookieStore = cookies();
          cookieStore.delete(name);
        },
      },
    }
  );
} 