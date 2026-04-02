---
name: "develop-web-game"
description: "Develop Web Game workflow skill. Use this skill when building or iterating on an HTML/JavaScript web game that needs a reliable implement → Playwright-run → observe → fix loop with deterministic stepping, concise text-state output, screenshot review, and console/page-error checks before handoff or merge."
version: "0.0.1"
category: "testing-security"
tags:
  - "develop-web-game"
  - "web-game"
  - "html"
  - "javascript"
  - "playwright"
  - "canvas"
  - "testing"
  - "debugging"
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
upstream_skill: "skills/develop-web-game"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Develop Web Game

## Overview

Use this skill when you are building or modifying a browser game and need a tight, repeatable development loop:

1. implement a small change
2. drive the game with the packaged Playwright client
3. pause intentionally
4. inspect screenshots, text-state output, and errors
5. fix the first real problem
6. rerun until behavior is correct and stable

This skill preserves the original upstream intent while making the workflow easier to execute and audit. The core reliability requirement is **deterministic testability**:

- expose `window.render_game_to_text` so the automation loop can read the current game state
- expose `window.advanceTime(ms)` or an equivalent thin deterministic stepping hook so tests do not depend only on wall-clock timing
- review **visual artifacts and text-state together** so automation does not falsely pass when rendering is broken

Use the local support pack as part of the workflow, not as optional reading.

## When to Use This Skill

Use this skill when:

- you are implementing or iterating on an HTML/JS browser game with a canvas or DOM-based play surface
- you need a reliable Playwright-driven validation loop after each meaningful change
- the game has controls, menus, overlays, pause screens, fullscreen behavior, or state transitions that must be tested end-to-end
- you need deterministic stepping because `requestAnimationFrame` timing or async behavior makes tests flaky
- you need concise observable state via `render_game_to_text` to support debugging, handoff, or non-visual verification
- you must review screenshots plus console/page errors before considering the change done

Do **not** use this skill as the main workflow when the task is primarily:

- backend game services or matchmaking
- art direction or asset production without executable game changes
- deep accessibility remediation outside the game workflow itself
- performance profiling that needs a dedicated performance skill or toolchain

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First run on a new game | `references/render-game-to-text-contract.md` | Defines the minimum observability contract needed for reliable automation |
| Action payload uncertainty | `references/action-payload-schema.md` | Prevents guessing key names, button names, frame counts, or pointer coordinates |
| Flaky Playwright behavior | `references/playwright-web-game-debugging.md` | Gives the shortest path to screenshots, traces, headed reruns, and actionability checks |
| Fullscreen or resize bugs | `references/fullscreen-canvas-resize-notes.md` | Covers canvas bounds, DPR scaling, resize handling, and coordinate remapping |
| Acceptance review | `references/test-artifact-review-checklist.md` | Ensures screenshots, text-state, and error logs agree before handoff |
| Progress handoff | `examples/progress-template.md` | Standardizes `progress.md` so another agent can continue cleanly |

## Workflow

1. **Pick one goal.**
   Define a single feature, bug fix, or gameplay behavior to change. Keep scope narrow.

2. **Read or initialize `progress.md`.**
   If `progress.md` exists, read it first and preserve the top `Original prompt:` line. Note prior TODOs, open bugs, and previous run artifacts. If it does not exist, create it before making changes.

3. **Confirm the game is testable.**
   Ensure the game exposes:
   - a single primary canvas or a clearly defined active play surface
   - `window.render_game_to_text`
   - `window.advanceTime(ms)` or an equivalent deterministic stepping hook

   If these hooks do not exist, add them first before attempting meaningful automation.

4. **Use a safe local serving setup.**
   Serve the game on loopback when possible, for example `http://127.0.0.1:<port>` or `http://localhost:<port>`. Avoid exposing the dev server more broadly unless remote-device testing is explicitly required.

5. **Confirm tool availability without inventing dependencies.**
   Prefer the project's existing local browser automation dependencies. Use the packaged client if it exists. Do not switch toolchains or add unrelated global packages unless the environment explicitly requires it.

6. **Implement the smallest useful code change.**
   Change one thing at a time. Keep unrelated refactors out of the same iteration.

7. **Prepare or update the action payload.**
   Base actions on the packaged payload reference instead of guessing controls. Make key names, pointer coordinates, frames, and pauses explicit. If menus exist, include the start path into gameplay.

8. **Run the packaged Playwright client after each meaningful change.**
   Use the existing client script rather than inventing a new one unless the task explicitly requires a different harness.

   Example command:

   ```bash
   node "$WEB_GAME_CLIENT" \
     --url http://127.0.0.1:5173 \
     --actions-file "$WEB_GAME_ACTIONS" \
     --click-selector "#start-btn" \
     --iterations 3 \
     --pause-ms 250
   ```

9. **Inspect the latest run artifacts immediately.**
   For each run, review:
   - latest screenshot(s)
   - latest `render_game_to_text` output
   - console errors
   - page errors if available

   Fix the first new meaningful issue before widening scope.

