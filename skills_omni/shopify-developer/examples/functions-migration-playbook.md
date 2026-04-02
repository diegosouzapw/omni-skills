# Functions Migration Playbook

Use this playbook when a request asks to migrate Shopify Scripts behavior or design new commerce logic.

## Migration steps

1. Identify the exact behavior implemented today.
2. Determine whether the behavior maps to a supported Shopify Function target.
3. Separate truly supported parity from assumptions or custom edge cases.
4. Implement the new logic in the app/function workflow.
5. Validate behavior in the real checkout or commerce path.
6. Document any gaps clearly.

## Common operator mistakes

- assuming every Script pattern has a direct Function equivalent
- validating build success but not runtime behavior
- forgetting configuration or target selection
- describing Scripts as acceptable for new work

## Review template

- Legacy behavior:
- Desired new behavior:
- Function target selected:
- Known parity gaps:
- Validation still required:
