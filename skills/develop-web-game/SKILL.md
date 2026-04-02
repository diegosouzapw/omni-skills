---
name: develop-web-game
description: "Develop Web Game workflow skill. Use this skill when the user needs Codex is building or iterating on a web game (HTML/JS) and needs a reliable development + testing loop: implement small changes, run a Playwright-based test script with short input bursts and intentional pauses, inspect screenshots/text, and review console errors with rendergameto_text and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["develop-web-game", "codex", "building", "iterating", "web", "game", "html", "and"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "openai"
date_added: "2026-04-02"
date_updated: "2026-04-02"
---

# Develop Web Game

## Overview

This public intake copy packages `skills/.curated/develop-web-game` from `https://github.com/openai/skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Develop Web Game Build games in small steps and validate every change. Treat each iteration as: implement → act → pause → observe → adjust.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Skill paths (set once), Test Checklist, Test Artifacts to Review, Progress Tracking, Playwright Prerequisites, Scripts.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Codex is building or iterating on a web game (HTML/JS) and needs a reliable development + testing loop: implement small changes, run a Playwright-based test script with short input bursts and intentional pauses,....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Pick a goal. Define a single feature or behavior to implement.
2. Implement small. Make the smallest change that moves the game forward.
3. Ensure integration points. Provide a single canvas and window.rendergameto_text so the test loop can read state.
4. Add window.advanceTime(ms). Strongly prefer a deterministic step hook so the Playwright script can advance frames reliably; without it, automated tests can be flaky.
5. Initialize progress.md. If progress.md exists, read it first and confirm the original user prompt is recorded at the top (prefix with Original prompt:). Also note any TODOs and suggestions left by the previous agent. If missing, create it and write Original prompt: <prompt> at the top before appending updates.
6. Verify Playwright availability. Ensure playwright is available (local dependency or global install). If unsure, check npx first.
7. Run the Playwright test script. You must run $WEBGAMECLIENT after each meaningful change; do not invent a new client unless required.

### Imported Workflow Notes

#### Imported: Workflow

1. **Pick a goal.** Define a single feature or behavior to implement.
2. **Implement small.** Make the smallest change that moves the game forward.
3. **Ensure integration points.** Provide a single canvas and `window.render_game_to_text` so the test loop can read state.
4. **Add `window.advanceTime(ms)`.** Strongly prefer a deterministic step hook so the Playwright script can advance frames reliably; without it, automated tests can be flaky.
5. **Initialize progress.md.** If `progress.md` exists, read it first and confirm the original user prompt is recorded at the top (prefix with `Original prompt:`). Also note any TODOs and suggestions left by the previous agent. If missing, create it and write `Original prompt: <prompt>` at the top before appending updates.
6. **Verify Playwright availability.** Ensure `playwright` is available (local dependency or global install). If unsure, check `npx` first.
7. **Run the Playwright test script.** You must run `$WEB_GAME_CLIENT` after each meaningful change; do not invent a new client unless required.
8. **Use the payload reference.** Base actions on `$WEB_GAME_ACTIONS` to avoid guessing keys.
9. **Inspect state.** Capture screenshots and text state after each burst.
10. **Inspect screenshots.** Open the latest screenshot, verify expected visuals, fix any issues, and rerun the script. Repeat until correct.
11. **Verify controls and state (multi-step focus).** Exhaustively exercise all important interactions. For each, think through the full multi-step sequence it implies (cause → intermediate states → outcome) and verify the entire chain works end-to-end. Confirm `render_game_to_text` reflects the same state shown on screen. If anything is off, fix and rerun.
    Examples of important interactions: move, jump, shoot/attack, interact/use, select/confirm/cancel in menus, pause/resume, restart, and any special abilities or puzzle actions defined by the request. Multi-step examples: shooting an enemy should reduce its health; when health reaches 0 it should disappear and update the score; collecting a key should unlock a door and allow level progression.
12. **Check errors.** Review console errors and fix the first new issue before continuing.
13. **Reset between scenarios.** Avoid cross-test state when validating distinct features.
14. **Iterate with small deltas.** Change one variable at a time (frames, inputs, timing, positions), then repeat steps 7–13 until stable.

Example command (actions required):
```
node "$WEB_GAME_CLIENT" --url http://localhost:5173 --actions-file "$WEB_GAME_ACTIONS" --click-selector "#start-btn" --iterations 3 --pause-ms 250
```

Example actions (inline JSON):
```json
{
  "steps": [
    { "buttons": ["left_mouse_button"], "frames": 2, "mouse_x": 120, "mouse_y": 80 },
    { "buttons": [], "frames": 6 },
    { "buttons": ["right"], "frames": 8 },
    { "buttons": ["space"], "frames": 4 }
  ]
}
```

#### Imported: Skill paths (set once)

```bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export WEB_GAME_CLIENT="$CODEX_HOME/skills/develop-web-game/scripts/web_game_playwright_client.js"
export WEB_GAME_ACTIONS="$CODEX_HOME/skills/develop-web-game/references/action_payloads.json"
```

User-scoped skills install under `$CODEX_HOME/skills` (default: `~/.codex/skills`).

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @develop-web-game to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/develop-web-game/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/develop-web-game/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @develop-web-game using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Prefer a single canvas centered in the window.
- Keep on-screen text minimal; show controls on a start/menu screen rather than overlaying them during play.
- Avoid overly dark scenes unless the design calls for it. Make key elements easy to see.
- Draw the background on the canvas itself instead of relying on CSS backgrounds.
- Use a single key (prefer f) to toggle fullscreen on/off.
- Allow Esc to exit fullscreen.
- When fullscreen toggles, resize the canvas/rendering so visuals and input mapping stay correct.

### Imported Operating Notes

#### Imported: Core Game Guidelines

### Canvas + Layout
- Prefer a single canvas centered in the window.

### Visuals
- Keep on-screen text minimal; show controls on a start/menu screen rather than overlaying them during play.
- Avoid overly dark scenes unless the design calls for it. Make key elements easy to see.
- Draw the background on the canvas itself instead of relying on CSS backgrounds.

### Text State Output (render_game_to_text)
Expose a `window.render_game_to_text` function that returns a concise JSON string representing the current game state. The text should include enough information to play the game without visuals.

Minimal pattern:
```js
function renderGameToText() {
  const payload = {
    mode: state.mode,
    player: { x: state.player.x, y: state.player.y, r: state.player.r },
    entities: state.entities.map((e) => ({ x: e.x, y: e.y, r: e.r })),
    score: state.score,
  };
  return JSON.stringify(payload);
}
window.render_game_to_text = renderGameToText;
```

Keep the payload succinct and biased toward on-screen/interactive elements. Prefer current, visible entities over full history.
Include a clear coordinate system note (origin and axis directions), and encode all player-relevant state: player position/velocity, active obstacles/enemies, collectibles, timers/cooldowns, score, and any mode/state flags needed to make correct decisions. Avoid large histories; only include what's currently relevant and visible.

### Time Stepping Hook
Provide a deterministic time-stepping hook so the Playwright client can advance the game in controlled increments. Expose `window.advanceTime(ms)` (or a thin wrapper that forwards to your game update loop) and have the game loop use it when present.
The Playwright test script uses this hook to step frames deterministically during automated testing.

Minimal pattern:
```js
window.advanceTime = (ms) => {
  const steps = Math.max(1, Math.round(ms / (1000 / 60)));
  for (let i = 0; i < steps; i++) update(1 / 60);
  render();
};
```

### Fullscreen Toggle
- Use a single key (prefer `f`) to toggle fullscreen on/off.
- Allow `Esc` to exit fullscreen.
- When fullscreen toggles, resize the canvas/rendering so visuals and input mapping stay correct.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `skills/.curated/develop-web-game`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@aspnet-core` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@chatgpt-apps` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@doc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@figma-code-connect-components` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/action_payloads.json` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/game-small.svg` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: References

