---
name: "winui-app"
description: "WinUI App workflow skill. Use this skill when the user needs to bootstrap, audit, build, review, troubleshoot, or refine WinUI 3 desktop applications with C# and the Windows App SDK, including environment readiness, packaged versus unpackaged decisions, XAML UI, controls, navigation, windowing, theming, accessibility, responsiveness, performance, and deployment using official Microsoft guidance, WinUI Gallery patterns, Windows App SDK samples, and bounded CommunityToolkit usage."
version: "0.0.1"
category: "frontend"
tags:
  - "winui-app"
  - "winui-3"
  - "windows-app-sdk"
  - "xaml"
  - "desktop"
  - "windows"
  - "csharp"
  - "fluent-ui"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
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
upstream_skill: "skills/winui-app"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# WinUI App

## Overview

Use this skill for practical WinUI 3 desktop app work built on the Windows App SDK.

It is for real execution, not generic UI advice: environment audits, safe machine bootstrap planning, new app scaffolding, packaged versus unpackaged app-model selection, XAML implementation, shell and navigation decisions, title bar and windowing work, theming, accessibility, localization, responsiveness, performance, troubleshooting, and deployment-aware review.

This skill favors official Microsoft Learn guidance, WinUI Gallery patterns, and Windows App SDK samples. It also keeps CommunityToolkit usage deliberate: prefer stock WinUI controls and platform patterns first, then add toolkit dependencies only when they solve a verified gap cleanly.

## When to Use This Skill

Use this skill when the request is specifically about WinUI 3 or Windows App SDK desktop development, such as:

- preparing a Windows machine to build or run WinUI 3 apps
- checking whether the environment is ready without making changes yet
- creating a new packaged or unpackaged WinUI 3 app
- debugging template, build, XAML compiler, or launch failures
- implementing or reviewing pages, controls, bindings, resources, and app structure
- choosing shell, navigation, title bar, or multi-window patterns
- improving theming, accessibility, keyboarding, localization, or adaptive layout
- diagnosing sluggish UI, layout cost, or responsiveness issues
- planning deployment, runtime, notifications, lifecycle, or package identity behavior

Do not use this skill as the primary path for:

- WPF, Windows Forms, MAUI, Avalonia, or Electron work
- ASP.NET-only web application tasks
- generic C# language questions with no WinUI or Windows App SDK relevance
- low-level native Windows API interop unless WinUI app context is central
- backend service design that should be handled by an API or backend skill

If the request is diagnostic-only, or the machine is managed/shared, get explicit user confirmation before running environment-changing setup or remediation commands.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Check whether a PC is ready for WinUI work | `references/foundation-environment-audit-and-remediation.md` | Separates safe audit steps from machine-changing remediation |
| Start a new app or choose packaged vs unpackaged | `references/foundation-setup-and-project-selection.md` | Makes the app model explicit before scaffolding |
| Build succeeds but startup behavior is unclear | `references/build-run-and-launch-verification.md` | A spawned process is not enough; verify a real window and expected behavior |
| Opaque XAML or MSBuild failures | `references/foundation-template-first-recovery.md` | Use template-first recovery instead of random cleanup |
| Review shell, navigation, title bar, or windowing | `references/shell-navigation-and-windowing.md` | Prefer stock WinUI shell patterns before custom chrome |
| Choose controls, layout, or responsive behavior | `references/controls-layout-and-adaptive-ui.md` | Maps common UI needs to native WinUI controls and layout guidance |
| Improve theming, materials, icons, or visual polish | `references/styling-theming-materials-and-icons.md` | Reinforces theme-aware resources and Fluent-compatible choices |
| Improve keyboarding, screen reader support, or localization | `references/accessibility-input-and-localization.md` | Treat accessibility and localization as a default quality gate |
| Diagnose sluggish UI or responsiveness issues | `references/performance-diagnostics-and-responsiveness.md` | Focuses on UI-thread, virtualization, layout, and async discipline |
| Decide whether CommunityToolkit is justified | `references/community-toolkit-controls-and-helpers.md` | Prefer stock WinUI first and justify added dependencies |
| Review deployment, runtime, notifications, or identity issues | `references/windows-app-sdk-lifecycle-notifications-and-deployment.md` | Packaged and unpackaged assumptions materially change behavior |
| Run a broader implementation or review checklist | `references/testing-debugging-and-review-checklists.md` | Consolidates common review gates before handoff |

## Workflow

1. **Classify the task**
   - Decide whether the request is environment audit, machine remediation, new-app bootstrap, implementation, review, troubleshooting, or deployment/lifecycle work.
   - Confirm that WinUI 3 plus Windows App SDK is actually the correct domain.

2. **Decide whether machine changes are allowed**
   - If the request is diagnostic-only, ask before running setup/remediation commands.
   - If the machine is shared, managed, or CI-like, default to audit-only until the user explicitly approves changes.

3. **Audit the environment before editing code**
   - Check the installed .NET SDK and confirm that a WinUI template is available.
   - If required prerequisites are missing, stop and report the blocker clearly.
   - Use `references/foundation-environment-audit-and-remediation.md` for safe audit and remediation boundaries.

