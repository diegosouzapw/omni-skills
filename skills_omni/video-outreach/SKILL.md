---
name: "video-outreach"
description: "Video-first cold outreach workflow skill. Use this skill when a user needs to design or improve personalized video prospecting, AI-personalized video at scale, async selling, or demo-led outbound sequences. Use it for targeting, scripting, thumbnail-and-link delivery, CRM instrumentation, engagement-based follow-up, and trust-safe AI video usage. Do not use it for CRM/API implementation, mailbox deliverability engineering, legal advice, or deceptive impersonation workflows."
version: "0.0.1"
category: "development"
tags:
  - "video-outreach"
  - "video-prospecting"
  - "personalized-video"
  - "cold-outreach"
  - "async-selling"
  - "video-email"
  - "interactive-demo"
  - "tavus"
  - "sendspark"
  - "heygen"
  - "loom"
  - "supademo"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/video-outreach"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Video-First Cold Outreach

## Overview

Use this skill to design and run video-first outbound motions that are useful, measurable, and trustworthy.

This skill covers three related jobs:

1. **1:1 human-recorded outreach** for high-value accounts
2. **AI-personalized video at moderate or high volume** when scale matters
3. **Async demo-led selling** when a short walkthrough or interactive demo can replace a low-value meeting

It preserves the original upstream intent from `packages/skills-catalog/skills/(gtm)/video-outreach` in `tech-leads-club/agent-skills`, while reorganizing the material into an execution-focused workflow that is easier for agents to run safely.

Use the local support pack to choose the right motion, write stronger scripts, deliver email-safe thumbnails, instrument CRM follow-up, and avoid privacy or synthetic-media trust mistakes.

## When to Use This Skill

Use this skill when the user wants to:

- add personalized video to cold outreach
- choose between human-recorded video, AI-personalized video, and interactive demos
- scale video prospecting without making it feel deceptive or low-trust
- build a "made this for you" motion around a useful deliverable, audit, teardown, or short walkthrough
- place video correctly inside a multichannel sequence such as email plus LinkedIn plus async demo follow-up
- define what to do after a prospect opens, plays, watches, replays, replies, or shares a video
- operationalize video outreach inside a CRM-backed sales workflow

### Strong activation signals

- The user mentions **video outreach**, **video prospecting**, **personalized video**, **video email**, **async selling**, **interactive demo**, **Tavus**, **Sendspark**, **HeyGen**, **Loom**, **Navattic**, or **Supademo**.
- The user needs help choosing a tool or motion by **volume**, **deal size**, **language needs**, **authenticity requirements**, or **team maturity**.
- The user wants a repeatable workflow for **cold outreach**, **post-demo recap**, **proposal walkthrough**, or **internal champion enablement**.

## When Not to Use This Skill

Do **not** use this skill as the primary workflow when the request is mainly about:

- CRM or API implementation
- code review, software architecture, or automation engineering
- mailbox infrastructure or deliverability debugging
- legal review for regulated claims or jurisdiction-specific marketing compliance
- deceptive impersonation, unauthorized face or voice cloning, or pretending AI-generated video was individually recorded when it was not
- outreach that relies on sensitive personal data, unclear lawful basis for personalization, or unapproved testimonial/endorsement claims

If the task drifts there, hand off deliberately.

## Operating Table

