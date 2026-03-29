# Token Change Review

Use this worksheet when a token or semantic alias changes.

## Review axes

- semantic intent still matches the name
- fallback behavior is defined
- dark/light or thematic variants remain consistent
- component blast radius is listed
- downstream migration notes are present

## Questions

- Is this token still semantic, or has it become implementation detail?
- Which components consume it directly?
- Which visual regressions are most likely if it changes?
- Can the rollout be additive before it becomes destructive?
