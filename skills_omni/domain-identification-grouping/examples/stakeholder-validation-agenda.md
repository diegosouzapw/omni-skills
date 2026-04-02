# Stakeholder Validation Agenda

Use this short agenda before approving refactoring or extraction recommendations.

## Objective

Validate whether proposed domain groupings reflect business reality closely enough to guide architecture decisions.

## Suggested attendees

- product owner or domain expert
- architect or senior engineer
- maintainer for the affected area
- optional data or operations representative

## Agenda

1. Review the glossary of business terms.
2. Review each candidate domain and its stated capability.
3. Walk through ambiguous component assignments first.
4. Review anything currently marked as shared.
5. Confirm known upstream/downstream relationships.
6. Record open questions and deferred decisions.
7. Decide whether the grouping is validated, partially validated, or not yet validated.

## Outputs

- confirmed domain names
- disputed assignments
- renamed or merged domains
- explicit open questions
- approval status for any downstream refactoring recommendations
