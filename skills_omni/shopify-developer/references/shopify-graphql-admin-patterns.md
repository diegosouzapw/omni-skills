# Shopify GraphQL Admin Patterns

Use this reference when drafting or reviewing Shopify Admin GraphQL operations.

## Preferred defaults

- Use GraphQL Admin API as the primary admin integration surface.
- Use variables instead of string interpolation.
- Inspect both top-level `errors` and mutation `userErrors`.
- Use cursor pagination for lists.
- Review throttle and cost signals before scaling a query pattern.

## Query checklist

1. Confirm the task belongs in Admin, not Storefront or theme Ajax.
2. Pin the versioned endpoint.
3. Write the operation with variables.
4. Request only the fields needed.
5. Inspect `errors`, `userErrors`, and `extensions` in responses.
6. Add pagination before looping over collections of resources.

## Mutation checklist

1. Confirm the app has the required scopes.
2. Use structured input variables.
3. Return enough fields to confirm success.
4. Read `userErrors` before declaring the mutation successful.

## Throttling guidance

### Symptoms

- `THROTTLED` errors
- unstable bulk loops
- some requests succeed, others fail under load

### Recovery

- reduce requested fields
- split expensive operations
- paginate correctly
- add backoff where the runtime already supports retries safely

## Warning

Do not present REST Admin examples as the default path for new Shopify admin implementations unless the user explicitly needs legacy maintenance context or a documented gap exists.
