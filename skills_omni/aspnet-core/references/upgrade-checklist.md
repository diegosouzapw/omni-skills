# Upgrade Checklist

Use this checklist before recommending or performing an ASP.NET Core version upgrade.

## Baseline capture

- Record `global.json` if present.
- Record each project's `TargetFramework` or `TargetFrameworks`.
- Record major ASP.NET Core and related package baselines.
- Record hosting style and any custom middleware or auth components likely to be upgrade-sensitive.

## Verification steps

- Verify the current stable target and the intended destination using official release notes.
- Open the exact migration article for the source and target versions.
- Search for obsolete APIs and compatibility notes affecting the solution.
- Identify deployment assumptions that may change behavior after upgrade.

## Regression checklist

- Build succeeds.
- Integration tests pass.
- Authentication and authorization flows are rechecked.
- Reverse-proxy behavior is rechecked if applicable.
- Data Protection, cookies, and antiforgery behavior are rechecked if applicable.
- Health checks and deployment probes still match operational expectations.

## Authoritative sources

- ASP.NET Core release notes: https://learn.microsoft.com/aspnet/core/release-notes/?view=aspnetcore-9.0
- ASP.NET Core migration guidance: https://learn.microsoft.com/aspnet/core/migration/80-90?view=aspnetcore-9.0
- .NET documentation home: https://learn.microsoft.com/dotnet/core/
