# Runtime Triage Checklist

Use this checklist before making ASP.NET Core changes.

## 1. Verify SDK and runtime context

- Run `dotnet --info` when environment drift or upgrade issues are possible.
- Check for `global.json`.
- Identify the web entry-point project and its `TargetFramework` or `TargetFrameworks`.
- Note whether central package management is used, such as `Directory.Packages.props`.

## 2. Identify the app model

Inspect the entry-point project and `Program.cs`.

- Blazor Web App
- Razor Pages
- MVC
- Minimal APIs
- Controllers/Web API
- SignalR
- gRPC
- Hosted services/background work

Mixed solutions are common. Identify the primary web entry point before loading more references.

## 3. Inspect the first files

Start with:

- `Program.cs`
- `appsettings.json`
- `appsettings.Development.json`
- `Properties/launchSettings.json`
- primary `.csproj`

Then inspect only the files directly relevant to the task.

## 4. Review hosting and pipeline shape

Check for:

- service registration patterns
- options binding and validation
- environment branches
- middleware order
- route mapping
- auth and authorization usage
- static files and asset handling
- health checks and diagnostics endpoints

## 5. Security gate triggers

Run an explicit security pass if any of the following are present:

- browser sign-in
- cookies
- external identity providers
- forms or antiforgery-sensitive flows
- public APIs
- CORS
- reverse proxy or load balancer deployment

## 6. Tests and operations

Before handoff, identify:

- unit tests
- integration tests
- browser or end-to-end tests
- logging and telemetry expectations
- health probe paths
- deployment assumptions

## Safe inspection commands

```bash
dotnet --info
find . -name '*.csproj' -o -name 'global.json' -o -name 'Directory.Packages.props'
```

Prefer inspection and build/test commands over cleanup or deletion commands.
