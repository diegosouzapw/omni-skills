# Trace Debugging Playbook

Use tracing selectively when a screenshot or console log is not enough to explain what happened.

## When to capture a trace

- Interactions succeed or fail intermittently.
- Navigation appears to finish, but the UI is not ready.
- A control becomes hidden, detached, or covered during action.
- You need a reviewable artifact for handoff.

## Minimal trace flow

```javascript
await context.tracing.start({ screenshots: true, snapshots: true });
// reproduce the issue here
await context.tracing.stop({ path: 'artifacts/trace.zip' });
```

## Good practice

- Start tracing immediately before the unclear flow.
- Stop tracing immediately after reproduction.
- Name the artifact consistently and mention it in the handoff note.
- Prefer one trace per issue over one giant session trace.

## Review checklist

- What exact step begins the failure?
- Did navigation finish before the failing action?
- Was the target visible, enabled, and stable?
- Did the UI move into a different page or popup?
- Was the request layer already failing before the visible symptom?

## Privacy

Traces can include UI state and network context. Avoid sharing traces that expose secrets or sensitive user data unless necessary and approved.
