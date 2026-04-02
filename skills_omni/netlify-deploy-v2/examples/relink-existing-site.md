# Relink an Existing Site

Use this flow when the repository is unlinked or linked to the wrong Netlify site.

```bash
npx netlify status
git remote -v
npx netlify link
npx netlify status
```

## What to verify

- the authenticated account is correct
- the chosen site is the intended one
- status output now shows the expected site name and URL

## Important note

Do not deploy until the link state is correct. A production deploy to the wrong linked site is avoidable operator error.
