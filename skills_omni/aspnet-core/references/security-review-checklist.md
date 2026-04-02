# Security Review Checklist

Run this checklist for endpoint, browser, auth, or proxy-sensitive work.

## 1. Secrets and configuration

- No real secrets in source control
- Development secrets use Secret Manager or equivalent local-only storage
- Production secrets come from environment- or platform-managed stores

## 2. HTTPS and reverse proxy behavior

- HTTPS assumptions match deployment topology
- Forwarded headers are configured only as required
- Proxy trust settings are not broader than necessary
- Redirects and callback URLs use the correct external scheme and host

## 3. Authentication and authorization

- Auth scheme choice matches the application
- Authorization policies are explicit where needed
- Anonymous access is intentional, not accidental
- Cookie settings are appropriate for security and deployment needs

## 4. Browser protections

- Antiforgery is evaluated for browser-posted form flows
- CORS is limited to explicit origins where possible
- Credentialed cross-origin requests are reviewed carefully

## 5. Error handling and information disclosure

- Production errors do not leak stack traces or sensitive details
- Problem Details or other API errors are safe and consistent
- Logs do not expose secrets or protected tokens unnecessarily

## 6. Data Protection and scale-out

- Data Protection keys persist appropriately for cookies or antiforgery
- Multi-instance deployments share keys when required

## Security stop conditions

Pause and escalate review if you find:

- committed secrets
- broad trust of unknown proxies
- wildcard CORS combined with credentials
- disabled auth or antiforgery as a quick fix
- production exception pages or stack traces exposed publicly
