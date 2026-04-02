---
name: "react-native-expert"
description: "React Native Expert workflow skill. Use this skill when the user needs a senior React Native and Expo engineer for production-ready cross-platform mobile apps, including Expo Router navigation, list and scroll performance, Reanimated animations, platform-specific iOS/Android behavior, native module integration, Expo runtime decisions, and release-minded mobile implementation. Do NOT use for Flutter, web-only React, backend-only Node.js, or deep custom Swift/Kotlin platform work beyond light integration guidance."
version: "0.0.1"
category: "fullstack-web"
tags:
  - "react-native-expert"
  - "react-native"
  - "expo"
  - "expo-router"
  - "reanimated"
  - "mobile"
  - "ios"
  - "android"
  - "cross-platform"
  - "performance"
  - "native-modules"
  - "flashlist"
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
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/react-native-expert"
upstream_author: "Felipe Rodrigues - github.com/felipfr"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# React Native Expert

## Overview

This skill packages the upstream React Native and Expo workflow from `packages/skills-catalog/skills/(development)/react-native-expert` in `https://github.com/tech-leads-club/agent-skills.git` while keeping its origin visible.

Use it when the operator needs a production-minded React Native and Expo implementation workflow, not generic frontend advice. It is designed for agents working on cross-platform mobile apps with Expo Router, native-feeling navigation, list and animation performance, platform-specific behavior, supported native module integration, and delivery readiness.

This curated version preserves the upstream intent but adds a more explicit execution workflow, safer version-sensitive guidance, stronger troubleshooting, clearer Expo runtime boundaries, and a support pack that helps agents act decisively before editing code.

## When to Use This Skill

Use this skill when the task involves one or more of the following:

- Building or modifying React Native or Expo screens, components, hooks, or app flows.
- Implementing or restructuring navigation with Expo Router, layouts, route groups, dynamic routes, redirects, or typed routes.
- Diagnosing slow lists, janky scrolling, unnecessary re-renders, or animation issues.
- Handling platform-specific iOS and Android behavior such as safe areas, keyboard overlap, back button behavior, permissions, or presentation differences.
- Integrating supported native modules or Expo config plugins and deciding whether Expo Go, a development build, or prebuild/rebuild is required.
- Preparing a React Native or Expo app for release validation, signing, updates, or store-facing readiness.
- Reviewing mobile implementation quality with an explicit checklist and troubleshooting packet.

## Do Not Use This Skill

Do not use this skill for:

- Flutter or native Dart work.
- Web-only React applications with no React Native or Expo target.
- Backend-only Node.js, API, database, or infrastructure work.
- Pure app store policy, legal, privacy-policy, or compliance interpretation.
- Deep custom Swift, Kotlin, Gradle, CocoaPods, or Xcode engineering beyond light Expo/React Native integration guidance.

If the task becomes primarily native platform engineering, hand off with context to a native iOS or Android specialist after documenting the current Expo/RN setup, package versions, and reproduction steps.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New React Native / Expo task | `references/native-runtime-boundaries.md` | Establishes whether the task fits Expo Go, needs a development build, or requires native rebuilds |
| Navigation or auth flow work | `references/expo-router-patterns.md` | Gives mature Expo Router patterns for layouts, params, redirects, and typed routes |
| Janky lists or slow rendering | `references/performance-tuning.md` | Provides a practical tuning flow based on official RN performance guidance |
| Platform behavior review | `references/permissions-and-platform-checklist.md` | Covers permissions, safe area, keyboard, status bar, and Android back behavior |
| Storage or secret handling | `references/security-storage.md` | Clarifies public env vars, SecureStore boundaries, and non-secret local persistence |
| Release or ship decision | `references/release-readiness.md` | Gives build, signing, OTA update, and validation checkpoints |
| Runtime failure or broken setup | `references/mobile-runtime-triage.md` | Provides a concrete diagnostic path for Metro, Reanimated, RNGH, permissions, and rebuild issues |
| Source lineage verification | `scripts/omni_import_print_origin.py` | Confirms upstream repository, branch, commit, and imported path |
| Support-pack inventory | `scripts/omni_import_list_support_pack.py` | Shows the operator which local references and examples are available |

## Workflow

Follow this sequence for implementation, review, and handoff.

### 1. Triage the task

Before writing code, identify:

- Expo SDK and React Native baseline already used by the project.
- Whether the app uses Expo Router today.
- Target platforms: iOS, Android, or both.
- Whether the task affects navigation, lists, gestures, animations, storage, permissions, app config, or native modules.
- Whether the result must be validated in release mode or on real devices.

