# Webhook HMAC Verification Snippet

Use this example to explain the verification shape. Adapt it to the server framework in use.

```javascript
import crypto from 'node:crypto'

function verifyShopifyWebhook({ rawBody, hmacHeader, secret }) {
  const digest = crypto
    .createHmac('sha256', secret)
    .update(rawBody, 'utf8')
    .digest('base64')

  return crypto.timingSafeEqual(
    Buffer.from(digest, 'utf8'),
    Buffer.from(hmacHeader || '', 'utf8')
  )
}
```

Checklist:

- verify against the raw request body, not a re-serialized object
- load the secret from a safe server-side source
- reject invalid signatures cleanly
- make the handler idempotent because Shopify may retry deliveries

Use placeholders like `<SHOPIFY_API_SECRET>` in prose, never real values.
