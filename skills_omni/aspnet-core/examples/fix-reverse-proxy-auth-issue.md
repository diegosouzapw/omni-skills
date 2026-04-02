# Example: Fix Reverse-Proxy Authentication Issues

## Scenario

Local sign-in succeeds, but deployed sign-in behind a reverse proxy fails with wrong callback URLs or redirect loops.

## Prompt

```text
Diagnose this ASP.NET Core authentication issue behind a reverse proxy.

Check:
- forwarded headers
- HTTPS redirection behavior
- callback/base URL assumptions
- cookie security settings
- Data Protection assumptions in the deployed topology

Propose the smallest safe fix and list the validation steps.
```

## Expected output

- likely root cause
- app-side and deployment-side checks
- smallest safe code/config change
- validation plan
