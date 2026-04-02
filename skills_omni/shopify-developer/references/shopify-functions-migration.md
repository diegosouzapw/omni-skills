# Shopify Functions Migration

Use this reference when the task involves Shopify Scripts replacement or new commerce logic.

## Decision rule

- If the request is for new discount, validation, or commerce logic, start with Shopify Functions.
- If the request is for legacy Scripts maintenance, answer in migration terms unless the user explicitly needs short-term legacy support.

## Migration checklist

1. Identify the current Script behavior clearly.
2. Determine the desired target behavior, not just the old implementation shape.
3. Confirm a supported Shopify Function target exists.
4. Map any parity gaps explicitly.
5. Test the behavior in the real commerce flow.
6. Record unsupported assumptions during handoff.

## Common migration risks

- assuming the old Script maps 1:1 to Functions
- targeting the wrong Function capability
- validating only build success rather than checkout or discount behavior
- overlooking app configuration required to activate the Function

## Safer operator wording

Say:
- "This legacy Script should be assessed for Functions migration."
- "This behavior may need redesign if parity is not available."

Avoid saying:
- "Just replace Scripts with Functions directly" unless parity is already confirmed.
