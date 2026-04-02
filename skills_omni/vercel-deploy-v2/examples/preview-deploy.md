# Preview Deploy Example

## Goal

Create a preview deployment and return the shareable URL.

## Commands

```bash
command -v vercel
vercel deploy -y
```

## Operator response template

```text
Your preview deployment is ready at: <deployment-url>
```

## Notes

- Use this when the user did not explicitly request production.
- Do not verify the URL by fetching it unless asked.