| Situation | Recommended motion | Personalization depth | Tool class | Required instrumentation | Primary success metric | Main risk note |
| --- | --- | --- | --- | --- | --- | --- |
| Under 20 videos/week, high ACV, trust-sensitive outreach | Human-recorded 1:1 video | High | Loom-style webcam + screen share | Hosted page, owner, CRM note, CTA | Replies and meetings booked | Speed is lower, but trust is highest |
| 50-500 videos/month, moderate to high ACV | Human-led video with AI assistance | Medium-high | Sendspark-style personalization | CRM sync, contact association, play/click logging | Play rate, reply rate, booked meetings | Over-templating can make videos feel fake |
| 500+/month, scale-first outbound | AI-personalized video | Medium | Tavus / HeyGen / similar synthetic video tooling | Batch ownership, landing pages, engagement tracking, follow-up SLA | Qualified replies and pipeline created | Trust risk is higher; disclosure and approval matter |
| Product-led outbound or pre-demo education | Interactive demo plus short video intro | Medium | Supademo / Navattic / Loom | Demo views, click paths, CRM association | Demo completion, meeting conversion | Too much product detail too early can hurt response |
| Post-demo recap or proposal walkthrough | Human-recorded recap video | Medium-high | Loom-style screen recording | CRM logging, CTA, same-day follow-up | Next-step confirmation | Long recap videos lose attention |
| No reliable analytics available | Plain hosted video link with manual follow-up | Low-medium | Any hosted video tool | Minimum: send log, owner, CTA, reply tracking | Replies and meetings booked | Watch metrics will be incomplete; do not over-interpret |

For a structured evaluation worksheet, use [references/video-outreach-tool-evaluation-matrix.md](references/video-outreach-tool-evaluation-matrix.md).

## Workflow

1. **Confirm the job to be done**
   - Is this cold outbound, follow-up, post-demo recap, or async demo replacement?
   - Is the goal to book a meeting, accelerate an active deal, or enable internal forwarding?
   - If the real blocker is deliverability, CRM setup, or implementation, route away.

2. **Collect the minimum operating inputs**
   - outreach volume per week or month
   - target segment and approximate deal size
   - languages required
   - current stack: CRM, sequencer, hosting, demo tool
   - whether the sender is comfortable using AI likeness, avatar, or voice cloning
   - what artifact or insight can be shown in the first 15 seconds

3. **Run compliance and trust preflight before tool selection**
   - Verify the lawful and policy-approved use of prospect data.
   - Confirm whether testimonials, customer logos, screenshots, or result claims are approved.
   - Confirm whether synthetic face, voice, or avatar usage is authorized.
   - Escalate when jurisdiction, consent, or disclosure requirements are unclear.
   - Use [references/video-outreach-compliance-checklist.md](references/video-outreach-compliance-checklist.md).

4. **Check deliverability readiness before scaling**
   - Confirm sender authentication and unsubscribe handling are in place.
   - Prefer thumbnail or GIF plus hosted landing page over embedded video in email.
   - Verify that the sending setup is ready for links, images, and campaign scale.
   - Use [references/video-outreach-deliverability-checklist.md](references/video-outreach-deliverability-checklist.md).

5. **Decide whether video is the right move at all**
   - Use video when the message benefits from showing something, creating trust, or demonstrating effort.
   - Skip video when the ask is simple, the list is weakly qualified, or the segment is too low-value for the effort.
   - Use a demo-led motion when self-guided product exploration is more valuable than a talking-head clip.

6. **Choose the motion: human, AI-personalized, or interactive demo**
   - Prefer **human-recorded** for high-value accounts, trust-sensitive buyers, and post-demo communication.
   - Prefer **AI-personalized** when scale is required and the message can remain honest, useful, and operationally reviewed.
   - Prefer **interactive demos** when the buyer needs to see the product or share it internally.
   - Use [references/video-outreach-tool-evaluation-matrix.md](references/video-outreach-tool-evaluation-matrix.md) to compare options conservatively.

7. **Create a useful outreach artifact**
   - Build a small deliverable the prospect can understand immediately: audit, teardown, annotated screenshot, competitive note, mini-demo, recap, or tailored ROI angle.
   - Make it useful even if they never reply.
   - Use only the minimum personal or company context required.

8. **Write the script and thumbnail plan**
   - First 5 seconds: name, company, and one specific reason for the outreach.
   - Show the artifact early.
   - Keep one clear CTA only.
   - Plan an email-safe thumbnail or GIF preview that links to a hosted page.
   - Do not assume embedded playback inside email clients.
   - Use [examples/video-outreach-script-templates.md](examples/video-outreach-script-templates.md).

9. **Record or generate the video**
   - For cold outreach, keep it short.
   - Check pronunciation, framing, audio, and any dynamic fields before sending at scale.
   - If using synthetic media, verify authorization and whether disclosure is needed for trust.

