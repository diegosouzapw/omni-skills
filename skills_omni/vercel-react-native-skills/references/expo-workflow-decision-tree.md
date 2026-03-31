# Expo Workflow Decision Tree

Use this reference to choose the right execution path before suggesting code or configuration changes.

## 1. Start with project type

### If the app uses Expo

Ask:

- Is the task being tested in **Expo Go**?
- Does the task require a **native module**, **custom native configuration**, **fonts via config plugin**, or another change that affects generated native projects?

#### Use Expo Go when

- the task is purely JavaScript/UI level
- no unsupported native module is required
- no native configuration change must be validated

#### Use an Expo development build when

- the task depends on native modules not available in Expo Go
- you need realistic device behavior for native integrations
- you must validate native configuration or plugin-driven changes

#### Use Expo prebuild-managed workflow when

- the task changes native project configuration through config plugins or app config
- native directories must be regenerated from app configuration

## 2. Escalate to bare React Native when

- the repo is already bare React Native
- the work primarily depends on manual iOS/Android native project ownership
- the required change is outside normal Expo-managed workflows

## 3. Decision cues

| Symptom or task | Likely path |
| --- | --- |
| Styling, component behavior, simple state bug | Expo Go or existing JS workflow |
| Custom native module missing in runtime | Expo development build or bare RN |
| Font added but not reflected after config changes | Expo config plugin + prebuild/regeneration check |
| App config change not appearing in native behavior | Prebuild/regeneration and native rebuild check |
| Existing bare RN app with native folders as source of truth | Bare React Native workflow |

## 4. Safety notes

- Do not assume Expo Go can validate native-module availability.
- Do not assume a JavaScript reload is enough after config-plugin changes.
- Do not force bare RN migration just because a task touches native behavior.
- Keep recommendations tied to the current project setup.
