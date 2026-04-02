# Windows Session Notes

## Why this matters

Windows screenshot helpers typically assume an interactive user desktop session. Results may differ in headless, service, scheduled-task, or remote automation contexts.

## Recommended operating assumptions

- run capture from an interactive desktop session
- ask the user to focus the target window before active-window capture
- prefer a per-invocation execution-policy exception only when needed
- report the final file path after capture

## Execution-policy guidance

If local policy prevents the script from running, a process-scoped invocation such as the following may be appropriate:

```powershell
powershell -ExecutionPolicy Bypass -File <path-to-skill>/scripts/take_screenshot.ps1
```

Use this as a narrow exception for the current run. Do not recommend permanent, broad execution-policy weakening as a default habit.

## Common failure pattern

| Symptom | Likely cause | Next step |
| --- | --- | --- |
| Works in a normal session, fails in automation | Non-interactive desktop context | Re-run in an interactive user session |
| Active window capture gets wrong content | Wrong window focus | Ask user to focus the target window and retry |
| Blank or missing output | Desktop/session limitation | Confirm visible desktop access and retry |

## Boundary

Do not overstate support for minimized, background, or invisible window capture.
