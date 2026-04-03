# Outbound Deliverability Basics

This is a GTM hygiene checklist, not a full deliverability manual.

## Before Sending Cold Outreach

- [ ] SPF is configured for the sending domain.
- [ ] DKIM is configured and passing.
- [ ] DMARC is configured.
- [ ] Sender identity is truthful and consistent.
- [ ] Unsubscribe handling exists and is tested.
- [ ] Suppression handling exists and is respected.
- [ ] Sending volume starts low and increases gradually.
- [ ] ICP targeting is narrow enough that the message is relevant.

## Common Failure Patterns

### Low reply rate, normal deliverability

Usually a targeting or message problem before a technical one.

### Bounces or spam placement

Check authentication, list quality, send volume, and domain reputation.

### Positive opens, no meaningful replies

The first line may be personalized, but the offer is generic or irrelevant.

## Practical Rules

- do not scale volume before message-market fit is visible
- do not treat warmup or tooling as proof of compliance or inbox placement
- keep outreach relevance higher than send volume
- if the founder cannot process replies and follow-up, reduce sending until they can

## Escalate When

Escalate to a dedicated deliverability or email operations skill if the problem requires mailbox-provider remediation, domain reputation recovery, or technical mail infrastructure debugging.
