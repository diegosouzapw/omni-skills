# Video Outreach Metrics Dictionary

Use a small, stable event set. Do not mix definitions casually across tools.

## Core events

| Event | Definition | Notes |
| --- | --- | --- |
| Sent | Message was submitted to the sending system | Not the same as delivered |
| Delivered | Message was accepted by the destination mail system when available | Some tools may not expose this |
| Opened | Recipient opened the message when tracking is available | Privacy tooling can distort this |
| Clicked | Recipient clicked the hosted video, thumbnail, or demo link | Often more reliable than opens |
| Played | Hosted video started playback | Confirm whether autoplay is excluded |
| Watched 25% | Viewer reached at least 25% of runtime | Useful for weak-intent filtering |
| Watched 50% | Viewer reached at least 50% of runtime | Good midpoint engagement signal |
| Watched 75% | Viewer reached at least 75% of runtime | Stronger intent, but still not a guarantee |
| Completed | Viewer reached the end or platform-defined completion threshold | Verify platform definition |
| Replied | Prospect replied in any tracked channel | Strong outcome metric |
| Booked | Prospect booked a meeting or agreed to a next step | Often the most practical campaign KPI |
| Progressed | Opportunity moved to the next defined pipeline stage | Best for pipeline measurement |

## Reporting guardrails

- Choose one system of record for each KPI.
- Document whether watch thresholds come from the video platform or CRM sync.
- Do not compare one tool's "play" event to another tool's "unique viewer" event as if they were equal.
- Use reply, booked, and progressed metrics as outcome anchors when telemetry is noisy.

## Recommended weekly dashboard

- messages sent
- delivered if available
- opens if available
- clicks
- plays
- watched 50%+
- watched 75%+
- replies
- meetings booked
- opportunities progressed

## Follow-up interpretation

- **No open or no click:** check targeting, deliverability, and subject line first.
- **Click but low watch:** check landing page, hook, and runtime.
- **High watch but no reply:** check CTA, offer, and follow-up speed.
- **Metrics disagree across systems:** document source of truth and use outcomes to arbitrate.
