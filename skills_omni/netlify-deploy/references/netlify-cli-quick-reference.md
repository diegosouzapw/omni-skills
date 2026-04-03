# Netlify CLI Quick Reference

Use these commands as the shortest safe starting points for common Netlify deployment tasks.

## Core commands

| Goal | Command | Notes |
| --- | --- | --- |
| Check auth and current site link | `npx netlify status` | Best first command in most cases |
| Log in interactively | `npx netlify login` | Opens browser-based login |
| Link local directory to existing site | `npx netlify link` | Use when the site already exists |
| Create and link a new site | `npx netlify init` | Interactive site creation |
| Preview or draft deploy | `npx netlify deploy` | Safe default for validation |
| Production deploy | `npx netlify deploy --prod` | Use only with explicit intent |
| Open site/dashboard | `npx netlify open` | Useful for verification |
| Manage environment variables | `npx netlify env --help` | Use documented subcommands as needed |

## Safe deploy sequence

```bash
npx netlify status
npx netlify deploy
```

Use this by default when the site is already linked and the user wants a safe validation deploy.

## Production sequence

```bash
npx netlify status
npx netlify deploy --prod
```

Prefer this only after config has been validated and the user clearly wants the live site updated.

## Notes

- Prefer `netlify.toml` over remembered interactive settings.
- In monorepos, verify the correct app root and publish directory before deploying.
- In headless environments, use `NETLIFY_AUTH_TOKEN` from a secret store.
