# Playwright Artifact and Evidence Guide

## Minimum evidence for simple runs

- console summary of steps and result
- one screenshot with a descriptive name

## Recommended evidence for multi-step runs

- trace zip on failure
- final screenshot
- optional video when motion or timing matters
- a short outcome note

## Suggested temporary paths

- `/tmp/playwright-artifacts/<task>-final.png`
- `/tmp/playwright-artifacts/<task>-failure.png`
- `/tmp/playwright-artifacts/<task>-trace.zip`

## Reviewer summary template

- Target: `<url or route>`
- Flow: `<login / form / responsive / links>`
- Result: `<pass / fail / partial>`
- Evidence: `<artifact paths>`
- Notes: `<important observations, redactions, or limits>`
