---
name: "aspnet-core"
description: "Build, review, refactor, and operate ASP.NET Core applications using official .NET guidance across Blazor, Razor Pages, MVC, APIs, security, testing, deployment, and upgrades."
version: "0.0.1"
category: "backend"
tags:
  - "aspnet-core"
  - "dotnet"
  - "blazor"
  - "razor-pages"
  - "mvc"
  - "minimal-api"
  - "web-api"
  - "signalr"
  - "grpc"
  - "middleware"
  - "dependency-injection"
  - "configuration"
  - "authentication"
  - "authorization"
  - "testing"
  - "deployment"
  - "upgrade"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/aspnet-core"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# ASP.NET Core

## Overview

Use this skill for real ASP.NET Core application work: selecting the right app model, reviewing or changing `Program.cs` and the request pipeline, implementing UI or API features, securing authentication and configuration, adding tests and observability, diagnosing production failures, or planning upgrades.

This skill preserves the original upstream intent while turning it into an execution-focused workflow kit. It keeps provenance visible, but the main path is centered on practical ASP.NET Core delivery rather than import mechanics.

Prefer the smallest set of references that fits the task. Start with framework and hosting verification, branch by app model, then finish with testing, security, and deployment validation.

## When to Use This Skill

Use this skill when the task is primarily about ASP.NET Core application behavior or architecture.

### Use this skill when

- You need to choose or validate an ASP.NET Core app model:
  - Blazor Web App
  - Razor Pages
  - MVC
  - Minimal APIs
  - controller-based Web API
  - SignalR
  - gRPC
  - hosted/background services inside an ASP.NET Core app
- You need to review or modify `Program.cs`, dependency injection, middleware ordering, routing, configuration, logging, or environment-specific behavior.
- You are implementing or refactoring authentication, authorization, cookies, bearer auth, antiforgery, CORS, HTTPS, secrets, or Data Protection.
- You are adding API endpoints, UI flows, outbound HTTP integrations, background processing, health checks, caching, rate limiting, or deployment readiness.
- You are diagnosing issues that appear only in production, behind a reverse proxy, after scale-out, or during a framework upgrade.
- You need an evidence-based upgrade or migration workflow tied to the repository's actual SDK and target frameworks.

### Do not use this skill alone when

- The task is generic C# library work with no ASP.NET Core hosting, pipeline, or web concerns.
- The task is primarily database tuning, schema design, or query optimization with no meaningful ASP.NET Core application change.
- The task is purely infrastructure or IaC work, such as cluster provisioning, Terraform, ingress policy, or cloud networking, unless the work directly depends on ASP.NET Core hosting behavior.
- The task is frontend-only visual or UX work with no Blazor, Razor, MVC, or ASP.NET Core integration impact.

### Quick selector

- Use **Razor Pages** for page-focused server-rendered apps with localized page behavior.
- Use **MVC** for server-rendered apps that need controller/view separation and richer cross-page conventions.
- Use **Blazor Web App** for component-driven UI with interactive render modes.
- Use **Minimal APIs** for lightweight HTTP services and endpoint-oriented APIs.
- Use **Controllers/Web API** when API conventions, filters, model binding patterns, or larger API surface area make controllers clearer.

## Operating Table

