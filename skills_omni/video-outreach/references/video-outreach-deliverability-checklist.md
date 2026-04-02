# Video Outreach Deliverability Checklist

Use this before scaling sends or troubleshooting low opens and low plays.

## Sender readiness

- [ ] SPF is configured.
- [ ] DKIM is configured.
- [ ] DMARC exists and matches current sending policy.
- [ ] The sending domain or mailbox is appropriate for campaign volume.
- [ ] Unsubscribe handling is defined where required by platform or policy.
- [ ] The team has reviewed sender reputation and recent spam-placement issues.

## Message construction

- [ ] The email uses a static thumbnail or lightweight GIF with a hosted landing-page link.
- [ ] The email does not rely on embedded video playback.
- [ ] There is a plain-text fallback link such as "Watch the video here."
- [ ] The body copy explains why the video is worth opening in one sentence.
- [ ] The subject line references the recipient, company, or deliverable when appropriate.

## Rendering and link safety

- [ ] Thumbnail dimensions are reasonable for email layouts.
- [ ] Alt text exists for the thumbnail image.
- [ ] The landing page works without autoplay assumptions.
- [ ] Links and images are tested in at least one representative client environment.
- [ ] Hosted assets do not require unusual downloads or direct file attachments.

## Launch controls

- [ ] Start with a small batch before scaling.
- [ ] Monitor opens, clicks, and replies before expanding volume.
- [ ] If opens drop after introducing video links, isolate whether the cause is targeting, subject line, reputation, or link handling.
- [ ] Keep a text-only fallback version of the sequence.

## Troubleshooting cues

### If open rate is low
Check authentication, sender reputation, subject lines, and list quality first.

### If open rate is acceptable but play rate is low
Check thumbnail quality, message positioning, and whether the call to watch is clear.

### If rendering is inconsistent
Use a static image and hosted page instead of richer inline media.
