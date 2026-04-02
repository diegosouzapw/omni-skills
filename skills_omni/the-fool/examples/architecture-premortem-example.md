# Architecture Pre-mortem Example

## User request

> Challenge our plan to migrate a monolith to microservices next quarter.

## Critique excerpt

**Steelmanned thesis:**  
You believe decomposing the monolith into independently deployable services will reduce release contention, improve fault isolation, and let multiple teams ship faster, and that the organization can absorb the migration cost next quarter.

**Mode used:**  
Find the Failure Modes

**Failure narrative 1: Migration Halfway House**  
- **Trigger:** Two services are extracted before deployment and ownership boundaries are stable.
- **Failure chain:** Teams now change both the monolith and new services for the same feature; synchronous dependencies grow; deployment coordination becomes harder than before.
- **Detection signal:** Shared release trains persist after the first extractions; cross-repo changes increase instead of decreasing.
- **Blast radius:** Engineering throughput, incident recovery, and ownership clarity all worsen.

**Failure narrative 2: Data Consistency Crisis**  
- **Trigger:** Business workflows assume immediate consistency across newly separated services.
- **Failure chain:** Event timing gaps create inventory errors and duplicate operations; customer support load spikes; trust drops.
- **Detection signal:** Reconciliation jobs and manual corrections increase during pilot rollout.
- **Blast radius:** Revenue leakage, support cost, and leadership confidence.

**Confidence:**  
MEDIUM

**Next validation action:**  
Validate one bounded-context pilot and measure whether release independence actually improves before broader decomposition.
