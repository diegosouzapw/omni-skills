# Region and Quota Checks

Use this quick guide before making region-sensitive recommendations.

## Region checks

Verify:

- target AWS region
- whether the exact service is available in that region
- whether the specific feature needed is also available in that region
- whether latency, compliance, or residency constraints allow alternate regions
- whether cross-region dependencies introduce cost or complexity

## Quota checks

Verify:

- which quota is involved
- whether the quota is account-wide, regional, or resource-specific
- whether the quota is adjustable
- whether the current design can avoid the quota bottleneck
- whether the issue occurs at deploy time, scale-up time, or steady-state operation

## Common mistakes

- assuming all regions have the same feature set
- assuming default quotas are sufficient for production
- recommending a service without checking account or regional constraints
- ignoring data transfer and operational complexity created by alternate-region designs

## Output reminder

When a region or quota issue exists, state:

- what was assumed
- what must be verified
- what fallback options exist
- what trade-offs each fallback introduces
