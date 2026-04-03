# Functions Migration Example

Use this example to frame migration safely.

## Legacy request

"We have a Shopify Script that applies discount behavior based on cart conditions. Can we move it to Shopify Functions?"

## Safe operator response shape

1. Identify the exact business rule, not just the old Script file.
2. Confirm the supported Function target for that behavior.
3. Map any configuration required in the app.
4. Call out parity gaps explicitly.
5. Validate the result in the real cart or checkout flow.

## Example migration summary

```text
This should be treated as a Scripts-to-Functions migration. The next step is to map the existing discount rule to a supported Shopify Function target, verify whether the full behavior is supported, and document any parity gaps before implementation. Do not assume a 1:1 replacement until the target capability is confirmed.
```
