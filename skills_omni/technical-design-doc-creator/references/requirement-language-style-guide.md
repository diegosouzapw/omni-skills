# Requirement Language Style Guide

Use normative language only when it improves review clarity.

## Terms

- **MUST**: mandatory for correctness, safety, or governance
- **SHOULD**: strongly recommended unless there is a justified reason not to do it
- **MAY**: optional

## Good use

- "Security Considerations MUST be included for auth, payment, public API, or PII-related changes."
- "The TDD SHOULD identify at least one rollback trigger for production changes."
- "A glossary MAY be added for domain-heavy projects."

## Avoid

- Overusing MUST for every sentence
- Using normative words where no decision or requirement exists
- Sounding contractual when a plain statement is clearer

## Practical rule

Use plain prose for explanation, and normative language for checklists, validation rules, and section requirements.
