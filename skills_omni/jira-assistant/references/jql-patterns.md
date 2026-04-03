# JQL Patterns

Use these examples when precise filtering is needed.

## Guidance

- Include `project = KEY` when the request is project-specific.
- Do not force project scoping for explicitly cross-project searches.
- Quote status names and other values when needed.
- If results are large, summarize the top matches and mention that more may exist.

## Common patterns

### My current work

```jql
project = PAY AND assignee = currentUser() AND status = "In Progress"
```

### Recent issues

```jql
project = PAY AND created >= -7d
```

### High-priority bugs

```jql
project = PAY AND type = Bug AND priority = High
```

### Open epics

```jql
project = PAY AND type = Epic AND status != "Done"
```

### Unassigned tasks

```jql
project = PAY AND assignee is EMPTY AND status = "To Do"
```

### Recently updated work

```jql
project = PAY AND updated >= startOfWeek()
```

### Sprint blockers

```jql
project = PAY AND sprint in openSprints() AND status != "Done" AND priority in (Highest, High)
```

### Cross-project search

```jql
assignee = currentUser() AND statusCategory != Done ORDER BY updated DESC
```

## Recovery tips

If a JQL query fails or returns nothing:

- verify the field names and values
- check whether the request should be cross-project
- confirm status names for the target workflow
- reduce the query to a simpler version, then add filters back one by one
