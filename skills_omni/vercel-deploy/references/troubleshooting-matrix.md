# Troubleshooting Matrix

## 1. Authentication failure

**Symptoms**
- `No existing credentials found`
- login/token errors
- wrong team/project access

**Likely causes**
- CLI is not authenticated
- token is missing or invalid
- wrong account/team context

**Actions**
- use `vercel login` for interactive work
- confirm valid token availability for non-interactive work
- confirm correct team/project target
- avoid expose tokens or secret values

## 2. Wrong project or team deployed

**Symptoms**
- deployment URL belongs to the wrong project
- framework or settings do not match the intended app

**Likely causes**
- wrong working directory
- local folder linked to the wrong Vercel project

**Actions**
- verify current directory
- run `vercel link`
- confirm project/team before redeploying

## 3. Build failure during deploy

**Symptoms**
- install/build command failure
- framework detection issues
- output directory missing

**Likely causes**
- bad project configuration
- wrong root directory
- missing dependencies or env vars

**Actions**
- run `vercel build`
- review build/output/framework settings
- confirm correct app directory in monorepos

## 4. Preview works, production fails

**Symptoms**
- preview deploy succeeds but production breaks
- environment-specific behavior differs

**Likely causes**
- missing production env vars
- production-only configuration mismatch

**Actions**
- verify env var presence and scope
- use `vercel pull --environment=production`
- re-check build/runtime assumptions for production

## 5. Deployment succeeds, runtime fails

**Symptoms**
- deployment URL exists, but requests fail
- serverless/runtime errors

**Likely causes**
- application runtime bug
- missing runtime env vars
- framework or server code issue

**Actions**
- run `vercel inspect <deployment-url-or-id>`
- run `vercel logs <deployment-url-or-id>`
- separate deployment success from app health

## 6. Monorepo root mismatch

**Symptoms**
- wrong package deployed
- wrong framework auto-detected
- missing output or unexpected files

**Likely causes**
- deploy command run at repo root instead of app directory
- Vercel root/build settings misaligned

**Actions**
- move to the correct app directory
- verify root/build/output settings
- re-link if needed

## 7. Network or sandbox restriction

**Symptoms**
- timeout
- DNS failure
- outbound connection failure

**Likely causes**
- sandbox blocks outbound network traffic
- connectivity issue in the execution environment

**Actions**
- check auth/build/linking first
- then ask before rerunning with escalated network permissions
- use a longer timeout for deploy/build commands
