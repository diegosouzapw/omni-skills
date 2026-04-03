# Handoff Router

Use this when the task moves beyond lead enrichment workflow design.

## Route to CRM ops / data engineering when

- the task is implementing syncs, APIs, webhooks, or field mappings
- the main issue is deduplication architecture or warehouse logic
- the user needs production automation rather than workflow design

## Route to deliverability remediation when

- the main problem is sender authentication, inbox placement, reputation, or mailbox infrastructure
- bounce problems persist after list-quality and routing issues are corrected

## Route to compliance / privacy review when

- lawful basis is disputed or unclear
- the target region or use case has edge-case regulatory risk
- the user asks for legal interpretation rather than operational controls

## Route to outbound / SDR workflow skills when

- enrichment design is complete and the next task is messaging, sequencing, personalization, or SDR execution

## Handoff note template

```text
Lead enrichment workflow completed to the point of data design and routing policy. Remaining work is primarily [CRM implementation / deliverability remediation / legal review / outbound execution]. Preserve provenance, suppression rules, verification classes, and ICP routing logic during handoff.
```
