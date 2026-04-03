---
name: "shopify-developer"
description: "Shopify development workflow skill. Use this skill when building or debugging Shopify themes, Liquid templates, apps, Admin or Storefront GraphQL integrations, Shopify Functions, checkout extensions, or Hydrogen storefronts. It helps operators choose the correct Shopify surface, follow CLI- and GraphQL-first workflows, apply current migration guidance, and validate changes safely before handoff."
version: "0.0.1"
category: "development"
tags:
  - "shopify-developer"
  - "shopify"
  - "liquid"
  - "themes"
  - "graphql"
  - "hydrogen"
  - "storefront-api"
  - "admin-api"
  - "shopify-functions"
  - "checkout-extensibility"
  - "webhooks"
  - "theme-check"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/shopify-developer"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Shopify Developer Reference

## Overview

This skill is an execution-oriented Shopify operator guide curated from the upstream `shopify-developer` intake while preserving its original intent and provenance.

Use it when the task is specifically about Shopify implementation work across one or more of these surfaces:

- Liquid templating and theme output
- Online Store 2.0 theme architecture
- Shopify app and extension development
- Admin GraphQL API integrations
- Storefront API and headless storefronts
- Shopify Functions and Scripts migration
- Checkout extensibility
- Shopify performance and platform-specific debugging

The goal is not just to point at reference material, but to help the operator choose the right Shopify surface, implement changes safely, validate them with the right tooling, and avoid outdated or insecure patterns.

This enhanced version keeps the upstream reference-pack identity intact while shifting the front door from import-review mechanics to practical execution.

## When to Use This Skill

Use this skill when the request is clearly about Shopify-specific development work such as:

- editing or debugging `.liquid` files
- building or customizing an Online Store 2.0 theme
- writing or reviewing Shopify Admin GraphQL queries or mutations
- using the Storefront API for carts, products, collections, or customer-facing headless flows
- building or debugging a Shopify app, extension, or webhook integration
- migrating from Shopify Scripts to Shopify Functions
- replacing deprecated checkout customization approaches with checkout extensibility
- building or troubleshooting a Hydrogen storefront deployed to Oxygen
- diagnosing Shopify-specific issues such as Liquid rendering errors, webhook verification failures, GraphQL throttling, or theme preview drift

Do **not** use this skill alone when:

- the problem is for a non-Shopify commerce platform
- the issue is a generic React, TypeScript, or CSS problem with no Shopify-specific behavior
- the task is deep cloud infrastructure unrelated to Shopify CLI, Hydrogen, or Oxygen runtime behavior
- the task is a broader security review beyond Shopify app auth, token handling, webhooks, and API boundary concerns

When the task spans adjacent specialties, use this skill to establish the Shopify implementation boundary first, then hand off deliberately.

## Operating Table

| Goal | Preferred Shopify surface | Primary tool or entry point | Validate with | Common pitfalls |
| --- | --- | --- | --- | --- |
| Change storefront markup or merchant-customizable UI | Liquid + OS 2.0 theme architecture | `references/theme-development.md`, `references/liquid-syntax.md` | Theme preview, Theme Check, schema validation | Hardcoded markup instead of sections/blocks, invalid JSON templates |
| Update theme cart behavior on a classic theme storefront | Ajax API or Liquid theme logic | `references/api-storefront.md` | Theme preview, cart request checks | Confusing Ajax API with Storefront API or Admin API |
| Read or update shop admin data | Admin GraphQL API | `references/api-admin.md`, `references/shopify-graphql-admin-patterns.md`, `examples/graphql-admin-query-template.md` | GraphQL response inspection, cost/throttle review | Missing scopes, invalid IDs, version drift, pagination mistakes |
| Build app features or extensions | Shopify app surface + CLI | `references/app-development.md`, `references/shopify-security.md` | Local app dev flow, extension deployment checks | Exposing secrets, wrong scopes, extension config mismatch |
| Implement discounts, validation, or commerce logic | Shopify Functions | `references/functions.md`, `references/shopify-functions-migration.md`, `examples/functions-migration-example.md` | Function deploy and behavior verification | Recommending Scripts for new work, unsupported migration assumptions |
| Customize checkout | Checkout extensibility / checkout UI extensions | `references/shopify-checkout-extensibility.md`, `references/app-development.md` | Extension deployment and target verification | Suggesting `checkout.liquid` for new implementations |
| Build headless storefronts | Hydrogen + Storefront API + Oxygen | `references/hydrogen.md`, `references/shopify-hydrogen-storefront.md`, `examples/hydrogen-storefront-loader-example.md` | Route/data checks, Oxygen deploy validation | Overusing headless where themes are enough, env/caching mistakes |
| Troubleshoot webhook delivery or auth failures | App auth + webhooks | `references/shopify-security.md`, `references/shopify-webhooks.md`, `examples/webhook-hmac-verification-snippet.md` | Signature verification and delivery logs | Not verifying HMAC, duplicate event handling, weak retry assumptions |
| Review theme performance | Theme architecture + storefront performance guidance | `references/performance.md`, `references/shopify-performance-checklist.md` | Theme Check, preview review, CWV-focused changes | Large media, third-party scripts, excessive Liquid work |

