---
name: "vercel-react-native-skills"
description: "React Native and Expo workflow skill. Use this skill when a user needs execution-oriented best practices for React Native or Expo apps, including performance, lists, animations, images, navigation, native configuration, and monorepo troubleshooting."
version: "0.0.1"
category: "frontend"
tags:
  - "vercel-react-native-skills"
  - "react-native"
  - "expo"
  - "performance"
  - "reanimated"
  - "flashlist"
  - "navigation"
  - "monorepo"
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
date_added: "2026-03-31"
date_updated: "2026-03-31"
upstream_skill: "skills/vercel-react-native-skills"
upstream_author: "vercel"
upstream_source: "community"
upstream_pr: "10"
upstream_head_repo: "diegosouzapw/omni-skills"
upstream_head_sha: "6694282a8c80060989f27612505ced763d291b76"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# React Native Skills

## Overview

This skill packages the upstream `skills/react-native-skills` workflow from `https://github.com/vercel-labs/agent-skills.git` into an Omni-ready execution kit without hiding its origin.

Use it for React Native and Expo tasks where the operator needs practical guidance, not just editorial summaries: performance reviews, list optimization, animation and gesture work, image handling, navigation choices, native configuration, font setup, and monorepo dependency troubleshooting.

This enhanced version preserves the upstream intent while adding sharper intake questions, a more operational workflow, local troubleshooting playbooks, and task-oriented references that help an agent act safely before proposing changes or handoff.

## When to Use This Skill

Use this skill when the task is primarily about app-layer React Native or Expo implementation quality.

- Building or reviewing a React Native or Expo application
- Diagnosing list jank, scroll lag, blank cells, or excessive rerenders
- Improving animation smoothness with Reanimated or gesture-heavy UI
- Choosing between Expo Go, development builds, prebuild, or bare React Native workflows
- Working with images, fonts, safe areas, or mobile interaction patterns
- Configuring native modules or Expo config plugins
- Debugging Metro or monorepo dependency-resolution issues in RN/Expo projects
- Modernizing navigation toward Expo Router or React Navigation native-stack patterns

Do not use this skill alone when the task is mainly:

- backend or API design
- App Store / Play Store submission or release operations
- deep native Android or iOS SDK debugging outside normal RN/Expo app-layer work
- general web React work with no mobile-specific constraints

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time triage | `scripts/print_react_native_triage_questions.py` | Standardizes intake so recommendations match app type, platform, and repro mode |
| Choosing Expo vs native workflow | `references/expo-workflow-decision-tree.md` | Distinguishes Expo Go, dev builds, prebuild, config plugins, and bare RN |
| Performance review | `references/react-native-performance-triage.md` | Anchors guidance in release-build validation and RN frame model |
| Large or janky lists | `references/list-performance-playbook.md` | Starts with FlatList tuning before escalating to FlashList |
| Animation or gesture issues | `references/animation-and-gestures-playbook.md` | Helps separate JS-thread work from UI-thread animation behavior |
| Native config, fonts, or modules | `references/expo-native-config-checklist.md` | Covers config-plugin and prebuild checks before suggesting fixes |
| Monorepo or Metro breakage | `references/monorepo-native-dependencies-checklist.md` | Gives safe checks for workspace layout and dependency placement |
| Symptom-led debugging | `references/troubleshooting-matrix.md` | Maps common RN/Expo failures to likely causes and checks |
| Upstream lineage review | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path |
| Handoff decision | `agents/omni-import-router.md` | Preserves provenance when work leaves this skill's scope |

## Workflow

1. **Triage the environment first.**
   - Identify whether the app is Expo Go, Expo development build, Expo prebuild-managed, or bare React Native.
   - Record target platforms, package manager, workspace layout, and whether the issue reproduces in debug, release, or both.
   - Use `python3 scripts/print_react_native_triage_questions.py` if the intake is incomplete.

2. **Check architecture-sensitive context.**
   - Verify React Native / Expo SDK versions when available.
   - Note whether the app uses the New Architecture if the task involves performance, gestures, animations, or native-library compatibility.
   - Treat architecture as context to verify, not as an automatic migration demand.

3. **Route to the correct operating path.**
   - For native modules, fonts, config plugins, or app config changes, start with `references/expo-native-config-checklist.md` and `references/expo-workflow-decision-tree.md`.
   - For list or feed issues, start with `references/list-performance-playbook.md`.
   - For animations or gesture conflicts, start with `references/animation-and-gestures-playbook.md`.
   - For bundling or workspace issues, start with `references/monorepo-native-dependencies-checklist.md`.

4. **Prefer safe, first-line fixes before escalation.**
   - Tune `FlatList` and row rendering before replacing it.
   - Prefer `transform` and `opacity` animations before layout-heavy animation changes.
   - Prefer current platform patterns such as `Pressable`, `react-native-safe-area-context`, native-stack navigation, and Expo-native tooling where appropriate.
   - Keep changes narrow and reversible.

