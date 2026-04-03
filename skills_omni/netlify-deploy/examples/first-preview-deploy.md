# Example: First Preview Deploy

Scenario: a local project is ready for its first Netlify deployment, and the user wants a safe validation step before production.

## Commands

```bash
npx netlify status
npx netlify init
npx netlify deploy
```

## What to verify

- authentication succeeds
- the intended site is created and linked
- build settings match the project
- a preview deploy URL is returned

## Good operator report

- site was newly created or linked
- deploy type was preview
- preview URL
- any assumptions about build command or publish directory
