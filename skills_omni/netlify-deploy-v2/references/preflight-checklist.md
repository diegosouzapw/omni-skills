# Preflight Checklist

Use this before running any deploy command.

## Repository checks

- Confirm you are in the intended project root.
- Check whether `package.json` exists.
- Check whether `netlify.toml` exists.
- Check whether the repo already has a Git remote with `git remote -v`.

## Build checks

- Detect the package manager from lockfiles.
- Identify the expected build command.
- Identify the expected publish directory.
- Run the local build before assuming a Netlify problem.
- Verify that the publish directory actually exists after the build.

## Netlify checks

- Run `npx netlify status`.
- Confirm the authenticated account.
- Confirm whether the repo is already linked to a site.
- If linked, confirm it is the correct site.
- If unlinked, decide whether the correct next step is `netlify link` or `netlify init`.

## Safety checks

- Do not request or paste secrets into chat if a safer channel exists.
- Do not create a new site unless the user intends that outcome.
- Do not deploy to production unless the request is explicit or preview validation is complete.
- Ask before using escalated network access in a restricted sandbox.
