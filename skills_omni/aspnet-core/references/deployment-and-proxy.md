# Deployment and Reverse Proxy Guide

Use this guide when ASP.NET Core behavior depends on hosting topology rather than application code alone.

## Check first

- Where does TLS terminate?
- Is the app behind Nginx, Apache, IIS, YARP, cloud ingress, or another proxy?
- Is the app running as a single instance or multiple instances?
- Are health probes, readiness checks, or startup timing part of the issue?
- Does authentication depend on redirects, callback URLs, or cookies?

## Common production failure patterns

### Wrong scheme or host

Symptoms:
- redirect loops
- generated callback URIs use `http` instead of `https`
- external auth fails only in deployed environments

Checks:
- verify forwarded headers are configured correctly
- confirm the proxy sends the expected headers
- confirm HTTPS redirection is compatible with the deployment topology

### Lost client IP or incorrect remote address

Symptoms:
- rate limiting appears to affect the proxy instead of the client
- logs show proxy IPs only
- security rules behave unexpectedly

Checks:
- review forwarded header processing
- confirm trust boundaries and proxy configuration

### Multi-instance cookie or antiforgery failures

Symptoms:
- users are signed out after hitting another instance
- antiforgery fails intermittently
- auth state resets on deploy

Checks:
- verify Data Protection key persistence and sharing
- confirm deployment model and instance behavior

### Probe or startup issues

Symptoms:
- app restarts during deployment
- orchestrator marks the service unhealthy too early
- traffic reaches the app before dependencies are ready

Checks:
- review health check endpoints and meanings
- distinguish liveness from readiness
- verify startup sequencing assumptions

## Deployment review outputs

Produce a short deployment note that states:
- hosting topology
- TLS termination point
- proxy/load balancer assumptions
- health probe paths
- Data Protection/key persistence assumptions
- whether auth callbacks or absolute URLs require environment-specific configuration

## Authoritative sources

- Hosting and deployment: https://learn.microsoft.com/aspnet/core/host-and-deploy/?view=aspnetcore-9.0
- Proxy/load balancer configuration: https://learn.microsoft.com/aspnet/core/host-and-deploy/proxy-load-balancer?view=aspnetcore-9.0
- Health checks: https://learn.microsoft.com/aspnet/core/host-and-deploy/health-checks?view=aspnetcore-9.0
- Web farm hosting: https://learn.microsoft.com/aspnet/core/host-and-deploy/web-farm?view=aspnetcore-9.0
