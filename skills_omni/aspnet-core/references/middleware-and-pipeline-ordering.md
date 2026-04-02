# Middleware and Pipeline Ordering Notes

Middleware order is a frequent cause of ASP.NET Core bugs.

## Review goals

Verify:

- exception handling is configured appropriately for the environment
- HTTPS behavior matches deployment topology
- static files are available when expected
- routing and endpoint mapping are clear
- authentication and authorization are placed correctly
- CORS is applied to the intended endpoints
- rate limiting, caching, and custom middleware do not interfere with endpoint behavior

## Common review pattern

The exact order depends on the app, but a common safe review sequence is:

1. exception handling and production-safe error behavior
2. HTTPS redirection if appropriate for the topology
3. static files when the app serves them
4. routing-related middleware and endpoint-specific features
5. authentication
6. authorization
7. endpoint mapping

Always verify the actual app model and environment branches before changing order.

## Common failure patterns

### Authentication appears configured but requests are still anonymous

Check:

- `AddAuthentication(...)`
- `AddAuthorization(...)`
- middleware placement in `Program.cs`
- whether the endpoint or controller actually requires authorization

### Browser requests fail while server-to-server calls work

Check:

- CORS policy registration
- CORS policy application scope
- origin, method, and header rules
- credential usage with explicit origins

### Static assets return 404 after a pipeline change

Check:

- static file middleware presence
- asset paths and web root assumptions
- whether environment-specific branches skipped static file configuration

### Error pages or exception responses leak details in production

Check:

- development-only exception pages
- production exception handling path
- Problem Details and status-code behavior

## Review rule

If a request-path bug appears after a refactor, inspect `Program.cs` and middleware order before rewriting endpoint code.
