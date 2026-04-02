---
name: "screenshot"
description: "Screenshot Capture workflow skill. Use this skill when the user explicitly asks for a desktop or system screenshot, or when tool-native capture is unavailable and an OS-level screenshot is required for full-screen, window, app, or pixel-region capture."
version: "0.0.1"
category: "tools"
tags:
  - "screenshot"
  - "desktop"
  - "screen-capture"
  - "macos"
  - "linux"
  - "windows"
  - "window-capture"
  - "region-capture"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
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
upstream_skill: "skills/screenshot"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Screenshot Capture

## Overview

Use this skill for OS-level screenshots when the user explicitly wants a desktop or system capture, or when app-native capture is unavailable.

This skill preserves the original upstream screenshot workflow intent while making execution clearer for agents: route to app-native capture first when possible, apply OS-specific permission and session checks early, save files predictably, and always report the final output path or paths.

Primary capture modes covered here:

- full screen / full desktop
- active window or specific window
- app/window matching on supported platforms
- pixel region capture
- temporary captures for agent inspection

Follow these save-location rules every time:

1. If the user specifies a path, save there.
2. If the user asks for a screenshot without giving a path, save to the OS default screenshot location.
3. If the agent needs a screenshot for its own inspection, save to a temporary directory.

## When to Use This Skill

Use this skill when:

- the user explicitly asks for a desktop or system screenshot
- the request requires a full-screen, app/window, or pixel-region capture from the operating system
- browser, design, or tool-native capture is unavailable or would be less accurate for the requested result
- you need an OS-level screenshot for troubleshooting a desktop app or environment
- you need the packaged workflow, troubleshooting guidance, and support references before handoff or review

Do not use this skill when:

- a browser automation tool can produce a deterministic page or viewport screenshot more directly
- a design tool such as Figma can export the exact frame or asset needed
- the task is really visual comparison, debugging, or design review that belongs in a more specialized skill after capture
- the user asked for a screenshot of content that can be retrieved directly as a file or export instead of photographing the screen

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Need deterministic app/browser output | `references/capture-decision-matrix.md` | Helps decide whether to route away from OS screenshots to a tool-native capture path |
| User gave an exact output path | `examples/os-specific-capture-recipes.md` | Keeps output predictable and avoids saving into the wrong location |
| macOS app or window capture | `references/macos-permissions-guide.md` | Screen Recording permission is a common blocker and should be checked early |
| Linux on Wayland or sandboxed desktop | `references/linux-wayland-x11-notes.md` | Explains portal-mediated capture and why classic tools may fail |
| Windows interactive desktop capture | `references/windows-session-notes.md` | Clarifies session limits and safer PowerShell invocation guidance |
| Capture failed and retry path is unclear | `references/troubleshooting-triage-table.md` | Maps symptoms to likely blockers and first recovery actions |
| Need provenance or support-pack inventory | `scripts/omni_import_print_origin.py` and `scripts/omni_import_list_support_pack.py` | Preserves import lineage and local support visibility |

## Workflow

1. **Confirm the requested artifact.**
   Determine whether the user wants a full desktop, active window, specific app/window, or pixel region screenshot.

2. **Route to the best capture path.**
   Prefer tool-native capture first for browsers, design tools, or apps with built-in export/screenshot support. Use this skill only when OS-level capture is explicitly needed or is the best available fallback.

3. **Choose the output location before capture.**
   Apply the save rules:
   - user path wins
   - otherwise use the OS default screenshot location
   - for agent-only inspection, use temp

4. **Run platform preflight checks.**
   - **macOS:** confirm Screen Recording permission before app/window capture.
   - **Linux:** identify whether the session is Wayland or X11 and whether screenshot tools are installed.
   - **Windows:** confirm the capture is running in an interactive desktop session.

5. **Use the packaged helper when available.**
   Prefer the bundled screenshot helpers over re-deriving ad hoc commands.

6. **Use a direct OS command only as a narrow fallback.**
   Keep commands minimal, target only the requested area/window, and avoid broad system changes.

