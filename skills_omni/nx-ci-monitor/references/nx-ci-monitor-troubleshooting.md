# Nx CI Monitor Troubleshooting

## Workspace not connected to Nx Cloud

**Symptoms:** `nx.json` is absent, or no `nxCloudId` / `nxCloudAccessToken` is present.

**What to check:**

- workspace root contains `nx.json`
- the file indicates Nx Cloud connection

**Action:** Stop and route out of this skill.

---

## No new CIPE after apply or push

**Symptoms:** wait mode times out and returns `no_new_cipe`.

**What to check:**

- CI provider logs
- checkout and auth stages
- dependency installation stage
- workflow syntax / runner failures

**Action:** Treat as pre-Nx failure unless evidence shows a narrow repository-side fix.

---

## Local success, CI failure

**Symptoms:** local rerun passes but CI still fails.

**What to check:**

- package manager mismatch
- stale or changed lockfile
- native module or platform-specific behavior
- environment variables and secrets
- whether CI is using distributed execution or different runtime assumptions

**Action:** Avoid over-trusting local verification. Escalate if the mismatch is environmental.

---

## Repeated environment issues

**Symptoms:** repeated `environment_issue`, repeated timeouts, or repeated no-progress cycles.

**What to check:**

- whether reruns are producing any new signal
- whether failures cluster around infra or runner conditions

**Action:** Trigger the circuit breaker and hand off to platform/CI owners.

---

## Patch intent is unclear

**Symptoms:** self-healing suggests changes unrelated to the failed tasks or with weak reasoning.

**What to check:**

- touched files vs failed task scope
- whether the patch changes dependencies or lockfiles
- whether the patch appears to hide rather than solve the failure

**Action:** Prefer reject or careful local inspection; do not apply blindly.

---

## Cache or distributed execution confusion

**Symptoms:** operators attribute the defect to cache behavior without evidence.

**What to check:**

- exact failing task IDs
n- whether failures are reproducible on rerun
- CIPE history and execution pattern

**Action:** Separate infra behavior from code behavior. Capture evidence and hand off if infra is the likely root cause.
