# Example: Production Deploy

Scenario: the user explicitly wants the live Netlify site updated.

## Commands

```bash
npx netlify status
npx netlify deploy --prod
```

## Use when

- the directory is already linked to the correct site
- build and publish settings are already verified
- the user clearly requested production deployment

## Good operator report

- production deploy completed
- production URL
- any config assumptions or warnings
