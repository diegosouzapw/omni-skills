---
name: "playwright"
description: "Playwright CLI workflow skill. Use this skill when a task requires automating a real browser from the terminal with playwright-cli or the bundled wrapper script for navigation, form filling, snapshots, screenshots, PDFs, traces, data extraction, or UI-flow debugging."
version: "0.0.1"
category: "cli-automation"
tags:
  - "playwright"
  - "browser-automation"
  - "cli"
  - "terminal"
  - "screenshots"
  - "traces"
  - "ui-debugging"
  - "web"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/playwright"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Playwright CLI Skill

## Overview

Use this skill to drive a real browser from the terminal with `playwright-cli` or the bundled wrapper script.

It is the right fit when the task depends on rendered page state rather than raw HTTP responses, such as navigating interactive pages, filling forms, clicking through UI flows, inspecting live DOM state via snapshots, capturing screenshots or PDFs, or collecting trace artifacts for debugging and handoff.

Treat this as a CLI-first browser automation workflow. Prefer the bundled wrapper script so the command works even when `playwright-cli` is not globally installed. Do not switch to `@playwright/test` unless the user explicitly asks for test files or test-suite authoring.

This skill also preserves the intent of the upstream curated Playwright workflow while improving operational guidance, troubleshooting depth, and artifact discipline for terminal-based use.

## When to Use This Skill

Use this skill when:

- the user needs a real browser session, not just an HTTP request
- the page requires JavaScript execution before useful content appears
- you need to click, type, press keys, open menus, or move through modal flows
- you need fresh page snapshots before interacting with changing UI
- you need screenshots, PDFs, traces, or similar artifacts for debugging or handoff
- you need to inspect multi-page, popup, or multi-tab behavior from the terminal
- you need to reproduce a UI bug with a predictable command sequence

Do **not** use this skill when:

- a simple `curl`, API call, or static HTML fetch is enough
- the user is asking for Playwright test specs rather than live CLI operation
- the task is primarily scraping static content without browser interaction
- the work is actually CI/container setup, broader debugging, or test architecture and should be routed to a more specific skill

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time setup | `references/setup-and-prereqs.md` | Verifies `node`, `npm`, `npx`, wrapper path, and browser binaries before automation starts |
| Basic interactive run | `references/cli-quick-reference.md` | Gives the shortest safe command loop for open → snapshot → interact → re-snapshot |
| Browser executable missing | `references/troubleshooting.md` | Covers install/repair guidance for Playwright browser binaries and host dependencies |
| Need screenshots, PDFs, traces, or review artifacts | `references/artifacts-and-handoff.md` | Standardizes artifact output and handoff packet contents |
| Multi-tab or popup flow | `examples/popup-and-multitab-flow.md` | Shows how to verify active page context before continuing |
| Need a reproducible review packet | `examples/debug-packet.md` | Shows what to capture for escalation, handoff, or PR review |
| Quick environment check | `scripts/check_playwright_env.sh` | Fast validation of CLI prerequisites and likely failure points |

## Workflow

1. **Confirm the task fits browser automation.**
   If the task can be solved with plain HTTP requests or static scraping, do that instead.
2. **Set or verify the wrapper path.**
   Use the local wrapper when available so you do not depend on a global install.
3. **Validate the environment.**
   Confirm `node`, `npm`, and `npx` exist, then verify the Playwright command path and browser installation status.
4. **Choose headed or headless intentionally.**
   Use headless mode by default for routine work. Use `--headed` only when visual debugging is necessary and the environment supports it.
5. **Open the target page.**
   Start from the specific URL needed for the task.
6. **Snapshot before interaction.**
   Get fresh element references before clicking, filling, or pressing keys.
7. **Interact using the latest snapshot only.**
   Avoid assuming old element references remain valid after page changes.
8. **Re-snapshot after navigation or major DOM changes.**
   If the page navigates, opens a modal, changes tabs, or renders new content, snapshot again.
9. **Capture artifacts when they help.**
   Save screenshots, PDFs, traces, or other outputs into `output/playwright/`.
10. **Summarize state before handoff.**
    Record what URL or page state you reached, what commands were run, what failed, and where artifacts were saved.

### Prerequisite check

Before proposing browser commands, verify the wrapper dependency chain:

```bash
command -v node >/dev/null 2>&1
command -v npm >/dev/null 2>&1
command -v npx >/dev/null 2>&1
```

If `npx` is missing, pause and ask the user to install Node.js/npm first.

### Skill path

Set the wrapper path once per shell session if needed:

```bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export PWCLI="$CODEX_HOME/skills/playwright/scripts/playwright_cli.sh"
```

User-scoped skills install under `$CODEX_HOME/skills` by default.

### Minimal loop

```bash
"$PWCLI" open https://example.com
"$PWCLI" snapshot
"$PWCLI" click e3
"$PWCLI" snapshot
```

## Examples

### Example 1: Quick interactive page inspection

```bash
"$PWCLI" open https://playwright.dev
"$PWCLI" snapshot
```

Expected result: the page opens and returns a fresh snapshot you can use for the next action.

### Example 2: Form fill and submit

```bash
"$PWCLI" open https://example.com/form
"$PWCLI" snapshot
"$PWCLI" fill e1 "user@example.com"
"$PWCLI" fill e2 "not-a-real-secret"
"$PWCLI" click e3
"$PWCLI" snapshot
```

