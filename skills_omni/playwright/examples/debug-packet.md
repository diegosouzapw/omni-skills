# Debug packet example

Use this format when handing off a failing browser automation run.

## Example packet

- **Task:** Reproduce login form failure after submit
- **URL:** `https://example.com/login`
- **Mode:** `--headed`
- **Commands run:**

```bash
"$PWCLI" open https://example.com/login --headed
"$PWCLI" snapshot
"$PWCLI" fill e1 "user@example.com"
"$PWCLI" fill e2 "not-a-real-secret"
"$PWCLI" click e3
"$PWCLI" snapshot
"$PWCLI" screenshot output/playwright/login-after-submit.png
```

- **Expected state:** Dashboard loads after submit
- **Actual state:** Error banner appears and no redirect occurs
- **Last confirmed good step:** Form fields accepted input
- **Failure point:** After submit click
- **Artifacts:**
  - `output/playwright/login-after-submit.png`
  - `output/playwright/login-trace.zip` if collected

## Minimum fields for escalation

- target URL
- whether the run was headless or headed
- command sequence
- expected behavior
- actual behavior
- artifact paths
