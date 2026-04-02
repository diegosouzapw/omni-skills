# Handoff Criteria

CodeNavi should continue only while repository navigation and scoped implementation are the main job.

## Continue with CodeNavi when

- the task is still primarily about understanding existing code
- the likely change is narrow and local
- verification can be tied to code, tests, docs, or a clear manual path
- notebooking the discovery adds long-term value

## Hand off when recon shows the real task is

### Infrastructure or platform work

Examples:
- Terraform or cloud resource changes
- Kubernetes runtime behavior
- deployment topology or cluster operations

### Security specialization

Examples:
- auth design review
- dependency/container/IaC risk review
- secrets handling or threat-focused analysis

### Testing specialization

Examples:
- the main blocker is fixture strategy
- integration test design is the real deliverable
- a regression harness is needed beyond the code change itself

### Architecture specialization

Examples:
- the requested change requires structural redesign
- there are multiple valid subsystem boundaries to evaluate
- tradeoff analysis is more important than immediate implementation

### Documentation specialization

Examples:
- the main output is durable docs, onboarding material, or reference content
- no code change is needed after recon

## Handoff packet

When handing off, include:

- mission summary
- key files and symbols
- what was verified
- what remains uncertain
- why another specialization is now a better fit