7. **Verify the result immediately.**
   Confirm that the image is non-empty, corresponds to the requested target, and did not silently capture the wrong monitor, wrong window, or an occluded/blank result.

8. **Report every output path.**
   If multiple displays or windows generate multiple files, report each saved path explicitly.

9. **Record provenance when review or handoff matters.**
   If this is part of a review packet, preserve which helper, command, and support files were used.

## Platform Notes

### Tool priority

- Prefer tool-native capture when it produces a more exact result.
- Use this skill for desktop-level screenshots, explicit OS screenshot requests, or when no better-integrated tool exists.
- Do not assume OS screenshots are better for browser, Figma, or exported-asset workflows.

### Save-path behavior

- **Exact path provided by user:** save there.
- **No path provided by user:** use the OS default screenshot location.
- **Agent-only inspection:** save to temp and report the temp path.
- **Multiple outputs expected:** report all generated files, not just the first one.

### Multi-display behavior

- On macOS, full-screen capture may create one file per display.
- On Linux and Windows, full-screen capture often captures the combined virtual desktop into one image.
- Use region capture when the user actually wants a single display or subsection.

## Examples

### Example 1: Route away from this skill when browser-native capture is better

```text
Before using @screenshot, check whether the page should be captured with browser tooling. If browser-native screenshot is available, use that instead of an OS desktop screenshot.
```

**Expected outcome:** The workflow routes to a more deterministic capture path and avoids unnecessary OS-level screenshots.

### Example 2: macOS app capture to temp for agent inspection

```bash
bash <path-to-skill>/scripts/ensure_macos_permissions.sh && \
python3 <path-to-skill>/scripts/take_screenshot.py --app "Codex" --mode temp
```

**Expected outcome:** A temp-file screenshot is produced after permission preflight. Report every printed path.

### Example 3: Linux full-screen capture with explicit output path

```bash
python3 <path-to-skill>/scripts/take_screenshot.py --path output/screen.png
```

**Expected outcome:** A screenshot is saved to `output/screen.png` if a supported Linux capture backend is available.

### Example 4: Linux fallback verification before retry

```bash
printf 'session=%s\n' "${XDG_SESSION_TYPE:-unknown}" && \
command -v scrot || true && \
command -v gnome-screenshot || true && \
command -v import || true
```

**Expected outcome:** You can quickly see the session type and which capture utilities are available before choosing a retry path.

### Example 5: Windows region capture with a process-scoped execution-policy exception

```powershell
powershell -ExecutionPolicy Bypass -File <path-to-skill>/scripts/take_screenshot.ps1 -Mode temp -Region 100,200,800,600
```

**Expected outcome:** A region screenshot is captured to a temp location for inspection.

**Note:** Use `-ExecutionPolicy Bypass` only as a narrow, per-invocation exception when required by the local environment. Do not treat it as a permanent system setting.

### Example 6: Direct OS fallback commands

Use these only when the bundled helpers are unavailable.

#### macOS

Full screen:

```bash
screencapture -x output/screen.png
```

Pixel region:

```bash
screencapture -x -R100,200,800,600 output/region.png
```

Specific window id:

```bash
screencapture -x -l12345 output/window.png
```

Interactive selection:

```bash
screencapture -x -i output/interactive.png
```

#### Linux

Full screen:

```bash
scrot output/screen.png
```

```bash
gnome-screenshot -f output/screen.png
```

```bash
import -window root output/screen.png
```

Pixel region:

```bash
scrot -a 100,200,800,600 output/region.png
```

```bash
import -window root -crop 800x600+100+200 output/region.png
```

Active window:

```bash
scrot -u output/window.png
```

```bash
gnome-screenshot -w -f output/window.png
```

## Best Practices

### Do

- decide first whether tool-native capture is more appropriate than an OS screenshot
- choose the output path before running capture commands
- run macOS permission preflight before the first app/window capture attempt
- verify Linux session type and installed tools before assuming X11-style commands will work
- keep Windows screenshot runs in an interactive user desktop context
- use bundled helpers when available instead of inventing new platform logic
- report every saved screenshot path in the final response
- preserve provenance when this skill is used in a review, handoff, or imported-workflow context

