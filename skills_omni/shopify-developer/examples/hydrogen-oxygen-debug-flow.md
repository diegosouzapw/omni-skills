# Hydrogen and Oxygen Debug Flow

Use this flow when a Hydrogen storefront behaves differently locally and in Oxygen.

## 1. Environment check

- Compare environment variables between local and deployed runtime.
- Confirm Storefront API domain and token values.
- Separate server-only values from client-visible values.

## 2. Data loading check

- Verify route loader/action behavior.
- Confirm the failing route is using the expected Storefront API call.
- Inspect whether stale data is actually a cache issue.

## 3. Cart and session check

- Confirm cart/session behavior is consistent across environments.
- Check whether cookies, sessions, or cart identifiers are handled differently after deploy.

## 4. Deployment check

- Confirm the current deployed build matches the expected code.
- Re-check Oxygen configuration assumptions.

## 5. Boundary review

- Is this a Storefront API problem, a routing/data problem, or an environment/config problem?
- Avoid blaming the API first if local and deployment differ materially.
