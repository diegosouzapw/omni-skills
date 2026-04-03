# Metrics and Thresholds

Use these metrics to diagnose campaign health. Exact acceptable ranges vary by stack, audience, and mailbox-provider signals, so use trends and context rather than a single universal number.

## Core metrics

### Bounce rate

What it indicates:

- list quality
- verification quality
- enrichment freshness

If it rises suddenly:

- inspect the newest source or segment first
- reduce or pause sending until the cause is isolated

### Complaint or spam-report signals

What it indicates:

- targeting mismatch
- poor relevance
- weak unsubscribe handling
- damaged reputation

If it worsens:

- pause scale, review copy and targeting, and verify suppression workflows

### Unsubscribe rate

What it indicates:

- message relevance
- targeting quality
- sequence pressure

If it spikes:

- reassess audience fit and CTA pressure

### Reply rate

What it indicates:

- combined effect of delivery, targeting, and copy

Do not treat it as a copy-only metric.

### Positive reply rate

What it indicates:

- whether responses are commercially meaningful

Use this alongside raw reply rate.

### Meeting-booked rate

What it indicates:

- whether the sequence creates pipeline, not just replies

## Recommended owner questions

For each campaign, define:

- who watches delivery signals
- who processes unsubscribes and objections
- who decides when to pause
- who approves new list sources

## Escalation mindset

Escalate when:

- delivery signals worsen quickly
- objections or opt-outs are not being enforced reliably
- a provider or sender tool changes authentication behavior
- raw reply rate improves but positive outcomes do not
