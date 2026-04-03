# Hydrogen Storefront Loader Example

Use this example to explain a minimal Storefront API data-loading pattern in Hydrogen-style server code.

```javascript
export async function loader({ context, params }) {
  const { storefront } = context

  const response = await storefront.query(
    `#graphql
    query ProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
      }
    }
    `,
    {
      variables: { handle: params.handle }
    }
  )

  return response
}
```

Checklist:

- keep Storefront API usage separate from Admin API logic
- confirm environment configuration in local and Oxygen deployments
- inspect caching and route loader behavior when debugging stale data
