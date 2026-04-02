# Example: Common Domain Components Report

## Scope
- Repository or service set: billing, ticketing, survey
- Commit / branch / PR: feature/consolidate-notifications
- Components reviewed: `services/billing/notification`, `services/ticket/notification`, `services/survey/notification`
- Confidence: medium-high

## Candidate Groups
| Group | Components | Why grouped | Initial confidence |
| --- | --- | --- | --- |
| Notification | 3 components | Same leaf name, shared email adapter usage | Medium |

## Semantic Validation
| Group | Same business capability? | Bounded-context alignment | Notes |
| --- | --- | --- | --- |
| Notification | Yes, mostly | Yes | All send customer-facing email notifications; differences are template and trigger specific |

## Impact Snapshot
| Group | Current consumers | Projected consumers | Ownership spread | Release coordination | Risk |
| --- | --- | --- | --- | --- | --- |
| Notification | 5 | 5 | 2 teams | Moderate | Low-medium |

## Recommendation
| Group | Outcome | Why | Rejected alternatives |
| --- | --- | --- | --- |
| Notification | Shared library | Shared mechanism is stable; no runtime centralization needed | Shared service rejected due to unnecessary operational overhead; keep-separate rejected because duplication is real and semantics align |

## Risks and Follow-ups
- Security / operations risks: package ownership and release policy must be clear
- Ownership / governance risks: designate one maintainer team
- Evidence gaps: verify whether one team has hidden SMS-specific behavior
- Next owner: platform architecture

## Provenance
- Repository paths sampled: `services/*/notification`, `shared/email`
- Files reviewed: 9 handlers, 3 template mappers, 1 adapter
- Commit / PR link: PR-142
- Notes: recommendation assumes email-only scope
