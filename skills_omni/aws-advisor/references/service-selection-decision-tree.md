# AWS Service Selection Decision Tree

Use these questions to narrow service choices.

## Compute

- Is the workload event-driven and short-lived? Consider Lambda first.
- Does it need container packaging without Kubernetes complexity? Consider ECS, often with Fargate.
- Does it require Kubernetes APIs, ecosystem tooling, or cluster-level control? Consider EKS.
- Does it need full instance control, special networking, or legacy software support? Consider EC2.

## Storage

- Object storage with high durability? Consider S3.
- Shared file system semantics? Consider EFS or FSx depending on workload needs.
- Block storage attached to compute? Consider EBS.

## Databases

- Key-value or document at high scale with managed operations? Consider DynamoDB.
- Relational with managed backups and patching? Consider RDS or Aurora.
- Need a specialized engine or graph/time-series pattern? Validate the AWS-native fit before selecting.

## Messaging and integration

- Queue-based decoupling? Consider SQS.
- Pub/sub fan-out? Consider SNS or EventBridge depending on event model.
- Event routing across services and SaaS integrations? Consider EventBridge.
- Workflow orchestration? Consider Step Functions.

## API and edge

- Managed API front door? Consider API Gateway.
- Need load balancing for services? Consider ALB or NLB depending on traffic type.
- Need CDN and edge caching? Consider CloudFront.

## Decision reminders

Always ask:

- What is the operational burden the team can carry?
- What are the latency and scaling expectations?
- Does the choice increase lock-in, and is that acceptable?
- What monitoring and security controls are required?
- Which choice best fits the team's current operating model?
