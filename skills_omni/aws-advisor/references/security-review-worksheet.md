# AWS Security Review Worksheet

Use this worksheet to structure AWS security reviews.

## Identity and access

- Principal types in scope: human, workload, cross-account, federated
- Least privilege applied?
- MFA and federation expectations for human access?
- Role assumption boundaries clear?
- Permissions boundaries or SCPs relevant?
- High-risk wildcard permissions present?

## Network exposure

- Public endpoints in scope?
- Private subnets required?
- Security group and NACL posture understood?
- Ingress and egress paths reviewed?
- VPC endpoints or private connectivity needed?

## Data protection

- Encryption at rest defined?
- Encryption in transit defined?
- KMS key ownership and access model understood?
- Data classification documented?
- Backup and retention expectations documented?

## Secrets and configuration

- Secrets stored outside code and templates?
- Rotation requirements identified?
- Sensitive parameters protected in pipelines and logs?

## Logging and monitoring

- CloudTrail or equivalent audit visibility considered?
- CloudWatch logs and alarms identified?
- Security-relevant event detection defined?
- Retention and access controls appropriate?

## Governance and operations

- Separation of duties needed?
- Change approval or compliance evidence required?
- Incident response hooks identified?
- Shared Responsibility Model boundaries stated?

## Output format

For each finding include:

- issue
- impact
- likely cause
- recommended remediation
- validation step
