# Product Requirements Document: PgMP Exam Simulator & Learning Platform (The PM American)

**Version:** 1.9
**Date:** March 31, 2025
**Author/Owner:** Kristopher Korzan, The PM American

**1. Introduction & Overview**

This document details the requirements for the PgMP Exam Simulator & Learning Platform, a web-based application presented by The PM American. The platform comprehensively prepares candidates for the PMI's Program Management Professional (PgMP) certification exam via three core functionalities:
1.  A realistic **Mock Exam Simulator**.
2.  Targeted **Practice Questions** by ECO domain.
3.  An interactive **Diagram Memorization Tool**.

The application will be built using a modern, type-safe stack: **Next.js** (React framework) with **Tailwind CSS** for the frontend; **Supabase** (PostgreSQL + Auth + services) as the backend; and **tRPC** for end-to-end type-safe APIs. **Zod** will be used for robust data validation. The project utilizes **pnpm** for package management, **Vitest** for unit/integration testing, **Playwright** for end-to-end testing, **Prettier** for code formatting, and the **Supabase CLI** for managing database migrations. It will be hosted on **Vercel**. A key requirement is a responsive design ensuring excellent usability across devices, with potential future mobile app development. Future payment integration (**Stripe/PayPal**) is planned.

**2. Goals & Objectives**

*   **User Goal:** Empower PgMP candidates with an accessible, high-quality toolset to practice exam questions, assess readiness, identify knowledge gaps, master key concepts, and boost exam confidence.
*   **Product Goal:** Establish The PM American platform as the trusted resource for PgMP preparation by offering accurate simulations, targeted practice, unique learning tools, and seamless user experiences.
*   **Business Goal (Initial):** Attract and retain exam candidates, build credibility through transparency and user feedback, and lay the foundation for premium, paid features.
*   **Technical Goal:** Develop a scalable, maintainable, and performant web application using Next.js, Supabase, Tailwind CSS, tRPC, and Zod. Prioritize:
    *   **Developer Experience:** High code quality with end-to-end type safety, robust testing (leveraging **Vitest** for unit/integration and **Playwright** for E2E, targeting **90% unit test coverage** and **70% E2E test coverage** by MVP), and efficient dependency management.
    *   **Quantitative Performance Metrics:**
        *   **Page Load:** 95% of pages must load in under **2 seconds** on a 3G network.
        *   **API Response:** Average response time below **300ms**.
    *   **Robust Rollback & Monitoring:** Define clear rollback procedures for failed database migrations (with automated backup snapshots and alerting) and integrate centralized logging and error monitoring.

**3. Target Audience**

PgMP exam candidates seeking a comprehensive, realistic, and engaging online preparation experience.

**4. Features & Requirements (Functional)**
*(Functional requirements remain as defined for the Mock Exam Simulator, Practice Questions, and Diagram Memorization Tool user-facing features. Implementation leverages tRPC for API interactions.)*

**5. Non-Functional Requirements**

*   **NFR-PERF-01 (Performance):**
    *   Fast load times (95% < 2s on 3G).
    *   Optimized queries (API < 300ms avg).
*   **NFR-SCALE-01 (Scalability):** Architecture must handle initial load and allow for seamless future scaling; Supabase and Vercel provide the scalable infrastructure.
*   **NFR-SEC-01 (Security):**
    *   Secure authentication (Supabase Auth w/ email verification), RLS.
    *   Strict input validation (Zod), server-side validations.
    *   HTTPS, secure account deletion/email changes, authorization checks in protected tRPC procedures.
    *   **Migration Safety:** Automated backups and clear rollback procedures.
*   **NFR-UX-01 (Usability):**
    *   Intuitive, accessible interface, clear navigation, immediate feedback.
*   **NFR-DESIGN-01 (Responsiveness):**
    *   Fully responsive, mobile-first design.
*   **NFR-ACC-01 (Accessibility):**
    *   Adhere to WCAG AA standards.
*   **NFR-MAINT-01 (Maintainability):**
    *   High code quality via type safety (TypeScript, tRPC), consistent formatting (Prettier), validation (Zod), and a comprehensive test suite (**Vitest** + **Playwright**).
*   **NFR-HOST-01 (Hosting):**
    *   Application deployment and hosting via Vercel.
*   **NFR-DX-01 (Developer Experience):**
    *   Use modern tooling (**tRPC, Vitest, Playwright, Prettier, pnpm, Supabase CLI**) for an efficient workflow.
*   **NFR-MIGRATE-01 (Schema Management):**
    *   Database schema changes managed using **Supabase CLI migration system**. Migrations stored in Git, applied via automated CI/CD.