10. **Verify the full interaction chain, not just the first input.**
    For each important action, check cause → intermediate state → outcome. Examples:
    - jump starts, reaches apex, lands, and restores control
    - attack reduces enemy health, removes the enemy at zero, and updates score
    - key pickup updates inventory, unlocks the door, and allows progression
    - pause freezes gameplay state and resume restores it without corrupting timers

11. **Reset between scenarios.**
    Avoid carrying hidden state across unrelated checks. Restart or reload when validating separate features.

12. **Escalate to headed debugging when visuals disagree with text-state.**
    If screenshots are blank, black, stale, or visibly wrong, rerun in headed mode and compare artifacts before assuming the text-state is correct.

13. **Update `progress.md`.**
    After each meaningful chunk of work, record:
    - what changed
    - what was tested
    - latest artifacts reviewed
    - open bugs or suspected causes
    - next recommended step

14. **Do not call the work done until acceptance passes.**
    A change is only done when screenshots, text-state, and error review all agree.

### Acceptance / Done

Treat all of the following as required before handoff or merge:

- the requested feature or fix works in the running game
- `render_game_to_text` reflects the same state shown in screenshots
- important controls and transitions were exercised end-to-end
- no new console or page errors remain unexplained
- the latest artifacts are reviewable and correspond to the current build
- `progress.md` records decisions, open issues, and next steps

## Examples

### Example 1: Minimal deterministic text-state hook

```js
function renderGameToText() {
  return JSON.stringify({
    mode: state.mode,
    player: {
      x: state.player.x,
      y: state.player.y,
      vx: state.player.vx,
      vy: state.player.vy,
      hp: state.player.hp
    },
    entities: state.entities
      .filter((e) => e.visible)
      .map((e) => ({ id: e.id, type: e.type, x: e.x, y: e.y, hp: e.hp ?? null })),
    score: state.score,
    cooldowns: state.cooldowns,
    coordinate_system: {
      origin: "top-left",
      x_increases: "right",
      y_increases: "down"
    }
  });
}

window.render_game_to_text = renderGameToText;
```

**Expected result:** The output is concise, current-state-focused, and sufficient for an agent to reason about gameplay without dumping full history.

### Example 2: Deterministic stepping hook

```js
window.advanceTime = (ms) => {
  const frameMs = 1000 / 60;
  const steps = Math.max(1, Math.round(ms / frameMs));
  for (let i = 0; i < steps; i += 1) {
    update(frameMs / 1000);
  }
  render();
};
```

**Expected result:** Automated runs can advance gameplay in controlled increments instead of relying only on browser scheduling.

### Example 3: Run the packaged client with an explicit action file

```bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export WEB_GAME_CLIENT="$CODEX_HOME/skills/develop-web-game/scripts/web_game_playwright_client.js"
export WEB_GAME_ACTIONS="$CODEX_HOME/skills/develop-web-game/references/action_payloads.json"

node "$WEB_GAME_CLIENT" \
  --url http://127.0.0.1:5173 \
  --actions-file "$WEB_GAME_ACTIONS" \
  --pause-ms 250 \
  --iterations 2
```

**Expected result:** The client drives the game, captures artifacts, and gives you a concrete basis for the next fix.

### Example 4: Menu navigation action payload

See:
- `examples/action-payloads-menu-navigation.json`
- `examples/action-payloads-mixed-input.json`

**Expected result:** Payloads clearly define buttons, frames, pauses, and coordinate assumptions, reducing silent control mismatches.

## Best Practices

### Do

- Prefer a single primary canvas or clearly defined play surface.
- Keep changes small and rerun the automation loop after each meaningful change.
- Make `render_game_to_text` concise, current, and focused on decision-relevant state.
- Include coordinate-system notes in text-state output.
- Expose deterministic stepping with `window.advanceTime(ms)` when possible.
- Review screenshots and text-state together; require them to agree.
- Check console and page errors after each run and fix the first new issue first.
- Use semantic non-canvas controls for Start, Pause, Resume, Restart, and Settings when possible.
- Use stable selectors or accessible names for menu interactions instead of brittle DOM traversal.
- Recalculate canvas bounds and input mapping after fullscreen or resize changes.
- Document controls in browser-standard terms such as `KeyboardEvent.key` values when possible.
- Bind local serving to loopback unless broader exposure is explicitly required.

### Don't

- Do not rely only on wall-clock pauses when deterministic stepping is possible.
- Do not treat text-state as success if screenshots show missing or broken rendering.
- Do not dump full state history into `render_game_to_text`.
- Do not guess action payload key names or pointer coordinate space.
- Do not keep debugging after a new console/page error appears without addressing it.
- Do not assume fullscreen or resize automatically preserves correct click coordinates.
- Do not add unrelated global packages when the packaged workflow already defines the needed client.

### Core implementation notes

#### Canvas and layout