If the task includes native modules, config plugins, permissions, app.json/app.config changes, build properties, or any native dependency setup, do not assume Expo Go is enough.

### 2. Choose the runtime path

Use `references/native-runtime-boundaries.md`.

- Use **Expo Go** only for supported JavaScript-only work already compatible with that runtime.
- Use a **development build** when adding native modules, plugins, or behaviors not supported by Expo Go.
- Use **prebuild + rebuild** when native project generation or native configuration changes are required.

Hot reload is not a substitute for rebuilding after native changes.

### 3. Plan routes, layouts, and screen boundaries

For Expo Router work, use `references/expo-router-patterns.md`.

- Model the route tree first.
- Use `_layout.tsx` files deliberately.
- Prefer clear route groups over ad hoc navigation sprawl.
- Use typed routes and route params when the project supports them.
- Use redirects and protected-route patterns for auth flows instead of scattered imperative navigation.

### 4. Implement with native-first React Native patterns

- Prefer native-feeling navigation and presentation patterns.
- Use `Platform.select()` or `.ios.tsx` / `.android.tsx` file splits only when behavior genuinely differs.
- Wrap raw strings in `<Text>`.
- Avoid rendering potentially falsy non-boolean values directly with `&&` outside text contexts.
- Use TypeScript types for component props, navigation params, and public interfaces.

### 5. Handle performance-sensitive surfaces deliberately

Use `references/performance-tuning.md`.

- For dynamic or potentially large collections, start with `FlatList`, `SectionList`, or another virtualized list.
- Consider FlashList when profiling or product constraints justify it.
- Avoid `ScrollView` with `.map()` for large or unbounded dynamic lists where virtualization is needed.
- Keep list rows lightweight and stable.
- Test performance in release mode, not only in development mode.
- For animations, prefer transform and opacity changes over layout-heavy animated properties when smoothness matters.

### 6. Validate platform behavior

Use `references/permissions-and-platform-checklist.md`.

Confirm:

- Safe areas and notch behavior.
- Keyboard behavior for forms and input-heavy screens.
- Android back handling in custom flows.
- Permission declarations plus runtime prompts.
- Status bar, modal, and presentation differences.
- Gesture behavior on actual devices.

### 7. Validate builds and runtime integration

Use `references/mobile-runtime-triage.md` if anything behaves unexpectedly.

Check:

- `expo doctor` for dependency alignment.
- Whether a rebuild is required after config/plugin/native dependency changes.
- Reanimated and RNGH installation expectations.
- Metro cache or resolver issues only after confirming version/config mismatch is not the true cause.

### 8. Prepare handoff or ship

When returning results, provide:

1. Component or screen code with TypeScript types.
2. Platform-specific handling where differences exist.
3. Navigation integration if the change affects routes or screens.
4. Performance notes for list, rendering, image, or animation-sensitive changes.
5. Build/rebuild notes if native/runtime boundaries were crossed.
6. Validation notes describing what was tested and what still requires device or release-mode verification.

## Technology Stack Notes

Treat stack details as project-baseline-dependent, not universal truth. Verify the app's actual Expo SDK and React Native versions before using newer APIs or patterns.

| Layer | Preferred direction | Notes |
| --- | --- | --- |
| Framework | React Native | Check the project baseline before using version-sensitive APIs |
| Platform | Expo | Confirm SDK support before applying newer Router or native-tabs patterns |
| Router | Expo Router | Prefer file-based routing, layouts, params, redirects, and typed routes where available |
| Language | TypeScript | Use strict typing where the project permits it |
| Animation | Reanimated | Follow the project's installed version and setup requirements |
| Gestures | React Native Gesture Handler | Verify installation and root-view setup |
| Lists | FlatList / SectionList by default; FlashList when justified | Choose based on profiling, data size, and UX needs |
| Images | `expo-image` strongly preferred in Expo apps | React Native `Image` remains valid in some non-Expo or compatibility cases |
| Storage | SecureStore for sensitive material; MMKV or similar for non-sensitive local state | Never treat client storage as secret-safe by default |
| Navigation | Native stack patterns | Prefer native-feeling navigation over JS-heavy substitutes when appropriate |

### Version-sensitive guidance

- Do not assume every project has the latest React Native, Expo Router, or Reanimated behavior.
- Treat advanced styling APIs and newer React/compiler-related claims as compatibility-dependent.
- If using newer Reanimated APIs or access patterns, match the installed version and current project conventions.
- If a recommendation depends on a specific Expo SDK or RN version, say so explicitly in the implementation notes.

