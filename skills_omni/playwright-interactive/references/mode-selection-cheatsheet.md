# Mode Selection Cheatsheet

## Choose desktop web with explicit viewport when

- You want reproducible screenshots.
- You are iterating quickly on layout or interaction.
- You need deterministic breakpoint checks.

## Choose mobile emulation when

- The issue is touch-related.
- The layout changes significantly on narrow screens.
- You need mobile viewport evidence.

## Choose native-window web when

- The launched window size matters.
- The bug may depend on host DPI or browser chrome.
- You are validating a final desktop-style experience after deterministic checks.

## Choose Electron when

- The app is a desktop runtime, not just a website.
- You need first window access, startup validation, or renderer-vs-main-process decisions.

## If unsure

Start with explicit viewport web or the normal Electron launch path, then escalate to a stronger mode only when the bug requires it.
