# Auth and API Troubleshooting

## Auth preflight checks

Run:

```bash
gh auth status
```

Confirm:

- the expected host is listed
- the expected account is active
- the session is valid

For GitHub Enterprise, the correct hostname matters during both login and later API calls.

## If login is required

Use:

```bash
gh auth login
```

Do not ask users to paste tokens into chat unless they explicitly choose a manual path outside this skill.

## Common failure modes

### `401 Unauthorized`

Possible causes:

- expired auth
- wrong host
- wrong account
- missing permissions

### `403 Forbidden`

Possible causes:

- insufficient token permissions
- repository access restrictions
- enterprise policy limitations
- rate limiting in some environments

### Empty data from API calls

Possible causes:

- wrong repository context
- branch not associated with an open PR
- fetching only issue comments but not review threads
- querying a host different from the authenticated one

## Safe recovery steps

1. Confirm repository and branch context.
2. Re-run `gh auth status`.
3. Confirm host/account match the target repo.
4. Retry with explicit repository context if needed.
5. If necessary and user-approved, re-run `gh auth login`.
