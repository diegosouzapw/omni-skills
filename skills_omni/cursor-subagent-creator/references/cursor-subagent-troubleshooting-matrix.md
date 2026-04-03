# Cursor Subagent Troubleshooting Matrix

| Problem | Symptoms | Likely cause | Fix |
| --- | --- | --- | --- |
| No delegation | Main agent keeps handling the task | Description too vague | Add explicit trigger wording and examples |
| Wrong delegation | Subagent is invoked for unrelated work | Scope is too broad | Narrow the description and add exclusions |
| Unexpected edits | Reviewer or auditor changes files | Missing read-only setting | Set `readonly: true` and retest |
| Hard to monitor progress | Operator cannot tell whether work is active | Background mode used unnecessarily | Switch to foreground mode |
| Spec seems ignored | File exists but behavior is odd | Wrong path or malformed frontmatter | Check location, YAML, booleans, and indentation |
| Too much overhead | Simple task becomes slow or costly | Subagent used for one-off work | Use a rule, skill, or command instead |

## Frontmatter pitfalls

Common mistakes:

- invalid indentation
- malformed YAML delimiters
- using non-boolean values for `readonly` or `is_background`
- storing the file outside Cursor agent directories
- mismatching filename and intended identity

## Recovery pattern

1. Confirm path.
2. Confirm valid frontmatter.
3. Simplify the description.
4. Reduce the prompt to one responsibility.
5. Retest explicit invocation.
6. Retest natural-language delegation.
