# Release Readiness

Use this guide when the task is near ship time or touches builds, signing, updates, or store-facing polish.

## Build readiness

Confirm:

- dependencies are aligned
- native changes have been rebuilt
- release mode smoke testing has been performed
- platform-specific regressions were checked

## Signing and credentials

- identify who owns signing credentials
- limit access to the minimum required operators
- do not place signing secrets in the repository or client bundle
- document recovery and rotation ownership

## OTA and update thinking

If using Expo updates or EAS Update, verify:

- channel/branch strategy
- runtime version compatibility
- whether the change is safe for OTA delivery
- whether a store rebuild is required instead

## Store-facing checks

- app name, icons, splash, and permissions text are current
- privacy-sensitive features have correct declarations
- platform behavior matches user expectations
- startup path does not show blank or broken screens

## Final handoff checklist

1. build path used
2. signing or credential considerations
3. OTA eligibility or restrictions
4. device coverage completed
5. known release blockers, if any
