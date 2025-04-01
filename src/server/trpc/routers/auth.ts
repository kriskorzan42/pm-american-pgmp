import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../trpc';

export const authRouter = router({
  getSession: protectedProcedure.query(({ ctx }) => {
    // The 'isAuthed' middleware ensures ctx.user is non-null here
    return ctx.user;
  }),

  // Placeholder for sign-up (public, as user isn't logged in yet)
  // signUp: publicProcedure
  //   .input(z.object({ email: z.string().email(), password: z.string().min(8) }))
  //   .mutation(async ({ input, ctx }) => {
  //     // TODO: Implement Supabase sign-up logic using ctx.supabase
  //     // Remember Supabase handles hashing; call ctx.supabase.auth.signUp
  //     // Handle potential errors (e.g., user already exists)
  //   }),

  // Add other procedures like signIn, signOut later
}); 