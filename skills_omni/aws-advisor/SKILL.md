---
name: "aws-advisor"
description: "AWS Advisor workflow skill. Use this skill when the user needs AWS architecture guidance, security review, service selection, migration planning, IAM/VPC troubleshooting, or implementation advice grounded in current AWS documentation and clear trade-offs. Use for AWS services such as Lambda, S3, EC2, ECS, EKS, DynamoDB, RDS, CloudFormation, CDK, Terraform, SAM, IAM, VPC, and API Gateway. Do not use for non-AWS cloud requests or for direct production changes that require live account access beyond advisory scope."
version: "0.0.1"
category: "devops"
tags:
  - "aws-advisor"
  - "aws"
  - "cloud"
  - "architecture"
  - "security"
  - "iam"
  - "cloudformation"
  - "well-architected"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/aws-advisor"
upstream_author: "Felipe Rodrigues - github.com/felipfr"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# AWS Advisor

## Overview

Use this skill for AWS-specific advisory work that needs documentation-backed guidance rather than guesswork. It is designed for architecture design and review, service selection, security posture review, migration planning, infrastructure-as-code decisions, and troubleshooting common AWS issues such as IAM authorization failures, regional availability mismatches, quota problems, and CloudFormation deployment failures.

This skill should produce answers that are:

- grounded in current AWS documentation and explicit assumptions
- structured around requirements, constraints, trade-offs, and next actions
- security-aware by default
- clear about what is advisory guidance versus what would require live AWS account inspection

Preserve the original upstream intent: use documentation-first AWS advisory behavior, adapt to the user's stack and preferences, and avoid forcing a single tool or framework when multiple valid options exist.

## When to Use This Skill

Use this skill when the request is primarily about AWS.

### Good fits

- Designing or reviewing an AWS architecture
- Comparing AWS service options for compute, storage, databases, messaging, networking, or API delivery
- Performing a lightweight Well-Architected style review
- Reviewing AWS security posture for IAM, networking, encryption, secrets, logging, or monitoring
- Planning migrations or modernization into AWS
- Choosing among CloudFormation, CDK, SAM, Terraform, or related implementation approaches
- Troubleshooting AWS issues such as:
  - `AccessDenied` or authorization errors
  - service unavailable in a target region
  - quota or limit failures
  - CloudFormation stack create/update/rollback problems
  - drift or configuration mismatch between intended and deployed infrastructure
- Teaching or explaining how an AWS service works in the context of a real design or implementation choice

### Do not use this skill when

- The request is about Azure, Google Cloud, or general multi-cloud strategy without meaningful AWS context
- The user needs direct production changes in a live AWS account and no account evidence or operator access path is available
- The task depends on vendor-specific non-AWS product behavior that cannot be validated from AWS documentation
- The work has drifted fully into another specialization, such as deep Terraform module authoring or Kubernetes debugging, where a dedicated adjacent skill should lead execution

### Scope boundary

This skill is advisory. It can recommend patterns, checks, and troubleshooting steps, but it should not present account-specific facts unless they are verified by user-provided evidence or AWS tooling available to the operator. Keep the AWS Shared Responsibility Model in mind: AWS manages parts of the cloud platform, while customers remain responsible for areas like IAM design, data classification, application security, and many configuration decisions.

## Operating Table

| Question type | First action | Evidence to gather | Primary references or tools | Expected output |
| --- | --- | --- | --- | --- |
| Architecture review | Capture workload goals and constraints | workload type, scale, latency targets, compliance, regions, RTO/RPO, budget | `references/aws-architecture-intake.md`, `references/well-architected-review-checklist.md` | architecture review with risks, trade-offs, and next steps |
| Service selection | Narrow decision by workload shape | traffic profile, statefulness, ops tolerance, team skills, integration needs | `references/service-selection-decision-tree.md`, AWS service docs | comparison table with recommendation and assumptions |
| Security review | Start with identity and exposure boundaries | IAM model, network paths, encryption posture, secrets, logs, monitoring | `references/security-review-worksheet.md` | prioritized security findings and remediations |
| IAM `AccessDenied` | Identify which policy layer denied access | caller identity, action, resource ARN, error text, policies, SCP context | `references/troubleshooting-matrix.md`, IAM policy evaluation docs | cause hypothesis and focused remediation path |
| Region or quota issue | Verify service support and limits before redesigning | account region, target service, feature needed, quota/error message | `references/region-and-quota-checks.md` | validation of availability or quota constraint plus options |
| CloudFormation failure | Inspect failure stage and recent stack events | stack events, failed logical resource, rollback state, dependencies | `references/troubleshooting-matrix.md` | triage summary and safe next diagnostic steps |
| Drift or config mismatch | Confirm whether actual resources differ from intended state | template or IaC source, observed config, stack drift status | `references/troubleshooting-matrix.md` | likely drift causes and reconciliation options |
| Migration planning | Clarify target state and constraints first | source platform, dependencies, downtime tolerance, compliance, data gravity | `references/aws-architecture-intake.md` | migration approach, risks, sequencing, and open questions |

