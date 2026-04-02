# Example: Lightweight Context Map

## Domain catalog

| Domain | Business capability | Owner/steward | Data ownership notes | Integration notes |
| --- | --- | --- | --- | --- |
| Ticketing | ticket lifecycle and support operations | Support Engineering | owns ticket status and assignment rules | publishes ticket events |
| Customer | customer profile and contracts | Customer Platform | owns customer profile and contract invariants | provides customer reference data |
| Reporting | analytics and business reports | Data Products | derived views only | consumes ticket and customer data |

## Relationships

| From domain | To domain | Relationship type | What flows across the boundary | Notes |
| --- | --- | --- | --- | --- |
| Ticketing | Customer | upstream/downstream | customer reference reads | ticket creation needs customer identity |
| Reporting | Ticketing | downstream consumer | report extracts, events, or replicated data | reporting should not own ticket policy |
| Reporting | Customer | downstream consumer | customer attributes for reports | treat as read-oriented dependency |
| Ticketing | Shared notification capability | infrastructure dependency | outbound notifications | not a business domain relationship |

## Open questions

- Should billing remain inside Customer or split into a separate Financial domain later?
- Are notification templates business-owned per domain or centrally managed?
