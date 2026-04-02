# Troubleshooting Playbook

Use this file as a symptom-to-checks map for common ASP.NET Core failures.

## 1. Routing or middleware-order failure

Symptoms:
- 404, 405, or 401 where the endpoint seems correct
- CORS behavior differs from expectations
- middleware appears not to run

First checks:
- inspect middleware order
- confirm endpoint mapping is present and reachable
- verify auth and CORS are applied in the intended sequence
- confirm environment branches are not skipping needed middleware

## 2. Reverse-proxy or forwarded-header failure

Symptoms:
- broken HTTPS redirects
- wrong callback URL
- wrong remote IP
- local works, deployed fails

First checks:
- identify proxy topology
- confirm forwarded headers are configured and trusted correctly
- verify TLS termination assumptions

## 3. Data Protection key failure

Symptoms:
- cookie invalidation after deploy
- intermittent antiforgery failures
- users signed out during scale-out

First checks:
- locate key persistence strategy
- confirm whether instances share keys
- confirm keys survive restart and redeploy as required

## 4. Outbound HTTP instability

Symptoms:
- intermittent downstream failures
- socket exhaustion patterns
- stale DNS-like behavior

First checks:
- inspect `HttpClient` creation patterns
- check for `IHttpClientFactory` use
- review timeout and resilience behavior

## 5. Background task lifetime failure

Symptoms:
- disposed scoped service usage
- work lost on shutdown
- request-triggered work behaves unreliably

First checks:
- review whether work belongs in `BackgroundService`
- verify scope creation for scoped dependencies
- inspect cancellation and graceful shutdown handling

## 6. Version mismatch or unsupported API use

Symptoms:
- missing APIs
- compile failures after package changes
- conflicting SDK or TFM expectations

First checks:
- inspect `global.json`
- inspect all web project TFMs
- compare actual repo baseline to the migration article for the intended target
