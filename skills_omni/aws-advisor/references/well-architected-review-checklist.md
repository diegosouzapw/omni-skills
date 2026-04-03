# Well-Architected Review Checklist

Use this as a lightweight review aid aligned to AWS Well-Architected pillars.

## Operational Excellence

- Is the workload observable through logs, metrics, alarms, and dashboards?
- Is deployment automated and repeatable?
- Are rollback and incident procedures defined?
- Are operational runbooks or playbooks identified?

## Security

- Is IAM based on least privilege?
- Are human and machine identities separated appropriately?
- Is network exposure minimized?
- Is encryption at rest and in transit defined?
- Are secrets handled outside code and templates?
- Are logging and monitoring sufficient for security investigations?

## Reliability

- Are there single points of failure?
- Is multi-AZ resilience appropriate for the requirement?
- Are backup and restore expectations clear?
- Are failure detection and recovery paths defined?
- Are dependencies and quotas understood?

## Performance Efficiency

- Is the service choice aligned to workload shape?
- Can the design scale predictably?
- Are caching, concurrency, and storage access patterns considered?
- Does the design fit latency expectations?

## Cost Optimization

- Are major cost drivers identified?
- Is the design overprovisioned for expected load?
- Are data transfer and storage growth considered?
- Could a more managed or more elastic service reduce waste?

## Sustainability

- Can managed services reduce unnecessary always-on infrastructure?
- Is the design avoiding needless duplication or idle capacity?
- Are lifecycle and scaling choices aligned to actual demand?

## Review output

Summarize findings in three groups:

- strengths
- risks
- recommended next actions
