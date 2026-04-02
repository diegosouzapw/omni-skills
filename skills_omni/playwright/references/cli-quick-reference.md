# CLI quick reference

Use the wrapper path from `SKILL.md` unless the environment already standardizes on a global `playwright-cli` install.

## Basic loop

```bash
"$PWCLI" open https://example.com
"$PWCLI" snapshot
"$PWCLI" click e3
"$PWCLI" snapshot
```

## Common tasks

### Open a page

```bash
"$PWCLI" open https://example.com
"$PWCLI" open https://example.com --headed
```

### Snapshot page state

```bash
"$PWCLI" snapshot
```

### Click, fill, type, press

```bash
"$PWCLI" click e3
"$PWCLI" fill e1 "user@example.com"
"$PWCLI" type "search text"
"$PWCLI" press Enter
```

### Screenshots and PDFs

```bash
mkdir -p output/playwright
"$PWCLI" screenshot output/playwright/page.png
"$PWCLI" pdf output/playwright/page.pdf
```

### Tracing

```bash
"$PWCLI" tracing-start
# ...interactions...
"$PWCLI" tracing-stop
```

### Multi-tab flows

```bash
"$PWCLI" tab-new https://example.com
"$PWCLI" tab-list
"$PWCLI" tab-select 0
"$PWCLI" snapshot
```

## Operator reminders

- snapshot before referring to element ids
- re-snapshot after page changes
- verify the active tab before continuing in multi-page workflows
- save artifacts under `output/playwright/`
