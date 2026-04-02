# Production Deploy Safety Notes

Production deployment should be explicit, not assumed.

## Before production deploy

- Confirm the user explicitly wants production
- Confirm the correct project and team
- Confirm the correct app/root directory
- Confirm required production env vars exist
- Mention potential impact to live traffic

## Suggested command

```bash
vercel deploy --prod -y
```

## After production deploy

Return:

- deployment URL
- that the deployment was production
- any caveats about unverified runtime behavior

## If something goes wrong

- ask whether the user wants rollback or recovery help
- use deployment inspection and logs to determine whether the problem is build-time or runtime
- avoid claiming success beyond the actual deployment result
