# Coupling Analysis Rubric

Use this rubric to keep severity and prioritization consistent.

## 1. Strength rubric

| Rating | Meaning | Typical examples |
| --- | --- | --- |
| 4 - Very high | Intrusive coupling | private internals, direct DB reads, undocumented internal dependence |
| 3 - High | Functional coupling | cross-service transaction, synchronized workflow, duplicated rule sets |
| 2 - Medium | Model coupling | shared domain objects, internal enums exposed externally |
| 1 - Low | Contract coupling | versioned DTO/schema designed for consumers |

## 2. Distance rubric

| Rating | Meaning | Typical examples |
| --- | --- | --- |
| 1 - Low | close in code and ownership | same package, same team, same deploy unit |
| 2 - Moderate | some boundary crossing | different module or library, same broad team |
| 3 - High | technical or release boundary | different services, processes, or deploy units |
| 4 - Very high | cross-team or external boundary | different teams/orgs, network dependency, external system |

### Distance modifiers

Increase effective distance by one step when any of these are true:

- owned by different teams
- released independently
- coordination requires cross-team communication
- runtime dependency crosses a network boundary

## 3. Volatility rubric

| Rating | Meaning | Typical examples |
| --- | --- | --- |
| 1 - Low | stable, generic, infrequent change | auth adapter, logging wrapper, mature utility |
| 2 - Moderate | periodic change | supporting domain with occasional feature work |
| 3 - High | frequent change | evolving business rules, repeated migrations, active feature area |
| 4 - Very high | core and rapidly evolving | competitive differentiator with regular coordinated changes |

## 4. Confidence rubric

| Confidence | Criteria |
| --- | --- |
| High | structural evidence plus contract/history/org evidence align |
| Medium | structural evidence plus one meaningful supporting evidence class |
| Low | mostly inferred from static edges or incomplete context |

## 5. Effective risk guidance

Do not reduce analysis to a rigid formula, but use this practical interpretation:

- **Critical**: high strength + high distance + high volatility
- **High**: any two dimensions clearly high with real maintenance or coordination evidence
- **Moderate**: one major dimension high, but mitigated by proximity, stability, or strong contracts
- **Low**: low-strength intentional coupling or close cohesive coupling with low change cost

## 6. Reporting reminders

- Strong local coupling may be healthy cohesion.
- Contract coupling can still be risky when distance and volatility are high.
- Low evidence quality must lower confidence, even when a pattern looks suspicious.
- Symmetric functional coupling often deserves higher attention than a shallow import graph suggests.
