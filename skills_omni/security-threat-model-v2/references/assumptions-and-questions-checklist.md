# Assumptions and Questions Checklist

Use this when important context is missing before final prioritization.

## Clarify only what changes risk materially

Ask at most a few targeted questions.

## Common unknowns

- Is the service internet-facing, internal-only, or both?
- What users or systems can reach the main entry points?
- Is the application single-tenant or multi-tenant?
- What data sensitivity is in scope?
- What authentication and authorization model is expected?
- Are workers or queue producers trusted, authenticated, or signed?
- Are uploads or untrusted files accepted in production?
- Are there administrative or break-glass paths?

## Example targeted questions

1. Is this service reachable by unauthenticated internet users, authenticated users only, or internal callers only?
2. Does it process tenant-separated data or shared global data?
3. Are queue messages, webhooks, or uploads authenticated or signed before processing?

## How to write assumptions when answers are unavailable

- State the assumption plainly.
- Explain how it affects priority.
- Lower confidence if the assumption is unverified.

Example:

- Assumption: The webhook endpoint is internet-reachable because deployment manifests expose an ingress, but no network policy was visible.
- Effect on ranking: Raises likelihood for forgery and input abuse paths.
- Confidence: Medium until confirmed.
