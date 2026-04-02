# Performance Tuning

Use this guide for list performance, rendering smoothness, images, and animation-related diagnosis in React Native and Expo apps.

## First rule: measure correctly

Do not judge mobile performance only in development mode.

Check performance in:

- release mode where possible
- an actual device when practical
- the specific platform that exhibits the issue

Development mode can exaggerate slowness.

## List decision guide

| Situation | Preferred starting point |
| --- | --- |
| small static content | `ScrollView` can be acceptable |
| dynamic or potentially large collection | `FlatList` or `SectionList` |
| very large or highly performance-sensitive feed | profile first, then consider FlashList |

Do not use `ScrollView` with `.map()` for large, dynamic, or unbounded lists where virtualization is required.

## FlatList tuning workflow

Start with the basics before changing libraries:

1. confirm stable `keyExtractor`
2. simplify row rendering
3. avoid expensive transforms during render
4. reduce image and layout cost inside rows
5. test windowing and batching props carefully

Common tuning levers:

- `windowSize`
- `maxToRenderPerBatch`
- `updateCellsBatchingPeriod`
- `initialNumToRender`
- `removeClippedSubviews` where appropriate
- `getItemLayout` when item sizes are known or predictable

Tune these deliberately; they are tradeoffs, not universal defaults.

## Row component rules

- keep rows focused and lightweight
- avoid triggering network calls in rows
- pass stable props where possible
- avoid unnecessary object recreation in render paths
- memoize selectively when measurement shows benefit

## Images

Large or poorly handled images often dominate list cost.

Check:

- image dimensions
- resize strategy
- caching behavior
- placeholder strategy
- whether `expo-image` is already available and appropriate

## Animation guidance

For smoothness-sensitive interactions:

- prefer transform and opacity animations
- avoid layout-heavy animation when possible
- keep gesture and animation libraries correctly configured
- verify the issue is not caused by unrelated JS-thread work

## Diagnostic questions

- Is the issue visible in release mode?
- Is it worse on Android than iOS?
- Are rows doing too much work?
- Are images too large or too numerous?
- Is the list even virtualized?
- Did the regression start after adding animation, context updates, or expensive selectors?

## When to consider FlashList

FlashList is a strong option when:

- the feed is large or high-frequency
- profiling shows FlatList tuning is not enough
- the team accepts the dependency and migration cost

Do not present FlashList as mandatory for every list.

## Return format for performance reviews

Include:

1. likely bottlenecks
2. highest-confidence code changes
3. what to measure after the change
4. release-mode validation steps
5. whether a library change is actually justified
