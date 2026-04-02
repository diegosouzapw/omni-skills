# Deployment and Reverse Proxy Notes

Use this reference for production deployment reviews and proxy-related failures.

## Common deployment concerns

- Kestrel versus front-end web server or proxy role
- HTTPS termination point
- forwarded headers
- absolute URL generation
- callback URLs for auth providers
- static file publishing behavior
- health probe paths
- environment-variable configuration

## Reverse proxy checks

Verify:

- the app knows the original scheme and host when required
- forwarded headers are enabled only as needed
- trust settings align to known proxies or networks
- redirect loops are not caused by missing forwarding information

## Static assets

When assets fail after publish, check:

- publish output contains the expected files
- web root assumptions are correct
- static file handling is configured for the chosen app model

## Data Protection in deployed environments

For cookie- or antiforgery-dependent apps, verify key persistence across:

- restarts
- redeployments
- multiple instances

## Review rule

If behavior differs only behind the proxy or only after publish, investigate deployment topology before rewriting app logic.
