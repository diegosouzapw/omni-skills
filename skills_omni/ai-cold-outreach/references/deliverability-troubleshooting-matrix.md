# Deliverability Troubleshooting Matrix

Use this matrix to move from symptom to evidence to next action.

| Symptom | Likely causes | Evidence to collect | Next action |
| --- | --- | --- | --- |
| Spam or bulk-folder placement | authentication misalignment, rising complaint rate, weak list quality, heavy formatting, tracking issues | test-send auth results, recent complaint indicators, bounce trend, sample message formatting | pause scaling, verify SPF/DKIM/DMARC alignment, simplify first touch, inspect list source |
| Hard bounce spike | stale data source, weak verification, role accounts, catch-all mishandling | bounce codes, source cohort, verification timestamps, provider mix | suppress bad source, re-verify, reduce volume until isolated |
| Failures after new sender tool added | missing SPF authorization, DKIM not enabled, DMARC alignment break | sender inventory, auth results by tool, DMARC aggregate reports | authorize tool, enable aligned DKIM, retest before relaunch |
| Complaint or spam-report spike | poor targeting, unclear unsubscribe, deceptive positioning, repeated outreach after objection | complaint indicators, reply samples, opt-out handling path, sequence timing | pause, improve suppression, simplify copy, reduce pressure, verify unsubscribe flow |
| Placement worsens after enabling tracking | tracking domain issues, link-heavy first touch, reputation effect from redirects | tracking settings, sample rendered email, before/after cohort comparison | test plain first touch, reduce links, confirm tracking-domain setup |
| Low replies with stable delivery | weak ICP fit, generic first lines, high-friction CTA, weak proof | segment-level reply data, sample copy, signal quality notes | test new hook, tighten segment, lower CTA friction |

## Suggested pause conditions

Pause scale and diagnose before proceeding if any of the following occur:

- bounce trend increases materially
- complaint or spam-report signals worsen
- provider warnings appear
- DMARC failures emerge after sender changes
- unsubscribe processing is not reliable

## Provider-aligned references

- Gmail sender guidelines: https://support.google.com/a/answer/81126
- Gmail best practices: https://support.google.com/a/answer/14229414
- Outlook bulk sender guidance: https://sendersupport.olc.protection.outlook.com/pm/policies-guidelines
