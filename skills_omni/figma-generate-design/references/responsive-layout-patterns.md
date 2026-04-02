# Responsive Layout Patterns

Use this guide when building sections that should behave predictably under editing or resizing.

## Parent-first rule

Set the layout model on the parent before adding many children.

Decide early:

- Auto Layout direction
- padding
- item spacing
- cross-axis alignment
- fill / hug / fixed behavior
- constraints for special children

## Common patterns

### 1. Full-page wrapper

Use a vertical wrapper when the page stacks sections top to bottom.

Typical setup:

- vertical Auto Layout
- fixed width for the target breakpoint
- hug height
- sections appended as children in source order

### 2. Standard content section

Use a vertical section when content stacks in rows.

Typical setup:

- vertical Auto Layout
- top and bottom padding from spacing tokens
- nested rows for header/body/action groups

### 3. Header or toolbar row

Use a horizontal Auto Layout container when left and right groups need alignment.

Typical setup:

- horizontal Auto Layout
- center alignment on the cross axis
- left group hugs content
- right group hugs or fills depending on source behavior

### 4. Marketing or landing page grid

If the source clearly uses columns, consider a layout grid on the wrapper or section.

Use when:

- hero, features, testimonials, or pricing sections align to columns
- spacing should stay consistent across repeated blocks
- content needs strong alignment rhythm

### 5. Card lists

Use an Auto Layout parent for repeated cards.

Pick:

- horizontal row for desktop card rails
- vertical stack for mobile or narrow layouts
- nested wrappers if the source has grouped card clusters

## Hug / Fill / Fixed guidance

### Use Hug when

- the node should size to its contents
- the content is variable length
- the node is a chip, badge, button label wrapper, or small stack

### Use Fill when

- the node should stretch within an Auto Layout parent
- the node is meant to consume remaining width or height
- sibling layout depends on shared expansion behavior

### Use Fixed when

- the source intentionally uses a stable size
- the viewport or component contract requires a specific width or height

## Common failure modes

### Problem: Children overlap

Usually caused by:

- missing Auto Layout on the parent
- absolute positioning used where flow layout is required
- conflicting fixed sizes in a tight container

### Problem: Text clips or wraps badly

Usually caused by:

- wrong width mode on the text node
- wrong parent fill / hug behavior
- missing font or wrong text style
- frame height fixed when it should hug

### Problem: Section collapses after append

Usually caused by:

- setting fill before the node is inside the correct parent
- parent direction not matching expected child behavior
- child constraints or sizing mode conflicting with the parent layout

## Constraints

Use constraints when a child inside a non-Auto-Layout parent must keep predictable alignment during resize.

Examples:

- pinned corner badge
- floating dismiss button
- illustration anchored within a hero art frame

Do not use constraints as a substitute for a layout model that should be Auto Layout.

## QA checks

Before signoff, resize or inspect enough to confirm:

- no overlap appears
- text remains readable
- fill/hug choices are intentional
- grid alignment remains consistent
- sections maintain expected internal spacing