Expected result: the form submits and you capture a new page state after the interaction.

### Example 3: Visual debugging with a screenshot

```bash
mkdir -p output/playwright
"$PWCLI" open https://example.com --headed
"$PWCLI" snapshot
"$PWCLI" screenshot output/playwright/example-home.png
```

Expected result: a headed browser opens for inspection and saves a screenshot artifact.

### Example 4: Trace-oriented debugging flow

```bash
"$PWCLI" open https://example.com --headed
"$PWCLI" tracing-start
"$PWCLI" snapshot
# ...perform the target interaction sequence...
"$PWCLI" tracing-stop
```

Expected result: you capture a trace that can be reviewed later when screenshots alone are not enough.

### Example 5: Multi-tab verification

```bash
"$PWCLI" tab-new https://example.com
"$PWCLI" tab-list
"$PWCLI" tab-select 0
"$PWCLI" snapshot
```

Expected result: you confirm which tab is active before continuing.

## Best Practices

### Do

- snapshot before using element references like `e12`
- re-snapshot after navigation, modal open/close, tab switches, or major DOM changes
- prefer explicit CLI commands over eval-like or arbitrary code execution paths
- use stable, user-visible targets where possible instead of brittle coordinates or timing assumptions
- keep artifacts under `output/playwright/` with predictable names
- choose headed mode only when it improves debugging enough to justify the extra environment requirements
- collect a screenshot and trace before escalation when the failure is hard to explain in text
- verify the active page or tab before interacting in popup or multi-tab flows

### Do not

- keep using stale element references after the page changes
- rely on blind sleeps when the page state can be re-checked with a snapshot
- expose real credentials in shell history, screenshots, traces, or examples
- assume `node` availability means browser binaries are already installed
- switch to Playwright test authoring unless that is explicitly the requested outcome

### Security and safety

- Avoid entering real secrets unless the task requires it and the user has explicitly authorized it.
- Remember that screenshots, traces, and videos may capture credentials, tokens, personal data, or internal content.
- Prefer redacted test data in examples and demonstrations.
- Save artifacts to a predictable location so they can be reviewed or removed before sharing.
- Prefer wrapper commands and documented CLI operations before considering any lower-level escape hatch.

## Troubleshooting

### Problem: `npx` exists but the browser will not launch

**Symptoms:** Commands start but fail with browser executable errors, missing browser messages, or launch failures before page open.

**Solution:** Browser binaries may not be installed even if Node tooling is present. Review `references/setup-and-prereqs.md` and install or repair Playwright browsers before retrying. If the host is Linux or a container, check documented system dependency guidance as well.

### Problem: Headed mode fails on Linux, CI, SSH, or in a container

**Symptoms:** `--headed` fails, the browser cannot connect to a display, or launch works only in headless mode.

**Solution:** Retry in headless mode first. If headed mode is required, use the Playwright browser and Docker guidance linked in `references/setup-and-prereqs.md` and `references/troubleshooting.md`. Do not assume a remote or containerized environment supports a display server.

### Problem: Element references seem stale after navigation or UI change

**Symptoms:** A click targets the wrong thing, a reference no longer exists, or the page changed after a modal, tab switch, or redirect.

**Solution:** Stop reusing old refs. Verify the active page or tab, run a fresh `snapshot`, and continue only with references from the latest page state.

### Problem: The interaction is flaky and only sometimes works

**Symptoms:** Repeated runs behave differently, especially around loading, animations, or late-rendered content.

**Solution:** Do not add arbitrary sleeps first. Re-check page state with a fresh snapshot, confirm you are targeting the intended element, and capture a screenshot or trace to understand what changed between runs.

### Problem: Reviewers cannot reproduce the reported issue

**Symptoms:** The written summary is too vague, the page state is unclear, or there is no evidence of the failure path.

**Solution:** Build a debug packet with the URL, command sequence, expected state, actual state, and artifact paths. Use `examples/debug-packet.md` and `references/artifacts-and-handoff.md` to standardize the packet.

## Related Skills

- `@web-scraping` - Use when the task is primarily extraction and does not require interactive browser control.
- `@debugging` - Use when the task becomes broader application debugging beyond browser driving.
- `@docker` - Use when the main blocker is container setup, Linux dependencies, or runtime isolation.
- `@testing` - Use when the user wants Playwright test files, assertions, or test-suite architecture rather than CLI interaction.
- `@documentation` - Use when the main output is a reproducible report, incident note, or handoff document.

## Additional Resources

- [Setup and prerequisites](references/setup-and-prereqs.md)
- [CLI quick reference](references/cli-quick-reference.md)
- [Artifacts and handoff](references/artifacts-and-handoff.md)
- [Troubleshooting guide](references/troubleshooting.md)
- [Debug packet example](examples/debug-packet.md)
- [Popup and multi-tab flow example](examples/popup-and-multitab-flow.md)
- [Environment check script](scripts/check_playwright_env.sh)

### Upstream-preserved notes

The bundled wrapper script uses `npx --package @playwright/cli playwright-cli` so the CLI can run without a global install:

```bash
"$PWCLI" --help
```

Prefer the wrapper unless the repository already standardizes on a global install.