| Situation | Start here | Verify first | Expected output |
| --- | --- | --- | --- |
| New app or major refactor | `references/stack-selection.md` | repo goals, hosting model, target TFM, team conventions | Chosen app model, template direction, and rationale |
| Existing app review | `references/runtime-triage.md`, `references/program-and-pipeline.md` | `Program.cs`, `.csproj`, `appsettings*.json`, `launchSettings.json` | Review packet covering hosting, DI, middleware, routing, config, and risks |
| API design or endpoint work | `references/apis-minimal-and-controllers.md` and `examples/new-api-service-selection.md` | existing endpoint style, validation behavior, auth requirements | Decision on Minimal APIs vs controllers, response shape, validation approach |
| Auth, secrets, cookies, CORS, antiforgery, or authorization | `references/security-and-identity.md` and `references/security-review-checklist.md` | auth scheme, cookie usage, browser vs API callers, proxy topology | Auth scheme decision, secret handling plan, and security checklist |
| Reverse proxy, load balancer, container, or HTTPS issues | `references/deployment-and-proxy-notes.md` and `examples/forwarded-headers-and-https.md` | proxy config, callback/base URLs, forwarded headers, HTTPS settings | Forwarded-header, HTTPS, callback URI, and deployment corrections |
| Outbound HTTP or service integration | `references/data-state-and-services.md` and `references/common-failures-and-fixes.md` | current `HttpClient` usage, timeouts, retries, DNS assumptions | `IHttpClientFactory` usage plan, resilience notes, and failure checks |
| Background work, SignalR, or gRPC | `references/realtime-grpc-and-background-work.md` | service lifetimes, cancellation, shutdown path, protocol constraints | Lifetime, scope, shutdown, and protocol-specific implementation notes |
| Testing, logging, tracing, health checks, performance | `references/testing-and-observability.md` | existing test projects, logging config, health endpoints, telemetry setup | Test plan, diagnostics plan, and operational readiness checks |
| Upgrade or version alignment | `references/upgrade-review-playbook.md` | `global.json`, TFMs, package baselines, compat risks | Verified SDK/TFM baseline, migration notes, and regression checklist |

## Workflow

1. **Verify the actual framework baseline before changing code.**
   - Run `dotnet --info` when the environment matters.
   - Inspect `global.json`, solution files, `TargetFramework` or `TargetFrameworks`, and package baselines.
   - Confirm whether the repo uses minimal hosting with `WebApplicationBuilder` / `WebApplication` or older patterns being preserved during migration.
   - Do not assume a "latest" version from memory; verify the target against the repo and official release notes.

2. **Identify the app model and task type.**
   - Determine whether the work is Blazor, Razor Pages, MVC, Minimal APIs, controllers, SignalR, gRPC, or hosted services.
   - For mixed solutions, isolate which project owns the web entry point and which libraries are supporting layers.
   - Open only the primary reference files needed for that task.

3. **Inspect `Program.cs` and the request pipeline first.**
   - Review service registration, options binding, configuration providers, logging setup, middleware order, route mapping, static assets, exception handling, auth middleware, and environment-specific branches.
   - Look for issues caused by ordering, duplicate registrations, hidden side effects in extension methods, or obsolete patterns introduced into new code.

4. **Apply the app-model-specific guidance.**
   - For UI work, choose the correct reference among Blazor, Razor Pages, or MVC.
   - For HTTP APIs, decide whether Minimal APIs or controllers better fit the surface area, conventions, and maintenance needs.
   - For realtime or background processing, validate connection lifecycle, service lifetimes, cancellation, and graceful shutdown behavior.

5. **Review configuration, options, and secrets handling.**
   - Check `appsettings.json`, `appsettings.{Environment}.json`, environment variables, and local secret usage.
   - Prefer strongly typed options with validation over scattered configuration reads.
   - Keep development secrets in Secret Manager and production secrets in environment- or platform-managed stores.

6. **Apply cross-cutting platform features before reaching for third-party additions.**
   - Prefer built-in DI, configuration, logging, Problem Details, health checks, rate limiting, output caching, and `IHttpClientFactory` unless there is a clear requirement for something else.
   - Use the security references for secrets, Data Protection, authentication, authorization, antiforgery, HTTPS, and proxy-aware behavior.
   - Preserve the existing app model unless there is a concrete migration goal.

7. **Run an explicit security pass when the app exposes endpoints or browser flows.**
   - Verify HTTPS assumptions, forwarded headers, auth scheme configuration, authorization policies, CORS policy scope, antiforgery requirements, cookie settings, and safe production error handling.
   - Do not relax protections as a quick fix without documenting the reason and blast radius.

