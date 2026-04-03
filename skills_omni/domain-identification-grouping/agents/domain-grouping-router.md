# Domain Grouping Router

Use this note when deciding whether `domain-identification-grouping` is the right skill.

## Use this skill when

- components already exist
- the task is to group them into business domains or candidate bounded contexts
- the desired output is a mapping, rationale, and context map

## Route elsewhere when

- the task is to discover domains from business events or greenfield modeling -> `@domain-analysis`
- the task is to measure dependency strength, coupling, or change impact -> `@coupling-analysis`
- the task is to plan extraction sequencing, rollout, or migration execution after grouping -> use a downstream extraction or migration planning skill if available

## Handoff note

When handing off, preserve:

- the domain glossary
- the mapping table
- confidence notes
- unresolved assignments
- shared-component decisions
- context map
