# macOS Permissions Guide

## Why this matters

On macOS, Screen Recording permission is one of the most common reasons screenshot automation fails, especially for app, window, or desktop capture initiated by terminal-hosted tools.

## Preflight steps

1. Run the bundled preflight helper before the first app/window capture attempt:

```bash
bash <path-to-skill>/scripts/ensure_macos_permissions.sh
```

2. If permission is requested, approve it.
3. Retry the capture.
4. If permission was just granted, restart the terminal or host application if needed before retrying.

## Typical symptoms

- repeated permission prompts
- blank or black screenshots
- display capture errors
- app/window capture returns no useful content

## Recovery guidance

- Re-run the preflight helper.
- Confirm the terminal or invoking app has Screen Recording permission.
- Ensure the target window is visible and not minimized.
- If matching by app name fails, list windows and retry with a specific window id.
- Keep capture and permission preflight in one flow when possible to reduce repeated prompts.

## Good pattern

```bash
bash <path-to-skill>/scripts/ensure_macos_permissions.sh && \
python3 <path-to-skill>/scripts/take_screenshot.py --app "Codex" --mode temp
```

## Important boundary

Do not promise reliable capture of minimized, hidden, or off-screen windows. Behavior varies by context and permissions.