5. **Validate in the right runtime.**
   - Performance guidance must be checked in release mode, not only debug mode.
   - Expo native-module or plugin changes must be validated in a development build or native build, not assumed to work in Expo Go.
   - If advice differs between debug and release, record that explicitly.

6. **Preserve provenance and note imported rules.**
   - Keep the upstream source and imported intent visible in your answer or review notes.
   - Use the upstream rule families below when you need the original categorization.

7. **Handoff when the task leaves this skill's center of gravity.**
   - Route to a more specialized release, backend, security, or native-debugging skill when needed.
   - Preserve the triage context so the next skill inherits useful constraints.

### Intake Questions

Ask these early when the prompt is underspecified:

- Is this Expo Go, Expo development build, Expo prebuild-managed, or bare React Native?
- Which platforms are affected: iOS, Android, or both?
- Which versions matter here: Expo SDK, React Native, navigation stack, Reanimated, Gesture Handler?
- Does the issue reproduce in release builds or only in debug?
- Is the task about lists, animations, images, navigation, native config, or monorepo resolution?
- Are native modules, custom fonts, or config plugins involved?
- Is this a monorepo, and if so, where do native dependencies live?

### Imported Workflow Notes

#### Imported: How to Use

Read individual rule files for detailed explanations and code examples when the task clearly maps to an upstream rule:

```text
rules/list-performance-virtualize.md
rules/animation-gpu-properties.md
```

Each upstream rule file typically contains:

- a concise explanation of why it matters
- an incorrect example with explanation
- a corrected example with explanation
- additional context and references

## Examples

### Example 1: Triage a React Native performance issue

```bash
python3 scripts/print_react_native_triage_questions.py
```

**Expected outcome:** A short intake checklist covering app type, platforms, versions, architecture, and repro mode.

### Example 2: Ask for a list-performance review

```text
Use @vercel-react-native-skills to review a janky feed in an Expo app. Start with the triage questions, verify whether the issue reproduces in release mode, use the list performance playbook, tune FlatList before suggesting FlashList, and summarize the most likely causes of rerenders or blank cells.
```

**Expected outcome:** A structured review that checks release-mode behavior, row memoization, keys, image loading, FlatList props, and only then recommends FlashList if justified.

### Example 3: Diagnose an Expo config-plugin change that is not showing up

```text
Use @vercel-react-native-skills to debug why a custom font and native module change works in code but not on device. Determine whether the project is running in Expo Go or a development build, verify config-plugin usage, check whether prebuild/regeneration is required, and list the minimum safe next steps.
```

**Expected outcome:** A diagnosis that distinguishes Expo Go limitations from plugin/prebuild issues and proposes narrow rebuild or regeneration steps instead of broad cleanup advice.

### Example 4: Investigate animation jank

```text
Use @vercel-react-native-skills to investigate stutter in a gesture-driven screen. Check whether the app uses Reanimated and Gesture Handler correctly, identify any JS-thread work happening during interaction, prefer transform/opacity animations where possible, and explain which fixes need release-build validation.
```

**Expected outcome:** A report that separates UI-thread and JS-thread concerns, flags worklet misuse or heavy JS work, and suggests focused changes.

### Example 5: Debug a monorepo resolution problem

```text
Use @vercel-react-native-skills to debug a React Native monorepo where Metro cannot resolve a shared package after adding a native dependency. Review workspace layout, dependency placement, version duplication risk, and Metro-related checks before proposing a fix.
```

**Expected outcome:** A monorepo-oriented diagnosis that checks app package ownership of native deps, dependency deduplication, and Metro/workspace drift without assuming one universal fix.

## Best Practices

### Do

- Start by identifying the execution environment: Expo Go, development build, prebuild-managed Expo, or bare React Native.
- Validate performance advice in release builds.
- Tune `FlatList` configuration and row rendering before replacing it.
- Use `Pressable` for modern touch interactions unless another primitive is clearly justified.
- Prefer `react-native-safe-area-context` patterns over the deprecated built-in `SafeAreaView`.
- Use `expo-image` for Expo projects when its caching and placeholder behavior fits the task.
- Prefer Reanimated and native-backed gesture handling for animation- or gesture-heavy UI.
- Use Expo config plugins for Expo-native configuration instead of ad hoc manual drift where possible.
- Keep native dependencies in the app package in monorepos and avoid multiple versions of the same native package.
- Record what runtime and build mode you validated.

### Don't

- Do not treat debug-mode jank as final evidence of production performance.
- Do not assume Expo Go can validate native modules, custom native configuration, or all config-plugin changes.
- Do not prescribe FlashList as the first move for every list.
- Do not force Expo Router on projects that already have a stable non-Expo navigation stack.
- Do not recommend layout-affecting animations first when `transform` or `opacity` can achieve the goal.
- Do not use the deprecated built-in `SafeAreaView` as new guidance.
- Do not hide unresolved native-build or release-engineering issues inside generic RN advice.

