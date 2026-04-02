# Screen QA and Handoff Checklist

Use this checklist before declaring the screen complete.

## 1. Visual fidelity

- Full-screen screenshot matches the source structure.
- Section screenshots match the expected layout more closely than the full-page thumbnail alone suggests.
- No obvious spacing, alignment, or hierarchy errors remain.

## 2. Design-system linkage

- Standard UI elements are component instances, not detached redraws.
- Correct variants are used.
- Text, effect, and visual styling use shared styles where expected.
- Colors, spacing, and radii use variables where available.

## 3. Content correctness

- Placeholder text has been replaced.
- Labels, headings, and body copy match the intended source.
- Stateful controls reflect the intended state.
- Default props from code were considered when mapping variants.

## 4. Layout behavior

- Auto Layout is applied where the structure calls for it.
- Fill, hug, and fixed sizing choices are intentional.
- No text clipping or overlapping content remains.
- Multi-column sections use grids or stable alignment patterns where appropriate.

## 5. Typography reliability

- Correct fonts are available.
- Correct text styles are applied.
- Text wrapping looks consistent with the source.
- Spacing fixes were not used to hide a font or style mismatch.

## 6. Update-specific checks

If this was an update:

- existing lineage was preserved where practical
- swaps and property edits were preferred over rebuilds
- deprecated nodes were removed intentionally
- changed sections were revalidated individually

## 7. Handoff note

Before handoff, be ready to summarize:

- what was built or updated
- which sections were changed
- whether any fallback values were used
- any known gaps caused by missing assets or unavailable libraries