4. **Make the app model explicit**
   - Decide early whether the app should be **packaged** or **unpackaged**.
   - Record that decision before changing startup, deployment, notifications, activation, file associations, or distribution behavior.
   - Use `references/foundation-setup-and-project-selection.md` if the model is unclear.

5. **Scaffold or inspect a baseline**
   - For new work, scaffold from a current WinUI template with only supported options.
   - For existing work, inspect the project structure, startup path, resources, and page/shell organization before making changes.
   - If the project is already failing in opaque ways, compare it to a fresh matching template baseline.

6. **Make minimal, platform-aligned changes**
   - Prefer built-in WinUI controls, `NavigationView`, `CommandBar`, stock title bar/windowing patterns, theme resources, and standard layout primitives.
   - Avoid introducing custom shell/chrome, custom controls, or CommunityToolkit dependencies unless there is a clear reason.

7. **Build and verify launch**
   - Build the project.
   - Then run it through the correct path for its actual app model.
   - Treat success as incomplete until there is objective startup evidence: a visible, responsive top-level window, expected title behavior, and feature-specific signals when relevant.

8. **Run quality gates for UI work**
   - Check theme behavior in light and dark mode.
   - Check keyboard navigation, focus order, accessible names, and contrast.
   - Check adaptive behavior at narrow and wide sizes.
   - Check that scrolling ownership, layout density, and command surfaces still make sense.

9. **Troubleshoot with evidence, not cleanup folklore**
   - For missing templates or setup failures, return to environment verification.
   - For XAML compiler failures, use template-first recovery.
   - For build-success/run-fail issues, inspect runtime, package identity, startup exceptions, and launch path assumptions.

10. **Hand off with explicit context when needed**
   - If the work becomes primarily backend, release automation, deep native interop, or documentation, hand off deliberately.
   - Carry forward the environment state, chosen app model, and what has already been verified.

## Examples

### Example 1: Audit a machine without changing it

```text
Use @winui-app to audit whether this Windows machine is ready for WinUI 3 development. Do not install or modify anything yet. Summarize findings under present, missing, uncertain, and recommended optional tools.
```

**Expected outcome:** A diagnostic-only readiness report with clear blockers, no silent bootstrap steps, and an explicit note about whether machine changes would be required.

### Example 2: Scaffold a new unpackaged app safely

```powershell
dotnet new list winui
dotnet new winui -o SampleDeskApp --unpackaged
cd SampleDeskApp
dotnet build SampleDeskApp.csproj
```

**Expected outcome:** A new WinUI 3 project scaffold that matches the requested app model and builds successfully before feature work begins.

### Example 3: Review shell and layout choices

```text
Use @winui-app to review this WinUI 3 app for navigation shell quality, title bar integration, adaptive layout, keyboard accessibility, and dark/light theme behavior. Prefer stock WinUI guidance over custom chrome recommendations.
```

**Expected outcome:** A review packet that calls out shell, layout, accessibility, and theming issues with concrete platform-aligned fixes.

### Example 4: Recover from an opaque XAML compiler error

```text
Use @winui-app to troubleshoot an MSB3073 / XamlCompiler.exe failure. Compare the project against a fresh matching WinUI template, isolate the smallest failing XAML or resource change, and avoid destructive cleanup unless evidence justifies it.
```

**Expected outcome:** A template-first diagnosis plan that narrows the real cause instead of masking it with broad cleanup steps.

## Best Practices

### Do

- Verify environment readiness before assuming WinUI work can proceed.
- Ask for consent before running machine-changing setup or remediation commands on an audit-only, shared, or managed machine.
- Decide packaged versus unpackaged early and keep that assumption visible in notes and handoff.
- Use current documented WinUI template behavior and only supported options.
- Prefer built-in WinUI controls, layouts, shell patterns, and theme resources.
- Favor `NavigationView`, `CommandBar`, standard page/layout patterns, and system-aware title bar behavior before custom composition.
- Treat accessibility, localization, theme support, and adaptive layout as default review gates.
- Build and actually launch the app after meaningful changes.
- Treat CommunityToolkit as optional and justified, not automatic.
- Preserve existing codebase conventions when working inside an established app.

### Do Not

- Do not mutate a machine during a diagnostic-only request without permission.
- Do not assume a successful install log means the environment is actually usable.
- Do not assume a successful build means the app really launches.
- Do not invent unsupported `dotnet new winui` flags or undocumented setup steps.
- Do not jump straight to deleting folders, cleaning caches, or broad repair commands when the issue is still unclassified.
- Do not replace stock WinUI controls with bespoke shell/chrome unless the user or product genuinely requires it.
- Do not add CommunityToolkit dependencies for features already covered well by WinUI.
- Do not hard-code theme colors where theme resources or system brushes are the right fit.
- Do not treat keyboard and screen-reader support as optional polish.

## Troubleshooting

### Problem: `dotnet new list winui` shows no WinUI template

**Symptoms:** The machine has `dotnet`, but WinUI templates do not appear, or new-app bootstrap fails before project creation.

