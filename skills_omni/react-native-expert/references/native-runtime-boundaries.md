# Native Runtime Boundaries

Use this guide to decide whether a task fits Expo Go, needs a development build, or requires prebuild and native rebuild steps.

## Quick decision table

| Change type | Expo Go | Development build | Prebuild / rebuild likely needed |
| --- | --- | --- | --- |
| pure JS/TS UI logic in supported app | often yes | optional | no |
| Expo Router file changes | often yes | optional | no |
| adding unsupported native module | no | yes | yes |
| config plugin or app config native change | no | yes | yes |
| permission declaration change | not enough alone | yes | yes |
| build properties or native config change | no | yes | yes |

## Use Expo Go when

- the task is JavaScript-only
- all dependencies are already supported there
- no native configuration or plugin changes are required

## Use a development build when

- adding or testing native modules
- validating config-plugin behavior
- Expo Go does not include the required native code
- debugging runtime behavior that only appears in a built app

## Expect prebuild and rebuild when

- `app.json` or `app.config.*` changes alter native output
- a config plugin was added or modified
- permissions or native manifests/plist content changed
- native dependency installation changed

## Important operational rule

Fast refresh and hot reload do not apply native changes.

If the change affects generated native projects or installed native code, rebuild the app.

## Signs you chose the wrong runtime

- package installs cleanly but feature is unavailable in Expo Go
- permission prompt never appears in built app
- native config change seems ignored
- gesture or animation setup errors persist after JS reloads

## Return format for runtime-boundary tasks

State clearly:

1. whether Expo Go is sufficient
2. whether a development build is required
3. whether prebuild/rebuild is required
4. what the operator must re-run after the code change
