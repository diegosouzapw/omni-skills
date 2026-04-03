# Handoff Router

Use this note when the task moves beyond static component identification and sizing.

## Route when

### Dependency analysis is needed

Hand off when the user asks:

- which components are tightly coupled
- what depends on what
- whether a large component can be extracted safely

Pass along:

- component inventory
- boundary confidence
- largest components
- ambiguous/shared components

### Decomposition planning is needed

Hand off when the user asks:

- what to extract first
- how to sequence refactors
- how to define target domains or bounded contexts

Pass along:

- prioritized size findings
- notes on cohesion and suspected subdomains
- limitations of size-only analysis

### Security or dependency-risk scanning is needed

Hand off when the user asks:

- whether dependencies are vulnerable
- whether vendored code is risky
- how to scan packages for CVEs

Pass along:

- repository scope
- exclusions used
- package/component paths already identified

### Runtime/service topology analysis is needed

Hand off when the user asks:

- which services talk to each other at runtime
- where bottlenecks occur
- what the deployment topology looks like

Pass along:

- static component inventory only as context
- explicit statement that this skill did not analyze runtime behavior

## Minimal handoff packet

```text
Completed static component identification and sizing for <scope>.

Exclusions used: <rules>
Boundary signals used: <signals>
Largest components: <list>
Ambiguous components: <list>
Limitations: size metrics are structural only, not runtime or dependency proof.
```
