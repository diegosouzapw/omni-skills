# Rollback Decision Matrix

| Scenario | Trigger | Immediate action | Rollback note |
| :------- | :------ | :--------------- | :------------ |
| Error rate spike | user-visible errors exceed threshold during rollout | pause promotion and verify blast radius | roll back only the new traffic slice first |
| Latency regression | p95 or p99 exceeds release gate | hold rollout and inspect saturation, dependencies, and queues | reverse only if the regression is attributable to the new release |
| Data mutation risk | unexpected writes or migration mismatch | stop rollout and freeze further writes if possible | rollback may require forward-fix instead of binary revert |
| Business KPI drop | conversion or success KPI degrades | trigger incident review and hold rollout | technical health alone is not enough to continue |
| Unknown operator signal | runbook no longer matches reality | stop and escalate | do not continue without a trusted recovery path |