- Prefer a single canvas centered in the window.
- Draw the background on the canvas instead of depending on CSS backgrounds for core visuals.
- Keep key elements visible; avoid scenes so dark that artifact review becomes unreliable.

#### Text-state contract

Your `window.render_game_to_text` function should return a concise JSON string that includes, as relevant:

- current mode or screen
- player position and state
- visible enemies, obstacles, pickups, or interactables
- score, health, resources, timers, cooldowns, inventory, or objective state
- coordinate-system notes
- flags needed to explain current control behavior, such as paused, stunned, dead, or dialog-open

See `references/render-game-to-text-contract.md` and `examples/render-game-to-text-examples.json`.

#### Fullscreen and resize safety

- Use a single key, preferably `f`, to toggle fullscreen when that fits the design.
- Allow `Esc` to exit fullscreen.
- After fullscreen or resize changes, recompute canvas size, DPR scaling, camera transforms, and normalized input coordinates before the next action burst.

See `references/fullscreen-canvas-resize-notes.md`.

## Troubleshooting

### Problem: The Playwright run finishes, but the game state is flaky or inconsistent

**Symptoms:** The same action payload sometimes passes and sometimes fails; movement or collisions differ between runs; timing-sensitive features break under automation.

**Solution:** Add or improve `window.advanceTime(ms)` so the test client can step deterministically. Move state transitions that matter for tests under the deterministic update path. Reduce dependence on uncontrolled timers where practical. Then rerun with the same payload and compare artifacts.

### Problem: `render_game_to_text` says the game is correct, but screenshots are wrong

**Symptoms:** Text-state shows expected positions or entities, but screenshots are blank, black, stale, missing sprites, or visually inconsistent.

**Solution:** Treat the screenshot as authoritative for rendering. Rerun in headed mode, inspect console and page errors, and check for canvas/WebGL initialization issues, hidden overlays, asset-loading failures, or stale render calls. Do not accept the run until visual artifacts and text-state agree.

### Problem: Inputs run, but the game does nothing

**Symptoms:** The action payload executes without obvious errors, but menus do not start, keys do not move the player, or clicks have no effect.

**Solution:** Check focus first. Then verify the payload uses the expected key names and coordinate space. Confirm the game is not paused, stuck on a menu, or waiting for a different interaction mode. For pointer input, confirm coordinates are relative to the active canvas and that resize/fullscreen did not invalidate mapping.

### Problem: Clicks land in the wrong place after fullscreen or resize

**Symptoms:** Buttons or targets were clickable before fullscreen, but pointer interactions drift after resizing, DPR changes, or entering/exiting fullscreen.

**Solution:** Recompute canvas bounding rect, device-pixel-ratio scaling, transform math, and normalized input mapping immediately after the size change. Verify the automation payload and game input layer both use the same coordinate system.

### Problem: Menu or start-button interactions are unreliable under automation

**Symptoms:** Playwright reports actionability issues, detached elements, or inconsistent clicks on start, resume, or restart controls.

**Solution:** Prefer semantic buttons with stable accessible names and user-facing selectors. Wait for the intended menu state before interacting. If the control is genuinely canvas-only, use explicit click coordinates only after confirming the canvas bounds are stable.

### Problem: Headless screenshots are blank, black, or missing visual elements

**Symptoms:** The game appears correct in a headed browser, but headless screenshots miss sprites, backgrounds, or WebGL output.

**Solution:** Compare headed and headless artifacts, inspect console/page errors, and check for WebGL or canvas context issues, visibility assumptions, and asset timing. Use headed reruns as the first debug fallback before changing gameplay logic.

### Problem: The handoff is hard for another agent to continue

**Symptoms:** There is no clear record of what changed, which artifacts were reviewed, or what remains broken.

**Solution:** Update `progress.md` using the local template. Record the original prompt, exact changes, latest reviewed artifacts, open bugs, and next actions.

## Related Skills

- `@frontend-debugging` - Use when the issue becomes a broader browser UI/debugging problem outside the game loop.
- `@accessibility-review` - Use when non-canvas controls or menu semantics need deeper accessibility work.
- `@performance-profiling` - Use when frame-time, memory, or rendering throughput becomes the main problem.
- `@security-review` - Use when the task shifts toward storage, messaging, origin, or deployment security concerns.

## Additional Resources

- [Render-game-to-text contract](references/render-game-to-text-contract.md)
- [Action payload schema](references/action-payload-schema.md)
- [Playwright web-game debugging guide](references/playwright-web-game-debugging.md)
- [Fullscreen and canvas resize notes](references/fullscreen-canvas-resize-notes.md)
- [Test artifact review checklist](references/test-artifact-review-checklist.md)
- [Render-game-to-text examples](examples/render-game-to-text-examples.json)
- [Menu navigation action payload example](examples/action-payloads-menu-navigation.json)
- [Mixed-input action payload example](examples/action-payloads-mixed-input.json)
- [Progress template](examples/progress-template.md)
