import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      console.log("Received input in 'hello' procedure:", input); // Add server-side logging
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  // Add more procedures here later
}); 