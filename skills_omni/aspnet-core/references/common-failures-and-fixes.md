# Common Failures and Fixes

## 1. Middleware ordering bug

**Symptoms:** Auth, CORS, static files, or endpoints behave differently than expected.

**Checks:**

- inspect `Program.cs`
- verify service registration and middleware order
- confirm environment-specific branches

**Safe fixes:**

- reorder middleware based on the actual app model and official guidance
- keep the pipeline readable and explicit

## 2. Configuration precedence confusion

**Symptoms:** A setting value changes across local, CI, and production unexpectedly.

**Checks:**

- compare settings files
- inspect environment variables
- verify the active environment
- inspect options binding section names

**Safe fixes:**

- align key names and section binding
- add options validation
- document required deployment variables

## 3. Reverse proxy HTTPS or redirect loop failure

**Symptoms:** Wrong scheme, callback mismatch, redirect loops, or incorrect client IP.

**Checks:**

- proxy forwarding configuration
- app forwarded-header handling
- HTTPS redirection assumptions

**Safe fixes:**

- configure forwarding correctly for the deployment
- avoid broad trust settings

## 4. Static asset publish/runtime issue

**Symptoms:** CSS or JS missing after publish or in non-development environments.

**Checks:**

- publish output
- asset paths
- static file configuration
- app-model-specific asset handling

**Safe fixes:**

- correct paths and publish assumptions
- verify static file middleware and web root behavior

## 5. DI lifetime mismatch

**Symptoms:** Startup failures, runtime exceptions, or disposed service usage.

**Checks:**

- singleton depending on scoped service
- background work consuming scoped services incorrectly
- request-lifetime assumptions leaking into long-running work

**Safe fixes:**

- align service lifetimes
- create scopes explicitly in background services when needed

## 6. `HttpClient` misuse

**Symptoms:** Socket exhaustion, stale DNS behavior, or intermittent downstream failures.

**Checks:**

- ad-hoc instantiation patterns
- static/shared configuration without lifecycle review
- missing central configuration for timeouts and handlers

**Safe fixes:**

- use `IHttpClientFactory`
- centralize client registration and configuration

## 7. Auth, CORS, and antiforgery mismatch

**Symptoms:** Browser requests fail while server-side calls succeed.

**Checks:**

- auth scheme and endpoint requirements
- CORS policy scope and explicit origins
- whether antiforgery is required for browser-posted forms

**Safe fixes:**

- tighten policy to actual callers
- apply browser protections intentionally rather than disabling them
