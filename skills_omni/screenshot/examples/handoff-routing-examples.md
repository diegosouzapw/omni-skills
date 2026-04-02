# Handoff and Routing Examples

## Route to browser-native capture

```text
This request is for an exact browser viewport screenshot. Use browser-native screenshot tooling instead of @screenshot so the result is deterministic and does not depend on desktop state.
```

## Route to design-tool capture

```text
The requested artifact exists in Figma. Capture or export it from the design tool first. Use @screenshot only if an OS-level desktop view is specifically required.
```

## Use this skill for desktop-app troubleshooting

```text
Capture the visible desktop app window as the user sees it on screen. Use @screenshot because this is an OS-level app screenshot request, not a browser or source-asset export.
```
