# Eval Scorecard

Use this scorecard to review AI SDR quality before scaling.

## Purpose

Measure whether the workflow is improving quality, not just activity.

## Core metrics

| Area | Metric | Target or threshold | Notes |
| --- | --- | --- | --- |
| Sender health | Delivery rate |  |  |
| Sender health | Bounce rate |  |  |
| Sender health | Complaint rate |  |  |
| Sender health | Unsubscribe rate |  |  |
| Qualification | Positive reply precision |  |  |
| Qualification | False-positive rate |  |  |
| Routing | Correct human queue assignment |  |  |
| Routing | Time to human handoff |  |  |
| Meetings | Qualified meeting rate |  |  |
| Meetings | Meeting acceptance rate |  |  |
| Meetings | Show rate |  |  |
| Revenue | Opportunity conversion rate |  |  |

## Labeled-set review

Use a fixed labeled set for regression checks when prompts, policies, or routing logic change.

Track:

- reply classification accuracy
- precision for positive replies
- precision for objection routing
- correct escalation for compliance-sensitive messages
- missed opt-out or suppression cases

## Review cadence

### Pilot

- review daily for sender-health anomalies
- review weekly for meeting quality and routing accuracy

### After stability

- review weekly for funnel quality
- review after every major rules or prompt change

## Decision prompts

### Ready to scale?

Only consider scaling if:

- sender-health metrics are stable
- positive reply precision is acceptable
- reps confirm meeting quality
- human handoff SLAs are being met
- no unresolved policy violations remain

### Hold or roll back?

Hold or roll back if:

- complaints or bounces worsen materially
- false positives increase
- routing errors create missed follow-up
- unauthorized claims appear in live replies

## Operator summary template

- What changed:
- Why it changed:
- Evaluation window:
- Improvement observed:
- Risks introduced:
- Recommendation: scale, hold, or roll back
