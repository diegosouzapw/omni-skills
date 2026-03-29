# Context Engineering Checklist

## Boundary

- define the task and model role
- list the current context sources
- identify the dominant failure mode
- define the maximum useful context budget

## Packet Design

- separate instructions, evidence, memory, and tool context
- define ordering rules
- define provenance markers for retrieved evidence
- define what gets summarized vs passed through verbatim

## Budget

- define which sections are mandatory
- define which sections can be dropped first
- define summarization rules
- define when stale memory should be ignored or refreshed

## Validation

- state the expected behavior change
- state what should be evaluated next
- record what the packet still does not solve
