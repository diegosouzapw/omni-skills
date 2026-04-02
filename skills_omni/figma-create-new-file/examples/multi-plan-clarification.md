# Example: Multi-Plan Clarification

## User Request

```text
Create a new design file called Mobile Checkout Audit.
```

## If `whoami` Returns Multiple Plans

Ask:

```text
I found multiple Figma workspaces for this account. Which workspace should own "Mobile Checkout Audit"?
- Team Alpha
- Product Design Org
- Personal
```

## Correct Behavior

Do not create the file until the user chooses one workspace explicitly.
