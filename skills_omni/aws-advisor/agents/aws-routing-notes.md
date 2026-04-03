# AWS Routing Notes

Use `aws-advisor` as the front door when the task is primarily about AWS architecture, service selection, migration planning, security posture on AWS, or AWS control-plane troubleshooting.

## Hand off when

- Terraform becomes the main execution surface: hand off to `@terraform`
- Kubernetes manifests, cluster behavior, or EKS internals dominate: hand off to `@kubernetes`
- Container packaging or image/runtime issues dominate: hand off to `@docker`
- The task becomes a broader security assessment beyond AWS configuration choices: hand off to `@security-review`
- The task becomes an active outage or incident-management workflow: hand off to `@incident-response`

## Handoff rule

When handing off, preserve:

- AWS services in scope
- regions involved
- known errors and evidence
- assumptions already validated
- documentation families already consulted
