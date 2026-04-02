# Capture Decision Matrix

Use this reference before taking a screenshot.

## 1. Choose the right capture source

| Request type | Preferred path | Use this skill? | Notes |
| --- | --- | --- | --- |
| Browser page or viewport | Browser-native screenshot tooling | Usually no | More deterministic than photographing the desktop |
| Figma frame or design asset | Design-tool export or capture | Usually no | Prefer source-of-truth artifacts |
| Desktop app UI as seen on screen | OS-level screenshot | Yes | Good fit for this skill |
| Entire desktop or monitor | OS-level screenshot | Yes | Good fit for this skill |
| Region of visible screen pixels | OS-level screenshot | Yes | Good fit for this skill |
| File or document that can be exported directly | Native export | Usually no | Prefer original artifact over screenshot |

## 2. Choose the output location

| Situation | Save location |
| --- | --- |
| User provided a path | Save exactly there |
| User asked for a screenshot but gave no path | Use the OS default screenshot location |
| Agent needs a temporary visual inspection | Save to temp |

## 3. Choose capture mode

| Need | Recommended mode |
| --- | --- |
| Entire desktop | Full screen |
| One visible app/window | Active window or app/window capture |
| Exact pixel subsection | Region capture |
| Single monitor from multi-monitor setup | Region capture or platform-specific display selection |

## 4. Report outputs

Always report:

- every file path produced
- whether temp mode was used
- whether multiple windows or displays created multiple files
- any limitations encountered during capture
