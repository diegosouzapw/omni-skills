# Manual vs Automated Coverage Matrix

Use this matrix to prevent false confidence during accessibility audits.

| Audit area | Automation can help detect | Usually requires manual verification |
| :--------- | :------------------------- | :---------------------------------- |
| Missing form labels | Often yes | Whether the label is meaningful in context |
| Color contrast | Often yes | Contrast in dynamic states, overlays, disabled-like states, and brand edge cases |
| Landmark presence | Sometimes | Whether structure is useful and logically organized |
| Heading order | Sometimes | Whether headings communicate the real content hierarchy |
| Keyboard operability | Rarely | Full task completion, focus order, hidden focus, escape paths, focus return |
| Dialog behavior | Partially | Entry focus, trap correctness, background inertness, close behavior |
| Composite widget patterns | Partially | Arrow-key behavior, roving tabindex behavior, active-descendant correctness |
| Accessible names | Sometimes | Whether names are specific, non-duplicative, and understandable |
| Dynamic announcements | Rarely | Timing, duplication, silence, and whether the right thing is announced |
| Error recovery | Rarely | Invalid submit flow, field association, focus movement, recovery usability |
| Reduced motion | No | Whether animations respect user preference and remain understandable |
| Zoom and reflow | No | Task completion at zoom and narrow widths |
| Touch target usability | No | Whether controls are actually easy to hit on touch devices |
| Drag-only interaction | No | Whether a non-drag alternative exists |
| Screen-reader usability | No | Real spoken output, verbosity, confusion, and task success |

## Guidance

- Start with automation when available, but treat it as triage only.
- Confirm each reported issue in the real interaction flow.
- Add manual checks whenever task completion, focus, timing, motion, or dynamic updates matter.
- If the UI is release-critical, include at least a keyboard pass and a scoped assistive-technology smoke test.
