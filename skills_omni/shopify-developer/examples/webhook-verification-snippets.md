# Webhook Verification Snippets

These examples illustrate the verification shape only. Adapt them to the framework in use.

## Node.js example

```js
import crypto from 'node:crypto';

export function verifyShopifyWebhook({rawBody, hmacHeader, secret}) {
  const digest = crypto
    .createHmac('sha256', secret)
    .update(rawBody, 'utf8')
    .digest('base64');

  return crypto.timingSafeEqual(
    Buffer.from(digest),
    Buffer.from(hmacHeader || '')
  );
}
```

## What to check when it fails

- Are you verifying the raw body, not a re-serialized parsed object?
- Is the secret correct for the current environment?
- Did middleware consume or alter the request body first?
- Are you logging enough metadata to correlate retries safely without logging sensitive content?

## Idempotency reminder

Webhook deliveries can retry. A valid signature does not guarantee the event is new.

Track duplicate-safe processing where the business flow requires it.
