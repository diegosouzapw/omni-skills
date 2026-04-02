# Production Deploy Example

## Goal

Deploy to Vercel production only after explicit user approval.

## Commands

```bash
command -v vercel
vercel deploy --prod -y
```

## Required confirmation

The user must clearly ask for production, for example:

```text
Deploy this to production on Vercel.
```

## Operator response template

```text
Your production deployment is ready at: <deployment-url>
```

## Notes

- Do not substitute production for preview by default.
- Confirm project/team context before running the command.
