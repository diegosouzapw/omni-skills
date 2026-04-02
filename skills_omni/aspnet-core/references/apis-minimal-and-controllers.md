# Minimal APIs and Controllers

## Minimal APIs

Prefer when:

- the API surface is small to medium
- endpoint grouping is clear
- minimal ceremony is useful

## Controllers

Prefer when:

- existing controller conventions already dominate
- filters, controller organization, or model-binding conventions improve maintainability
- the API surface is broad enough that controllers are clearer

## Shared guidance

- use clear response shapes
- use machine-readable error responses
- validate inputs consistently
- align auth requirements with endpoint groups or controllers
