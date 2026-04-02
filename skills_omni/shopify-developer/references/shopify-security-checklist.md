# Shopify Security Checklist

Use this checklist before shipping Shopify app, API, webhook, or headless changes.

## Credentials and token handling

- Keep Admin API access tokens server-side only.
- Do not place Admin tokens in theme files, browser code, screenshots, examples, or logs.
- Use placeholders such as `<ADMIN_TOKEN>` in examples.
- Prefer environment variables or approved secret storage.
- Separate development, staging, and production secrets clearly.

## Access boundaries

- Use Admin API only from a secure server-side context.
- Treat Storefront API access as a different trust boundary than Admin API access.
- Do not confuse public storefront access with privileged merchant operations.
- Minimize app scopes to least privilege.

## App auth and session assumptions

- Confirm the app auth flow matches the installation and runtime model.
- Document any online/offline session assumptions when relevant.
- Re-check scopes when a query works in one environment but not another.

## Webhooks

- Verify Shopify webhook HMAC signatures.
- Verify against the raw request body.
- Confirm the webhook secret matches the environment.
- Make handlers idempotent because deliveries may retry.
- Return timely responses and do follow-up work asynchronously when needed.

## Theme and storefront safety

- Never embed Admin credentials in Liquid or storefront JavaScript.
- Avoid unnecessary client-visible data exposure.
- Validate third-party scripts and storefront performance impact.

## Headless and Hydrogen

- Separate server-only and client-visible environment variables.
- Confirm Storefront API domain/token configuration.
- Review cache assumptions before exposing sensitive or stale data patterns.

## Review prompts for handoff

Before merge or handoff, answer:

- Which API is being used: Admin, Storefront, or Ajax?
- Which credentials are involved, and where are they stored?
- Are scopes minimal?
- Is any privileged action exposed client-side by mistake?
- Are webhook signatures verified?
- Are retries/idempotency handled?
- Does the answer accidentally recommend a deprecated or insecure pattern?
