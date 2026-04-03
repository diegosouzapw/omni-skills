# Nx CI Monitor Runbook

## Purpose

Use this runbook to execute the `nx-ci-monitor` skill with a predictable monitor -> classify -> act -> verify -> exit loop.

## 1. Preflight

Collect these before polling:

- current branch
- current HEAD SHA
- working tree status
- Nx Cloud connection status
- package manager / lockfile
- whether the failure happened before or after Nx started

Stop if:

- `nx.json` is missing or does not indicate Nx Cloud connectivity
- the working tree has unrelated local edits and the user did not authorize proceeding
- the failure is clearly pre-Nx and belongs to CI-provider debugging

## 2. Poll

Use the CI watcher in one of two modes:

- normal mode: inspect the current CIPE
- wait mode: ignore the old CIPE and wait for a new one after an apply, rerun, or push

## 3. Classify

Map the result into one of these states:

- `ci_success`
- `fix_auto_applying`
- `fix_available`
- `fix_failed`
- `environment_issue`
- `no_fix`
- `no_new_cipe`
- `polling_timeout`
- `cipe_canceled`
- `cipe_timed_out`
- `error`

## 4. Decide

### Apply directly

Use when failed tasks are fully verified or only e2e tasks remain unverified and the user accepts CI-only validation.

### Apply locally

Use when the patch is directionally correct but needs local enhancement.

### Reject

Use when the proposed patch is clearly wrong or unsafe.

### Rerun environment state

Use when the workflow classifies the failure as environment/state-related.

## 5. Verify

Prefer rerunning only implicated tasks.

If base/head context exists, prefer affected verification over broad workspace reruns.

Bound local enhancement loops with `--local-verify-attempts`.

## 6. Exit

Always include:

- branch
- final SHA
- final CIPE URL
- action history
- failed tasks
- verification method
- remaining risks
