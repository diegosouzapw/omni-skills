# Commands and Evidence Snippets

Use these commands to gather evidence safely before making changes.

## Response headers

```bash
curl -I https://example.com
curl -sSI https://example.com | tr -d '\r'
```

## Dependency audit

```bash
npm audit
npm audit --json > audit.json
npm ls <package-name>
```

## Search for insecure URLs

```bash
grep -R "http://" .
```

## Search for risky patterns

```bash
grep -R "document.write" .
grep -R "innerHTML" .
```

## Review build output for source maps

```bash
find . -name "*.map"
```

## Evidence notes

Record:

- exact command used
- environment or URL checked
- timestamp if relevant
- whether the result came from source, build output, or live deployment
