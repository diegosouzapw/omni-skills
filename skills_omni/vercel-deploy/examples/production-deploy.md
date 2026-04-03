# Example: Production Deploy

## Scenario

The user says: "Push this live on Vercel."

## Operator flow

1. Confirm that the user wants a **production** deployment.
2. Confirm correct project/team and app directory.
3. Confirm required production env vars exist.
4. Optionally align local production metadata:

```bash
vercel pull --environment=production
```

5. Deploy to production:

```bash
vercel deploy --prod -y
```

## Good final response shape

- State that this was a **production deployment**
- Return the deployment URL
- Mention any caveat such as runtime not yet verified or domain propagation still pending
