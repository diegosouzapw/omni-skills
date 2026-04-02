# Minimal API Integration Test Example

Use this pattern when endpoint behavior changes and you need framework-level validation.

## Goal

Test a Minimal API endpoint through the ASP.NET Core pipeline instead of unit-testing handler logic alone.

## Review shape

- use `WebApplicationFactory<TEntryPoint>` where appropriate
- create a test client from the factory
- verify both success and failure responses
- keep test setup close to real app behavior unless specific overrides are required

## Example prompt

```text
Use @aspnet-core to add an integration test for the changed Minimal API endpoint. Use WebApplicationFactory, verify a success case and a validation or authorization failure case, and note any required test-host overrides.
```

## Expected result

- one or more integration tests that exercise the real endpoint path
- explicit notes for auth, configuration, or dependency overrides if needed
