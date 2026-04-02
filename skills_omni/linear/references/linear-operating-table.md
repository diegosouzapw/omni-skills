# Linear Operating Table

| Task | Required identifiers | Read first | Suggested write pattern | Notes |
| --- | --- | --- | --- | --- |
| Read issue state | Issue key or ID | Issue, comments, labels, status | None | Default safe starting point |
| Create issue | Team, title, description | Team and possible duplicates | Create single issue | Search first if request is ambiguous |
| Update issue fields | Issue key or ID plus target fields | Current issue state | Update only requested fields | Avoid changing unrelated fields |
| Add comment | Issue/project identifier | Current object and recent comments | Create one concise comment | Best for rationale and status notes |
| Create project | Team/workspace context, project name | Existing projects | Create project | Avoid duplicates |
| Update project | Project ID | Project state | Update bounded fields | Confirm current ownership/state |
| Triage backlog | Team and filters | Issues, statuses, labels, owners | Batch only after plan summary | Explain grouping logic first |
| Plan cycle | Team, candidate issue set | Cycles and candidate issues | Assign/update in bounded set | Confirm target cycle carefully |
| Rebalance load | Team and assignees | Users and assigned active issues | Reassign selected issues | Provide rationale in summary/comment if needed |
| Label cleanup | Team, label scope | Existing labels and issue usage | Reuse taxonomy first | Create labels only when necessary |
