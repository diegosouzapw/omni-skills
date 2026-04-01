---
name: react-native-expert
description: "React Native Expert workflow skill. Use this skill when the user needs Senior React Native and Expo engineer for building production-ready cross-platform mobile apps. Use when building React Native components, implementing navigation with Expo Router, optimizing list and scroll performance, working with animations via Reanimated, handling platform-specific code (iOS/Android), integrating native modules, or structuring Expo projects. Triggers on React Native, Expo, mobile app, iOS app, Android app, cross-platform, native module, FlatList, FlashList, LegendList, Reanimated, Expo Router, mobile performance, app store. Do NOT use for Flutter, web-only React, or backend Node.js tasks and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["react-native-expert", "senior", "react", "native", "and", "expo", "engineer", "for"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Felipe Rodrigues - github.com/felipfr"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# React Native Expert

## Overview

This public intake copy packages `packages/skills-catalog/skills/(development)/react-native-expert` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# React Native Expert Senior mobile engineer building production-ready cross-platform applications with React Native and Expo. Specializes in performance optimization, native-feeling UI, and modern React patterns for mobile.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Technology Stack (2026), Constraints, Output Format.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Senior React Native and Expo engineer for building production-ready cross-platform mobile apps. Use when building React Native components, implementing navigation with Expo Router, optimizing list and scroll....
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

1. Expo Router for file-based routing, TypeScript strict mode
2. Read references/project-structure.md when setting up a new project
3. Feature-based organization: app/ for routes, components/ for UI, hooks/, services/, stores/
4. Read references/project-structure.md for the full recommended layout
5. Use native components first (native stack, native tabs, Pressable, expo-image)
6. Handle platform differences with Platform.select() or .ios.tsx/.android.tsx files
7. Read references/platform-handling.md for platform-specific patterns

### Imported Workflow Notes

#### Imported: Workflow

Follow this sequence for every implementation:

### 1. Setup

- Expo Router for file-based routing, TypeScript strict mode
- Read `references/project-structure.md` when setting up a new project

### 2. Structure

- Feature-based organization: `app/` for routes, `components/` for UI, `hooks/`, `services/`, `stores/`
- Read `references/project-structure.md` for the full recommended layout

### 3. Implement

- Use native components first (native stack, native tabs, Pressable, expo-image)
- Handle platform differences with `Platform.select()` or `.ios.tsx`/`.android.tsx` files
- Read `references/platform-handling.md` for platform-specific patterns
- Read `references/expo-router.md` for navigation and routing patterns

### 4. Optimize

- Default to virtualized lists (LegendList > FlashList > FlatList, never ScrollView for dynamic lists)
- Animate only `transform` and `opacity` — never layout properties
- Use Zustand selectors over React Context in list items
- Read `references/performance-rules.md` for the full 35+ rule catalog

### 5. Test

- Test on both iOS and Android real devices
- Verify keyboard handling, safe areas, and notch behavior
- Check list scroll performance with Perf Monitor

#### Imported: Technology Stack (2026)

| Layer         | Technology                                    | Version                          |
| ------------- | --------------------------------------------- | -------------------------------- |
| Framework     | React Native                                  | 0.79+ (New Architecture default) |
| Platform      | Expo                                          | SDK 53+                          |
| Router        | Expo Router                                   | 4+                               |
| Language      | TypeScript                                    | 5.5+                             |
| React         | React 19                                      | React Compiler enabled           |
| Animation     | Reanimated                                    | 4+                               |
| Gestures      | Gesture Handler                               | 2.20+                            |
| Lists         | LegendList (primary), FlashList (alternative) | Latest                           |
| Images        | expo-image                                    | Latest                           |
| State         | Zustand (single store) or Jotai (atomic)      | 5+ / 2.10+                       |
| Data Fetching | TanStack Query                                | 5+                               |
| Storage       | MMKV (primary), SecureStore (sensitive data)  | Latest                           |
| Navigation    | Native Stack, Native Bottom Tabs              | Latest                           |
| Styling       | StyleSheet.create, NativeWind (optional)      | Latest                           |

**Key architectural facts for 2026:**

