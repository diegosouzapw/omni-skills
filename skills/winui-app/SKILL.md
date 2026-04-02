---
name: winui-app
description: "WinUI App workflow skill. Use this skill when the user needs Bootstrap, develop, and design modern WinUI 3 desktop applications with C# and the Windows App SDK using official Microsoft guidance, WinUI Gallery patterns, Windows App SDK samples, and CommunityToolkit components. Use when creating a brand new app, preparing a machine for WinUI, reviewing, refactoring, planning, troubleshooting, environment-checking, or setting up WinUI 3 XAML, controls, navigation, windowing, theming, accessibility, responsiveness, performance, deployment, or related Windows app design and development work and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["winui-app", "bootstrap", "develop", "and", "design", "modern", "winui", "desktop"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "openai"
date_added: "2026-04-02"
date_updated: "2026-04-02"
---

# WinUI App

## Overview

This public intake copy packages `skills/.curated/winui-app` from `https://github.com/openai/skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# WinUI App Use this skill for WinUI 3 and Windows App SDK work that needs grounded setup guidance, app bootstrap, modern Windows UX decisions, or concrete implementation patterns.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Required Flow, Common Routes.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Bootstrap, develop, and design modern WinUI 3 desktop applications with C# and the Windows App SDK using official Microsoft guidance, WinUI Gallery patterns, Windows App SDK samples, and CommunityToolkit components.....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Required Flow

1. Classify the task as environment/setup, new-app bootstrap, design, implementation, review, or troubleshooting.
2. If the task is about preparing a machine for WinUI, auditing readiness, or creating a brand new app, start with the bundled setup-and-scaffold flow in this skill before broader design, implementation, or troubleshooting work:
   - Pick the app name when the request is for a new app.
   - Use the exact name the user gave when it is already a safe folder name.
   - If the user did not give a name, derive a short PascalCase name from the request and state what you chose.
   - Create the project in the user's current workspace unless they asked for another location.
   - Do not use `--force` unless the user explicitly asked to overwrite existing files.
   - Run the bundled WinGet configuration from the skill directory so the relative path stays exactly `config.yaml`:

```powershell
winget configure -f config.yaml --accept-configuration-agreements --disable-interactivity
```

   - Treat the configuration as intended to enable Developer Mode, install or update Visual Studio Community 2026, and install the Managed Desktop, Universal, and Windows App SDK C# components needed for WinUI development.
   - Assess the configuration result before continuing. Continue on success. If it fails, inspect the output instead of guessing. If the `winui` template is already available and the toolchain is usable, note the partial failure and continue. If prerequisites are still missing, stop and report the blocker clearly.
   - Verify the template is available before scaffolding:

```powershell
dotnet new list winui
```

   - For diagnostics-only environment requests, explain that the bundled bootstrap may change the machine and get confirmation before running it. If the user declines changes, use the manual verification guidance in `references/foundation-environment-audit-and-remediation.md` and summarize readiness under `present`, `missing`, `uncertain`, and `recommended optional tools`.
   - For a brand new app, scaffold with `dotnet new winui -o <name>`. Add template options only when the user asked for them. Supported options: `-f|--framework net10.0|net9.0|net8.0`, `-slnx|--use-slnx`, `-cpm|--central-pkg-mgmt`, `-mvvm|--use-mvvm`, `-imt|--include-mvvm-toolkit`, `-un|--unpackaged`, `-nsf|--no-solution-file`, `--force`. Do not invent unsupported flags. If the user asks for packaged behavior, pass `--unpackaged false`. Otherwise keep the template default.
   - Verify a new scaffold by confirming the expected project file exists and running `dotnet build` against the generated `.csproj`.
   - Launch a newly scaffolded app through the correct path for its actual packaging model and confirm there is a real top-level window instead of relying only on the launcher process exit code.
3. Read `references/_sections.md`, then load only the reference files that match the task.
4. Make the packaging model explicit before creating or refactoring the app. Default to packaged for Store-like product workflows and Visual Studio deploy/F5 flows. Default to unpackaged when the user expects repeatable CLI build-and-run loops or direct `.exe` launches after each change.
5. When the task is an opaque XAML compiler failure such as `MSB3073` or `XamlCompiler.exe`, read `references/foundation-template-first-recovery.md` and simplify back toward the current `dotnet new winui` scaffold for the chosen packaging model before inventing custom recovery structure.
6. For any work that creates or changes a WinUI app, make a complete but minimal edit set, then build the app and run it before responding to the user. Do this by default even when the user did not explicitly ask for verification. If a running app instance locks the output while more work remains, stop it, rebuild, relaunch, and continue verification. When the work is complete and launch verification succeeds, leave the final verified app instance running for the user unless they explicitly asked you not to.
7. Treat launch verification as incomplete until the app shows objective success signals such as a responsive top-level window, expected window title, or other clear startup behavior. A spawned process by itself is not enough.
8. Prefer Microsoft Learn for requirements, API expectations, and platform guidance.
9. Prefer WinUI Gallery for concrete control usage, shell composition, and design details.
10. Prefer WindowsAppSDK-Samples for scenario-level APIs such as windowing, lifecycle, notifications, deployment, and custom controls.
11. Build toward WinUI and Fluent guidance first. Treat native WinUI shells, controls, interactions, and control chrome as the default implementation path.
12. For grouped command surfaces such as document actions, editor formatting, view toggles, or page-level toolbars, favor a native `CommandBar` or other stock WinUI command surface before building a custom row with `Grid`, `StackPanel`, `Border`, or ad hoc button groupings.
13. Do not invent app-specific controls, bespoke component libraries, or custom chrome to replace stock WinUI behavior unless the user explicitly asks for that customization, the existing product design system already requires it, or a verified platform gap leaves no clean native option.
14. When customization is needed, first compose, template, or restyle built-in WinUI controls and system resources before adding CommunityToolkit dependencies or authoring a new custom control.
15. Use CommunityToolkit only when built-in WinUI controls or helpers do not cover the need cleanly.
16. Support both light and dark mode by default. Treat single-theme output as an exception that requires an explicit user request or an existing product constraint.
17. Use theme-aware resources, system brushes, and WinUI styling hooks instead of hard-coded light-only or dark-only colors when building or revising UI.
18. Make scroll ownership explicit for collection layouts. When a page already scrolls vertically, do not assume a nested `GridView` or other scroll-owning collection will still render a horizontal poster rail correctly.
19. Do not add extra `Border` wrappers around sections, lists, or cards unless the border is doing distinct work that the contained control or parent surface does not already provide. Avoid "double-card" compositions where a section `Border` wraps child items that already render as cards.
20. Treat responsiveness as a shell-plus-page problem, not only a control-resize problem. Plan explicit wide, medium, and phone-width behavior for navigation, padding, content density, and footer/tool regions, and simplify or hide nonessential UI as width shrinks.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @winui-app to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/winui-app/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/winui-app/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @winui-app using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Do not guess whether the machine is ready for WinUI development. Verify it.
- Use the bundled setup-and-scaffold flow in this skill for fresh setup, remediation, and first-project scaffolding instead of delegating to another skill.
- Treat config.yaml in this skill directory as the bundled bootstrap source of truth.
- Treat uncertain environment signals as uncertain, not as success.
- If the task is audit-only and the user declines machine changes, use the manual verification guidance in references/foundation-environment-audit-and-remediation.md and keep uncertain signals explicit instead of implying success.
- If config.yaml is missing, say so clearly and fall back to the official Microsoft workflow instead of pretending the bundled path exists.
- Keep environment readiness, packaging choice, and application startup verification as separate checks. Passing one does not prove the others.

### Imported Operating Notes

#### Imported: Environment Rules

- Do not guess whether the machine is ready for WinUI development. Verify it.
- Use the bundled setup-and-scaffold flow in this skill for fresh setup, remediation, and first-project scaffolding instead of delegating to another skill.
- Treat `config.yaml` in this skill directory as the bundled bootstrap source of truth.
- Treat uncertain environment signals as uncertain, not as success.
- If the task is audit-only and the user declines machine changes, use the manual verification guidance in `references/foundation-environment-audit-and-remediation.md` and keep uncertain signals explicit instead of implying success.
- If `config.yaml` is missing, say so clearly and fall back to the official Microsoft workflow instead of pretending the bundled path exists.
- Keep environment readiness, packaging choice, and application startup verification as separate checks. Passing one does not prove the others.
- Fail closed on ambiguous launch results. If the app did not clearly open, keep debugging.
- After creating or editing a WinUI app, do not stop at a successful build. Launch the app, confirm objective startup behavior, and leave the final verified app instance running before returning control to the user unless they explicitly say not to run it.

#### Imported: Reference Rules

- Keep C# as the primary path. Mention C++ or C++/WinRT only when the difference is material.
- Preserve the conventions of an existing codebase instead of forcing a generic sample structure onto it.
- Treat WinUI design guidance and native controls as the baseline. Do not drift into bespoke component systems or app-specific replacements for standard controls unless the user explicitly requests them or the existing codebase already depends on them.
- Support light and dark mode by default for app UI work unless the user explicitly asks for a single-theme result or the product already enforces one.
- Favor built-in WinUI controls and system styling hooks before adding CommunityToolkit dependencies, custom controls, or app-specific surface systems.
- Put detailed control, theming, shell, scrolling, responsiveness, packaging, and recovery guidance in the matching reference files instead of duplicating those rules here.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `skills/.curated/winui-app`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@aspnet-core` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@chatgpt-apps` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@develop-web-game` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@doc` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/_sections.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Common Routes

| Request | Read first |
| --- | --- |
| Check whether this PC can build WinUI apps | `references/foundation-environment-audit-and-remediation.md` |
| Install missing WinUI prerequisites | `references/foundation-environment-audit-and-remediation.md` |
| Start a new packaged or unpackaged app | `references/foundation-setup-and-project-selection.md` |
| Recover from opaque XAML compiler or startup failures while staying anchored to the template scaffold | `references/foundation-template-first-recovery.md` |
| Build, run, or verify that a WinUI app actually launched | `references/build-run-and-launch-verification.md` |
| Review app structure, pages, resources, and bindings | `references/foundation-winui-app-structure.md` |
| Choose shell, navigation, title bar, or multi-window patterns | `references/shell-navigation-and-windowing.md` |
| Choose controls or responsive layout patterns | `references/controls-layout-and-adaptive-ui.md` |
| Apply Mica, theming, typography, icons, or Fluent styling | `references/styling-theming-materials-and-icons.md` |
| Improve accessibility, keyboarding, or localization | `references/accessibility-input-and-localization.md` |
| Diagnose responsiveness or UI-thread performance | `references/performance-diagnostics-and-responsiveness.md` |
| Decide whether to use CommunityToolkit | `references/community-toolkit-controls-and-helpers.md` |
| Handle lifecycle, notifications, or deployment | `references/windows-app-sdk-lifecycle-notifications-and-deployment.md` |
| Run a review checklist | `references/testing-debugging-and-review-checklists.md` |