8. **Validate operations, diagnostics, and test coverage.**
   - Choose the right tests for the change: unit tests, integration tests, and UI/browser tests where applicable.
   - Confirm logging quality, health checks, and traceability of the affected request path or background flow.
   - If the app runs behind a reverse proxy or in multiple instances, review forwarding and Data Protection assumptions explicitly.

9. **Review upgrade and deployment impact before handoff.**
   - For upgrades, use the matching migration guidance for the source and target versions.
   - Check obsolete APIs, package compatibility, hosting changes, auth/cookie behavior, and deployment topology assumptions.
   - Capture any environment prerequisites such as secret stores, key persistence, callback URIs, forwarded headers, or health probe paths.

10. **Produce a merge- or handoff-ready summary.**
    - State the verified framework baseline.
    - State the chosen app model or architectural path.
    - Summarize code changes, tests run or needed, deployment assumptions, and unresolved risks.
    - Keep provenance to the local references and official docs visible when the task is sensitive or review-heavy.

## Examples

### Example 1: Review an existing ASP.NET Core app before refactoring

```text
Use @aspnet-core to review this solution before refactoring. Verify the target framework, inspect Program.cs and middleware order, identify the app model, then summarize DI, configuration, auth, and deployment risks before suggesting code changes.
```

**Expected output:** A concise review packet listing framework baseline, app model, pipeline findings, security concerns, test gaps, and recommended next changes.

### Example 2: Choose between Minimal APIs and controllers

```text
Use @aspnet-core to design a new HTTP API service. Compare Minimal APIs and controllers for this codebase, recommend one, define validation and Problem Details behavior, and note what should be tested before merge.
```

**Expected output:** A decision with rationale, endpoint organization guidance, validation/error response conventions, and a small implementation plan.

### Example 3: Print local .NET environment details safely

```bash
bash scripts/print_dotnet_env.sh
```

**Expected output:** Installed SDKs, runtimes, and basic environment information useful for troubleshooting or upgrade review.

### Example 4: Enumerate target frameworks across the repo

```bash
python3 scripts/list_project_tfms.py .
```

**Expected output:** `global.json` SDK pin if present plus each discovered project file and its target framework declarations.

### Example 5: Add an integration test for endpoint behavior

```text
Use @aspnet-core to add an integration test for a changed Minimal API endpoint using WebApplicationFactory, validate the success and failure cases, and note any required test-host setup changes.
```

**Expected output:** A small test plan, the required test-host changes, and an example integration test shape.

### Example 6: Fix an auth failure behind a reverse proxy

```text
Use @aspnet-core to diagnose why sign-in works locally but fails behind Nginx. Check forwarded headers, HTTPS redirection, callback URLs, cookie security settings, and Data Protection assumptions, then propose the smallest safe fix.
```

**Expected output:** A proxy-focused diagnosis with likely root cause, concrete config/code changes, and validation steps.

## Best Practices

### Do

- Verify the repository's actual SDK and target framework before recommending new APIs or an upgrade.
- Prefer `WebApplicationBuilder` and `WebApplication` for new work unless maintaining an older codebase during migration.
- Prefer built-in ASP.NET Core and .NET platform capabilities before adding third-party infrastructure.
- Keep `Program.cs` readable enough that middleware order, service registration, and route mapping can be audited.
- Use the built-in configuration system and keep secrets out of source control.
- Prefer strongly typed options with validation for important settings.
- Persist Data Protection keys for multi-instance or redeployed applications that rely on cookies, antiforgery, or other protected payloads.
- Use `IHttpClientFactory` for outbound HTTP instead of ad-hoc long-lived or repeatedly-created `HttpClient` patterns.
- Use consistent API behavior: meaningful status codes, machine-readable errors, and validation responses that clients can handle.
- Add integration tests for important request paths, especially authentication, routing, and custom middleware behavior.
- Review reverse-proxy and load-balancer assumptions whenever HTTPS, auth callbacks, client IP, or absolute URL generation matters.
- Prefer explicit origins and named policies for CORS instead of permissive wildcard defaults.

