# Performance Triage Checklist

Use this template before and after changes.

## Scope

- URL or route:
- Environment tested:
- First load or repeat visit:
- Device/network assumptions:

## Symptoms

- What feels slow?
- When did it start?
- Is the issue visual loading, interaction, or both?

## Network evidence

- Largest assets:
- Likely hero/LCP resource:
- Render-blocking CSS or JS:
- Duplicate downloads observed:
- Compression present on text assets:
- Cache headers of HTML:
- Cache headers of static assets:

## Main-thread evidence

- Long tasks observed:
- Heavy script evaluation:
- Layout/style spikes:
- Third-party cost:

## Top suspected causes

1.
2.
3.

## Proposed fixes by priority

1.
2.
3.

## Verification notes

- Before:
- After:
- Regressions checked:
- Follow-ups for other skills:
