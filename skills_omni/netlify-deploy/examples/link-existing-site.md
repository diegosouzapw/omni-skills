# Example: Link an Existing Site

Scenario: the local repository should deploy to an existing Netlify site instead of creating a new one.

## Commands

```bash
npx netlify status
npx netlify link
npx netlify deploy
```

## What to verify

- the chosen site is the correct one
- the local directory now shows as linked in `npx netlify status`
- the preview deploy runs against that linked site

## Good operator report

- which site was linked
- whether the deploy was preview or production
- returned deploy URL
