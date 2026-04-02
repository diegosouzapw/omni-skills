# Environment Audit and Remediation

Use this guide when the task is to determine whether a Windows machine can build and run WinUI 3 apps, or when the user has approved environment remediation.

## Principles

- Audit first, mutate second.
- If the request is diagnostic-only, do not run machine-changing commands without consent.
- Report findings in four buckets: `present`, `missing`, `uncertain`, and `recommended optional tools`.
- Treat template availability, build success, and launch success as separate checks.

## Safe audit flow

1. Confirm whether the user allows machine changes.
2. Check whether `dotnet` is available.
3. Check which SDKs are installed.
4. Check whether a WinUI template is available.
5. If a project already exists, test whether it builds.
6. If the app model matters for the current issue, record whether the project is packaged or unpackaged.

## Narrow audit commands

```powershell
dotnet --info
dotnet --list-sdks
dotnet new list winui
```

If a project already exists:

```powershell
dotnet build <path-to-project.csproj>
```

## Report shape

```text
present:
- dotnet SDK 8/9/10 installed
- WinUI template visible in dotnet new list

missing:
- no confirmed WinUI template

uncertain:
- packaged runtime behavior not yet verified on this machine

recommended optional tools:
- Visual Studio workload and components for richer local debugging/deploy loops
```

## When remediation is allowed

Only proceed after explicit user approval.

Remediation should follow the current official Windows App SDK and WinUI environment setup guidance. After any remediation attempt:

1. re-check template availability
2. re-check build capability
3. if relevant, verify actual app launch

## Stop conditions

Stop and report clearly when:

- `dotnet` is missing or unusable
- the WinUI template is still unavailable after approved remediation
- the project build fails due to missing prerequisites
- the machine is managed/shared and the user has not approved changes

## Common mistakes

- Assuming Visual Studio presence automatically means WinUI templates are ready
- Treating a package install log as proof that the environment now works
- Jumping to machine changes when the user asked only for an audit
- Declaring success before verifying a template, a build, or a launch path
