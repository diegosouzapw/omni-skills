# Environment Variables Workflow

Use this flow when deployment depends on configuration or secrets.

## Inspect configured variable names

```bash
npx netlify env:list
```

## Get a specific variable when safe to do so

```bash
npx netlify env:get API_BASE_URL
```

## Set a variable

```bash
npx netlify env:set API_BASE_URL https://example.internal/api
```

## Safety guidance

- Do not commit `.env` files containing secrets.
- Do not include secret values in summaries or logs.
- Confirm whether preview and production require different values before troubleshooting mismatches.
