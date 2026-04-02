# Sentry Troubleshooting Decision Tree

## If the call fails immediately

- Check `SENTRY_AUTH_TOKEN`
- Check token scope
- Check org/project access
- Check `SENTRY_BASE_URL`

## If the call succeeds but returns nothing

- Check org slug
- Check project slug
- Check environment name
- Widen time window
- Remove restrictive query terms

## If the results are incomplete

- Check pagination handling
- Increase limit carefully
- Check rate limiting
- Report partial coverage

## If self-hosted behaves differently

- Confirm the correct base URL
- Confirm API path compatibility
- Avoid SaaS-specific assumptions