## Workflow

Follow this workflow unless the user asks for a narrower answer.

1. **Clarify the request**  
   Identify the AWS services involved, the desired outcome, and whether the user wants design guidance, troubleshooting, implementation help, or a review.

2. **Capture constraints and assumptions**  
   Gather the minimum useful context: workload type, scale, latency, availability goals, security/compliance needs, regions, recovery targets, budget sensitivity, current tooling, and team preferences.

3. **Choose the right advisory path**  
   Route into one of these modes:
   - architecture review
   - service selection
   - security review
   - troubleshooting
   - migration planning
   - implementation pattern guidance

4. **Validate against current AWS documentation**  
   Search first, then read the most relevant AWS documentation pages. Prefer official AWS sources. If discussing Terraform or another non-AWS-native tool, distinguish AWS guidance from third-party ecosystem behavior.

5. **Check regional and quota assumptions when relevant**  
   Do not assume a service, feature, or quota is available in the target region. Verify before recommending designs that depend on them.

6. **Evaluate across core architecture dimensions**  
   For architecture advice, explicitly cover at least:
   - security
   - reliability
   - operational excellence / observability
   - performance efficiency
   - cost implications
   - sustainability when material

7. **Present options and trade-offs**  
   Avoid pretending there is one universally correct AWS design. Show what changes if the user optimizes for speed, cost, control, portability, compliance, or team familiarity.

8. **Provide implementation-oriented guidance**  
   When useful, include:
   - service configuration considerations
   - IAM and network boundaries
   - logging and monitoring expectations
   - IaC approach options
   - safe rollout considerations

9. **State unknowns and next checks**  
   Call out assumptions, missing data, and what should be verified in the user's environment before production action.

10. **Cite the documentation basis**  
    Mention the AWS documentation families or references used so the answer is auditable and easier to refresh.

### Task-specific variants

#### Architecture review flow

1. Use `references/aws-architecture-intake.md`
2. Review with `references/well-architected-review-checklist.md`
3. Identify major risks, bottlenecks, and single points of failure
4. Compare at least one alternative design when trade-offs are non-trivial
5. Produce a recommendation with assumptions, risks, and next actions

#### Security review flow

1. Use `references/security-review-worksheet.md`
2. Review IAM, network exposure, encryption, secrets, logging, and monitoring
3. Separate AWS-managed responsibilities from customer responsibilities
4. Prioritize findings by blast radius and likelihood
5. Recommend focused remediations and validation steps

#### Troubleshooting flow

1. Capture exact symptoms and error text
2. Identify the affected service, region, identity, and deployment path
3. Verify known control planes first: IAM, region support, quotas, stack events, logs, metrics
4. Use `references/troubleshooting-matrix.md`
5. Recommend the smallest safe next diagnostic or remediation step

#### Service selection flow

1. Use `references/service-selection-decision-tree.md`
2. Ask what the team is optimizing for
3. Compare native AWS options first
4. If including Terraform or ecosystem tools, label them clearly as non-AWS-native choices
5. End with a recommendation and conditions that would change it

## Examples

### Example 1: Architecture review request

```text
Use @aws-advisor to review this planned SaaS architecture on AWS. We expect 20k daily active users, need multi-AZ resilience, moderate PCI-related controls, RPO under 15 minutes, and prefer managed services over self-managed clusters. Compare at least two approaches and call out security, reliability, and cost trade-offs.
```