### Do not

- use OS screenshots when browser, Figma, or app-native capture would be more deterministic
- assume minimized, occluded, background, or off-screen windows will capture reliably on every OS
- normalize permanent execution-policy changes on Windows just to run a screenshot helper
- assume Linux Wayland behaves like X11 for window selection or region capture
- omit output paths from the response
- silently overwrite files when the user asked for a specific destination

## Troubleshooting

### Problem: macOS app or window capture fails, returns blank output, or repeatedly prompts for access

**Symptoms:** Capture fails, creates empty/black output, or keeps prompting for access.

**Solution:** Run `bash <path-to-skill>/scripts/ensure_macos_permissions.sh` before retrying. Confirm Screen Recording permission for the terminal or host app, then retry. If permission was just granted, restart the affected app or terminal session before another capture attempt.

### Problem: macOS app/window matching returns no results

**Symptoms:** `--app` or `--window-name` finds nothing, even though the app appears open.

**Solution:** List windows first, then retry using a specific id:

```bash
python3 <path-to-skill>/scripts/take_screenshot.py --list-windows --app "AppName"
```

Then retry with `--window-id`. Make sure the target window is visible on screen.

### Problem: Linux screenshot command succeeds but the image is black, blank, or unavailable

**Symptoms:** A file is created, but the screenshot is empty, black, or clearly not the requested screen content.

**Solution:** Check whether the session is Wayland or X11. On Wayland or sandboxed desktops, classic tools may be restricted or portal-mediated. Review `references/linux-wayland-x11-notes.md`, then retry with the environment-appropriate tool.

### Problem: Linux region or window capture does not work

**Symptoms:** `scrot`, `gnome-screenshot`, or `import` cannot capture the requested region/window, or options behave differently than expected.

**Solution:** Verify available tools first:

```bash
command -v scrot || true
command -v gnome-screenshot || true
command -v import || true
```

If no supported tool exists, ask the user to install one and retry. On Wayland, region/window behavior may still differ from X11.

### Problem: Windows capture works in a normal desktop session but fails in automation, remote, or headless execution

**Symptoms:** The helper works when launched interactively but fails, produces blank images, or cannot access the target window in a non-interactive context.

**Solution:** Move the capture into an interactive user desktop session. Review `references/windows-session-notes.md` for session assumptions. Do not assume background or headless Windows sessions can capture the visible desktop reliably.

### Problem: The wrong monitor or too many files were captured

**Symptoms:** Multi-display capture produced more files than expected, or a single image contains the full virtual desktop instead of one monitor.

**Solution:** Re-run with an explicit region if the user wants a single display or subsection. Report all generated paths from the first run so nothing is lost or hidden.

### Problem: Default save location fails or is inappropriate for the task

**Symptoms:** Capture succeeds only partially, saving fails, or the OS default location is not suitable for agent inspection.

**Solution:** Use an explicit user path when provided. For agent-only inspection, switch to temp mode. If sandbox restrictions affect the default location, retry with a narrower explicit path that the current process can write.

## Related Skills

- `@browser` or browser-automation skills: use when exact page or viewport capture is needed
- `@figma` or design-tool skills: use when the source artifact should be captured directly from the design system
- `@doc`: use when the screenshot needs to be embedded into documentation or a reviewer packet after capture

## Additional Resources

- [Capture decision matrix](references/capture-decision-matrix.md)
- [macOS permissions guide](references/macos-permissions-guide.md)
- [Linux Wayland/X11 notes](references/linux-wayland-x11-notes.md)
- [Windows session notes](references/windows-session-notes.md)
- [Troubleshooting triage table](references/troubleshooting-triage-table.md)
- [OS-specific capture recipes](examples/os-specific-capture-recipes.md)
- [Imported handoff routing examples](examples/handoff-routing-examples.md)
- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

## Imported Reference Notes

### macOS permission preflight

On macOS, run the preflight helper once before app/window capture. It checks Screen Recording permission, explains why it is needed, and helps reduce repeated prompts.

