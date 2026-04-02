# Performance Diagnostics and Responsiveness

Use this guide when a WinUI app feels sluggish, stalls during interaction, or becomes hard to use under load.

## Focus areas

- UI-thread responsiveness
- layout cost
- rendering churn
- collection virtualization
- async boundaries and long-running work

## Practical checks

- Is expensive work happening on the UI thread?
- Are lists/grids using the right controls and patterns for scale?
- Did recent layout changes increase nesting and measure/arrange cost?
- Are repeated visual updates avoidable?
- Is startup doing too much work before the first usable window appears?

## Typical fixes

- move long-running work off the UI thread
- simplify heavy layout trees
- prefer virtualization-friendly controls and patterns
- reduce unnecessary redraw/layout churn
- delay nonessential startup work until after the first usable UI is shown
