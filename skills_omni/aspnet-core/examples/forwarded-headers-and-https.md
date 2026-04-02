# Forwarded Headers and HTTPS Example

Use this example when the app works locally but fails behind a reverse proxy.

## Review checklist

- confirm where TLS terminates
- confirm whether the app receives the original scheme and host
- verify redirect and callback URL behavior
- review proxy trust settings carefully

## Example prompt

```text
Use @aspnet-core to review forwarded headers and HTTPS behavior for this app behind a reverse proxy. Identify the smallest safe change needed to fix redirect loops or wrong callback URLs without broadening proxy trust unnecessarily.
```

## Expected result

- a deployment-aware diagnosis
- the minimum safe app and proxy changes
- validation steps for login, redirects, and generated URLs
