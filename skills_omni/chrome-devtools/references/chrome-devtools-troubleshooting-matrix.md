# Chrome DevTools Troubleshooting Matrix

| Problem | Symptoms | Likely causes | Next actions |
| --- | --- | --- | --- |
| Wrong page selected | Output does not match the user's target page | Multiple tabs, popup opened, context switched silently | Run `list_pages`, verify title/URL, then `select_page` explicitly |
| Stale `uid` | Click/fill fails after page changes | Navigation, hydration, rerender, modal open/close, SPA route change | Run `take_snapshot` again and reacquire the target element |
| Generic UI error | UI shows failure without explanation | JS exception, failed API call, blocked request, bad state | Correlate `list_console_messages`, `list_network_requests`, and targeted `evaluate_script` |
| API request blocked | Request fails or is cancelled | CORS, CSP, mixed content, auth/session expiry, ad blockers, third-party restrictions | Inspect request details and console messages together |
| `evaluate_script` inconsistent | Values are missing or unexpected | Wrong page/frame context, state not loaded, race conditions | Confirm page context, wait for the correct state, retry with narrower inspection |
| File upload path fails | Upload does not trigger expected behavior | Wrong input element, hidden input, client-side validation, stale page state | Refresh snapshot, target the correct input, retry after reproducing carefully |
| Dialog blocks workflow | Clicks stop working or page appears stuck | Alert, confirm, or prompt is waiting | Use `handle_dialog` deliberately and only when user-approved |
| Performance trace misses issue | Trace looks fine but user still perceives lag | Wrong trace window, issue is interaction-specific, not load-specific | Re-record around the exact laggy interaction |
| Screenshot not useful | Image does not show the problem | Wrong viewport, wrong page, state not reproduced yet | Reproduce first, set viewport/emulation, then capture again |
| Auth-dependent behavior is missing | Page differs from expected signed-in state | Session expired, wrong environment, blocked cookies, redirect | Confirm session state and environment before deeper debugging |

## Web-platform clues

### CORS indicators

Look for console or request signals involving:

- preflight failures
- missing `Access-Control-Allow-Origin`
- blocked cross-origin requests

Reference: MDN CORS documentation.

### CSP indicators

Look for console messages about blocked:

- inline scripts
- external scripts
- styles
- frames
- connections

Reference: MDN CSP documentation.

### Mixed content indicators

Look for HTTPS pages attempting to load HTTP resources.

Reference: MDN mixed content documentation.
