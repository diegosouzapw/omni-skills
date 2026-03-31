# React Native Performance Triage

Use this reference before recommending performance changes.

## Core rule

Validate performance-sensitive findings in a **release build** whenever possible. Debug mode can significantly distort behavior.

## Triage sequence

1. Confirm whether the issue reproduces in debug, release, or both.
2. Identify the affected surface:
   - scrolling / lists
   - transitions / gestures
   - image-heavy screens
   - initial render or repeated rerendering
3. Check whether the slowdown is likely on the:
   - JS thread
   - UI thread
   - both
4. Prefer the smallest explanation that fits the symptoms.

## Common signals

| Symptom | Likely area |
| --- | --- |
| Scroll hitches during heavy row rendering | list virtualization / JS work |
| Animation stutter during logging or state work | JS-thread contention |
| Blank cells during fast scroll | list windowing / batch tuning |
| Image-heavy feed drops frames | decode / sizing / row cost |
| Slow only in debug | development overhead |

## Safe guidance

- Reduce work in hot render paths.
- Remove excessive logging in performance-sensitive flows.
- Memoize rows and stabilize callbacks when rerenders are driving cost.
- Prefer transform/opacity animations for smoother rendering.
- Treat images as part of performance, not only visual polish.

## Avoid

- declaring a library swap as the first fix
- diagnosing production behavior from debug mode alone
- using generic “clear everything” cleanup advice as a first step
