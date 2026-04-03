# Shopify Security

Use this reference for app auth, webhook verification, token handling, and protected-data boundaries.

## Core guardrails

- Keep Admin API tokens server-side only.
- Do not expose app secrets, Admin tokens, or private webhook material in theme code or browser code.
- Minimize OAuth scopes to the smallest set required.
- Verify webhook HMAC signatures against the raw request body.
- Treat embedded app session handling as a distinct concern from OAuth install flow.
- Call out protected customer data handling explicitly when relevant.

## Operator checklist

1. Confirm whether the task uses Admin API, Storefront API, theme code, or embedded app code.
2. Verify which credentials are required and where they may safely live.
3. Check requested scopes against the exact feature being implemented.
4. For webhooks, confirm raw-body access before HMAC verification.
5. For embedded apps, confirm session-token assumptions instead of relying on older auth patterns.
6. If protected customer data is involved, state that compliance and review constraints may apply.

## Red flags

- Admin API calls from browser JavaScript
- tokens committed to theme files, snippets, or static assets
- examples that tell the user to paste secrets into source code
- webhook handlers that parse JSON before verifying the signature
- broad scopes with no feature justification

## Safe example patterns

- use `<ADMIN_TOKEN>` and `<SHOPIFY_API_SECRET>` placeholders
- refer to environment variables without naming real secrets
- recommend least-privilege scopes in prose
- keep privileged requests in backend or approved app server code

## Protected customer data note

If the task touches customer records, orders, or other sensitive personal data, note that implementation guidance may also require Shopify review, policy checks, or internal compliance review beyond this skill.