## Workflow

1. **Classify the task surface first.**
   Decide whether the request is primarily about:
   - theme/Liquid
   - app/extensions
   - Admin API
   - Storefront API/headless
   - Functions
   - checkout extensibility
   - migration/deprecation work

   If unclear, start with [agents/shopify-router.md](agents/shopify-router.md).

2. **Confirm constraints before implementation.**
   Check the minimum facts that change the solution:
   - theme vs headless storefront
   - Plus vs non-Plus context if checkout is involved
   - app type and auth context
   - whether the work is server-side or client-side
   - whether current behavior depends on deprecated patterns
   - whether the shop already pins a Shopify API version

3. **Choose the official Shopify path, not the closest-sounding one.**
   Use:
   - Liquid and OS 2.0 for theme rendering
   - Ajax API only for theme-side cart interactions where appropriate
   - Storefront API for headless customer-facing data/cart flows
   - Admin GraphQL API for back-office or merchant data operations
   - Functions for supported commerce logic
   - checkout extensibility for checkout customization

4. **Confirm versioning, deprecations, and security boundaries.**
   Before writing code or suggesting commands, check:
   - [references/shopify-api-versioning.md](references/shopify-api-versioning.md)
   - [references/shopify-security.md](references/shopify-security.md)
   - [references/shopify-functions-migration.md](references/shopify-functions-migration.md)
   - [references/shopify-checkout-extensibility.md](references/shopify-checkout-extensibility.md)

   Operational defaults:
   - prefer GraphQL Admin API unless a documented gap requires another path
   - pin the intended version instead of assuming the latest one blindly
   - treat deprecated surfaces as migration work, not as preferred design targets
   - keep privileged admin operations server-side

5. **Load only the references that fit the task.**
   Core upstream references:
   - [references/liquid-syntax.md](references/liquid-syntax.md)
   - [references/liquid-filters.md](references/liquid-filters.md)
   - [references/liquid-objects.md](references/liquid-objects.md)
   - [references/theme-development.md](references/theme-development.md)
   - [references/api-admin.md](references/api-admin.md)
   - [references/api-storefront.md](references/api-storefront.md)
   - [references/app-development.md](references/app-development.md)
   - [references/functions.md](references/functions.md)
   - [references/hydrogen.md](references/hydrogen.md)
   - [references/performance.md](references/performance.md)
   - [references/debugging.md](references/debugging.md)

   Curated support files:
   - [references/shopify-api-versioning.md](references/shopify-api-versioning.md)
   - [references/shopify-security.md](references/shopify-security.md)
   - [references/shopify-webhooks.md](references/shopify-webhooks.md)
   - [references/shopify-theme-os2.md](references/shopify-theme-os2.md)
   - [references/shopify-graphql-admin-patterns.md](references/shopify-graphql-admin-patterns.md)
   - [references/shopify-functions-migration.md](references/shopify-functions-migration.md)
   - [references/shopify-checkout-extensibility.md](references/shopify-checkout-extensibility.md)
   - [references/shopify-hydrogen-storefront.md](references/shopify-hydrogen-storefront.md)
   - [references/shopify-performance-checklist.md](references/shopify-performance-checklist.md)
   - [references/shopify-troubleshooting-runbooks.md](references/shopify-troubleshooting-runbooks.md)