### Do not

- Do not hardcode static advice such as "always use the latest .NET" without checking the repo and official release guidance.
- Do not rewrite Razor Pages to MVC, or controllers to Minimal APIs, just because a newer style exists.
- Do not store secrets in `appsettings.json`, source control, or examples.
- Do not disable antiforgery, HTTPS, auth, or CORS protections as a quick fix without a scoped justification and rollback plan.
- Do not create background work inside request handlers in ways that depend on disposed scoped services or request lifetime.
- Do not treat proxy-related redirect loops or callback failures as app-only bugs until forwarding configuration is verified.
- Do not trust all forwarded headers or all proxies by default; align trust settings to the actual deployment.

## Troubleshooting

### Problem: Endpoints return 404, 405, 401, or unexpected CORS/auth behavior

**Symptoms:** Routes exist in code but fail at runtime; auth appears configured but requests are unauthorized; preflight or browser calls fail unexpectedly.

**Solution:** Inspect `Program.cs` in order. Verify service registration, middleware ordering, route mapping, auth/authorization middleware placement, and CORS policy application. Confirm the endpoint belongs to the active app model and environment branch. Use `references/program-and-pipeline.md` and `references/common-failures-and-fixes.md`.

### Problem: Sign-in or redirects work locally but fail behind Nginx, IIS, ingress, or a load balancer

**Symptoms:** Redirect loops, wrong callback URI, HTTP/HTTPS mismatch, broken external login callback, incorrect client IP, or generated absolute URLs using the wrong scheme.

**Solution:** Verify forwarded-header and reverse-proxy configuration before changing app logic. Check scheme forwarding, host handling, HTTPS redirection behavior, proxy trust configuration, and callback/base URL assumptions. Use `references/deployment-and-proxy-notes.md` and `examples/forwarded-headers-and-https.md`.

### Problem: Users are signed out after deploy, scale-out, or restart

**Symptoms:** Auth cookies become invalid, antiforgery tokens fail, existing sessions are lost after redeploy, or one instance accepts cookies that another rejects.

**Solution:** Check Data Protection key persistence and deployment topology. Confirm keys are shared appropriately across instances and not stored ephemerally in a way that resets on deploy. Review cookie and antiforgery configuration only after key management is verified. Use `references/security-review-checklist.md` and `references/common-failures-and-fixes.md`.

### Problem: Configuration values are missing or differ between environments

**Symptoms:** The app works locally but not in CI or production; settings appear overridden unexpectedly; options bind to null or default values.

**Solution:** Inspect provider precedence, `appsettings*.json`, environment variables, Secret Manager usage, and options binding/validation. Confirm the active environment and key names exactly. Use `references/configuration-options-and-secrets.md`.

### Problem: Static assets are missing after publish or only fail outside development

**Symptoms:** CSS, JS, or images load locally but return 404 after publish; asset paths differ by environment; UI renders without styling.

**Solution:** Verify web root assumptions, static file configuration, publish output, referenced paths, and environment-specific pipeline branches. Check whether the app model uses framework-specific asset mapping. Use `references/deployment-and-proxy-notes.md` and `references/common-failures-and-fixes.md`.

### Problem: Outbound HTTP calls fail intermittently or the app shows connection exhaustion symptoms

**Symptoms:** Random downstream request failures, DNS staleness, too many open sockets, or unstable behavior under load.

**Solution:** Review how `HttpClient` is created and injected. Prefer `IHttpClientFactory`, centralize configuration, and inspect timeout/retry behavior carefully. Avoid ad-hoc per-request instantiation or hidden static usage patterns. Use `references/data-state-and-services.md` and `references/common-failures-and-fixes.md`.

