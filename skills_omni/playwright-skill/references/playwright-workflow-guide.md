# Playwright Workflow Guide

Use this guide as the short operational checklist for the skill.

## 1. Preflight

- Resolve `$SKILL_DIR` from the location of `SKILL.md`.
- If needed, run `cd "$SKILL_DIR" && npm run setup`.
- Confirm the target URL or localhost app.
- Confirm whether login, uploads, popups, or destructive actions are in scope.

## 2. Localhost detection

For localhost testing, run:

```bash
cd "$SKILL_DIR" && node -e "require('./lib/helpers').detectDevServers().then(servers => console.log(JSON.stringify(servers)))"
```

Decision rule:
- one server found: use it
- multiple found: ask the user
- none found: ask for URL or help start the app

## 3. Script generation

- Write the script to `/tmp/playwright-test-<task>.js`.
- Put `TARGET_URL` at the top.
- Put credentials in environment variables, not code.
- Prefer a fresh browser context for each task.

## 4. Execution

```bash
cd "$SKILL_DIR" && node run.js /tmp/playwright-test-<task>.js
```

## 5. Evidence

Minimum:
- console summary
- screenshot

For multi-step flows:
- trace on failure
- optional video if the environment supports it and the user needs reviewable motion evidence

## 6. Handoff note

Include:
- exact target tested
- key actions performed
- expected versus actual result
- artifact paths
- any routing recommendation to another skill