6. **Implement with Shopify-first operational habits.**
   Follow these defaults:
   - Prefer Shopify CLI workflows for local theme, app, and function work.
   - Prefer Admin GraphQL over legacy REST-heavy designs where official support permits.
   - Use variables and cursor pagination for GraphQL operations.
   - Inspect `errors`, `userErrors`, and throttle/cost signals instead of assuming success.
   - Keep Admin API work server-side.
   - Minimize scope and access boundaries.
   - Use sections, blocks, schema settings, and `render`-based snippet composition for themes.
   - Treat deprecations as blockers for new implementations, not footnotes.

7. **Validate according to the surface.**
   - **Theme/Liquid:** run Theme Check if available, inspect preview output, verify section schema and template JSON.
   - **Admin GraphQL:** inspect `errors`, `userErrors`, pagination, and throttle/cost behavior.
   - **Storefront API / Hydrogen:** verify token boundary, route loaders/actions, cart/session consistency, and deployment config.
   - **Apps/webhooks:** validate auth/scopes, verify webhook signatures, confirm idempotent handling.
   - **Functions/extensions:** verify deployment target, configuration, and observed runtime behavior.

8. **Document implementation boundaries and migration notes.**
   Before handoff, record:
   - which Shopify surface was used
   - which API version was assumed or pinned
   - any deprecated pattern found and replacement chosen
   - any auth or scope assumptions
   - any operational checks still required in a real store or staging environment

### Scenario Workflow: Theme and Liquid

1. Identify whether the task belongs in a section, block, snippet, template, or settings schema.
2. Prefer merchant-configurable sections/blocks over hardcoded theme edits.
3. Use `render`-based reusable snippets where appropriate.
4. Check object availability and nil behavior before assuming data exists.
5. Validate theme preview behavior and run the checks in [references/shopify-performance-checklist.md](references/shopify-performance-checklist.md) and [references/shopify-theme-os2.md](references/shopify-theme-os2.md).
6. Review performance implications for media, loops, and third-party scripts.

### Scenario Workflow: Admin GraphQL API

1. Confirm the operation belongs in Admin, not Storefront or theme Ajax.
2. Pin the API version being used.
3. Build the query or mutation with variables.
4. Handle `errors` and `userErrors` explicitly.
5. Use cursor pagination for collections of results.
6. Inspect cost/throttle signals before batching or looping.
7. Keep tokens server-side only.

### Scenario Workflow: Apps, Webhooks, and Extensions

1. Confirm required scopes and app auth model.
2. Use server-side session and token handling.
3. Register or inspect webhook subscriptions using the current app flow.
4. Verify HMAC signatures for incoming webhook deliveries.
5. Make handlers idempotent because deliveries may retry.
6. Validate extension targets and deployment configuration.

### Scenario Workflow: Functions and Migration

1. Determine whether the user is migrating existing Scripts logic or building new logic.
2. If migrating, map the old behavior against [references/shopify-functions-migration.md](references/shopify-functions-migration.md).
3. Confirm the intended Function target is supported.
4. Implement and deploy through the current Shopify app workflow.
5. Verify the behavior in the actual commerce flow, not just build output.
6. Document any unsupported parity gap instead of pretending the migration is 1:1.

### Scenario Workflow: Hydrogen and Oxygen

1. Confirm headless is justified before recommending Hydrogen.
2. Separate server-only and client-visible configuration.
3. Use Storefront API for customer-facing data flows.
4. Verify route loader/action behavior and cart/session state.
5. Validate Oxygen deployment configuration and environment variables.
6. Check for cache or stale data behavior before blaming API correctness.

## Examples

### Example 1: Route a Shopify task correctly

```text
Use @shopify-developer to classify this request first: we need to add a custom cart upsell, update product-card Liquid, and confirm whether this should be done in the theme, Ajax API, Storefront API, or an app extension.
```

**Expected outcome:** The operator identifies whether the storefront is a theme or headless build, chooses the correct API surface, and avoids mixing Admin API guidance into storefront UI work.

