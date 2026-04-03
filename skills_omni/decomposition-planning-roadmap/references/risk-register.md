# Decomposition Risk Register

Track risks continuously through planning and execution.

| Risk | Category | Impact | Likelihood | Trigger / signal | Mitigation | Contingency | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Shared schema blocks independent deployability | Data | High | High | Candidate still needs cross-domain writes | Delay extraction, define data owner, add transition plan | Revert to modular monolith phase | | Open |
| No stable service owner | Team | High | Medium | No team accepts runtime support | Assign owner before approval | Defer candidate | | Open |
| Weak rollback path | Operations | High | Medium | Cutover cannot be reversed quickly | Require feature flag / route reversal / fallback | Pause release | | Open |
| Observability gap hides failures | Operations | High | Medium | No trace of cross-service request path | Add tracing, logs, dashboards, alerts | Freeze expansion | | Open |
| Reporting jobs break after separation | Data | Medium | Medium | Shared reporting query fails in test | Create projection/reporting plan | Temporary mirror / adapter | | Open |

## Categories

- Business
- Data
- Security
- Compliance
- Team
- Platform
- Operations
- Delivery

## Review cadence

- Review before approving each roadmap phase.
- Reassess after incidents, dependency discoveries, or major staffing changes.
