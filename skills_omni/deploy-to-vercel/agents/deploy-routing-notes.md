# Deploy Routing Notes

Use these notes when the task is adjacent to deployment but should be handed off.

## Route to CI/CD or token automation when

- the user wants repeatable non-interactive deployment
- deployment should run in GitHub Actions or another CI system
- interactive `vercel login` is not appropriate

## Route to domain or alias guidance when

- the user wants a stable custom URL
- the deployment works but the public hostname is wrong
- DNS or domain ownership is the real blocker

## Route to framework-specific debugging when

- the build system is working but the app is failing because of framework behavior
- the main task is SSR, routing, asset loading, or runtime application logic

## Keep this context in handoff

When handing off, preserve:

- whether deployment target was preview or production
- whether the project was linked already
- whether `.vercel/project.json` or `.vercel/repo.json` was present
- whether env mismatch, auth, or monorepo configuration appears to be the main issue