### Operating Priorities

| Priority | Category | Impact | Prefix |
| --- | --- | --- | --- |
| 1 | List Performance | CRITICAL | `list-performance-` |
| 2 | Animation | HIGH | `animation-` |
| 3 | Navigation | HIGH | `navigation-` |
| 4 | UI Patterns | HIGH | `ui-` |
| 5 | State Management | MEDIUM | `react-state-` |
| 6 | Rendering | MEDIUM | `rendering-` |
| 7 | Monorepo | MEDIUM | `monorepo-` |
| 8 | Configuration | LOW | `fonts-`, `imports-` |

### Modernized Guidance Notes

- **Lists:** Start with `FlatList` tuning such as item memoization, stable keys, `getItemLayout` where applicable, and conservative batching/window adjustments. Escalate to FlashList when the dataset is large or heterogeneous and first-line tuning still does not meet the need.
- **Animations:** Reanimated worklets and shared values should stay on the right side of JS/UI thread boundaries. Heavy JS during interaction can still cause perceived jank even if an animation is partly offloaded.
- **Images:** For Expo apps, consider `expo-image` when caching, placeholders, or transitions improve UX. For bare React Native, apply normal `Image` sizing and rendering discipline.
- **Navigation:** Prefer native-feeling stacks such as Expo Router for Expo file-based routing or React Navigation `native-stack` where appropriate to the existing stack.
- **Text rendering:** Keep text inside `Text` components and avoid implicit invalid nesting.

## Troubleshooting

### Problem: The issue appears only in debug mode

**Symptoms:** Animations feel slow in development, scrolling is janky only while the debugger or dev tooling is active, or performance conclusions change after a production build.

**Solution:** Re-test in a release build before recommending architectural changes. Use `references/react-native-performance-triage.md` to separate dev-mode overhead from real production issues. Record whether the repro is debug-only, release-only, or both.

### Problem: A native module, font, or config-plugin change does not appear on device

**Symptoms:** The code compiles, but the module is unavailable, the font does not load as expected, or app configuration changes do not show up.

**Solution:** Confirm whether the project is running in Expo Go or a development/native build. Expo Go cannot validate every native change. Then check config-plugin installation and whether a prebuild/regeneration step is required using `references/expo-native-config-checklist.md` and `references/expo-workflow-decision-tree.md`.

### Problem: Config plugin edits still do not take effect

**Symptoms:** `app.json`, `app.config.*`, or plugin parameters were changed, but native behavior remains stale after restarting JavaScript tooling.

**Solution:** Treat this as a native-configuration issue, not only a Metro issue. Verify that the change actually belongs in config plugins, then use the checklist to determine whether prebuild/regeneration and a fresh native rebuild are required. Avoid recommending destructive cleanup unless the symptom justifies it.

### Problem: A long list stutters, rerenders excessively, or shows blank cells

**Symptoms:** Scroll hitches, delayed cell rendering, image-heavy rows causing lag, unstable row identity, or visible blank areas during fast scroll.

**Solution:** Start with `references/list-performance-playbook.md`. Check stable keys, memoized row components, callback identity, image cost inside rows, `getItemLayout` where feasible, and FlatList batching/window settings. Escalate to FlashList only after first-line tuning is exhausted or the dataset characteristics clearly justify it.

### Problem: Animations are smooth alone but janky during interaction or data work

**Symptoms:** Reanimated transitions look fine in isolation but stutter when network responses, state updates, logging, or expensive computation happen at the same time.

**Solution:** Use `references/animation-and-gestures-playbook.md`. Inspect JS-thread work that overlaps with interaction, verify worklet/shared-value usage, and prefer `transform`/`opacity` animation targets. If gestures are involved, verify Gesture Handler and Reanimated integration before changing component structure.

### Problem: Metro cannot resolve packages or assets in a monorepo

**Symptoms:** Shared workspace packages resolve inconsistently, Metro cannot find files that exist, native packages behave differently across apps, or duplicate dependency versions appear.

**Solution:** Use `references/monorepo-native-dependencies-checklist.md`. Confirm that native dependencies live in the app package where appropriate, check for version duplication, and review workspace and Metro configuration drift. Prefer targeted dependency/layout checks over blanket cache-clearing advice.

### Problem: Safe area, touch behavior, or navigation guidance feels outdated

**Symptoms:** Recommendations rely on deprecated `SafeAreaView`, old touchable primitives, or vague “use native navigation” advice without matching the project stack.

**Solution:** Update recommendations to current patterns: `react-native-safe-area-context`, `Pressable`, Expo Router where the project already uses Expo file-based routing, or React Navigation `native-stack` where appropriate.

