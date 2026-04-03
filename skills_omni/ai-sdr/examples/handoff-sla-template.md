# Handoff SLA Template

Use this template to define response-time expectations once the AI SDR routes a prospect to a human.

## Example SLA table

| Event | Target owner | Target response time | Escalation if missed |
| --- | --- | --- | --- |
| Positive reply requesting details | SDR or AE queue | within 1 business hour | notify sales manager |
| Positive reply requesting meeting | SDR or AE queue | within 30 minutes during business hours | notify queue owner |
| Compliance-sensitive reply | legal, security, or designated reviewer | same business day | notify operations lead |
| Opt-out or removal request | suppression owner | as soon as possible under policy | notify compliance owner |
| Neutral follow-up request | SDR queue | within 1 business day | notify sales operations |

## Minimum fields to define

- who owns each queue
- business-hours assumption
- after-hours behavior
- escalation contact
- where the SLA timestamp is stored
- who reviews SLA misses weekly

## Notes

A fast AI SDR handoff is not enough if ownership is unclear. Every routed class needs one accountable human owner.