## Examples

### Example 1: Route an Expo navigation task correctly

```text
Use @react-native-expert to add an authenticated settings flow in an Expo Router app.
First determine whether the project already uses Expo Router typed routes and whether auth redirects belong in layout files.
Then propose the route tree, implement the screens, and include rebuild notes only if native dependencies or config changed.
```

### Example 2: Diagnose a janky list

```text
Use @react-native-expert to review a React Native feed screen with slow scrolling on Android.
Check whether it uses ScrollView for dynamic content, identify unnecessary row re-renders, recommend FlatList tuning first, and only suggest FlashList if profiling justifies it.
Return code changes plus release-mode validation steps.
```

### Example 3: Verify native runtime boundaries before coding

```bash
python3 skills/react-native-expert/scripts/omni_import_print_origin.py
python3 skills/react-native-expert/scripts/omni_import_list_support_pack.py
```

Use this when you need provenance plus a quick inventory of the local support pack before implementation or review.

### Example 4: Ask for a protected-route implementation packet

```text
Use @react-native-expert to implement protected routes in Expo Router.
Use route groups, redirects, and typed links where supported.
Explain where auth state should live, how unauthorized users are redirected, and what must be tested on both iOS and Android.
```

See also:

- `examples/router-auth-flow-example.md`
- `examples/list-performance-review-prompt.md`
- `examples/native-module-integration-checklist.md`

## Best Practices

### Do

- Clarify requirements, target platforms, and runtime constraints before coding.
- Keep code changes surgical and consistent with existing project structure.
- Prefer native-feeling navigation, gestures, modals, and presentation patterns.
- Use platform-specific files or `Platform.select()` only when needed.
- Test assumptions on both iOS and Android when behavior can differ.
- Use virtualized lists for dynamic or potentially large datasets.
- Keep list items lightweight and avoid expensive render-time work.
- Measure performance in release mode when diagnosing smoothness issues.
- Use `expo-image` strongly by default in Expo projects that already depend on it.
- Use SecureStore for sensitive values that must exist on-device.
- Keep private secrets off the client entirely whenever possible.
- Document when a rebuild, prebuild, or development build is required.

### Do not

- Do not use this skill as a substitute for backend, Flutter, or deep native platform engineering.
- Do not assume Expo Go supports every native integration.
- Do not clear caches first and ask questions later.
- Do not put secrets in `EXPO_PUBLIC_` variables or client bundles.
- Do not use `ScrollView` plus `.map()` for large or unbounded lists that need virtualization.
- Do not evaluate list or animation performance only in development mode.
- Do not rely on hot reload after native/plugin/config changes.
- Do not ignore permission declarations just because prompts worked in development.
- Do not hardcode platform behavior without testing safe area, keyboard, and back-navigation cases.

### Critical implementation rules

#### Rendering safety

**Wrap strings in `<Text>`** and avoid directly rendering falsy non-boolean values outside text contexts.

```tsx
// Risky if count can be 0
{count && <Text>{count} items</Text>}

// Safer
{count ? <Text>{count} items</Text> : null}
```

#### Navigation

- Prefer Expo Router patterns when the app already uses Expo Router.
- Keep navigation structure file-based and predictable.
- Use redirects, params, and typed routes where available instead of ad hoc string navigation scattered across screens.

#### Lists and rendering

- Use `FlatList`, `SectionList`, or equivalent virtualization for dynamic collections.
- Consider FlashList for higher-volume feeds if profiling shows benefit.
- Keep row components small, memoization-aware, and free of avoidable heavy work.
- Use stable keys and avoid unnecessary object churn passed into rows.

#### Animation

- Prefer transform and opacity animation for smooth UI motion.
- Keep state as state; derive visual outputs from that state.
- Follow the installed Reanimated version and setup instructions before adopting version-specific API preferences.

#### Images

- In Expo apps, prefer `expo-image` when its caching, placeholders, or transitions improve UX.
- Do not claim React Native core `Image` is universally invalid; use what fits the project's runtime and dependency model.

#### Storage and secrets

- Sensitive tokens or credentials should be server-managed whenever possible.
- If the client must store sensitive session material, prefer SecureStore.
- Fast local state stores such as MMKV are appropriate for non-sensitive data only unless the project has explicitly designed and reviewed a secure handling model.

## Troubleshooting

### Problem: Native change did not appear after editing config or installing a package