```bash
bash <path-to-skill>/scripts/ensure_macos_permissions.sh
```

When possible, combine preflight and capture in one invocation flow:

```bash
bash <path-to-skill>/scripts/ensure_macos_permissions.sh && \
python3 <path-to-skill>/scripts/take_screenshot.py --app "Codex"
```

For agent inspection runs, keep output in temp:

```bash
bash <path-to-skill>/scripts/ensure_macos_permissions.sh && \
python3 <path-to-skill>/scripts/take_screenshot.py --app "<App>" --mode temp
```

### macOS and Linux Python helper

Run the helper from the repo root:

```bash
python3 <path-to-skill>/scripts/take_screenshot.py
```

Common patterns:

Default location:

```bash
python3 <path-to-skill>/scripts/take_screenshot.py
```

Temp location:

```bash
python3 <path-to-skill>/scripts/take_screenshot.py --mode temp
```

Explicit location:

```bash
python3 <path-to-skill>/scripts/take_screenshot.py --path output/screen.png
```

App capture by app name on macOS:

```bash
python3 <path-to-skill>/scripts/take_screenshot.py --app "Codex"
```

Specific window title on macOS:

```bash
python3 <path-to-skill>/scripts/take_screenshot.py --app "Codex" --window-name "Settings"
```

List windows first on macOS:

```bash
python3 <path-to-skill>/scripts/take_screenshot.py --list-windows --app "Codex"
```

Pixel region:

```bash
python3 <path-to-skill>/scripts/take_screenshot.py --mode temp --region 100,200,800,600
```

Focused window:

```bash
python3 <path-to-skill>/scripts/take_screenshot.py --mode temp --active-window
```

Specific window id:

```bash
python3 <path-to-skill>/scripts/take_screenshot.py --window-id 12345
```

The script prints one path per capture. If multiple windows or displays match, it prints multiple paths. Review each path and report them all.

### Linux prerequisites and selection logic

The helper selects the first available tool in this order:

1. `scrot`
2. `gnome-screenshot`
3. ImageMagick `import`

If none are available, ask the user to install one and retry.

Coordinate regions require `scrot` or ImageMagick `import`.

`--app`, `--window-name`, and `--list-windows` are macOS-only. On Linux, prefer `--active-window` or `--window-id` where supported.

### Windows PowerShell helper

Run the helper with the least-permissive execution approach that works in the local environment. If a per-run exception is required, keep it scoped to the current invocation.

```powershell
powershell -ExecutionPolicy Bypass -File <path-to-skill>/scripts/take_screenshot.ps1
```

Common patterns:

Default location:

```powershell
powershell -ExecutionPolicy Bypass -File <path-to-skill>/scripts/take_screenshot.ps1
```

Temp location:

```powershell
powershell -ExecutionPolicy Bypass -File <path-to-skill>/scripts/take_screenshot.ps1 -Mode temp
```

Explicit path:

```powershell
powershell -ExecutionPolicy Bypass -File <path-to-skill>/scripts/take_screenshot.ps1 -Path "C:\Temp\screen.png"
```

Pixel region:

```powershell
powershell -ExecutionPolicy Bypass -File <path-to-skill>/scripts/take_screenshot.ps1 -Mode temp -Region 100,200,800,600
```

Active window:

```powershell
powershell -ExecutionPolicy Bypass -File <path-to-skill>/scripts/take_screenshot.ps1 -Mode temp -ActiveWindow
```

Specific window handle:

```powershell
powershell -ExecutionPolicy Bypass -File <path-to-skill>/scripts/take_screenshot.ps1 -WindowHandle 123456
```

### Error handling

- On macOS, run `bash <path-to-skill>/scripts/ensure_macos_permissions.sh` before the first app/window capture retry.
- If you see sandbox or display-image creation errors on macOS, re-check permissions and current execution context.
- If macOS window capture finds no matches, list windows first and retry with a specific window id.
- If Linux region/window capture fails, verify tool availability and session type before retrying.
- If Windows capture fails outside a normal desktop session, retry in an interactive user session.
- Always report the saved file path or paths in the response.
