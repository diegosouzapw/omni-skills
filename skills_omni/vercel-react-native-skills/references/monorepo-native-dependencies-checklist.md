# Monorepo Native Dependencies Checklist

Use this checklist when React Native or Expo apps live inside a workspace or monorepo.

## Verify ownership

- Which workspace package is the actual mobile app?
- Are native dependencies declared in the app package where native installation is expected?
- Are shared packages staying JS-only where possible?

## Verify versions

- Is there more than one version of the same native package across workspaces?
- Are React Native, Reanimated, Gesture Handler, or navigation-related packages duplicated?

## Verify resolution assumptions

- Does Metro resolve the intended package path?
- Has workspace or Metro configuration drifted from the current repo layout?
- Did the issue start after moving packages, renaming workspaces, or changing hoisting behavior?

## Common symptom mapping

| Symptom | Likely cause |
| --- | --- |
| Metro cannot resolve a shared package | workspace/config drift |
| Native behavior differs per app | duplicated or misplaced native deps |
| Build succeeds but runtime breaks oddly | version mismatch or duplicate installations |

## Safe notes

- Prefer targeted dependency and layout checks over broad cache-clearing.
- Keep native dependencies close to the app package unless the project has a proven pattern otherwise.
