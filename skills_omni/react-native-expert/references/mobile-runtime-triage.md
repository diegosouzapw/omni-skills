# Mobile Runtime Triage

Use this runbook when a React Native or Expo app behaves unexpectedly after package, config, routing, animation, or platform changes.

## Step 1: classify the change

Ask:

- was this a JavaScript-only change?
- did app config or a config plugin change?
- was a native dependency installed or updated?
- did the problem appear only on iOS, only on Android, or only in built apps?

## Step 2: confirm dependency health

Run the least-destructive diagnostic first:

```bash
npx expo doctor
```

Look for version mismatches before doing cache-clearing rituals.

## Step 3: decide whether rebuild is required

A rebuild is likely required if:

- native modules changed
- permissions changed
- config plugins changed
- generated native output changed

## Step 4: inspect common failure families

### Metro or resolver issues

Check for:

- dependency mismatch
- wrong package versions
- incorrect Metro config edits
- stale assumptions after file moves

Only then consider a targeted cache reset.

### Reanimated issues

Check for:

- version compatibility
- required setup steps
- Babel/plugin expectations for the installed version
- rebuild need after installation changes

### Gesture Handler issues

Check for:

- installation completeness
- root view setup
- integration with navigation containers or layouts
- rebuild need after setup changes

### Permissions issues

Check for:

- missing config declarations
- platform-specific permission wording or manifest entries
- testing only in dev instead of a built app

### Navigation issues

Check for:

- route file names versus links
- layout placement
- redirect loops
- stale assumptions after moving screens between route groups

## Step 5: reproduce narrowly

Document:

- exact screen and action
- platform and device/emulator
- dev or release mode
- whether it reproduces after reinstall/rebuild

## Step 6: return a recovery plan

Include:

1. probable cause category
2. smallest safe next step
3. whether rebuild is mandatory
4. what evidence would confirm the fix
