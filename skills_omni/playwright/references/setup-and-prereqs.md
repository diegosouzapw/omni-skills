# Setup and prerequisites

Use this checklist before attempting browser automation.

## 1. Verify Node tooling

```bash
node --version
npm --version
npx --version
```

If any of these commands fail, stop and ask the user to install Node.js/npm first.

## 2. Set the wrapper path

```bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export PWCLI="$CODEX_HOME/skills/playwright/scripts/playwright_cli.sh"
```

Optional sanity check:

```bash
test -x "$PWCLI" && "$PWCLI" --help
```

## 3. Understand install expectations

Having `node`, `npm`, or `npx` available does **not** guarantee that Playwright browser binaries are installed.

If browser launch fails, install or repair browsers using the documented Playwright browser installation flow for the local environment.

If the repository standardizes on a global install instead of the wrapper, this is valid:

```bash
npm install -g @playwright/cli@latest
playwright-cli --help
```

## 4. Choose headed vs headless intentionally

- Use headless mode by default for repeatable automation.
- Use `--headed` when a visual check is necessary.
- In CI, remote Linux, SSH-only sessions, or containers, headed mode may fail unless the environment is prepared for it.

## 5. Environment notes

Common launch blockers:

- browser binaries not installed
- Linux system dependencies missing
- container sandbox or display limitations
- trying to use headed mode in a non-graphical environment

## Official references

- Playwright CLI: https://playwright.dev/docs/test-cli
- Playwright browsers: https://playwright.dev/docs/browsers
- Playwright Docker guidance: https://playwright.dev/docs/docker
- Browser launch options: https://playwright.dev/docs/api/class-browsertype