10. **Deliver through a channel-safe sequence**
    - Send a clickable thumbnail or GIF linking to the hosted video or demo page.
    - Pair video with concise body copy and a text fallback link.
    - Use multichannel sequencing only where appropriate; do not spam every channel at once.
    - Use [examples/video-outreach-sequence-blueprints.md](examples/video-outreach-sequence-blueprints.md).

11. **Log ownership and engagement data**
    - Record sender, campaign, CTA, send date, and target segment.
    - Sync events into CRM when possible.
    - Track sends, delivered, opens if available, plays, watched thresholds, replies, meetings booked, and influenced opportunities.
    - Use [references/video-outreach-metrics-dictionary.md](references/video-outreach-metrics-dictionary.md).

12. **Branch follow-up based on engagement**
    - No play: retry with a stronger subject line, different channel, or simpler ask.
    - Partial watch: shorten the next touch and restate the value.
    - High watch or replay: prioritize follow-up quickly, but only within company policy and contact rules.
    - Shared internally: support the champion with recap assets or a demo.

13. **Review trust, privacy, and retention**
    - Remove unnecessary screenshots, prospect data, or generated assets after the campaign or review window.
    - Avoid sensitive personal data and creepy personalization.
    - Do not mimic a real person without authorization.

## Examples

### Example 1: Build a motion recommendation

```text
Use @video-outreach to recommend the best outbound motion for a team sending 150 videos/month to mid-market prospects. Compare human-recorded, AI-personalized, and demo-led options. Include risks, CRM requirements, and follow-up logic.
```

**Expected outcome:** A clear recommendation, one fallback option, instrumentation requirements, and a short sequence design.

### Example 2: Create a first-touch video sequence

```text
Use @video-outreach to design a 15-day outbound sequence for enterprise prospects. Start with a "made this for you" cold video, include one text-only follow-up, one LinkedIn touch, and one async demo touch. Keep the CTA soft and define what happens at 0%, 25%, 50%, and 75% watch thresholds.
```

**Expected outcome:** A channel-by-channel sequence with engagement-triggered follow-up actions.

### Example 3: Review whether AI video is appropriate

```text
Use @video-outreach to evaluate whether AI-personalized video is appropriate for a multilingual campaign targeting 1,000 prospects/month. Flag trust, disclosure, privacy, and operational concerns before recommending a tool class.
```

**Expected outcome:** A recommendation that weighs scale against trust, and includes approval checkpoints.

### Example 4: Use the local support files

```bash
python3 skills/video-outreach/scripts/video_outreach_packet.py --show all
```

**Expected outcome:** A concise inventory of the bundled decision, delivery, privacy, metrics, and example assets.

### Example 5: Draft a human-recorded cold video

```text
Use @video-outreach to draft a 60-second human-recorded video for a VP of Sales. Show an audit artifact in the first 15 seconds, write a matching subject line, thumbnail text, and one same-day follow-up email.
```

**Expected outcome:** Script, subject line, thumbnail concept, CTA, and follow-up copy aligned to a human-recorded motion.

### Example 6: Collect the right intake before recommending tools

Use [examples/video-outreach-discovery-questionnaire.md](examples/video-outreach-discovery-questionnaire.md) when the request is underspecified and you need to gather the operating inputs before proposing a workflow.

## Best Practices

### Do

- Start with **segment, deal size, trust constraints, and goal** before choosing a tool.
- Prefer a **useful artifact** over a generic pitch video.
- Use **clickable thumbnails or GIF previews** that link to a hosted page instead of relying on embedded playback.
- Keep cold outreach videos short and front-load the reason for recording.
- Track engagement inside CRM where possible and define a follow-up owner and SLA.
- Use AI-personalized video only when the workflow can stay honest, quality-checked, and brand-safe.
- Use **data minimization**: only collect or show the personal and company details necessary for the outreach.
- Set retention expectations for screenshots, recordings, cloned assets, and campaign artifacts.
- Fall back to human-recorded video when authenticity matters more than scale.
- Track your own baselines by segment instead of assuming vendor benchmarks will apply.

### Don't

