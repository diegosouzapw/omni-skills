# Shopify Webhooks

Use this reference when building or debugging webhook subscriptions and delivery handlers.

## Operational model

Shopify webhook handlers must be secure, fast, and retry-safe.

## Core rules

- Verify the HMAC signature using the raw request body.
- Return a timely response.
- Make handlers idempotent because deliveries can retry.
- Log enough metadata to debug failures without logging secrets.
- Separate subscription setup problems from delivery-handler problems.

## Debug checklist

1. Confirm the subscription exists for the correct topic and destination.
2. Confirm the app has the required scopes and installation context.
3. Verify the correct shared secret is loaded in the active environment.
4. Check whether the framework modifies the request body before verification.
5. Inspect delivery logs, response codes, and timing.
6. Confirm duplicate handling behavior if retries occur.

## Common failure modes

### HMAC mismatch

**Symptoms:** Deliveries arrive but verification fails intermittently or always.

**Likely causes:**
- wrong secret
- body parsed before verification
- environment mismatch

**Recovery:** Verify against the raw body, confirm the secret, and test the deployed environment path.

### Timeouts or retries

**Symptoms:** Duplicate processing, repeated deliveries, or delayed downstream effects.

**Likely causes:**
- slow synchronous processing
- handler doing too much work before acknowledging receipt

**Recovery:** Acknowledge quickly and offload heavy follow-up work where the architecture allows.

### Wrong destination or topic

**Symptoms:** Expected events never arrive.

**Likely causes:**
- subscription not registered
- wrong environment endpoint
- topic mismatch

**Recovery:** Re-check app config, registration logic, and environment-specific callback URLs.