### Example 2: Validate an Admin GraphQL workflow

```text
Use @shopify-developer to draft a Shopify Admin GraphQL query for products with cursor pagination, explain the required scopes, and list how to inspect GraphQL errors and throttle cost before production use.
```

**Expected outcome:** The answer uses GraphQL variables, cursor pagination, notes version pinning, and calls out `errors`, `userErrors`, and throttle-awareness.

See also: [examples/graphql-admin-query-template.md](examples/graphql-admin-query-template.md)

### Example 3: Troubleshoot a webhook verification issue

```text
Use @shopify-developer to debug a webhook endpoint that returns 401 intermittently. Include HMAC verification checks, retry/idempotency guidance, and likely causes specific to Shopify webhooks.
```

**Expected outcome:** The answer focuses on signature verification, raw request body handling, shared secret configuration, and duplicate-delivery-safe processing.

See also: [examples/webhook-hmac-verification-snippet.md](examples/webhook-hmac-verification-snippet.md)

### Example 4: Review a Scripts-to-Functions migration

```text
Use @shopify-developer to assess whether this legacy Shopify Scripts discount behavior can move to Shopify Functions, identify likely parity gaps, and outline the safest migration path.
```

**Expected outcome:** The answer avoids recommending Scripts for new work, maps the deprecated surface to Functions, and clearly states any unsupported assumptions.

See also: [examples/functions-migration-example.md](examples/functions-migration-example.md)

### Example 5: Debug a Hydrogen storefront deployment

```text
Use @shopify-developer to debug a Hydrogen app where product data is stale in Oxygen and cart state behaves differently between local development and deployment.
```

**Expected outcome:** The answer inspects Storefront API auth boundaries, route data loading, cache expectations, environment variable differences, and cart/session behavior.

See also: [examples/hydrogen-storefront-loader-example.md](examples/hydrogen-storefront-loader-example.md)

## Best Practices

### Do

- Prefer the simplest Shopify surface that solves the task.
- Use Online Store 2.0 theme architecture for theme work: sections, blocks, JSON templates, and merchant-configurable settings.
- Prefer Admin GraphQL as the primary admin integration surface.
- Pin API versions and review changelog/deprecations during implementation or handoff.
- Use Shopify CLI for local theme, app, extension, and function workflows where applicable.
- Keep Admin API tokens and app secrets server-side only.
- Minimize scopes and permissions to least privilege.
- Verify webhook signatures and design for retried deliveries.
- Use Theme Check and preview validation before shipping theme changes.
- Treat migration constraints honestly when replacing Scripts, `checkout.liquid`, or legacy patterns.

### Don't

- Do not expose Admin API credentials in theme files, browser code, client bundles, or shared snippets.
- Do not recommend `checkout.liquid` or Shopify Scripts for new implementations.
- Do not assume Storefront API, Ajax API, and Admin API are interchangeable.
- Do not default to headless Hydrogen when a theme-based solution is sufficient.
- Do not ignore GraphQL cost, throttling, or cursor pagination when building data-intensive automation.
- Do not ship theme changes without validating JSON templates, section schema, and preview behavior.
- Do not treat webhook delivery success as enough without signature verification and idempotency.

## Security

Use [references/shopify-security.md](references/shopify-security.md) as the operational baseline.

### Core rules

- **Admin API tokens are server-only secrets.** Never place them in theme code, browser JavaScript, public repositories, screenshots, or shell commands that will be copied into logs casually.
- **Storefront access differs from Admin access.** Treat Storefront API tokens as a different trust boundary and do not confuse public storefront usage with privileged admin operations.
- **Scopes must be minimal.** Request only the permissions needed for the feature being implemented or debugged.
- **Webhook verification is mandatory.** Verify HMAC signatures against the raw request body and handle retries safely.
- **Separate client and server responsibilities.** Keep privileged operations in backend code or approved app server contexts.
- **Review auth assumptions during handoff.** If the task depends on online/offline access behavior, session handling, or app install state, call that out explicitly.

### Safer command habits

- Prefer environment variables or secret managers over hardcoding tokens in commands or docs.
- Prefer example placeholders like `<ADMIN_TOKEN>` instead of real values.
- Keep examples narrow and reversible.
- Avoid suggesting destructive theme or app operations unless the user explicitly asks and has rollback context.

