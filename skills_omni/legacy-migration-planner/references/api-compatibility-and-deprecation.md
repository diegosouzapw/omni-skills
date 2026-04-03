# API Compatibility and Deprecation Guidance

Use this reference when migration waves must preserve contracts for existing consumers.

## Inventory Requirements

Before choosing a seam, inventory:

- endpoints, methods, and operations
- request and response shapes
- auth and session behavior
- status code behavior
- idempotency expectations
- pagination, filtering, and sorting semantics
- retry expectations and timeout behavior
- known consumer dependencies

## Compatibility Checks

For each migrated interface, verify:

- whether method semantics remain equivalent
- whether status codes and error bodies remain usable
- whether field names, defaults, or ordering assumptions change
- whether auth/session flows still work through a façade or router
- whether consumers need version negotiation or staged opt-in

## Deprecation Planning

When retiring a legacy interface, define:

- deprecation notice point
- communication channel and owner
- sunset date or retirement window
- usage measurement method
- exit criteria for disabling legacy behavior

## Planning Rule

Do not describe an endpoint as compatible unless request semantics, error handling, and auth behavior were checked explicitly.
