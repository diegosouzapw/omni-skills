# Shopify API Versioning

Use this reference before writing or reviewing Admin API or Storefront API code.

## Core rules

- Shopify APIs are versioned. Do not assume the latest version automatically.
- Pin the version used by the project or the version explicitly requested by the user.
- Validate schema availability against the pinned version before suggesting fields or mutations.
- During handoff, record the version used so follow-up work does not silently drift.

## Operator checklist

1. Identify whether the task uses Admin GraphQL, Storefront API, or another Shopify surface.
2. Find the currently pinned API version in code, configuration, or deployment notes.
3. If no version is pinned, recommend selecting a current stable version deliberately.
4. Compare requested fields and mutations against the versioned schema.
5. If migrating older code, look for deprecated fields, renamed types, or changed product model behavior.

## Common failure modes

### Version mismatch

**Symptoms:** A query worked previously but now returns field or type errors.

**What to inspect:**
- request URL version segment
- project config or environment variable that builds the endpoint
- recent schema or dependency updates

**Recovery:** Pin the intended version explicitly and rewrite queries for that schema instead of guessing.

### Hidden version drift

**Symptoms:** Local examples use one version but deployed code uses another.

**What to inspect:**
- environment-specific base URLs
- helper functions that construct Shopify API endpoints
- copied snippets from old internal docs

**Recovery:** Standardize endpoint construction and document the chosen version in the handoff notes.

## Practical endpoint shapes

- Admin GraphQL: `https://<store>.myshopify.com/admin/api/<version>/graphql.json`
- Storefront API: `https://<store>.myshopify.com/api/<version>/graphql.json`

Use placeholders in examples. Do not embed real store domains or tokens in the skill.
