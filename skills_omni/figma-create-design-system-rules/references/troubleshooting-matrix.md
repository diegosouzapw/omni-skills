# Troubleshooting Matrix

## 1. MCP tool call fails

**Symptoms**

- `create_design_system_rules` does not return
- `get_design_context` fails
- Figma context is unavailable

**Checks**

- Confirm MCP connection
- Retry with the smallest valid request
- Confirm the target file/node context is correct

**Safe remediation**

- Pause rule generation rather than inventing tool output
- Continue codebase discovery only if useful
- Escalate to MCP debugging if failure persists

---

## 2. Figma variables and repo tokens do not align

**Symptoms**

- Similar names but unclear semantic match
- Dark mode exists in Figma but not in code
- Missing code tokens for new design variables

**Checks**

- Build the mapping table
- Compare semantic purpose, not only labels
- Inspect token source files directly

**Safe remediation**

- Mark unresolved mappings
- Record theme gaps explicitly
- Recommend token review or migration instead of guessing

---

## 3. Saved rules are not applied by the agent

**Symptoms**

- Generated code ignores directories, tokens, or accessibility instructions
- Cursor rule appears present but has no effect

**Checks**

- Verify file path
- Verify frontmatter and schema
- Reload IDE or agent session
- Check for conflicting instructions in other files

**Safe remediation**

- Fix path or formatting
- Reduce ambiguity in rule wording
- Re-run a pilot component to confirm behavior

---

## 4. Rule set is too large or contradictory

**Symptoms**

- Slower responses
- Duplicate or conflicting instructions
- Broad rules affecting unrelated work

**Checks**

- Remove repetition
- Scope to directories or packages
- Separate general repo guidance from Figma-specific guidance

**Safe remediation**

- Keep only rules that materially affect implementation
- Merge duplicates into a single canonical instruction
- Avoid broad always-on application unless clearly necessary

---

## 5. Visual output matches Figma but accessibility is wrong

**Symptoms**

- Keyboard support missing
- Focus styles absent
- Incorrect ARIA/state semantics

**Checks**

- Validate behavior, not only screenshots
- Review the component's expected role semantics
- Confirm accessible name and focus treatment

**Safe remediation**

- Add explicit accessibility rules
- Update pilot validation results
- Hand off to accessibility review when deeper remediation is needed
