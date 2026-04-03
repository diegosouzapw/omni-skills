# Shopify Deprecation and Migration Matrix

Use this file when a request involves an older Shopify implementation or asks for a pattern that should no longer be recommended for new work.

| Older surface or pattern | Preferred current direction | Operator guidance |
| --- | --- | --- |
| Shopify Scripts | Shopify Functions | For new logic, target Functions. For migration, map behavior carefully and document parity gaps rather than assuming 1:1 replacement. |
| `checkout.liquid` customization | Checkout extensibility | Do not recommend `checkout.liquid` for new implementations. Reframe as checkout extensibility or checkout UI extension work. |
| REST-heavy Admin API usage | Admin GraphQL API | Prefer GraphQL as the main admin integration surface unless the task is explicitly constrained by an existing legacy implementation. |
| Legacy custom app auth model assumptions | Current Shopify app auth guidance | Re-check scopes, sessions, and install/auth flow assumptions instead of copying old app patterns. |
| Polaris React migration contexts | Polaris Web Components or currently supported app UI patterns | Confirm the actual app UI stack in use before prescribing migration work. |
| Older Hydrogen/Remix-era patterns | Current Hydrogen guidance in the React Router era | Verify runtime, routing, and deployment assumptions before applying older examples. |

## Operator rules

- If the user asks for a deprecated approach, answer in migration terms unless the task is strictly about legacy maintenance.
- Do not present deprecated patterns as the default or recommended path.
- When parity is incomplete, say so explicitly.
- Separate "legacy support" from "new implementation guidance" in the answer.

## Migration review questions

- Is the current implementation legacy-only, or can it be replaced now?
- Which supported Shopify surface replaces it?
- Are there feature gaps or behavior changes?
- Does the migration affect auth, deployment, or merchant configuration?
- What needs real-store validation after migration?
