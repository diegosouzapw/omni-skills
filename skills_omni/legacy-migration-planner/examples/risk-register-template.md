# Risk Register Template

| ID | Risk | Likelihood | Impact | Detection Signal | Mitigation | Owner | Review Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R1 | Shared database writes prevent safe extraction | High | High | Cross-domain write paths still required | Redesign boundary and document ownership transfer plan | TBD | Weekly |
| R2 | Unsupported current-to-target upgrade path | Medium | High | Official docs do not support direct upgrade | Introduce staged upgrade path | TBD | Weekly |
| R3 | Weak observability hides cutover regressions | Medium | High | No dashboard or rollback alert defined | Add telemetry baseline before rollout | TBD | Weekly |
