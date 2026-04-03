# INP playbook

## Good threshold

- Good: **200ms or less**
- Needs improvement: **over 200ms up to 500ms**
- Poor: **over 500ms**

## Diagnose by phase

### 1. Input delay

Meaning:

The browser cannot start handling the interaction promptly because the main thread is busy.

Look for:

- long tasks already running
- third-party scripts occupying the main thread
- expensive startup work that overlaps with user interactions

Typical fixes:

- reduce startup JS
- defer non-critical work
- break up long tasks
- lazy-load heavy third-party code

### 2. Processing duration

Meaning:

The event handler and related JS take too long.

Look for:

- expensive synchronous logic
- large loops or parsing work
- framework rerender cascades triggered by one action

Typical fixes:

- simplify handler work
- move CPU-heavy tasks off the main thread when possible
- memoize or isolate expensive rerenders
- process data in smaller chunks

### 3. Presentation delay

Meaning:

The app finishes JS but still takes too long to present the next frame.

Look for:

- large style recalculation or layout cost
- DOM churn after state updates
- paint-heavy visual changes

Typical fixes:

- reduce DOM work after interactions
- batch reads and writes carefully
- avoid layout thrash
- prefer smaller, more local visual updates

## Safe improvement rules

- prioritize immediate visual feedback first
- defer analytics and background work
- yield during non-urgent processing
- measure the slowest interactions in production when local reproduction is weak

## Common anti-patterns

- assuming debounce alone solves INP
- treating handler runtime as the whole metric
- using `requestIdleCallback` for work that still blocks visible response
- ignoring low-end mobile devices and third-party script cost