## Troubleshooting

Use [references/shopify-troubleshooting-runbooks.md](references/shopify-troubleshooting-runbooks.md) for the full runbook set.

### Problem: Liquid output is blank or a value is unexpectedly nil

**Symptoms:** A section renders with missing titles, prices, or metafields; conditional branches never trigger; loops appear empty.

**Likely causes:**
- wrong object in the current template context
- object or metafield not available on that resource
- variable shadowing or misplaced `assign`
- assumptions about product, collection, or cart availability in a template

**How to verify:**
- inspect the relevant object in [references/liquid-objects.md](references/liquid-objects.md)
- confirm the template/section context in [references/theme-development.md](references/theme-development.md)
- reduce the snippet to a minimal output check

**Solution:** Use the correct Liquid object for that template context, guard optional data paths, and move reusable rendering into well-scoped snippets or sections.

### Problem: Theme changes do not appear in preview or behave inconsistently

**Symptoms:** Saved changes are not visible, section settings do not update as expected, or the theme editor preview differs from storefront rendering.

**Likely causes:**
- editing the wrong theme or preview
- invalid JSON template or section schema
- app block or section settings misconfiguration
- stale local/dev sync assumptions

**How to verify:**
- run through [references/shopify-theme-os2.md](references/shopify-theme-os2.md)
- inspect template JSON and section schema carefully
- run Theme Check where available

**Solution:** Validate schema and templates first, confirm the active preview target, and isolate the issue to section structure, settings wiring, or local sync state.

### Problem: Admin GraphQL returns `THROTTLED`, partial data, or schema errors

**Symptoms:** Queries fail intermittently, pagination stalls, or fields seem unavailable.

**Likely causes:**
- excessive query cost
- missing cursor pagination
- using the wrong API version
- requesting fields unavailable for the pinned version or scopes

**How to verify:**
- inspect the response `errors`, `extensions`, and any throttle/cost data
- review [references/shopify-api-versioning.md](references/shopify-api-versioning.md) and [references/shopify-graphql-admin-patterns.md](references/shopify-graphql-admin-patterns.md)
- compare the query against the correct versioned schema

**Solution:** Reduce query cost, paginate properly, pin the intended API version, and update scopes or field selection as needed.

### Problem: Admin GraphQL returns access denied or unauthorized errors

**Symptoms:** The endpoint responds, but operations fail with permission or access errors.

**Likely causes:**
- missing scopes
- expired or wrong token
- mixing storefront credentials with admin requests
- trying client-side calls for privileged operations

**How to verify:**
- inspect app scopes and auth configuration
- confirm the token is an Admin API token in the correct server-side context
- review [references/shopify-security.md](references/shopify-security.md)

**Solution:** Correct the auth boundary, use server-side Admin API access only, and request only the scopes actually required.

### Problem: Webhook verification fails intermittently

**Symptoms:** Some webhook deliveries are rejected, signature checks fail randomly, or local tests pass but deployed requests fail.

**Likely causes:**
- request body altered before HMAC verification
- wrong shared secret or environment mismatch
- framework middleware consuming/parsing body before signature validation
- inconsistent deployment config

**How to verify:**
- compare implementation against [examples/webhook-hmac-verification-snippet.md](examples/webhook-hmac-verification-snippet.md)
- inspect raw-body handling in the server framework
- confirm the correct secret is used in each environment

**Solution:** Verify against the raw request body, align secrets across environments, and make the handler idempotent for retries.

### Problem: Function deployment succeeds but behavior does not change

**Symptoms:** Build and deploy complete, but checkout, discount, or validation behavior remains unchanged.

**Likely causes:**
- wrong function target
- configuration not attached or activated as expected
- migrated Script behavior not actually supported the same way
- testing in the wrong commerce flow

**How to verify:**
- review [examples/functions-migration-example.md](examples/functions-migration-example.md)
- confirm target and app configuration
- compare expected behavior to the supported Function surface

**Solution:** Re-check target selection and configuration, validate in the correct runtime context, and document any feature-gap instead of assuming parity.

