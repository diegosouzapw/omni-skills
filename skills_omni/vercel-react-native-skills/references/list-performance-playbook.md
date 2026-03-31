# List Performance Playbook

Use this playbook for feeds, long lists, search results, and chat-like timelines.

## First-line checks

1. Verify the issue in release mode if possible.
2. Confirm stable item keys.
3. Memoize row components when rows rerender unnecessarily.
4. Stabilize callback and prop identity passed into rows.
5. Remove inline object/function churn from hot row paths.
6. Check image size, loading, and placeholder behavior inside rows.

## FlatList tuning before escalation

Review these knobs only after row rendering is sane:

- `getItemLayout` when row heights are fixed or predictable
- `maxToRenderPerBatch`
- `updateCellsBatchingPeriod`
- `windowSize`
- `removeClippedSubviews` where appropriate and safe for the screen

## When FlashList is justified

Consider FlashList when:

- the dataset is very large
- row types are heterogeneous
- FlatList tuning and row optimization still do not meet the target
- the team accepts the dependency and migration cost

## Common causes of jank

| Symptom | Check |
| --- | --- |
| Blank gaps while scrolling | batching/window settings, row cost |
| Every row rerenders on minor state change | memoization, unstable callbacks, parent churn |
| Fast scroll degrades heavily with images | image decode/caching/sizing |
| Heterogeneous rows remain costly after tuning | typed rows / FlashList escalation |

## Safe recommendation pattern

- Measure or reproduce
- optimize row identity and row cost
- tune FlatList conservatively
- escalate to FlashList only if the evidence supports it
