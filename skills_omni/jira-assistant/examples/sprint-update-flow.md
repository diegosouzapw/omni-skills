# Example: Sprint Update Flow

## User request

```text
Update my sprint.
```

## Safe interpretation

The request is ambiguous. Do not mutate anything yet.

## Good clarification

```text
Which Jira project or board should I use? If you know the board, send that too. I can check the active sprint, show the current issues, and then help move or update the right ticket.
```

## If the user replies with board context

Example:

```text
Use the Payments board.
```

Then proceed to:

1. identify the board
2. inspect the active sprint
3. summarize sprint contents
4. ask what specific change is desired if not already clear
5. perform only the requested sprint-safe action

## Example outcome

```text
Active sprint found for Payments board. Top open items: PAY-101, PAY-118, PAY-132. One blocker appears high priority. Tell me which issue you want to move or update.
```
