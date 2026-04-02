# Artifacts and handoff

Use artifacts to make browser automation runs reproducible and reviewable.

## Output location

Store artifacts under:

```text
output/playwright/
```

Recommended file naming:

```text
output/playwright/<task>-<step>.png
output/playwright/<task>-<step>.pdf
output/playwright/<task>-trace.zip
```

## What to capture

### Minimum useful packet

- target URL
- command sequence used
- final page state reached
- one screenshot when visual state matters

### Better packet for debugging

- target URL
- exact commands run
- one or more screenshots
- trace path
- note describing expected behavior vs actual behavior
- failure point or last successful step

### Optional richer packet

- PDF for reviewable rendered content
- video if the environment is already configured for it
- note about whether the run was headless or headed

## Safety notes

Artifacts may capture:

- credentials
- tokens
- personal data
- internal UI state
- customer content

Before sharing artifacts:

- remove or avoid sensitive runs where possible
- prefer test data instead of real secrets
- review screenshots and traces for visible sensitive content
- avoid pasting secrets directly into commands that may end up in shell history

## Official references

- Screenshots: https://playwright.dev/docs/screenshots
- Trace viewer: https://playwright.dev/docs/trace-viewer
- Videos: https://playwright.dev/docs/videos
