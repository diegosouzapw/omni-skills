# Windows App SDK Lifecycle, Notifications, and Deployment

Use this guide when runtime behavior depends on app identity, deployment model, activation, or distribution assumptions.

## Why this matters

Packaged and unpackaged apps do not behave identically.
Deployment choices affect:

- runtime expectations
- identity-dependent features
- install and launch flow
- notifications and activation scenarios
- distribution and local verification behavior

## Review questions

- Is the app model explicitly documented for this task?
- Is a packaged-only assumption leaking into unpackaged development?
- Is the launch method correct for the chosen model?
- Does the feature depend on identity or deployment behavior?

## Common failure mode

The project builds, but runtime behavior is wrong because the implementation assumed the wrong app model or deployment context.
