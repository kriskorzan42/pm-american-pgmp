import { router } from './trpc';
import { exampleRouter } from './routers/example';
import { authRouter } from './routers/auth';
// Import other routers like authRouter, examRouter etc. later

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  // exam: examRouter,   // Placeholder for future exam router
  // ... merge other routers here
});

// Export type router type signature for client usage
export type AppRouter = typeof appRouter; 