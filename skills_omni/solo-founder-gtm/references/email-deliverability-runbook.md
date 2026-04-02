# Email Deliverability Runbook

Use this when outbound reply rates fall or spam placement increases.

## Check Authentication First

- SPF present and aligned
- DKIM enabled
- DMARC configured
- sending domain and reply handling are consistent

## Review Sending Behavior

- reduce volume if it increased sharply
- check bounce rate and complaint rate
- verify suppression lists are working
- confirm lists are targeted rather than broadly scraped

## Review Message Quality

- remove generic personalization
- avoid misleading subject lines
- reduce aggressive CTA density
- make sender identity and reason for contact clear

## Diagnosis Table

| Symptom | Likely cause | Safe fix |
| --- | --- | --- |
| high bounce rate | weak data quality or stale contacts | improve list quality, lower sends, remove weak records |
| good opens but few replies | weak targeting or generic value prop | tighten ICP, rewrite message around one pain point |
| spam placement | poor reputation, auth issues, sudden volume | fix auth, reduce volume, warm gradually |
| complaints or unsub spikes | misleading copy or bad fit | improve relevance, make opt-out obvious, suppress quickly |

## Escalate When

- domain reputation keeps deteriorating after fixes
- a provider flags the domain or mailbox
- complaint volume suggests a compliance issue rather than a copy issue