**Expected output:** A structured review packet with assumptions, architecture risks, service recommendations, trade-offs, and next validation steps.

### Example 2: IAM investigation

```text
Use @aws-advisor to investigate this AWS error: User arn:aws:iam::123456789012:role/DeployRole is not authorized to perform cloudformation:UpdateStack on arn:aws:cloudformation:us-east-1:123456789012:stack/app-prod/... Determine the likely permission layers involved and the safest next checks.
```

**Expected output:** A focused IAM troubleshooting summary that considers identity policy, resource policy, permissions boundary, session policy, and Organizations SCP interactions.

See also: [examples/iam-access-denied-investigation.md](examples/iam-access-denied-investigation.md)

### Example 3: CloudFormation failure triage

```text
Use @aws-advisor to triage a CloudFormation update failure. The stack entered UPDATE_ROLLBACK_IN_PROGRESS after an RDS change. Explain what evidence to gather first, likely causes, and safe next steps before retrying.
```

**Expected output:** A triage plan centered on stack events, failed logical resources, dependency issues, immutable property changes, and rollback implications.

See also: [examples/cloudformation-failure-triage.md](examples/cloudformation-failure-triage.md)

### Example 4: Service selection comparison

```text
Use @aws-advisor to choose between ECS on Fargate, EKS, and Lambda for a new event-driven internal platform. The team is small, prefers low operational overhead, and expects bursty workloads with some long-running jobs.
```

**Expected output:** A comparison that maps workload shape and team constraints to a recommendation, plus caveats that would favor another choice.

See also: [examples/service-selection-comparison.md](examples/service-selection-comparison.md)

## Best Practices

### Do

- Search AWS documentation before answering uncertain or version-sensitive questions
- Ask for the user's preferred language, framework, and IaC tool before writing implementation examples
- Make assumptions explicit when account-level facts are unavailable
- Validate region and feature availability for designs that depend on specific AWS capabilities
- Include security posture in every architecture answer: identity, network exposure, encryption, secrets, logging, and monitoring
- Include observability guidance, not just deployment guidance
- Frame recommendations as trade-offs, especially for service selection and IaC choices
- Distinguish AWS-native guidance from third-party or ecosystem guidance
- Prefer the smallest safe remediation step during troubleshooting
- Note cost implications when recommending managed services, data transfer patterns, or always-on infrastructure

### Do not

- Guess service limits, regional availability, or feature support
- Treat `AccessDenied` as only an IAM identity policy problem; other policy layers may apply
- Recommend destructive remediation without evidence from stack events, policies, logs, or metrics
- Assume the user's preferred language or deployment framework
- Present a single tool as the default answer for every team or workload
- Blur the AWS Shared Responsibility Model by implying AWS owns customer IAM, application security, or data governance decisions

### IaC selection guidance

Use context, not preference, to choose the implementation path.

| Context | Likely fit | Why |
| --- | --- | --- |
| AWS-native teams wanting direct service fidelity | CloudFormation | native model, broad AWS alignment |
| Teams wanting higher-level AWS-native abstractions in code | CDK | abstraction plus language ergonomics |
| Lambda-focused or event-driven serverless apps | SAM | streamlined AWS-native serverless workflow |
| Existing multi-cloud or Terraform-heavy organizations | Terraform | consistency with existing operating model |
| Fast prototypes with established framework conventions | Serverless Framework or similar ecosystem tools | speed and conventions, but validate current ecosystem behavior separately |

When recommending non-AWS-native tools, say so explicitly and avoid implying AWS documentation alone is sufficient to validate provider- or framework-specific behavior.

## Troubleshooting

### Problem: IAM `AccessDenied` or `not authorized`

**Symptoms:** Error messages mention `is not authorized to perform`, `AccessDenied`, or a denied API action even though the caller appears to have a matching allow policy.

**Solution:** Check the full policy evaluation path. Consider identity-based policy, resource-based policy, permissions boundary, session policy, service control policy, and explicit denies. Confirm the principal ARN, requested action, resource ARN, and any condition keys that may not match. Use the IAM troubleshooting and policy evaluation references before proposing changes.