### Problem: Background work stops unexpectedly or throws disposed-service exceptions

**Symptoms:** Work triggered from requests continues unreliably, hosted services fail during deploy, scoped services are used outside valid scopes, or shutdown loses in-flight work.

**Solution:** Move long-running work into `IHostedService` / `BackgroundService` patterns where appropriate, create scopes explicitly when consuming scoped services, and review cancellation plus graceful shutdown behavior. Use `references/realtime-grpc-and-background-work.md` and `references/common-failures-and-fixes.md`.

### Problem: Upgrade guidance is unclear or a new API may not fit the repo baseline

**Symptoms:** Mixed target frameworks, unclear SDK pinning, compile errors after package updates, or uncertainty about whether a feature exists for the repo's current version.

**Solution:** Inspect `global.json`, project TFMs, package versions, and the relevant migration article for the exact source and target versions. Do not rely on memory or generic "latest" advice. Use `references/upgrade-review-playbook.md` and `scripts/list_project_tfms.py`.

## Related Skills

- `@docker` - Use when image builds, multi-stage Dockerfiles, local container runs, or container hardening become the main work.
- `@kubernetes` - Use when ingress, Services, probes, rollout behavior, or cluster networking dominate the task beyond ASP.NET Core app behavior.
- `@api-design` - Use when resource modeling, versioning strategy, or HTTP contract design becomes broader than framework implementation details.
- `@debugging` - Use when the task becomes a wider incident investigation across logs, infra, dependencies, and runtime behavior.
- `@doc` - Use when the main deliverable is migration notes, runbooks, or operational documentation for humans.

## Additional Resources

### Core local references

- [Runtime triage checklist](references/runtime-triage.md)
- [App model selection](references/stack-selection.md)
- [Program and pipeline review](references/program-and-pipeline.md)
- [Blazor guidance](references/ui-blazor.md)
- [Razor Pages guidance](references/ui-razor-pages.md)
- [MVC guidance](references/ui-mvc.md)
- [Minimal APIs and controllers](references/apis-minimal-and-controllers.md)
- [Data, state, outbound HTTP, and services](references/data-state-and-services.md)
- [Security and identity](references/security-and-identity.md)
- [Realtime, gRPC, and background work](references/realtime-grpc-and-background-work.md)
- [Testing, performance, and operations](references/testing-performance-and-operations.md)
- [Versioning and upgrades](references/versioning-and-upgrades.md)
- [Official docs source map](references/source-map.md)

### Added operational references

- [Middleware and pipeline ordering notes](references/middleware-and-pipeline-ordering.md)
- [Configuration, options, and secrets](references/configuration-options-and-secrets.md)
- [Security review checklist](references/security-review-checklist.md)
- [Testing and observability guide](references/testing-and-observability.md)
- [Deployment and reverse-proxy notes](references/deployment-and-proxy-notes.md)
- [Common failures and fixes](references/common-failures-and-fixes.md)
- [Upgrade review playbook](references/upgrade-review-playbook.md)

### Worked examples

- [Minimal API integration test](examples/minimal-api-integration-test.md)
- [Forwarded headers and HTTPS](examples/forwarded-headers-and-https.md)
- [Auth, CORS, and antiforgery review](examples/auth-cors-antiforgery-review.md)
- [Health checks, rate limiting, and logging](examples/health-checks-rate-limiting-and-logging.md)
- [Review an existing app](examples/review-existing-app.md)
- [Choose a new API service style](examples/new-api-service-selection.md)

### Helper scripts

- [Print local .NET environment details](scripts/print_dotnet_env.sh)
- [List project target frameworks](scripts/list_project_tfms.py)

### Execution notes preserved from upstream intent

- Start from the correct `dotnet new` template when generating new code.
- Follow the existing solution's conventions first when editing a real codebase.
- When a task mentions "latest," verify against official ASP.NET Core release notes and versioned docs before making recommendations.
