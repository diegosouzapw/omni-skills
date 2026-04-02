# Preview vs Production Deploy

## Safe preview-first flow

```bash
npx netlify status
[ -f netlify.toml ] && cat netlify.toml
npm install
npm run build
npx netlify deploy
```

Use this when you want a validation URL before changing the live site.

Expected result:

- auth confirmed
- build output checked
- preview URL returned

## Explicit production flow

```bash
npx netlify status
npm run build
npx netlify deploy --prod
```

Use this only when the user explicitly wants to update production.

Expected result:

- live site updated
- production URL confirmed

## Decision rule

If intent is ambiguous, prefer preview first.
