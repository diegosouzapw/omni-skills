# Metrics Thresholds Glossary

Use these metrics as operating signals, not universal guarantees. Exact thresholds vary by sender history, provider mix, and campaign type.

## Primary metrics

### Bounce rate

What it tells you: list quality, verification quality, and data-source risk.

Use it for:

- launch gating
- provider/source audits
- pause decisions

Practical guidance:

- very low is expected for freshly verified lists
- rising hard bounces are a warning sign
- sustained bounce issues should block scaling

### Complaint / spam rate

What it tells you: recipient dissatisfaction, poor targeting, or weak sender reputation.

Use it for:

- inbox-placement diagnostics
- pause decisions
- segment-level audits

Practical guidance:

- rising complaint signals matter more than vanity engagement metrics
- even good copy cannot offset poor complaint control

### Reply rate
n
What it tells you: a mix of targeting quality, inbox placement, relevance, and CTA fit.

Use it for:

- comparing segments
- testing hooks and CTAs
- evaluating whether the system is producing conversation

Practical guidance:

- review by segment, not only in aggregate
- low reply rate with stable delivery points to targeting/copy issues more than infrastructure

### Unsubscribe rate

What it tells you: fit, expectations, and message classification mismatch.

Use it for:

- sequence fatigue checks
- segmentation checks
- suppression-path validation

### Positive reply rate

What it tells you: whether responses are commercially useful, not just numerous.

Use it for:

- offer and segment comparison
- qualification quality review

## Review cadence

### Before launch

Check:

- verification recency
- unsubscribe readiness
- mailbox/domain readiness
- planned volume pacing

### During first send waves

Check daily:

- bounces
- complaints/spam indicators
- unsubscribe processing
- reply quality by segment

### During scaling

Check at least weekly:

- trend by domain and mailbox pool
- segment-level reply quality
- any reputation deterioration after volume increases

## Stop or pause signals

Pause or slow down when:

- bounce rate materially worsens
- complaint signals rise
- inbox placement deteriorates after scale increases
- unsubscribe or suppression handling fails
- a new data source produces suspiciously poor quality