### Problem: Service or feature is unavailable in the target region

**Symptoms:** The requested design depends on a service, feature, or endpoint that is missing in a specific AWS region, or deployment tooling reports unsupported region errors.

**Solution:** Verify the exact service and feature in the target region rather than assuming parity across regions. If unavailable, recommend one of: alternate region, alternate service design, or architecture change that removes the dependency. Also verify whether compliance, latency, or residency rules prevent a region change.

### Problem: Quota or service limit blocks deployment or scaling

**Symptoms:** Deployment or runtime errors mention limits, quotas, exhausted capacity, or resource ceilings.

**Solution:** Identify the exact quota involved, whether it is adjustable, and whether the issue is account-, region-, or resource-scoped. Recommend the smallest next step: quota verification, quota increase request, staged rollout, or design change to reduce pressure on that limit.

### Problem: CloudFormation stack create or update failed

**Symptoms:** Stack status enters `ROLLBACK_IN_PROGRESS`, `UPDATE_ROLLBACK_IN_PROGRESS`, or another failed state; one or more logical resources fail during create, update, or delete.

**Solution:** Review stack events first. Identify the first failing logical resource and the underlying service error. Common causes include missing permissions, invalid property combinations, dependency ordering, immutable property changes, naming conflicts, or deletion protection issues. Avoid telling the user to retry blindly before understanding the failing event chain.

### Problem: Drift or configuration mismatch

**Symptoms:** Actual AWS resources no longer match the IaC definition or expected stack state, often after manual changes or partial failed updates.

**Solution:** Confirm whether drift exists and which resources differ. Compare intended configuration, deployed state, and recent operational changes. Recommend a reconciliation path: import or update IaC, revert manual drift, or rebuild the affected resource where appropriate and safe.

### Problem: Insufficient observability blocks diagnosis

**Symptoms:** The user cannot explain failures because logs, metrics, alarms, or traces are absent or too incomplete to isolate the issue.

**Solution:** Treat observability as a prerequisite, not an optional add-on. Identify the minimum CloudWatch logs, metrics, alarms, and service-specific diagnostics needed to continue. Recommend instrumenting before attempting broad remediation.

## Related Skills

- `@terraform` - Use when the task becomes primarily Terraform module authoring, provider behavior, or state/workspace workflow work.
- `@kubernetes` - Use when EKS or Kubernetes internals dominate the troubleshooting or implementation path.
- `@docker` - Use when container build, image, or runtime packaging concerns are the main blocker.
- `@security-review` - Use when the AWS question becomes a deeper cross-system security assessment.
- `@incident-response` - Use when the work shifts from architecture or advisory guidance to active outage triage and response coordination.

Keep `@aws-advisor` as the front door for AWS architecture, service selection, migration, and cloud control-plane troubleshooting, then hand off when another subsystem becomes the primary execution surface.

## Additional Resources

### Local references

- [AWS architecture intake](references/aws-architecture-intake.md)
- [Well-Architected review checklist](references/well-architected-review-checklist.md)
- [Security review worksheet](references/security-review-worksheet.md)
- [Troubleshooting matrix](references/troubleshooting-matrix.md)
- [Service selection decision tree](references/service-selection-decision-tree.md)
- [Region and quota checks](references/region-and-quota-checks.md)

### Worked examples

- [Architecture review prompt](examples/architecture-review-prompt.md)
- [IAM access denied investigation](examples/iam-access-denied-investigation.md)
- [CloudFormation failure triage](examples/cloudformation-failure-triage.md)
- [Service selection comparison](examples/service-selection-comparison.md)

### Agent routing notes

- [AWS routing notes](agents/aws-routing-notes.md)

### Primary AWS documentation families to prefer

- AWS Well-Architected Framework
- AWS Well-Architected Tool
- AWS Architecture Center
- AWS Prescriptive Guidance
- AWS IAM policy evaluation and access denied troubleshooting
- AWS General Reference for regions, endpoints, and quotas
- AWS CloudFormation troubleshooting and drift detection
- Amazon CloudWatch documentation for logs, metrics, and alarms
- AWS Trusted Advisor for proactive checks when available

When answering, cite the most relevant AWS documentation family or service guide used to support the recommendation.
