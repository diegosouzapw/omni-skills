# Shopify Checkout Extensibility

Use this reference when checkout customization is requested.

## Decision rule

For modern checkout customization, prefer checkout extensibility and related extension surfaces. Do not recommend `checkout.liquid` for new implementations.

## Operator checklist

1. Confirm whether the requested behavior belongs in checkout at all.
2. Confirm shop plan or platform constraints if they materially affect feasibility.
3. Identify the supported checkout extension surface.
4. Verify whether the user is migrating older checkout customization.
5. Document any unsupported expectations instead of forcing a legacy pattern.

## Common failure modes

### Legacy expectation mismatch

**Symptoms:** The user expects unrestricted checkout markup or logic customization.

**Recovery:** Reframe the request in terms of current checkout extensibility surfaces and supported targets.

### Wrong implementation surface

**Symptoms:** Proposed solution mixes theme logic, app admin logic, and checkout behavior incorrectly.

**Recovery:** Separate storefront theme customization from checkout extension behavior before implementation.

## Warning

If the task explicitly asks for `checkout.liquid`, treat it as migration or legacy-maintenance context, not as a recommended design path.
