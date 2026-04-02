# Playwright Web-Game Debugging

Use this guide when the packaged browser-automation run is flaky, visually wrong, or hard to explain.

## First checks after every meaningful run

Review:

- latest screenshot(s)
- latest `render_game_to_text` output
- console errors
- page errors

Fix the first new issue before exploring secondary problems.

## Preferred debugging order

1. Reproduce with the smallest action payload that still fails.
2. Confirm the game reached the expected mode before the failing action.
3. Compare screenshot and text-state.
4. Inspect console and page errors.
5. Rerun in headed mode if the issue is visual, timing-sensitive, or difficult to explain.
6. Use trace-style debugging if the surrounding Playwright tooling supports it.

## Common causes

### Actionability failures

Symptoms:

- start button click times out
- element is not visible or stable
- element is detached

Checks:

- prefer semantic controls and stable selectors
- wait for the menu state you expect
- confirm overlays are not covering the target
- use canvas coordinate clicks only when DOM controls are not available

### Visual mismatches

Symptoms:

- text-state says success, screenshot does not
- sprites missing
- black or blank captures

Checks:

- rerun headed
- inspect asset-loading errors
- inspect canvas/WebGL initialization
- confirm render is called after deterministic stepping

### Timing flake

Symptoms:

- same payload behaves differently across runs

Checks:

- strengthen `window.advanceTime(ms)`
- reduce dependence on uncontrolled timers
- keep action bursts short and isolated
- reset between scenarios