- Do not imply a video was personally recorded 1:1 if it was materially AI-generated or batch-personalized in a misleading way.
- Do not impersonate a real person or clone face or voice without authorization.
- Do not use sensitive personal data or overly invasive personalization.
- Do not send raw video attachments when a hosted page and thumbnail link will work better.
- Do not treat watch metrics as perfect truth; privacy features and email security tooling can distort them.
- Do not overuse video at every touch; mix formats and keep the sequence purposeful.
- Do not copy vendor marketing benchmarks into plans as guaranteed outcomes.
- Do not escalate to aggressive real-time follow-up tactics unless they fit company policy and local contact rules.

### Responsible AI and privacy guardrails

- If the recipient's trust would reasonably change based on whether the video is AI-generated, disclose that clearly.
- Get internal approval before using cloned voice, avatars, or face replicas in outbound.
- Review storage and deletion practices for uploaded recordings, screenshots, and generated assets.
- Avoid storing prospect-specific media longer than operationally necessary.
- Escalate when lawful basis, consent, endorsement use, or jurisdictional requirements are unclear.

## Troubleshooting

### Problem: Low open rate before anyone watches the video

**Symptoms:** Few prospects open the message, so play rate is impossible to interpret.
**Likely causes:** Deliverability issues, weak subject line, poor targeting, or low sender reputation.
**Solution:** Check sender authentication and unsubscribe handling, simplify the subject line, confirm ICP quality, and verify readiness with [references/video-outreach-deliverability-checklist.md](references/video-outreach-deliverability-checklist.md).

### Problem: Low play rate despite decent open rate

**Symptoms:** Emails are opened, but few prospects click through to watch.
**Likely causes:** Weak subject line, generic thumbnail, unclear value, or the message body does not explain why the video is worth opening.
**Solution:** Rewrite the subject line around the prospect or deliverable, change the thumbnail to show a face or artifact, and make the body copy explain the value in one sentence.

### Problem: Prospects start the video but drop early

**Symptoms:** Play rate is acceptable, but average watch percentage is low.
**Likely causes:** Slow opening, too much filler, poor pacing, or too much company introduction.
**Solution:** Put the prospect name, company, and reason for recording in the first 5 seconds. Show the artifact earlier and shorten the total runtime.

### Problem: High watch rate but low reply rate

**Symptoms:** Prospects watch most of the video but do not book or respond.
**Likely causes:** CTA is weak, too many asks, unclear next step, or the value shown does not connect to action.
**Solution:** Reduce to one CTA, make the ask lighter, and send a same-day follow-up referencing the specific artifact or takeaway.

### Problem: The video feels fake or gets negative reactions

**Symptoms:** Recipients comment on uncanny delivery, awkward pronunciation, or distrust of the format.
**Likely causes:** Overuse of synthetic personalization, poor quality control, or lack of transparency.
**Solution:** Pause the campaign, review pronunciation and rendering quality, and consider switching that segment to human-recorded video. Disclose AI generation when material to trust.

### Problem: Personalization is inaccurate or stale

**Symptoms:** Mispronounced names, wrong company references, outdated screenshots, or irrelevant examples appear in the video.
**Likely causes:** Weak input data, stale enrichment, poor QA, or batch generation without review.
**Solution:** Re-validate source data, add human QA before send, simplify dynamic fields, and keep a fallback text-first or human-recorded path for affected accounts.

### Problem: CRM or analytics data is incomplete

**Symptoms:** Sends are logged, but play, watch, or contact association data is missing or inconsistent.
**Likely causes:** Tracking disabled, cookies blocked, mail-security scanners, broken integration mapping, or untracked links.
**Solution:** Verify the hosted link, confirm CRM association rules, use reply and meeting data as fallback metrics, and avoid making aggressive decisions from noisy telemetry. Review [references/video-outreach-metrics-dictionary.md](references/video-outreach-metrics-dictionary.md).

### Problem: Watch metrics disagree between tools

