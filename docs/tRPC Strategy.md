```markdown
# Appendix A: tRPC Implementation Strategy

This appendix outlines the planned strategy for implementing the tRPC API layer within The PM American PgMP platform, leveraging Next.js and Supabase.

## 1. Centralized Context Creation

*   **`context.ts` File:** Define a function (e.g., `createContext`) within `/src/server/trpc/context.ts` that constructs the context object for each incoming request.
*   **Included Resources:** This context should provide access to necessary resources for procedures, such as:
    *   A server-side Supabase client instance.
    *   User authentication details (e.g., user ID, session object derived from the request using Supabase server-side helpers).
    *   Potentially other shared utilities like logging services.
*   **Per-Request Scope:** Crucially, ensure the context is generated uniquely for every request to properly handle user sessions and request-specific data.

## 2. Modular Router Structure

*   **Domain-Based Separation:** Organize tRPC procedures into distinct router files based on application features or data domains (e.g., `auth.ts`, `exam.ts`, `user.ts`, `practice.ts` located within `/src/server/trpc/routers/`). This enhances code organization, readability, and maintainability.
*   **Root Router (`appRouter`):** Create a central `appRouter` (e.g., in `/src/server/trpc/root.ts`) that merges all the individual domain routers using tRPC's `mergeRouters` utility. This `appRouter` serves as the single, unified definition of the entire API.

## 3. Middleware and Error Handling

*   **Procedure Middleware:** Implement tRPC middleware primarily for cross-cutting concerns applied to specific procedures or groups of procedures. Common use cases include:
    *   **Authentication Checks:** Create reusable "protected" procedures (e.g., `protectedProcedure` in `src/server/trpc/trpc.ts`) using middleware to verify that a valid user session exists in the context before allowing procedure execution.
    *   **Logging:** Add middleware for logging requests or specific actions.
    *   *(Note: Detailed input validation belongs at the procedure definition level using `.input()`)*
*   **Standardized Error Handling:** Implement a consistent error handling strategy. This can involve:
    *   Using tRPC's `errorFormatter` to shape errors sent to the client.
    *   Defining custom error classes (`TRPCError`) for specific scenarios.
    *   Ensuring clear and informative error messages are returned without leaking sensitive backend details.

## 4. Type-Safe Practices

*   **Zod for Input Validation:** **Mandate** the use of Zod schemas with the `.input()` method for *every* tRPC procedure that accepts input. This provides robust runtime validation and automatically infers the input TypeScript type.
*   **TypeScript Inference:** Rely heavily on TypeScript's ability to infer the output types of procedures and the overall shape of the `appRouter`. This is core to tRPC's end-to-end type safety. Explicitly exporting types is often unnecessary for the client, which uses the inferred `AppRouter` type.
*   **Context Typing:** Ensure the `createContext` function returns a clearly typed context object.

## 5. Directory Structure & Documentation

*   **Standardized File Structure:** Maintain a clear separation between server-side tRPC logic and client-side code. A suggested structure:
    ```
     /src
      /app -> Next.js App Router specific files
      /components -> React UI components
      /context -> React Context Providers (e.g., AuthContext)
      /lib -> Shared utilities, constants, helpers
        /schemas -> Zod schema definitions
        /supabase -> Supabase client helpers
        /trpc -> tRPC frontend client setup (client.ts, Provider.tsx)
      /pages -> Next.js Pages Router specific files (if used)
        /api
          /trpc
            /[trpc].ts -> tRPC API route handler
      /server -> Backend-specific logic
        /trpc
          /context.ts -> Context creation
          /trpc.ts -> tRPC instance, reusable procedures
          /root.ts -> Main appRouter definition
          /routers -> Domain-specific routers
            auth.ts
            exam.ts
            user.ts
            # ... etc
      /scripts -> Utility scripts (e.g., seeding)
    ```
*   **Documentation:** Add comments within the code explaining the purpose of routers, complex procedures, and the structure of the context object to aid maintainability and onboarding.

## 6. Integration with Next.js

*   **API Route Handler:** Implement the necessary API route handler (e.g., `/pages/api/trpc/[trpc].ts` or `/app/api/trpc/[trpc]/route.ts` for the App Router) that uses the tRPC Next.js adapter (`@trpc/server/adapters/next`). This handler will initialize the context per request and invoke the `appRouter`.
*   **Security:** Pay close attention to securely obtaining and verifying user session information (e.g., from cookies or headers using Supabase helpers) within the `createContext` function. Ensure protected procedures correctly deny access to unauthenticated users.

---
```