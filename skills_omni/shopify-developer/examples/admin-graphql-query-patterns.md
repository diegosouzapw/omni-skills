# Admin GraphQL Query Patterns

Use these patterns as references for Shopify Admin GraphQL work.

## Query with variables and pagination

```graphql
query ProductsPage($first: Int!, $after: String) {
  products(first: $first, after: $after) {
    edges {
      cursor
      node {
        id
        title
        handle
        updatedAt
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

Variables:

```json
{
  "first": 20,
  "after": null
}
```

## Safe response inspection pattern

```js
const response = await fetch(`https://${store}.myshopify.com/admin/api/${apiVersion}/graphql.json`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': process.env.ADMIN_TOKEN,
  },
  body: JSON.stringify({query, variables}),
});

const payload = await response.json();

if (payload.errors?.length) {
  throw new Error(`GraphQL errors: ${payload.errors.map(e => e.message).join('; ')}`);
}

const userErrors = payload.data?.productUpdate?.userErrors ?? [];
if (userErrors.length) {
  throw new Error(`User errors: ${userErrors.map(e => e.message).join('; ')}`);
}
```

## Operator notes

- Keep the token server-side.
- Pin `apiVersion` explicitly.
- Paginate with cursors.
- Reduce selected fields if cost becomes too high.
- Add backoff if the workflow is repeated in automation.
