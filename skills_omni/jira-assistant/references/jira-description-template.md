# Jira Description Template

Use Markdown in Jira descriptions when supported by the integration.

Keep summaries short. Put the operational detail in the description.

## General task template

```markdown
## Context
[Brief explanation of the problem or need]

## Objective
[What should be accomplished]

## Technical Requirements
- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Requirement 3

## Acceptance Criteria
- [ ] Criteria 1
- [ ] Criteria 2
- [ ] Criteria 3

## Technical Notes
[High-level implementation notes, dependencies, links, constraints]

## Estimate
[Optional estimate, points, or timeline]
```

## Bug template

```markdown
## Summary
[What is broken]

## Impact
[Who is affected and how severe it is]

## Steps to Reproduce
1. Step one
2. Step two
3. Step three

## Expected Result
[What should happen]

## Actual Result
[What actually happens]

## Acceptance Criteria
- [ ] Bug no longer reproduces in the defined scenario
- [ ] Regression risk is addressed
```

## Epic template

```markdown
## Goal
[What larger outcome this epic is meant to achieve]

## Scope
- In scope item 1
- In scope item 2

## Out of Scope
- Out of scope item 1

## Success Criteria
- [ ] Measurable outcome 1
- [ ] Measurable outcome 2
```

## Subtask template

```markdown
## Parent Context
[How this subtask supports the parent issue]

## Objective
[What this specific subtask completes]

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
```

## Notes

- Avoid file paths unless the user explicitly wants them.
- Prefer stable concepts over repository-specific implementation details.
- Ask for missing requirements instead of inventing them.
