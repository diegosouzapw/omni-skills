# Observability and Errors

Operational maturity matters even in a monolith.

## Logging

Prefer structured logs with fields such as:

- request or correlation ID
- module or bounded context name
- actor or tenant where appropriate
- operation or use-case name
- result status

Make module ownership visible in logs so architecture issues are easier to diagnose.

## Error handling

Map errors at the boundary:

- domain errors become meaningful client-facing errors
- infrastructure failures become safe generic responses
- unexpected failures are logged with context but not exposed in detail

Keep the error contract consistent across modules.

## Shutdown and lifecycle

If the application owns DB connections, queues, consumers, or workers:

- enable shutdown hooks
- stop accepting new work during shutdown
- close connections cleanly
- document module-specific shutdown behavior

## Readiness and health

Do not reduce health to a single shallow ping.

Review:

- database reachability
- background worker state if relevant
- required downstream dependency readiness
- module-specific critical dependencies

## Review checklist

- Are logs structured and correlated?
- Are domain errors mapped consistently?
- Are stack traces hidden from clients?
- Are shutdown hooks enabled where needed?
- Are readiness assumptions documented?
