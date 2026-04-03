# GraphQL Admin Query Template

Use this pattern when drafting Shopify Admin GraphQL queries.

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

Example variables:

```json
{
  "first": 20,
  "after": null
}
```

Response handling checklist:

- inspect top-level `errors`
- inspect any operation-specific `userErrors` when using mutations
- inspect pagination fields before requesting the next page
- inspect throttle/cost metadata if present

Example endpoint shape:

```text
POST https://<store>.myshopify.com/admin/api/<version>/graphql.json
```

Do not expose real tokens in examples.
