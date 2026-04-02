# Shopify Troubleshooting Runbooks

Use this file when the first fix attempt would otherwise be speculative.

## Runbook: GraphQL throttling or unstable queries

**Symptoms:** `THROTTLED` errors, intermittent failures, stalled pagination.

**Inspect:**
- response `errors`
- `extensions` or cost metadata
- fields requested
- pagination design
- API version used

**Fix direction:** Reduce cost, paginate correctly, pin the intended version, and avoid over-fetching.

## Runbook: Webhook signature failures

**Symptoms:** 401 or verification mismatch on inbound webhook requests.

**Inspect:**
- raw body handling
- shared secret source
- framework middleware behavior
- environment-specific config

**Fix direction:** Verify HMAC against the raw body and align secret/config handling across environments.

## Runbook: Theme preview mismatch

**Symptoms:** Theme editor output differs from storefront preview, or changes do not appear.

**Inspect:**
- active theme/preview target
- JSON template validity
- section schema
- local sync or CLI state

**Fix direction:** Validate the target theme, schema, and template structure before changing Liquid logic.

## Runbook: Liquid object or snippet scope bug

**Symptoms:** Variables are missing, snippet output is blank, or template context assumptions fail.

**Inspect:**
- object availability for the current template
- variables passed into `render`
- shadowed variables
- nil guards

**Fix direction:** Pass explicit variables into snippets and re-check the current object context.

## Runbook: App install or auth callback mismatch

**Symptoms:** Install flow fails, tokens are missing, or callback handling breaks by environment.

**Inspect:**
- app URL and callback config
- environment variables
- requested scopes
- auth model assumptions

**Fix direction:** Reconcile environment-specific app config and confirm the current Shopify auth flow is being followed.

## Runbook: Scripts migration parity gap

**Symptoms:** A legacy Script behavior cannot be reproduced exactly with the proposed Function design.

**Inspect:**
- desired business behavior
- target Function capability
- app configuration and activation path

**Fix direction:** Document the gap clearly and propose a supported redesign if exact parity is unavailable.

## Runbook: Storefront API unauthorized or empty responses

**Symptoms:** Headless storefront queries return unauthorized responses or missing data.

**Inspect:**
- Storefront token configuration
- store domain
- endpoint version
- route loader usage
- environment differences

**Fix direction:** Correct the Storefront API configuration first, then re-check query shape and data loading behavior.