## Related Skills

Use related skills as handoff targets when the work stops being primarily React Native / Expo app-layer guidance.

- `@vercel-react-best-practices` - hand off when the work becomes mostly shared React architecture rather than mobile-specific behavior
- `@deploy-to-vercel` - hand off when the task becomes deployment, environment promotion, or release flow work rather than app implementation
- `@vercel-cli-with-tokens` - hand off when CLI authentication or platform operations dominate the task
- `@vercel-composition-patterns` - hand off when the problem shifts toward system composition patterns rather than RN/Expo execution details

If the task becomes native iOS/Android build-system debugging, store-submission work, or backend/API design, explicitly state that this skill is no longer sufficient on its own.

## Additional Resources

### Local support pack

- [Expo workflow decision tree](references/expo-workflow-decision-tree.md)
- [React Native performance triage](references/react-native-performance-triage.md)
- [List performance playbook](references/list-performance-playbook.md)
- [Animation and gestures playbook](references/animation-and-gestures-playbook.md)
- [Expo native config checklist](references/expo-native-config-checklist.md)
- [Monorepo native dependencies checklist](references/monorepo-native-dependencies-checklist.md)
- [Troubleshooting matrix](references/troubleshooting-matrix.md)
- [List performance review prompt](examples/list-performance-review-prompt.md)
- [Expo config-plugin change prompt](examples/expo-config-plugin-change-prompt.md)
- [Animation jank investigation prompt](examples/animation-jank-investigation-prompt.md)
- [Monorepo resolution debug prompt](examples/monorepo-resolution-debug-prompt.md)
- [Print triage questions](scripts/print_react_native_triage_questions.py)
- [Print origin details](scripts/omni_import_print_origin.py)

### Upstream import support retained for provenance

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Quick Reference

### 1. List Performance (CRITICAL)

- `list-performance-virtualize` - Use FlashList for large lists when first-line FlatList tuning is insufficient
- `list-performance-item-memo` - Memoize list item components
- `list-performance-callbacks` - Stabilize callback references
- `list-performance-inline-objects` - Avoid inline style objects in hot render paths
- `list-performance-function-references` - Extract functions outside render when they churn identity
- `list-performance-images` - Optimize images in lists
- `list-performance-item-expensive` - Move expensive work outside items
- `list-performance-item-types` - Use item types for heterogeneous lists

### 2. Animation (HIGH)

- `animation-gpu-properties` - Prefer transform and opacity animations
- `animation-derived-value` - Use `useDerivedValue` for computed animated state where appropriate
- `animation-gesture-detector-press` - Use gesture primitives deliberately for gesture-heavy interactions

### 3. Navigation (HIGH)

- `navigation-native-navigators` - Prefer native-feeling navigation patterns such as native-stack where appropriate

### 4. UI Patterns (HIGH)

- `ui-expo-image` - Consider `expo-image` for Expo projects when it improves caching or placeholders
- `ui-image-gallery` - Use image-gallery tooling only if it fits the project's existing stack
- `ui-pressable` - Use `Pressable` over legacy touchables in typical cases
- `ui-safe-area-scroll` - Handle safe areas correctly in scrollable layouts
- `ui-scrollview-content-inset` - Use content inset strategies carefully for headers where appropriate
- `ui-menus` - Prefer native-feeling menus when the platform and project support them
- `ui-native-modals` - Use native modals when appropriate
- `ui-measure-views` - Prefer layout callbacks such as `onLayout` over ad hoc measurement calls when practical
- `ui-styling` - Use stable styling patterns such as `StyleSheet.create` or approved project conventions

### 5. State Management (MEDIUM)

- `react-state-minimize` - Minimize state subscriptions
- `react-state-dispatcher` - Use dispatcher patterns when they reduce callback churn
- `react-state-fallback` - Show a safe fallback on first render
- `react-compiler-destructure-functions` - Destructure carefully if the project relies on React Compiler assumptions
- `react-compiler-reanimated-shared-values` - Handle shared values carefully when compiler interactions matter

### 6. Rendering (MEDIUM)

- `rendering-text-in-text-component` - Wrap text in `Text` components
- `rendering-no-falsy-and` - Avoid brittle falsy `&&` rendering for user-visible content

### 7. Monorepo (MEDIUM)

- `monorepo-native-deps-in-app` - Keep native dependencies in the app package
- `monorepo-single-dependency-versions` - Use single versions across packages where possible

### 8. Configuration (LOW)

- `fonts-config-plugin` - Use config plugins for custom fonts in Expo apps
- `imports-design-system-folder` - Organize design-system imports clearly
- `js-hoist-intl` - Hoist expensive `Intl` object creation when repeated work is measurable

#### Imported: Full Compiled Document

For the complete upstream guide with all rules expanded: `AGENTS.md`