**Symptoms:** A plugin, permission, native dependency, or app config change was made, but the app still behaves like nothing changed.

**Solution:** Confirm whether the change crosses the native/runtime boundary. If it does, use the development build or prebuild/rebuild path from `references/native-runtime-boundaries.md`. Do not assume fast refresh or Expo Go can apply native changes.

### Problem: Metro or bundling became inconsistent after dependency or config changes

**Symptoms:** Imports suddenly fail, resolution changes behave oddly, or the app runs with stale behavior.

**Solution:** Run `expo doctor` first to check dependency alignment. Review Metro and package configuration changes deliberately. Only clear the Metro cache as a targeted step after confirming the issue is not a version mismatch or incorrect config.

### Problem: Reanimated fails at build time or runtime

**Symptoms:** Worklets do not run, animations crash, or Babel/setup-related errors appear.

**Solution:** Verify the installed Reanimated version, setup steps, and project configuration. Confirm any required Babel/plugin setup and rebuild the app if installation or native integration changed. Use `references/mobile-runtime-triage.md`.

### Problem: Gestures do not work or gesture-enabled screens crash

**Symptoms:** Swipe gestures fail, gesture-driven components break, or navigation/gesture interactions behave inconsistently.

**Solution:** Check React Native Gesture Handler installation and root view setup, then rebuild if setup changed. Confirm the issue on an actual device, not only in a simulator.

### Problem: List feels slow or blanks while scrolling

**Symptoms:** Dropped frames, delayed row rendering, blank content while scrolling, or severe jank on Android.

**Solution:** Test in release mode first. Then verify virtualization, stable keys, item complexity, image cost, and list tuning parameters such as batching and windowing. Start with `references/performance-tuning.md`. Consider FlashList only if the measured case warrants it.

### Problem: Keyboard overlaps fields or Android back behavior is wrong

**Symptoms:** Forms are obscured by the keyboard, dismiss behavior is inconsistent, or Android hardware back breaks custom navigation flows.

**Solution:** Use `KeyboardAvoidingView` or the project's established keyboard-safe pattern, validate safe area behavior, and implement `BackHandler` carefully for custom flows. Re-test on real devices.

### Problem: Permission works in development but fails in standalone or production builds

**Symptoms:** A feature works in dev, but camera, media, notifications, or location behavior fails in a development build or release build.

**Solution:** Verify permission declarations in Expo config and platform-specific manifests/Info.plist equivalents, then rebuild. Runtime prompts alone are not enough if static declarations are missing.

### Problem: The task drifted out of React Native / Expo scope

**Symptoms:** The work has become mostly backend, legal/compliance, or deep native Swift/Kotlin/Xcode/Gradle debugging.

**Solution:** Hand off deliberately with context. Include the Expo SDK, RN version, installed packages, failing behavior, and the steps already tried so the next specialist does not start blind.

## Related Skills

Use adjacent skills when this one reaches its boundary:

- `@accessibility` for mobile accessibility audits and remediation.
- `@testing` or `@qa` for deeper test-plan design, regression strategy, and device-matrix coverage.
- `@security-review` for mobile auth, token, secret-handling, or release security review.
- `@performance` for broader profiling or performance investigation beyond app-level implementation changes.
- `@ios` or `@android` specialist skills when the task becomes deep native platform work.
- `@release-engineering` or app-store/release submission skills when delivery is primarily operational rather than implementation-driven.

## Additional Resources

Use these local references before improvising:

| Resource family | Purpose | Example |
| --- | --- | --- |
| `references` | Operational playbooks and checklists | `references/expo-router-patterns.md` |
| `examples` | Reusable task packets and review prompts | `examples/router-auth-flow-example.md` |
| `scripts` | Origin and support-pack inspection | `scripts/omni_import_print_origin.py` |
| `agents` | Handoff and routing guidance | `agents/omni-import-router.md` |

### Core references

- [Expo Router patterns](references/expo-router-patterns.md)
- [Performance tuning](references/performance-tuning.md)
- [Native runtime boundaries](references/native-runtime-boundaries.md)
- [Security and storage](references/security-storage.md)
- [Permissions and platform checklist](references/permissions-and-platform-checklist.md)
- [Release readiness](references/release-readiness.md)
- [Mobile runtime triage](references/mobile-runtime-triage.md)

### Imported lineage and support files

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Example packets

- [Router auth flow example](examples/router-auth-flow-example.md)
- [List performance review prompt](examples/list-performance-review-prompt.md)
- [Native module integration checklist](examples/native-module-integration-checklist.md)
