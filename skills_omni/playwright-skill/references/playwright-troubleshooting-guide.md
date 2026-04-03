# Playwright Troubleshooting Guide

## Browser install or launch problems

Symptoms:
- missing executable
- browser will not launch
- headed mode fails in CI

Next steps:
- run `cd "$SKILL_DIR" && npm run setup`
- retry in headless mode
- confirm the environment supports a display if headed mode is required

## Timeout problems

Symptoms:
- `goto` times out
- page remains on loading spinner

Next steps:
- verify URL and selected server
- use trace on failure
- wait for the right page state instead of sleeping

## Selector problems

Symptoms:
- element not found
- flaky CSS selectors

Next steps:
- switch to locators
- scope the locator to the right container
- check iframe, dialog, or popup boundaries

## Actionability problems

Symptoms:
- click intercepted
- element hidden or disabled

Next steps:
- inspect overlays or banners
- wait for the control to become actionable
- capture screenshot and trace

## Auth problems

Symptoms:
- redirect loops
- stale login state

Next steps:
- use a fresh context
- redo login with env vars
- avoid trusting old storage state blindly