**Symptoms:** CRM, video platform, and sequencer show different play or watch values.
**Likely causes:** Different event definitions, attribution windows, bot filtering, or delayed sync.
**Solution:** Standardize on one reporting definition per KPI, document the source of truth, and use the metric definitions in [references/video-outreach-metrics-dictionary.md](references/video-outreach-metrics-dictionary.md).

### Problem: Thumbnail or preview does not render correctly in email

**Symptoms:** Broken image, missing GIF, or text-only rendering across some clients.
**Likely causes:** Image-hosting policy, client restrictions, or security filtering.
**Solution:** Use a static thumbnail with play overlay, ensure alt text exists, and include a plain text fallback link such as "Watch the video here." Review [references/video-outreach-deliverability-checklist.md](references/video-outreach-deliverability-checklist.md).

### Problem: The tool recommendation is wrong for the team's maturity

**Symptoms:** The chosen workflow is too manual for the volume or too synthetic for the segment.
**Likely causes:** Tool choice was made before confirming volume, ACV, trust needs, or stack readiness.
**Solution:** Re-run the decision using [references/video-outreach-tool-evaluation-matrix.md](references/video-outreach-tool-evaluation-matrix.md) and adjust the motion before scaling further.

### Problem: The work drifted into implementation or deliverability engineering

**Symptoms:** The task turns into CRM setup, API wiring, deliverability triage, or mailbox infrastructure work.
**Likely causes:** The outreach plan is blocked by tooling or channel operations rather than message strategy.
**Solution:** Hand off intentionally to a technical implementation or deliverability-focused skill. Keep the outreach strategy, segmentation, and measurement assumptions documented for the next operator.

## Related Skills

- `@ai-cold-outreach` — use when the main problem is outbound copy, sequence writing, or messaging architecture rather than video workflow selection.
- `@ai-sdr` — use when the task expands into broader outbound system design, SDR operations, list strategy, routing, or multichannel process design.
- `@accessibility` — use when captions, transcripts, readability, or inclusive media delivery become a primary concern.
- `@ai-pricing` — use when the user mainly needs budget, package, or ROI framing for sales tooling decisions.

If the work becomes primarily about API integrations, CRM implementation, mailbox deliverability, or legal/privacy review, hand off to the appropriate technical or policy skill rather than stretching this one.

## Additional Resources

### Local support pack

| Resource | Purpose |
| --- | --- |
| [references/video-outreach-compliance-checklist.md](references/video-outreach-compliance-checklist.md) | Review privacy, consent, endorsement, identity, and disclosure checks before launch |
| [references/video-outreach-deliverability-checklist.md](references/video-outreach-deliverability-checklist.md) | Confirm sender auth, unsubscribe path, rendering safety, and hosted-video delivery |
| [references/video-outreach-tool-evaluation-matrix.md](references/video-outreach-tool-evaluation-matrix.md) | Compare tool classes and vendors using stable evaluation criteria |
| [references/video-outreach-metrics-dictionary.md](references/video-outreach-metrics-dictionary.md) | Define KPI events, watch thresholds, attribution notes, and reporting guardrails |
| [examples/video-outreach-discovery-questionnaire.md](examples/video-outreach-discovery-questionnaire.md) | Gather the operating inputs needed before recommending a workflow |
| [examples/video-outreach-sequence-blueprints.md](examples/video-outreach-sequence-blueprints.md) | Reusable outbound, follow-up, async-demo, and recap sequence patterns |
| [examples/video-outreach-script-templates.md](examples/video-outreach-script-templates.md) | Script starters for human-recorded, hybrid, and async-demo video |
| [scripts/video_outreach_packet.py](scripts/video_outreach_packet.py) | Print a safe local inventory of the bundled support pack |
| [agents/video-outreach-router.md](agents/video-outreach-router.md) | Route to this skill or hand off when the task shifts |

### Upstream lineage and original intent

This skill is derived from the community workflow in `tech-leads-club/agent-skills` and preserves the core upstream themes:

- the "made this for you" pattern
- tool selection by volume and authenticity needs
- video in the sales sequence
- interactive demos for async selling
- watch-signal-based follow-up

Use vendor claims and benchmarks as directional context only if separately verified and dated. Prefer official documentation and team baselines over stale marketing numbers.
