# Expo Native Config Checklist

Use this checklist for fonts, native modules, config plugins, and app configuration changes.

## Confirm the runtime

- Is the app being tested in Expo Go?
- Does the feature require native code or native configuration?
- Is a development build available?

## Confirm the configuration path

- Is the change defined in `app.json`, `app.config.js`, or `app.config.ts`?
- Is a config plugin required and correctly installed?
- Does the library's documented setup require prebuild or native regeneration?

## Validate the likely fix path

| Symptom | Check |
| --- | --- |
| Native module missing | Expo Go vs development build |
| Font declared but unavailable | config plugin path and rebuild requirements |
| App config changed but behavior stayed stale | prebuild/regeneration and native rebuild |
| Works in JS but not on device | runtime/build mismatch |

## Safe notes

- Restarting JavaScript tooling alone may not apply native configuration changes.
- Prefer the minimum rebuild/regeneration steps that match the symptom.
- Distinguish Expo limitations from actual misconfiguration.
