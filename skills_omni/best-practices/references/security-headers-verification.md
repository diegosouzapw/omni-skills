# Security Headers Verification

Use this reference to verify modern web security headers without overclaiming coverage.

## Priority order

1. `Strict-Transport-Security`
2. `Content-Security-Policy`
3. `X-Content-Type-Options`
4. `Referrer-Policy`
5. `Permissions-Policy`
6. `X-Frame-Options` only as legacy back-compat support when relevant

## Verification commands

```bash
curl -I https://example.com
curl -sSI https://example.com | tr -d '\r'
```

Review the response for headers such as:

```text
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; frame-ancestors 'self'; object-src 'none'; base-uri 'self'
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
X-Frame-Options: DENY
```

## Notes

### HSTS

- Recommend only on HTTPS sites.
- Be careful with `includeSubDomains` if subdomains are not consistently HTTPS.
- Do not recommend `preload` casually.

### CSP

- Prefer response headers.
- Nonce- or hash-based patterns are stronger than permissive inline allowlists.
- `Report-Only` is useful during rollout.

### X-Content-Type-Options

- `nosniff` helps enforce MIME expectations for scripts and styles.

### Referrer-Policy

- `strict-origin-when-cross-origin` is a reasonable default in many apps.

### Permissions-Policy

- Deny unused powerful features by default.
- Grant narrowly only when the app requires them.

### X-Frame-Options

- Useful for legacy support, but `frame-ancestors` in CSP is the modern primary control.

### Do not recommend as a modern baseline

```text
X-XSS-Protection: 1; mode=block
```

This header is deprecated and should not be treated as a primary modern mitigation.