*   **NFR-TEST-01 (Testing & Monitoring):**
    *   Achieve a minimum of **90% unit test coverage (via Vitest)** and **70% end-to-end test coverage (via Playwright)** by MVP.
    *   Integrate automated monitoring, centralized logging, and error alerting.

**6. Design & UX Considerations**

*   **User Flow & Interaction:**
    *   Map detailed user journeys. Create wireframes and user flow diagrams.
*   **SEO & Discoverability:**
    *   Implement SEO best practices (metadata, titles, URLs, sitemaps, robots.txt). Ensure accessibility and mobile-first for SEO benefits.

**7. Future Considerations (Post-MVP)**

*   Expansion of interactive features, including richer user analytics, **advanced SEO analytics and optimization**, and enhanced user journey tracking.
*   Consider integration of advanced accessibility features and further refinement of the user experience based on user feedback.
*   Native Mobile App (May require a separate REST/GraphQL layer if tRPC isn't used directly via React Native).
*   Admin Panel.
*   More Question Types.
*   Content Integration.
*   Social Login.
*   **Monetization:** Integration with **Stripe and/or PayPal**.
*   Detailed review of past Practice Question sessions.
*   Persistence of highlight/strikethrough markings.
*   Public display of user reviews.

**8. Release Criteria (MVP - Minimum Viable Product)**

*   **User-Facing Features:**
    *   Functional User Authentication (with email verification and state management).
    *   Fully functional Mock Exam Section with realistic simulation (using tRPC backend), complete with post-exam surveys and detailed results.
    *   Robust Practice Questions Section and Diagram Memorization Section (data via tRPC).
    *   Consistent and accurate scoring/band display, results review, and overview pages (data via tRPC).
*   **Technical & Performance Standards:**
    *   Fully responsive design (< 2s load on 3G).
    *   Secure data handling (RLS managed via migrations, Zod validation in tRPC).
    *   Minimum **90% unit test coverage (Vitest)** and **70% end-to-end test coverage (Playwright)** passing.
    *   Database schema managed via Supabase CLI migrations, including tested rollback strategies.
    *   **Basic SEO Foundations Implemented:** Including appropriate meta tags (title, description), generation of `sitemap.xml`, and a functional `robots.txt` file.
*   **Deployment:**
    *   Successful deployment on Vercel using pnpm, with a CI/CD pipeline that runs **Vitest** and **Playwright** tests, linters, and applies database migrations (with proper secret management and backup procedures).

**9. Success Metrics**

*   **User Engagement:** Increase in active users and reduced bounce rates, tracked via integrated analytics.
*   **Performance:** Meet page load targets (95% < 2s on 3G).
*   **Testing & Reliability:** Achieve **Vitest** (unit/integration) and **Playwright** (E2E) test coverage targets.
*   **SEO:** Initial indexing via sitemap/robots.txt. Monitor basic search engine visibility. Achieve page speed score >= 90.
*   **Operational Stability:** Zero unplanned downtime due to failed migrations, with successful automated rollbacks as needed.

**10. Open Questions & Assumptions**

*   **Assumptions:**
    *   Sufficient high-quality PgMP content is available (questions, choices, explanations).
    *   Source diagrams are provided in a suitable format (e.g., SVG).
    *   PgMP exam format and timing are accurately represented.
    *   The “American themed” visuals are clearly defined.
    *   Content for About Us and Homepage will be provided in a timely manner.
*   **Resolved:**
    *   Passing percentage and performance bands are defined.
    *   Database migration strategy: Use Supabase CLI migration system, store migrations in Git, apply via CI/CD or controlled manual process.
    *   Initial content population method: Use `supabase/seed.sql` for basic static lookup data (e.g., ECO Domains). Use separate, version-controlled programmatic TypeScript script(s) (run manually via `pnpm` script) for populating initial MVP content (sample exams, questions, diagrams), leveraging `supabase-js`.
*   **Open Questions:**
    *   Specific content for post-exam survey and pre-exam tutorial?
    *   Technical approach for interactive diagrams/tools?
    *   tRPC router structure and context management details? (See Appendix A for strategy)
    *   Detailed requirements for "Results" overview aggregation?
    *   Mechanism for handling contact/review form submissions beyond logging?
    *   Detailed test coverage goals beyond MVP minimums?
    *   Specific keywords or SEO targets for post-MVP optimization?
    *   Source format for MVP question/diagram content to be loaded by the seed script (e.g., JSON files, TS objects)?

---

*(Potentially include Appendix A: tRPC Implementation Strategy here if desired)*

---