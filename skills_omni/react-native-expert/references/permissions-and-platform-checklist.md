# Permissions and Platform Checklist

Use this checklist before merging platform-sensitive React Native or Expo changes.

## Permissions

- confirm which permissions are required on iOS and Android
- verify app config/native declarations are present
- verify runtime prompt timing is appropriate
- test denial, retry, and settings-recovery flows
- retest in a built app, not only in development

## Safe areas and device chrome

- verify notch and status bar overlap
- verify bottom insets on gesture-navigation devices
- verify scroll containers respect content insets where needed
- verify modal and sheet layouts on smaller devices

## Keyboard behavior

- test forms on iOS and Android
- verify focused input remains visible
- use `KeyboardAvoidingView` or established project-safe pattern as needed
- test submit and dismissal flows

## Android back behavior

- test hardware back on custom navigation flows
- confirm it dismisses overlays or returns to the expected screen
- do not break system expectations with over-aggressive interception

## Platform-specific code

Use platform splits only when justified:

- `Component.ios.tsx`
- `Component.android.tsx`
- `Platform.select(...)`

Avoid forking code unnecessarily when a shared implementation is good enough.

## Presentation differences

Check:

- modal style and dismissal
- sheet behavior
- status bar readability
- haptics or gesture interactions if used

## Before handoff

Return:

1. permissions involved
2. declarations added or verified
3. platform-specific behaviors tested
4. anything still requiring real-device confirmation
