# Storefront API Cart Patterns

Use this file for headless storefront cart guidance.

## Create a cart

```graphql
mutation CartCreate($lines: [CartLineInput!]) {
  cartCreate(input: { lines: $lines }) {
    cart {
      id
      checkoutUrl
      totalQuantity
    }
    userErrors {
      field
      message
    }
  }
}
```

Variables:

```json
{
  "lines": [
    {
      "merchandiseId": "gid://shopify/ProductVariant/1234567890",
      "quantity": 1
    }
  ]
}
```

## Update cart lines

```graphql
mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      id
      totalQuantity
    }
    userErrors {
      field
      message
    }
  }
}
```

## Operator notes

- Use Storefront API for headless customer-facing cart flows.
- Do not substitute Admin API for browser-visible cart operations.
- Keep boundary decisions explicit: theme carts may use Ajax API, headless carts should use Storefront API.
- Inspect `userErrors` and session/cart persistence behavior in local and deployed environments.
