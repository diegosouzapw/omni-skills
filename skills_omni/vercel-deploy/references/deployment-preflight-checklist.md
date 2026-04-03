# Deployment Preflight Checklist

Use this checklist before running a Vercel deployment.

## Intent

- [ ] Confirm whether the user wants **preview** or **production**
- [ ] If ambiguous, default to **preview**
- [ ] If production, confirm explicit approval before `--prod`

## Working context

- [ ] Confirm the correct repository and app directory
- [ ] Confirm whether this is a monorepo or single-project repo
- [ ] Confirm whether deployment should run from repo root or a subdirectory

## Auth and target

- [ ] Confirm Vercel CLI is available
- [ ] Confirm CLI auth is valid, or ask to authenticate
- [ ] Confirm the correct Vercel account/team
- [ ] Confirm the intended Vercel project

## Project alignment

- [ ] If local directory is not linked, run `vercel link`
- [ ] If settings may be stale, run `vercel pull --environment=preview` or `vercel pull --environment=production`

## Configuration

- [ ] Check framework detection or framework preset if custom
- [ ] Check build command, install command, and output directory when relevant
- [ ] Confirm Node/runtime expectations if the project depends on them

## Environment variables

- [ ] Confirm required env vars exist for the target environment
- [ ] Do not expose secret values into chat or logs
- [ ] Watch for preview vs production scope differences

## Safety

- [ ] Do not default to production
- [ ] Do not deploy from the wrong directory
- [ ] Do not retry blindly if a prior build already failed
- [ ] If outbound networking is blocked, ask before escalating permissions
