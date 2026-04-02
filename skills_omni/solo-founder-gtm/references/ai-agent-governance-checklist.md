# AI Agent Governance Checklist

Use this checklist before allowing AI-assisted GTM workflows to run repeatedly.

## 1. Scope

- [ ] The task is clearly defined.
- [ ] Success and failure conditions are written down.
- [ ] The workflow has a human owner.

## 2. Data Handling

- [ ] Prompts avoid unnecessary personal data.
- [ ] Sensitive support, payment, or security data is excluded.
- [ ] Customer details are redacted when exact identity is unnecessary.

## 3. Approval Gates

- [ ] Outbound sends require founder review unless proven low-risk and pre-approved.
- [ ] Pricing, refunds, credits, and policy exceptions always require founder approval.
- [ ] Privacy, legal, or security representations always require human review.

## 4. Prompt and Workflow Quality

- [ ] Prompt includes role, task, constraints, and output format.
- [ ] Prompt is versioned for recurring workflows.
- [ ] At least one positive example and one failure mode are documented.

## 5. Evaluation

- [ ] Small-sample test completed before broad rollout.
- [ ] Outputs are scored for accuracy, tone, compliance risk, and usefulness.
- [ ] Failure cases are logged and reviewed.

## 6. Operations

- [ ] There is a rollback path.
- [ ] Logs or records are retained for review.
- [ ] A founder can pause the workflow quickly.

## 7. Safe Default by Task Type

| Task type | Default rule |
| --- | --- |
| internal summaries and categorization | can automate with spot checks |
| customer-facing drafts | automate drafting, require approval before send |
| high-risk customer actions | keep fully human-approved |
