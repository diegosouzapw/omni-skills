# Worked Example: Fork Permissions Case

## Situation

A PR from `contributor:feature-branch` fails in a workflow step that uploads results or accesses a secret, but the same workflow succeeds on branches inside the main repository.

## Evidence Pattern

- Event is `pull_request`
- The failing step depends on a repository secret or elevated token permissions
- Logs show missing secret input, access denied, or skipped secure step

## Example Summary

```text
The failing check is a GitHub Actions workflow, but the evidence suggests the failure is specific to fork PR restrictions.

- The workflow is running on `pull_request` from a fork.
- A later step requires a secret or write-capable token.
- That capability is reduced or unavailable in fork context.

This is not strong evidence of an application code defect.

Proposed plan:
1. Confirm whether the secure step should run on fork PRs.
2. Adjust workflow conditions or split trusted/untrusted paths if needed.
3. Preserve least privilege; do not widen permissions casually.
```

## Reminder

Do not recommend exposing secrets to forked workflows as a quick fix.
