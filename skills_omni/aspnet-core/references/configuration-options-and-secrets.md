# Configuration, Options, and Secrets

Use this reference when settings differ across environments or options binding is unclear.

## Configuration review steps

1. Inspect `appsettings.json` and any environment-specific settings files.
2. Confirm the active environment.
3. Check environment-variable overrides used by deployment.
4. Verify whether local development uses Secret Manager.
5. Review how settings are bound into options classes.

## Preferred patterns

- Use strongly typed options for important settings.
- Add options validation for required values and shape constraints.
- Keep secret values out of source-controlled settings files.
- Use environment- or platform-managed secret stores for production.

## Common failure patterns

### Settings work locally but not in CI or production

Likely checks:

- wrong environment name
- missing environment variable
- provider precedence misunderstanding
- key naming mismatch
- options class not bound from the expected section

### Options resolve but contain null or default values

Likely checks:

- incorrect section name
- property name mismatch
- unregistered options binding
- validation never executed

## Safe local development guidance

- Use `dotnet user-secrets` for local development secrets when applicable.
- Do not commit real credentials to `appsettings.json`, `.env`, or examples.

## Review rule

When configuration behavior is surprising, verify provider precedence and binding before changing business logic.
