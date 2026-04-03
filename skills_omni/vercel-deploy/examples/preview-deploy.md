# Example: Preview Deploy

## Scenario

The user says: "Deploy my app to Vercel and give me the link."

## Operator flow

1. Confirm that preview deployment is acceptable if the user did not explicitly request production.
2. Move to the correct app directory.
3. If needed, link the project:

```bash
vercel link
```

4. Optionally align preview metadata:

```bash
vercel pull --environment=preview
```

5. Deploy:

```bash
vercel deploy -y
```

## Good final response shape

- State that this was a **preview deployment**
- Return the deployment URL
- Note that deployment success does not guarantee full runtime correctness unless the user asked for testing
