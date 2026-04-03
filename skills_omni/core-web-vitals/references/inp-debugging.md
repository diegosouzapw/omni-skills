# INP debugging guide

INP measures the full latency from user interaction to the next visual update.

## Break INP into phases

### 1. Input delay

This is time spent waiting for the main thread to become available.

Look for:

- long tasks already running
- third-party scripts
- startup work still blocking the thread

### 2. Processing duration

This is time inside the interaction handler and work it triggers immediately.

Look for:

- large loops
- expensive state updates
- unnecessary synchronous parsing or computation
- repeated DOM reads and writes

### 3. Presentation delay

This is time after the handler until the browser can paint the response.

Look for:

- style recalculation
- layout
- paint and compositing
- framework commit work
- DOM size and complexity problems

## Preferred remediation order

1. make the UI acknowledge the interaction quickly
2. remove unnecessary synchronous work
3. split big tasks into smaller chunks
4. yield between chunks
5. move CPU-heavy work off the main thread when practical
6. defer analytics and background work

## Notes on yielding

Prefer modern yielding when available, such as `scheduler.yield()`. Use safe fallbacks when browser support is incomplete.

Yielding is useful when work is necessary but can be broken into smaller pieces. It is not a replacement for reducing work.

## Common anti-patterns

- doing analytics, logging, and visual updates in the same urgent click handler
- using `requestIdleCallback` as the only responsiveness strategy
- assuming a short handler means good INP
- ignoring render cost after framework state changes

## Useful browser APIs

- Event Timing entries for slow interactions
- Long Tasks API for tasks over 50ms
- Long Animation Frames API for rendering-heavy frames
