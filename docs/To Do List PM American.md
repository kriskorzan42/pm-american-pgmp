# Technical To-Do List for The PM American PgMP Platform (PRD v1.9) - Enhanced Testing

**(Stack: Next.js, Supabase, tRPC, Zod, Tailwind, Vitest, Playwright, Prettier, pnpm, Supabase CLI, Vercel)**

**Phase 0: Project Setup & Initial Configuration**

1.  **Initialize Next.js Project `[pnpm]`:** Command: `pnpm create next-app pm-american-pgmp --typescript --eslint --tailwind --src-dir --app --import-alias "@/*"`
2.  **Set up Supabase Project:** Create, note keys, enable email confirm.
3.  **Install Core Dependencies `[pnpm]` `[tRPC]`:** `pnpm add @supabase/supabase-js zod @trpc/client @trpc/server @trpc/react-query @trpc/next @tanstack/react-query`
4.  **Install Dev Dependencies `[pnpm]` `[Prettier]` `[Testing]`:**
    *   `pnpm add -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom` *(Unit/Integration Testing)*
    *   `pnpm add -D @playwright/test` *(E2E Testing)*
    *   `pnpm add -D prettier eslint-config-prettier husky lint-staged prettier-plugin-tailwindcss` *(Formatting/Hooks)*
5.  **Install Supabase CLI `[Migrations]`:** Install globally (e.g., `npm install -g supabase`). Verify installation.
6.  **Configure Supabase Environment Variables:** `.env.local`.
7.  **Link Project & Initialize Supabase Locally `[Migrations]`:** `supabase login`, `supabase link --project-ref <ref>`, `supabase init`, `supabase start`.
8.  **Create Supabase Client Helper:** `src/lib/supabase/client.ts`, `src/lib/supabase/server.ts`.
9.  **Create Schemas Directory:** `src/lib/schemas/`.
10. **Basic Tailwind Configuration:** `tailwind.config.ts`.
11. **[Testing] Set up Unit/Integration Testing Framework (Vitest):** Configure Vitest (`vitest.config.ts`), script: `"test:unit": "vitest"`. Sample test (`pnpm run test:unit`).
12. **[Testing] Set up End-to-End Testing Framework (Playwright):** Initialize (`pnpm exec playwright install`), configure (`playwright.config.ts`), script: `"test:e2e": "playwright test"`. Sample E2E test (`pnpm run test:e2e`).
13. **[Prettier] Configure Prettier & Hooks:** `.prettierrc.json`, `.prettierignore`, Editor Integration, Husky + lint-staged setup.

**Phase 1: Database Schema Definition, Creation & Static Seeding `[Migrations]`**

14. **Define & Create Initial Supabase Database Schema via Migrations:** `supabase migration new ...`, review SQL, `supabase migration up`, commit. Include RLS policies.
15. **Populate Static Lookup Data (`seed.sql`) `[Seed]`:** Edit `supabase/seed.sql` (e.g., ECO Domains). Verify with `supabase db reset`. Commit.
16. **[Testing] Review RLS Policies & Unit Test Schema Validations:** Manual review. Basic Vitest tests for complex Zod schemas if needed.

**Phase 2: tRPC Setup & Authentication**

17. **[tRPC] Set up tRPC Backend:** `context.ts`, `trpc.ts`, `root.ts`, API handler.
18. **[tRPC] Set up tRPC Frontend Client:** `client.ts`, `Provider.tsx`. Wrap layout.
19. **Implement Authentication UI `[Zod]`:** Forms, Zod/`react-hook-form` validation.
20. **[tRPC] Implement Authentication Procedures:** `auth.ts` router (signUp, signIn, etc.), Zod inputs, call `supabase.auth`.
21. **Integrate Auth UI with tRPC Client:** Use `useMutation` hooks.
22. **Implement Auth State Management & Protected Routes.**
23. **Implement Logout Functionality.**
24. **[Testing] Test Authentication Flow:**
    *   **Unit Tests (Vitest):** Zod schemas, utils, procedure logic (mocked).
    *   **Integration Tests (Vitest):** tRPC `authRouter` procedures (mocked context/DB).
    *   **Component Tests (Vitest + RTL):** Forms (`SignUpForm`, `LoginForm`).
    *   **Manual QA:** Full flow testing.

**Phase 3: Core Website Pages & Navigation & Testing**

