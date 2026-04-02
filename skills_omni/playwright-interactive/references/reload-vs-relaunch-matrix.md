# Reload vs Relaunch Matrix

Choose the smallest reset that matches the change you made.

| Change type | Preferred action | Why |
| --- | --- | --- |
| Web renderer-only code or styling | Reload existing page(s) | Fastest loop; preserves session state |
| Web auth, cookies, local storage, or startup assumptions | Recreate browser context | Clears contaminated state without restarting browser |
| Web mode switch: desktop to mobile, explicit viewport to native window | Recreate browser context | Mode assumptions live at context creation time |
| Electron renderer-only change | Reload `appWindow` | Preserves app process while refreshing renderer |
| Electron preload, main-process, or startup change | Full Electron relaunch | Renderer reload is insufficient |
| Unclear process ownership | Prefer relaunch | Safer than guessing |

## Rule of thumb

- Reload when the same process and same mode remain valid.
- Recreate context when state or emulation assumptions changed.
- Relaunch when startup or process ownership changed.
