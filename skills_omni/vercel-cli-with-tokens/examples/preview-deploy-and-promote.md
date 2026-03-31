# Preview Deploy and Promote Example

## Flow

```bash
vercel whoami
vercel deploy -y --no-wait
vercel inspect <deployment-url>
vercel logs <deployment-url>
vercel promote <deployment-url>
```

## Use This When

- the preview deployment has been validated
- the user wants production release without rebuilding
- you want tighter release control than an immediate `--prod` deploy

## Alternative

If the user explicitly wants a fresh production build:

```bash
vercel deploy --prod -y --no-wait
```
