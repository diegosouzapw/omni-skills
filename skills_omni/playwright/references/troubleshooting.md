# Troubleshooting

## Browser executable missing or launch fails

**Symptoms:**

- Playwright reports a missing executable
- browser launch fails immediately
- the command path exists but no page opens

**Solution:**

- verify `node`, `npm`, and `npx`
- confirm the wrapper path is correct
- install or repair Playwright browser binaries
- if using Linux or containers, review system dependency guidance

See official docs:

- https://playwright.dev/docs/browsers
- https://playwright.dev/docs/docker

## Headed mode does not work

**Symptoms:**

- `--headed` fails in CI or over SSH
- the browser cannot connect to a display
- headless works but headed does not

**Solution:**

- retry without `--headed`
- treat headed mode as optional unless visual inspection is required
- use documented container or Linux guidance if headed mode is necessary

## Stale page state after navigation, popup, or modal change

**Symptoms:**

- previous element refs stop working
- clicks target the wrong element
- the page changed but the operator kept using the old snapshot

**Solution:**

- verify the active page or tab
- run `snapshot` again
- continue only with refs from the latest snapshot
- avoid compensating with blind sleeps

## Multi-tab confusion

**Symptoms:**

- actions affect the wrong tab
- popup flows behave unexpectedly
- screenshots do not match the intended page

**Solution:**

- run `tab-list`
- select the intended tab explicitly
- snapshot after selecting the active tab

## Hard-to-explain failures

**Symptoms:**

- the failure is intermittent
- screenshots are not enough to explain the bug
- reviewers cannot reproduce the path

**Solution:**

- capture a trace
- save a screenshot before and after the failing step
- write a short debug packet with commands, URL, expected state, actual state, and artifact paths
