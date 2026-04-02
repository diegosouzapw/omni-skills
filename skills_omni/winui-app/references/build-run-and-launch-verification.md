# Build, Run, and Launch Verification

Use this guide when the app builds, but you still need to prove that it actually starts correctly.

## Core rule

A successful build is not enough.
A spawned process is not enough.
A successful launch means there is objective startup evidence.

## Objective startup evidence

Look for one or more of:

- a visible, responsive top-level window
- the expected window title or shell
- expected first-run content or navigation state
- feature-specific behavior relevant to the request

## Verification flow

1. Build the project.
2. Launch it using the path appropriate to its real app model.
3. Confirm there is a visible and responsive window.
4. Interact just enough to confirm startup is genuine.
5. If the task changed app shell, title bar, navigation, or startup page behavior, verify those specifically.

## If startup is ambiguous

Treat the result as a failure or incomplete verification when:

- the process appears but no window becomes usable
- the app exits immediately
- the wrong startup surface appears
- the title bar/window chrome is broken after customization

## Common causes of build-success/run-fail behavior

- missing Windows App Runtime assumptions
- packaged vs unpackaged mismatch
- startup exception before the shell becomes visible
- wrong launch method for the app model
- title bar or windowing customization that destabilizes startup UX