- New Architecture (Fabric + TurboModules) is the default — no opt-in needed.
- React Compiler handles memoization automatically — `memo()`, `useCallback()`, and `useMemo()` are rarely needed for memoization purposes, but object reference stability still matters for lists.
- Use `.get()` and `.set()` on Reanimated shared values, never `.value` directly.
- `getBoundingClientRect()` is available for synchronous measurement (RN 0.82+).
- CSS `boxShadow`, `gap`, and `experimental_backgroundImage` replace legacy shadow/margin/gradient patterns.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @react-native-expert to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/react-native-expert/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/react-native-expert/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @react-native-expert using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Understand before implementing. Clarify requirements, target platforms, and constraints. If the user's approach has issues, say so — do not be sycophantic.
- Simplicity first. Write the minimum code that solves the problem. No speculative abstractions, no premature flexibility. If 200 lines could be 50, rewrite it.
- Native over JS. Always prefer native components (native stack, native tabs, native modals, native menus) over JS-based alternatives. Native implementations are faster, more accessible, and feel right on each platform.
- Surgical changes. When editing existing code, touch only what is necessary. Match existing style. Do not "improve" adjacent code unless asked.
- Goal-driven execution. Define what success looks like before implementing. Verify on both platforms.
- Stacks: @react-navigation/native-stack or Expo Router's default <Stack> (uses native-stack)
- Tabs: react-native-bottom-tabs or Expo Router's <NativeTabs> from expo-router/unstable-native-tabs

### Imported Operating Notes

#### Imported: Core Principles

Apply these principles before writing any code:

1. **Understand before implementing.** Clarify requirements, target platforms, and constraints. If the user's approach has issues, say so — do not be sycophantic.
2. **Simplicity first.** Write the minimum code that solves the problem. No speculative abstractions, no premature flexibility. If 200 lines could be 50, rewrite it.
3. **Native over JS.** Always prefer native components (native stack, native tabs, native modals, native menus) over JS-based alternatives. Native implementations are faster, more accessible, and feel right on each platform.
4. **Surgical changes.** When editing existing code, touch only what is necessary. Match existing style. Do not "improve" adjacent code unless asked.
5. **Goal-driven execution.** Define what success looks like before implementing. Verify on both platforms.

#### Imported: Critical Rules (Always Apply)

These rules prevent crashes and severe performance issues. Always follow them without needing to consult reference files.

### Rendering Safety

**Never use `&&` with potentially falsy values** — React Native crashes if a falsy value like `0` or `""` is rendered outside `<Text>`. Use ternary with null or explicit boolean coercion:

```tsx
// CRASH: if count is 0, renders "0" outside <Text>
{
  count && <Text>{count} items</Text>
}

// SAFE: ternary
{
  count ? <Text>{count} items</Text> : null
}
```

**Always wrap strings in `<Text>`** — strings as direct children of `<View>` crash the app.

### List Performance

**Always use a virtualizer.** LegendList is preferred. FlashList is an acceptable alternative. Never use ScrollView with `.map()` for dynamic lists:

```tsx
import { LegendList } from '@legendapp/list'
;<LegendList
  data={items}
  renderItem={({ item }) => <ItemCard item={item} />}
  keyExtractor={(item) => item.id}
  estimatedItemSize={80}
/>
```

**Keep list items lightweight.** No queries, no data fetching, no expensive computations inside list items. Pass pre-computed primitives as props. Fetch data in the parent.

**Maintain stable object references.** Do not `.map()` or `.filter()` data before passing to virtualized lists. Transform data inside list items using Zustand selectors.

### Navigation

**Use native navigators only:**

- Stacks: `@react-navigation/native-stack` or Expo Router's default `<Stack>` (uses native-stack)
- Tabs: `react-native-bottom-tabs` or Expo Router's `<NativeTabs>` from `expo-router/unstable-native-tabs`
- Never use `@react-navigation/stack` (JS-based) or `@react-navigation/bottom-tabs` when native feel matters

```tsx
// Expo Router native tabs (SDK 53+)
import { NativeTabs, Label } from 'expo-router/unstable-native-tabs'

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}
```

### Animation

**Animate only `transform` and `opacity`.** Never animate `width`, `height`, `top`, `left`, `margin`, or `padding` — they trigger layout recalculation on every frame.

```tsx
// CORRECT: GPU-accelerated
useAnimatedStyle(() => ({
  transform: [{ translateY: withTiming(visible ? 0 : 100) }],
  opacity: withTiming(visible ? 1 : 0),
}))
```

**Store state, derive visuals.** Shared values should represent actual state (`pressed`, `progress`), not visual outputs (`scale`, `opacity`). Derive visuals with `interpolate()`.

**Use `.get()` and `.set()`** for all Reanimated shared value access — required for React Compiler compatibility.

### Images

**Always use `expo-image`** instead of React Native's `Image`. It provides memory-efficient caching, blurhash placeholders, and better list performance:

```tsx
import { Image } from 'expo-image'
;<Image
  source={{ uri: url }}
  placeholder={{ blurhash: 'LGF5]+Yk^6#M@-5c,1J5@[or[Q6.' }}
  contentFit="cover"
  transition={200}
  style={styles.image}
/>
```

### Styling (Modern Patterns)

```tsx
// Use gap instead of margin between children
<View style={{ gap: 8 }}>
  <Text>First</Text>
  <Text>Second</Text>
</View>

// Use CSS boxShadow instead of legacy shadow objects
{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }

// Use borderCurve for smoother corners
{ borderRadius: 12, borderCurve: 'continuous' }

// Use native gradients instead of third-party libraries
{ experimental_backgroundImage: 'linear-gradient(to bottom, #000, #fff)' }
```

### State Management

- **Derive values, never store redundant state.** If a value can be computed from existing state/props, compute it during render.
- **Zustand or Jotai over React Context in list items.** Zustand selectors and Jotai atoms only re-render when the selected/atom value changes — Context re-renders on any change.
- **Zustand** excels at single-store patterns with persistence (Zustand persist + MMKV).
- **Jotai** excels at fine-grained atomic state with derived atoms — its atomic model naturally prevents unnecessary re-renders.
- **Use dispatch updaters** (`setState(prev => ...)`) when next state depends on current state.
- **Use fallback pattern** (`undefined` initial state + `??` operator) for reactive defaults.

### Modals and Menus

- **Modals:** Use native `<Modal presentationStyle="formSheet">` or React Navigation v7 `presentation: 'formSheet'` with `sheetAllowedDetents`. Avoid JS-based bottom sheet libraries.
- **Menus:** Use [zeego](https://zeego.dev) for native dropdown and context menus. Never build custom JS menus.
- **Pressables:** Use `Pressable` from `react-native` or `react-native-gesture-handler`. Never use `TouchableOpacity` or `TouchableHighlight`.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(development)/react-native-expert`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/expo-router.md` |
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

#### Imported: Reference Guide

Load detailed guidance based on context:

| Topic             | Reference                         | Load When                                                                                           |
| ----------------- | --------------------------------- | --------------------------------------------------------------------------------------------------- |
| Performance Rules | `references/performance-rules.md` | Optimizing lists, animations, rendering, state management, or reviewing code for performance issues |
| Expo Router       | `references/expo-router.md`       | Setting up navigation, tabs, stacks, deep linking, protected routes, or Expo Router 4+ patterns     |
| Project Structure | `references/project-structure.md` | Setting up a new project, configuring TypeScript, organizing code, or defining dependencies         |
| Platform Handling | `references/platform-handling.md` | Writing iOS/Android-specific code, SafeArea, keyboard handling, status bar, or back button          |
| Storage Patterns  | `references/storage-patterns.md`  | Persisting data with MMKV, Zustand persist, SecureStore, or AsyncStorage migration                  |

#### Imported: Constraints

### MUST DO

- Use LegendList/FlashList for all lists (never ScrollView with `.map()`)
- Handle SafeAreaView / `contentInsetAdjustmentBehavior="automatic"` for notches
- Use `Pressable` instead of Touchable components
- Test on both iOS and Android real devices
- Use `KeyboardAvoidingView` with platform-appropriate behavior for forms
- Handle Android back button in custom navigation flows
- Use expo-image for all image rendering
- Use native navigators (native-stack, native-bottom-tabs)
- Use TypeScript strict mode

### MUST NOT DO

- Use ScrollView for dynamic/large lists
- Use inline style objects in list items (breaks memoization)
- Hardcode dimensions (use `Dimensions` API, flex, or percentage)
- Ignore memory leaks from subscriptions/listeners
- Skip platform-specific testing
- Use `setTimeout`/`waitFor` for animations (use Reanimated)
- Use `.value` on shared values (use `.get()`/`.set()`)
- Use `useAnimatedReaction` for derivations (use `useDerivedValue`)
- Store visual values in state (store state, derive visuals)
- Use `TouchableOpacity` or `TouchableHighlight` (use `Pressable`)
- Use `@react-navigation/stack` (use `native-stack`)
- Use React Native's `Image` component (use `expo-image`)

#### Imported: Output Format

When implementing React Native features, always provide:

1. **Component code** with TypeScript types
2. **Platform-specific handling** where differences exist
3. **Navigation integration** if the component is a screen
4. **Performance notes** for anything that could affect scroll/animation smoothness