25. Implement Navigation & Footer Components.
26. Implement Static Pages (Homepage, About Us). (Add basic Meta tags for SEO).
27. Implement Contact Page & Form `[Zod]` `[tRPC]`:** Schema, Form, tRPC procedure, `useMutation`.
28. **[Testing] Test Static Pages & Contact Form:** Component tests (RTL), tRPC procedure tests (Vitest), Manual QA. Verify basic meta tags.

**Phase 4: Mock Exam Functionality (MVP) & Testing**

29. Implement Exam Listing Page (`useQuery`).
30. **[tRPC] Implement Exam Start Procedure:** `startExam` procedure. Use `useMutation`.
31. Implement Exam Interface Page (`useQuery` for details, `useMutation` for saving answers).
32. Implement `ExamInterface`, `QuestionCard`, `Timer` Components. Highlight/Strikethrough.
33. **[tRPC] Implement Exam Submission Procedure:** `submitExam` procedure.
34. Implement Exam Interface Submission Handling: Trigger `submitExam` mutation. Redirect.
35. Implement Exam Tutorial & Post-Exam Survey `[Zod]` `[tRPC]`:** Modal, Form, Survey tRPC procedure, `useMutation`.
36. **[Testing] Test Mock Exam Flow:**
    *   **Unit Tests (Vitest):** Score logic, timer utils, Zod schemas.
    *   **Integration Tests (Vitest):** Key tRPC procedures (`startExam`, `getAttemptDetails`, `saveAnswer`, `submitExam`) logic (mocked DB).
    *   **Component Tests (Vitest + RTL):** `ExamInterface` state, `QuestionCard` display.
    *   **Manual QA:** Crucial validation of the entire flow.

**Phase 5: Practice Questions Functionality (MVP) & Testing `[tRPC]`**

37. Implement Domain Listing Page (`useQuery`).
38. Implement Practice Session Page (`useQuery`).
39. Implement `PracticeInterface` Component.
40. **[Testing] Test Practice Questions Flow:** Component tests (RTL), Manual QA.

**Phase 6: Diagram Tool Functionality (MVP) & Testing `[tRPC]`**

41. Implement Diagram Listing Page (`useQuery`).
42. Implement Diagram Viewer Page (`useQuery`).
43. Implement `DiagramViewer` Component.
44. **[Testing] Test Diagram Tool:** Component tests (RTL), Manual QA (interaction, responsiveness).

**Phase 7: Results & Profile Functionality (MVP) & Testing `[tRPC]`**

45. Implement Results Overview Page (`useQuery`).
46. Implement Results Review Page (`useQuery`).
47. Implement `ReviewInterface` Component.
48. Implement Profile Page.
    *   **[tRPC]** Create `user.ts` router + `updateEmail`, `deleteAccount` procedures. Use `useMutation` hooks.
49. **[Testing] Test Results & Profile:** Integration tests (Vitest for tRPC procedures), Manual QA.

**Phase 8: E2E Testing, SEO Basics, Final QA, Content Seeding, Deployment & CI Setup**

50. Refine Tailwind Styling & Responsiveness.
51. Implement User Review Submission Form `[Zod]` `[tRPC]` & Test.
52. **Create MVP Content Seed Script `[Seed]` & Test Script.** `scripts/seed-mvp.ts`, `"db:seed-content"` script.
53. **Implement Basic SEO Foundations:** Add relevant meta tags (title, description) to pages (especially static ones and potentially dynamic head tags). Generate `sitemap.xml` and `robots.txt` (can use Next.js features or packages).
54. **[Testing] Implement Automated E2E Tests (Playwright):**
    *   Identify critical MVP user flows. Write Playwright scripts (`tests/e2e/`) targeting these flows. Aim for MVP coverage target (70%).
55. **[Testing] Run Full Local Test Suite:** `pnpm run test:unit` && `pnpm run test:e2e`. Ensure pass.
56. [Testing] Accessibility Check.
57. **[Testing] Comprehensive Manual End-to-End QA:** Final checks, edge cases, usability, verify SEO basics.
58. **[Testing] Set up Continuous Integration (CI):**
    *   GitHub Actions workflow: `pnpm install`, lint, `pnpm run test:unit`, `pnpm run build`.
    *   *(Optional CI Step):* Run `pnpm run test:e2e`.
59. **Configure Production Deployment `[Migrations]`:**
    *   CI/CD pipeline step to run `supabase migration up`. Ensure Vercel uses `pnpm`.
60. **Initial Data Population (Production/Staging) `[Seed]`:** Apply migrations, *Manually* run `pnpm run db:seed-content`.
61. **Deploy Application Code to Vercel.**
62. **[Testing] Post-Deployment Smoke Test & E2E Run (Optional).**

---