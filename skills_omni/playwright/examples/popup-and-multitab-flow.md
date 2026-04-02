# Popup and multi-tab flow example

Use this pattern when the page opens a new tab or popup.

## Example flow

```bash
"$PWCLI" open https://example.com
"$PWCLI" snapshot
"$PWCLI" click e4
"$PWCLI" tab-list
"$PWCLI" tab-select 1
"$PWCLI" snapshot
```

## Why this matters

After a popup or new tab opens, previous assumptions about the active page may be wrong.

Before continuing:

1. list available tabs
2. select the intended tab explicitly
3. take a fresh snapshot
4. continue only with references from that snapshot
