# API Design Checklist

## Scope

- Name the resource model before naming routes.
- Decide which operations are reads, writes, and asynchronous transitions.
- State idempotency expectations for every mutation.

## Interface Quality

- Keep request and response envelopes consistent.
- Make pagination, filtering, and sorting explicit.
- Reserve room for additive evolution without breaking existing clients.

## Errors And Compatibility

- Define validation, auth, not-found, conflict, rate-limit, and server-error behavior.
- Keep machine-readable error codes stable even when human text changes.
- Document which fields are required, nullable, deprecated, or experimental.

## Validation

- Produce at least one happy-path example and one failure example.
- Verify that retries, optimistic concurrency, and versioning rules are unambiguous.
- Check whether the contract can be documented and tested without oral explanations.
