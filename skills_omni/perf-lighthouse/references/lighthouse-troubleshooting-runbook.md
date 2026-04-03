# Lighthouse Troubleshooting Runbook

## 1. Chrome launch failure

**Symptoms**

- Lighthouse cannot find Chrome
- browser launch exits immediately
- Node script fails before report generation

**Likely causes**

- Chrome or Chromium is not installed
- browser path is different in CI
- sandbox or runtime restrictions in the environment

**Verify**

- confirm the browser exists and is executable
- run a minimal Lighthouse command
- check whether `CHROME_PATH` is required

**Corrective actions**

- install or expose Chrome/Chromium correctly
- set `CHROME_PATH` narrowly for the environment
- retry with the smallest possible command first

## 2. High variance between runs

**Symptoms**

- score swings across repeated runs
- one metric shifts significantly while the page is unchanged

**Likely causes**

- unstable server state
- different builds or routes
- inconsistent throttling or form factor
- CI host noise

**Verify**

- compare exact commands and configs
- inspect build identifiers and startup logs
- review multiple JSON reports together

**Corrective actions**

- run at least 3 times
- use median or stable repeated values
- keep environment and config constant

## 3. Timeouts or incomplete navigation

**Symptoms**

- navigation timeout
- audit starts before the app is ready
- report contains partial or unexpected content

**Likely causes**

- server startup race
- slow build or cold start
- route depends on APIs not yet available

**Verify**

- open the page manually before the audit
- check server logs
- verify readiness waits in CI

**Corrective actions**

- add an explicit wait-for-readiness step
- increase wait settings only as needed
- retain server logs and Lighthouse output for failures

## 4. Auth-required route is not audited correctly

**Symptoms**

- audit lands on login page
- route redirects unexpectedly
- protected content does not load

**Likely causes**

- session is missing
- header-based auth is insufficient
- SPA route requires interaction before steady state

**Verify**

- inspect final audited URL
- confirm cookies or login steps are present
- compare a manual browser session to the scripted path

**Corrective actions**

- use a scripted user flow for login and navigation
- reserve `--extra-headers` for simple cases only
- avoid logging secrets

## 5. CI and local disagree

**Symptoms**

- local run passes but CI fails
- metrics differ enough to trip assertions

**Likely causes**

- different environment variables
- preview versus production drift
- missing assets or different startup command
- lower CI stability

**Verify**

- diff the app start commands and config
- confirm the same URLs are being audited
- compare retained JSON artifacts from both environments

**Corrective actions**

- align config and startup process
- keep CI artifacts and logs
- report environment differences explicitly instead of masking them
