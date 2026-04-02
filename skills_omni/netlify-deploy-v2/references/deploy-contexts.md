# Deploy Contexts

Netlify deploy context affects configuration, environment variables, and sometimes build behavior.

## Common contexts

### Preview / draft deploy

Typical command:

```bash
npx netlify deploy
```

Use when you need:

- a QA URL
- stakeholder review
- safe validation before production

### Production deploy

Typical command:

```bash
npx netlify deploy --prod
```

Use when you need:

- the live site updated
- an explicit release to production

## Why contexts matter

`netlify.toml` can define context-specific overrides, for example:

- different build commands
- different environment assumptions
- different behavior for production vs deploy previews

Before troubleshooting a preview/production mismatch, inspect context-specific settings in `netlify.toml`.

## Operator guidance

- Prefer preview deploys first unless the user clearly requests production.
- If preview works and production fails, compare context-specific configuration.
- If production works and preview fails, check preview-specific env vars and redirects.