**Solution:**
- Re-run the environment audit first.
- Confirm the installed .NET SDK is present and usable.
- Confirm the machine has the required WinUI/Windows App SDK development prerequisites.
- If the request is diagnostic-only, stop at reporting the gap.
- If the user allows remediation, use the remediation guidance in `references/foundation-environment-audit-and-remediation.md` and then verify the template again before scaffolding.

### Problem: Build succeeds, but the app does not visibly open

**Symptoms:** A process appears briefly or remains in the process list, but no usable top-level window appears, or the app exits immediately.

**Solution:**
- Treat this as a launch failure, not a success.
- Verify the actual app model and launch path.
- Check for Windows App Runtime availability, package identity assumptions, and startup exceptions.
- Confirm whether the app should be launched as packaged or unpackaged.
- Use `references/build-run-and-launch-verification.md` and `references/windows-app-sdk-lifecycle-notifications-and-deployment.md`.

### Problem: `MSB3073` or `XamlCompiler.exe` fails with poor diagnostics

**Symptoms:** Build output is vague, the error points at generated files, or the real issue is hidden behind XAML compile wrappers.

**Solution:**
- Stop guessing.
- Compare the project to a fresh matching WinUI template for the same app model.
- Isolate recent XAML, resource dictionary, style, or binding changes.
- Reduce the failing surface until the real cause becomes visible.
- Use `references/foundation-template-first-recovery.md`.

### Problem: The UI works with mouse input but feels broken with keyboard or Narrator

**Symptoms:** Focus order is confusing, controls lack accessible names, keyboard-only use is awkward, or a screen reader misses important semantics.

**Solution:**
- Treat this as a functional quality issue, not cosmetic polish.
- Review keyboard navigation, focus behavior, accessible names, contrast, and localization impact.
- Re-check whether custom composition replaced better stock controls.
- Use `references/accessibility-input-and-localization.md`.

### Problem: The layout looks fine on a wide monitor but collapses badly at narrow widths

**Symptoms:** Navigation crowds content, nested scrolling becomes awkward, command surfaces wrap poorly, or density remains too high as width shrinks.

**Solution:**
- Revisit shell-plus-page adaptive behavior instead of resizing isolated controls.
- Review navigation collapse, spacing, content density, scroll ownership, and command prioritization.
- Prefer standard layout primitives and adaptive states over ad hoc fixes.
- Use `references/controls-layout-and-adaptive-ui.md` and `references/shell-navigation-and-windowing.md`.

## Additional Resources

### Task-routed support pack

| Request | Read first |
| --- | --- |
| Audit or remediate WinUI environment readiness | `references/foundation-environment-audit-and-remediation.md` |
| Choose packaged vs unpackaged and scaffold correctly | `references/foundation-setup-and-project-selection.md` |
| Recover from opaque build or XAML compiler failures | `references/foundation-template-first-recovery.md` |
| Build, run, and verify true startup success | `references/build-run-and-launch-verification.md` |
| Inspect app structure, resources, and startup composition | `references/foundation-winui-app-structure.md` |
| Choose shell, navigation, title bar, or windowing patterns | `references/shell-navigation-and-windowing.md` |
| Choose controls, layout, scrolling, and adaptive UI patterns | `references/controls-layout-and-adaptive-ui.md` |
| Apply theming, materials, icons, and title bar styling safely | `references/styling-theming-materials-and-icons.md` |
| Improve accessibility, input, and localization readiness | `references/accessibility-input-and-localization.md` |
| Diagnose responsiveness and rendering/layout cost | `references/performance-diagnostics-and-responsiveness.md` |
| Decide whether to add CommunityToolkit | `references/community-toolkit-controls-and-helpers.md` |
| Review lifecycle, notifications, runtime, and deployment assumptions | `references/windows-app-sdk-lifecycle-notifications-and-deployment.md` |
| Run broad review and verification checklists | `references/testing-debugging-and-review-checklists.md` |

### Worked examples

- [New WinUI app bootstrap](examples/new-winui-app-bootstrap.md)
- [Troubleshoot opaque XAML compiler failure](examples/troubleshoot-xaml-compiler-failure.md)
- [Review WinUI shell and adaptive layout](examples/review-winui-shell-and-adaptive-layout.md)

### Official provenance

- Microsoft Learn: Windows App SDK overview, environment setup, deployment, controls, layout, accessibility, localization, title bar, and windowing guidance
- WinUI Gallery: control usage and Fluent patterns
- Windows App SDK Samples: scenario implementations for lifecycle, notifications, deployment, and windowing
- .NET Community Toolkit docs: bounded guidance for optional toolkit helpers and controls

## Related Skills

- `@aspnet-core` - Use when the work becomes primarily backend or API integration for the WinUI client.
- `@doc` - Use when the main deliverable becomes documentation, setup docs, or user/developer handoff material.
- `@debugging` - Use when the task becomes general .NET debugging or diagnostic investigation beyond WinUI-specific workflow guidance.
- `@release-engineering` - Use when installer, CI/CD, packaging automation, or release pipeline work becomes the main problem.
