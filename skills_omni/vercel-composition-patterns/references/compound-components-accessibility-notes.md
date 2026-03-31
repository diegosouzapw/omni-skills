# Compound Components Accessibility Notes

Composition refactors often change DOM structure. When structure changes, semantics and keyboard behavior can break even if the UI still looks correct.

## Core rules

1. Prefer native HTML semantics first.
2. Add ARIA only when native elements alone do not express the widget.
3. Do not wrap interactive elements in ways that hide labels or disrupt focus order.
4. Test with keyboard interaction and semantic queries, not snapshots alone.

## Tabs-specific reminders

Use these when building a compound tabs API.

### Required relationships

- The tab container should expose tab-list semantics when using a custom tabs widget.
- Each tab should identify the panel it controls.
- Each panel should be associated with its tab.
- Only the active tab should be selected.

### Keyboard expectations

- Focus should move predictably between tabs.
- Activation behavior should be consistent with the design.
- Hidden panels should not trap focus.

## Common composition failures

### Wrapper breaks button semantics

**Symptom:** A styled wrapper replaces or obscures a button, and keyboard activation or accessible names stop working.

**Fix:** Keep the real interactive element semantic, or ensure the replacement element fully restores required semantics and interaction.

### Labels stop matching controls

**Symptom:** A composed field wrapper changes IDs or DOM order and label associations fail.

**Fix:** Preserve `label`/control relationships and verify with semantic queries.

### Focus order changes after refactor

**Symptom:** Extra wrappers or conditionally rendered elements move focus unexpectedly.

**Fix:** Re-check tab order and avoid unnecessary focusable wrappers.

### Roles added without full behavior

**Symptom:** A widget uses `role="tab"` or `role="tablist"` but does not implement the required keyboard interactions.

**Fix:** Either implement the full behavior or use a simpler native pattern.

## Validation prompts

- Can the widget be used entirely with a keyboard?
- Do role-based queries still find the expected elements?
- Are name, role, and state exposed clearly?
- Did any composition wrapper alter heading, button, input, or list semantics?
- If ARIA was added, was full behavior implemented?
