# Pilot Validation Checklist

Validate the generated rules with one small component before handoff.

## Pick a pilot

Choose one:

- button
- input
- badge
- card
- tabs
- other small UI primitive

Pilot component:

Target Figma node(s):

Target repo path:

## Validation checks

### Rule loading

- [ ] Correct agent file path used
- [ ] File format valid for the target agent
- [ ] No conflicting duplicate instructions remain elsewhere

### Codebase conventions

- [ ] Component created or updated in the expected directory
- [ ] Existing component or primitive was reused when appropriate
- [ ] Naming and export patterns match the repo
- [ ] Imports follow project conventions

### Token usage

- [ ] No hardcoded visual values were introduced where approved tokens exist
- [ ] Semantic tokens were preferred when available
- [ ] Theme or mode assumptions are documented
- [ ] Unresolved token gaps were noted instead of guessed

### Accessibility

- [ ] Component exposes an accessible name when required
- [ ] Keyboard interaction is correct for the component type
- [ ] Focus indication is visible
- [ ] Relevant state semantics are present
- [ ] Color and contrast expectations were considered

### Figma fidelity

- [ ] `get_design_context` was used for the target node
- [ ] `get_screenshot` was used for visual comparison
- [ ] Layout, spacing, and styling match intended design within project conventions
- [ ] Asset handling followed project and Figma MCP rules

### Testing and docs

- [ ] Tests added or updated when required by the repo
- [ ] Story or docs updated when required by the repo

## Outcome

- [ ] Rules validated successfully
- [ ] Rules need revision
- [ ] Handoff required

## Notes

- What failed:
- What rule was updated:
- What remains unresolved:
