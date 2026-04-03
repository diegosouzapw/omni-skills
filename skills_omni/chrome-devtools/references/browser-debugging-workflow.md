# Browser Debugging Workflow

Use this playbook for live Chrome DevTools MCP investigations.

## Default triage sequence

1. Confirm the correct browser page with `list_pages` and `select_page`.
2. Reproduce the issue once with the fewest side effects possible.
3. Capture a fresh `take_snapshot` before interaction-heavy work.
4. Inspect console output.
5. Inspect network activity.
6. Use `evaluate_script` only for narrow state checks.
7. Capture a screenshot if visual evidence matters.
8. Run a performance trace if the issue is about speed or responsiveness.
9. Summarize findings with evidence and uncertainty.

## Quick paths by task

### Console-first debugging

Use when the page shows visible breakage, blank sections, script errors, or warnings.

- Check `list_console_messages`.
- Note the message type, affected file, stack, and timing.
- Confirm whether the error aligns with the visible issue.
- If needed, inspect related state with `evaluate_script`.

### Network-first debugging

Use when data fails to load, API calls appear broken, or the UI shows generic backend-like failures.

- Reproduce the action.
- Run `list_network_requests`.
- Inspect failed or suspicious requests with `get_network_request`.
- Capture status, method, endpoint, timing, and blocked indicators.
- Compare against console output.

### Snapshot-first interaction debugging

Use when clicking, filling, hovering, or dialog handling is involved.

- Use `take_snapshot`.
- Find the current `uid` for the target element.
- Perform the interaction.
- Refresh the snapshot after rerenders, navigation, hydration, modal transitions, or route changes.

### Screenshot workflow

Use when the user needs visual proof.

- Reproduce the exact state.
- Set viewport or emulation first if relevant.
- Capture the screenshot.
- Pair it with a brief note: what the user should notice and how it was reproduced.

### Performance workflow

Use when the issue is speed, jank, layout shift, or interaction lag.

- For load issues, trace with reload.
- For interaction issues, trace the exact lagging action.
- Review insights for long tasks, rendering work, layout shifts, heavy JavaScript, and user-facing metrics.
- Report likely bottleneck and likely next fix area.

## Evidence checklist

Collect only what helps the user decide next steps:

- page or route inspected
- exact repro action
- console message or request details
- screenshot if relevant
- trace observation if performance-related
- likely cause and confidence level

## Redaction reminder

Before returning evidence, remove or mask:

- cookies
- bearer tokens
- session identifiers
- personal data
- internal-only URLs or payloads when they are not needed
