# Example: Component-to-Domain Mapping

Scenario: a legacy support platform with modules for tickets, customer profiles, billing, reports, login, and notifications.

## Domain catalog

| Domain | Capability | Owner/steward | Data ownership notes |
| --- | --- | --- | --- |
| Ticketing | ticket lifecycle, routing, completion | Support Engineering | owns ticket state and routing rules |
| Customer | customer profile, contracts, account status | Customer Platform | owns customer identity and contract rules |
| Reporting | operational and financial reporting | Data Products | consumes source data, should not own core transactional invariants |

## Component assignment table

| Component | Current location | Assigned domain | Rationale | Confidence | Open questions |
| --- | --- | --- | --- | --- | --- |
| Ticket Assign | `ss.ticket.assign` | Ticketing | core ticket-routing capability and ticket vocabulary | High | None |
| Ticket Completion | `ss.ticket.completion` | Ticketing | part of ticket lifecycle and support workflow | High | None |
| Customer Profile | `ss.customer.profile` | Customer | customer identity and account terminology | High | None |
| Billing Payment | `ss.billing.payment` | Customer | currently aligned to customer account management and contract flows in this example system | Medium | should billing become its own domain later? |
| Financial Reports | `ss.reporting.financial` | Reporting | reporting output depends on billing data but does not own billing policy | High | None |
| Notification | `ss.shared.notification` | Shared classification: cross-cutting infrastructure | delivers notifications for many domains but does not own their business policies | Medium | which team should own delivery templates? |

## Shared decision log

| Component | Classification | Why |
| --- | --- | --- |
| Notification | cross-cutting infrastructure | reused by several domains; behavior is infrastructural rather than business-owned |
| Login | utility/platform | authentication entry point rather than domain business logic |

## Notes

This example intentionally keeps confidence visible and does not force `shared` to become a business domain.