- `$WEB_GAME_ACTIONS` (installed default: `$CODEX_HOME/skills/develop-web-game/references/action_payloads.json`) — example action payloads (keyboard + mouse, per-frame capture). Use these to build your burst.

#### Imported: Test Checklist

Test any new features added for the request and any areas your logic changes could affect. Identify issues, fix them, and re-run the tests to confirm they’re resolved.

Examples of things to test:
- Primary movement/interaction inputs (e.g., move, jump, shoot, confirm/select).
- Win/lose or success/fail transitions.
- Score/health/resource changes.
- Boundary conditions (collisions, walls, screen edges).
- Menu/pause/start flow if present.
- Any special actions tied to the request (powerups, combos, abilities, puzzles, timers).

#### Imported: Test Artifacts to Review

- Latest screenshots from the Playwright run.
- Latest `render_game_to_text` JSON output.
- Console error logs (fix the first new error before continuing).
You must actually open and visually inspect the latest screenshots after running the Playwright script, not just generate them. Ensure everything that should be visible on screen is actually visible. Go beyond the start screen and capture gameplay screenshots that cover all newly added features. Treat the screenshots as the source of truth; if something is missing, it is missing in the build. If you suspect a headless/WebGL capture issue, rerun the Playwright script in headed mode and re-check. Fix and rerun in a tight loop until the screenshots and text state look correct. Once fixes are verified, re-test all important interactions and controls, confirm they work, and ensure your changes did not introduce regressions. If they did, fix them and rerun everything in a loop until interactions, text state, and controls all work as expected. Be exhaustive in testing controls; broken games are not acceptable.

#### Imported: Progress Tracking

Create a `progress.md` file if it doesn't exist, and append TODOs, notes, gotchas, and loose ends as you go so another agent can pick up seamlessly.
If a `progress.md` file already exists, read it first, including the original user prompt at the top (you may be continuing another agent's work). Do not overwrite the original prompt; preserve it.
Update `progress.md` after each meaningful chunk of work (feature added, bug found, test run, or decision made).
At the end of your work, leave TODOs and suggestions for the next agent in `progress.md`.

#### Imported: Playwright Prerequisites

- Prefer a local `playwright` dependency if the project already has it.
- If unsure whether Playwright is available, check for `npx`:
  ```
  command -v npx >/dev/null 2>&1
  ```
- If `npx` is missing, install Node/npm and then install Playwright globally:
  ```
  npm install -g @playwright/mcp@latest
  ```
- Do not switch to `@playwright/test` unless explicitly asked; stick to the client script.

#### Imported: Scripts

- `$WEB_GAME_CLIENT` (installed default: `$CODEX_HOME/skills/develop-web-game/scripts/web_game_playwright_client.js`) — Playwright-based action loop with virtual-time stepping, screenshot capture, and console error buffering. You must pass an action burst via `--actions-file`, `--actions-json`, or `--click`.