### Problem: Hydrogen works locally but fails or behaves differently in Oxygen

**Symptoms:** Routes fail after deploy, product data is stale, environment variables differ, or cart state is inconsistent.

**Likely causes:**
- env mismatch between local and deployed runtime
- server/client boundary confusion
- Storefront API token or domain misconfiguration
- caching assumptions that differ in deployment

**How to verify:**
- work through [examples/hydrogen-storefront-loader-example.md](examples/hydrogen-storefront-loader-example.md)
- compare environment variables and runtime config
- inspect route loader/action behavior and cache assumptions

**Solution:** Fix deployment environment mismatches first, then validate Storefront API configuration, route data flow, and cart/session handling.

## Deprecation / Migration Notes

Use [references/shopify-functions-migration.md](references/shopify-functions-migration.md) and [references/shopify-checkout-extensibility.md](references/shopify-checkout-extensibility.md) when the task touches older implementations.

### Current direction of travel

- **Shopify Scripts → Shopify Functions** for supported commerce logic
- **`checkout.liquid` → Checkout Extensibility** for checkout customization
- **REST-heavy Admin patterns → Admin GraphQL** as the primary admin API path
- **Legacy custom app auth models → current Shopify app auth guidance**
- **Polaris React migration contexts → Polaris Web Components or current supported UI approach where applicable**
- **Older Hydrogen/Remix guidance → current Hydrogen with React Router era guidance where applicable**

Operational rule: when the user asks for a deprecated pattern, answer in migration terms unless they explicitly need legacy maintenance context.

## Related Skills

Use local routing guidance in [agents/shopify-router.md](agents/shopify-router.md).

Likely adjacent skills, if available in the repository:

- `@graphql` - for deeper client/schema/query design beyond Shopify-specific API routing
- `@react` - for non-Shopify React issues in Hydrogen or extension UI code
- `@typescript` - for typing and codebase-level implementation concerns
- `@accessibility` - for theme, checkout, or extension accessibility review
- `@web-performance` - for broader frontend performance work after Shopify-specific bottlenecks are isolated
- `@testing` - for automated test strategy once the Shopify surface and failure modes are known
- `@security-review` - for deeper auth, secret handling, or threat modeling beyond this skill's scope

## Additional Resources

### Curated Shopify support pack

- [Shopify API versioning](references/shopify-api-versioning.md)
- [Shopify security](references/shopify-security.md)
- [Shopify webhooks](references/shopify-webhooks.md)
- [Shopify theme OS 2.0 guide](references/shopify-theme-os2.md)
- [Shopify GraphQL Admin patterns](references/shopify-graphql-admin-patterns.md)
- [Shopify Functions migration](references/shopify-functions-migration.md)
- [Shopify checkout extensibility](references/shopify-checkout-extensibility.md)
- [Shopify Hydrogen and Storefront workflow](references/shopify-hydrogen-storefront.md)
- [Shopify performance checklist](references/shopify-performance-checklist.md)
- [Shopify troubleshooting runbooks](references/shopify-troubleshooting-runbooks.md)

### Worked examples

- [GraphQL Admin query template](examples/graphql-admin-query-template.md)
- [Webhook HMAC verification snippet](examples/webhook-hmac-verification-snippet.md)
- [Theme section schema example](examples/theme-section-schema-example.md)
- [Functions migration example](examples/functions-migration-example.md)
- [Hydrogen storefront loader example](examples/hydrogen-storefront-loader-example.md)

### Upstream reference pack preserved from intake

- [Liquid syntax](references/liquid-syntax.md)
- [Liquid filters](references/liquid-filters.md)
- [Liquid objects](references/liquid-objects.md)
- [Theme development](references/theme-development.md)
- [Admin API](references/api-admin.md)
- [Storefront API](references/api-storefront.md)
- [App development](references/app-development.md)
- [Functions](references/functions.md)
- [Hydrogen](references/hydrogen.md)
- [Performance](references/performance.md)
- [Debugging](references/debugging.md)

### Upstream provenance and import-support assets

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Maintenance note

Before merging significant Shopify guidance, check the Shopify developer changelog and current official docs to confirm version support, deprecations, and migration deadlines have not shifted.
