# Security Hardening

Use this guide when the task involves authentication, authorization, configuration, secrets, cookies, antiforgery, CORS, HTTPS, or multi-instance production behavior.

## Checklist

### Configuration and secrets

- Use the built-in configuration system.
- Keep secrets out of source control.
- Distinguish clearly between development secret sources and production secret sources.
- Verify which configuration providers are expected in each environment before assuming a missing value is a code bug.

### Authentication and authorization

- Identify the real auth model in use: cookies, bearer tokens, external identity provider, ASP.NET Core Identity, or mixed schemes.
- Check whether authorization is policy-based, role-based, or attribute-based.
- Confirm default schemes and challenge behavior before changing `[Authorize]` usage.
- Keep anonymous exceptions explicit and narrow.

### Cookies, antiforgery, and Data Protection

- If the app uses auth cookies or antiforgery tokens, verify Data Protection key persistence in production.
- In scale-out or redeploy-heavy environments, ensure keys are not ephemeral.
- Investigate key storage assumptions before changing cookie settings.

### CORS and browser security

- Apply CORS only where needed.
- Do not use overly broad allow-all settings as a default fix.
- Verify origin, method, header, and credential requirements against the actual client behavior.
- For browser-based authenticated flows, consider CORS, cookies, SameSite behavior, and HTTPS together.

### HTTPS and reverse proxies

- Verify whether HTTPS termination happens in-app or upstream.
- Confirm forwarded headers are handled correctly when the app sits behind a reverse proxy or load balancer.
- Review redirect behavior and absolute URL generation when callback URIs matter.

## Common review findings

- Secrets committed to config files or sample settings.
- Missing or unclear Data Protection key persistence.
- Incorrect assumptions about forwarded headers or proxy trust.
- Overly broad CORS configuration.
- Authentication scheme confusion after adding a second auth mechanism.
- Security middleware disabled temporarily and never restored.

## Authoritative sources

- ASP.NET Core security overview: https://learn.microsoft.com/aspnet/core/security/?view=aspnetcore-9.0
- App secrets: https://learn.microsoft.com/aspnet/core/security/app-secrets?view=aspnetcore-9.0
- Data Protection: https://learn.microsoft.com/aspnet/core/security/data-protection/introduction?view=aspnetcore-9.0
- Proxy and load balancer guidance: https://learn.microsoft.com/aspnet/core/host-and-deploy/proxy-load-balancer?view=aspnetcore-9.0
- Web farm hosting: https://learn.microsoft.com/aspnet/core/host-and-deploy/web-farm?view=aspnetcore-9.0
