# Animation and Gestures Playbook

Use this playbook when interactions feel janky, delayed, or conflict with touch handling.

## First principles

- Prefer `transform` and `opacity` animations when possible.
- Keep worklet-safe logic on the correct side of thread boundaries.
- Treat gesture handling and animation setup as one system when they interact.

## Investigation sequence

1. Confirm whether the problem reproduces in release mode.
2. Check whether Reanimated is already in use.
3. Identify JS-thread work happening during interaction:
   - expensive state updates
   - logging
   - parsing or mapping work
   - network-driven render churn
4. Verify whether Gesture Handler setup matches the interaction model.
5. Prefer focused fixes before redesigning the screen.

## Common anti-patterns

- animating layout-heavy properties first without need
- performing expensive JS work during gestures
- mixing gesture primitives and press interactions without clear intent
- assuming animation smoothness in isolation means the screen is healthy overall

## Good outcomes

- interactions stay responsive during data updates
- animation targets are GPU-friendly where feasible
- gesture ownership is clear
- recommendations note whether release validation is still required
