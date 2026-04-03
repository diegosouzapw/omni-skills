# Investigation Playbook

Use this playbook when the repository is unfamiliar and the right entrypoint is not obvious.

## Search-first recon sequence

1. Restate the mission in one sentence.
2. Pick the strongest available anchor:
   - error message
   - route or endpoint
   - UI text
   - config key
   - feature flag
   - command name
   - test name
   - symbol or type name
3. Search for the anchor across the repo.
4. Open the smallest relevant span first:
   - function signature
   - handler body
   - related config
   - nearby tests
5. Trace direct callers and callees.
6. Identify boundaries:
   - database
   - queue
   - network call
   - cache
   - feature flag
   - environment variable
7. Stop once you can explain the current behavior and propose a verifiable next step.

## Practical search patterns

Search for:

- exact error text
- endpoint fragments such as `/api/...`
- config keys and env var names
- UI labels or user-visible strings
- test names matching the failure or feature
- symbols near the area named in the report

## File reading rules

- Prefer partial reads over whole-file reads for large files.
- Read tests near implementation early.
- Check README, docs, and config before inferring behavior.
- Avoid opening many sibling files unless the trace requires it.

## Stop conditions

Stop recon and move to planning when you can answer:

- Where does the flow start?
- Which files are most likely to change?
- What evidence will prove the fix or explanation is correct?
- What is still uncertain?

## If recon is drifting

- Collapse back to one entrypoint.
- Write a one-sentence mission again.
- List the top 3 candidate files only.
- Do not read the repo sequentially.
