# AWS Architecture Intake

Use this worksheet before making architecture recommendations.

## Workload basics

- What problem does the workload solve?
- Is it internal, external, batch, real-time, or event-driven?
- New build, migration, or modernization?

## Scale and performance

- Expected traffic profile: steady, bursty, seasonal
- Peak requests per second or job throughput
- Latency expectations
- Statefulness and session requirements

## Availability and recovery

- Availability target or SLA/SLO
- Multi-AZ required?
- Multi-region required?
- RTO target
- RPO target

## Data and compliance

- Data types stored or processed
- Sensitive data classes
- Encryption expectations at rest and in transit
- Compliance or residency constraints

## Security and access

- Who are the users or calling systems?
- Human access needed?
- Cross-account access needed?
- Internet exposure allowed?
- Private networking requirements?

## Operations

- Preferred observability stack
- On-call maturity
- Change frequency
- Rollback expectations

## Delivery model

- Preferred language/runtime
- Existing IaC tool: CloudFormation, CDK, SAM, Terraform, other
- Existing CI/CD platform
- Team familiarity with AWS services under consideration

## Financial constraints

- Budget sensitivity
- Preference for managed services vs lower-level control
- Cost visibility requirements

## Output reminder

The final recommendation should list:

- assumptions
- major constraints
- recommended architecture
- alternatives considered
- key risks
- next validation steps
