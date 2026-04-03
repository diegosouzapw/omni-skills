# Deliverability Audit Worksheet

Use this worksheet before launch, after major changes, and whenever inbox placement worsens.

## 1. Campaign identity

- Campaign name:
- Owner:
- Sending platform:
- Target geography:
- Audience type:
- Planned daily volume:
- Domain(s) in use:
- Mailboxes in use:

## 2. Go / no-go launch checks

Mark each item:

- [ ] Sending domain ownership is confirmed
- [ ] Mailbox owner or admin is identified
- [ ] SPF record exists
- [ ] DKIM signing is enabled
- [ ] DMARC record exists
- [ ] From domain alignment is understood
- [ ] Reply mailbox is monitored
- [ ] Unsubscribe / suppression process exists
- [ ] Contact list was verified recently
- [ ] Bounce and complaint owner is assigned

If any item is missing, do not recommend scale.

## 3. Authentication checks

### SPF
- Record present?
- Includes the actual sending service?
- Any known forwarding caveats?
- Notes:

### DKIM
- Signing enabled?
- Selector known?
- Failing or missing signatures observed?
- Notes:

### DMARC
- Record present?
- Policy level: `none` / `quarantine` / `reject`
- Reporting mailbox configured?
- Alignment issues known?
- Notes:

### Domain alignment
- Visible From domain:
- Envelope/mail-from domain:
- DKIM signing domain:
- Alignment confidence: high / medium / low

### PTR / reverse DNS
- Managed by sending provider?
- Any mismatch or unknown ownership?
- Notes:

## 4. Message hygiene checks

- [ ] First touch has no unnecessary links
- [ ] First touch has no images
- [ ] First touch has no attachments
- [ ] Only one CTA appears per email
- [ ] Sender identity is clear
- [ ] Claims are specific and supportable
- [ ] Unsubscribe path is defined for the campaign type

## 5. List quality checks

- Source of contacts:
- Date of last verification:
- Verification tool or method:
- Catch-all handling policy:
- Suppression list source(s):
- High-risk segments or imports:

## 6. Monitoring checks

- Bounce rate monitor exists
- Complaint / spam-rate monitor exists
- Reply-owner assigned
- Unsubscribe-owner assigned
- Gmail Postmaster / equivalent reviewed if available
- DMARC aggregate reports reviewed if policy is tightening

## 7. Incident triggers

Pause or reduce volume if any of these occur:

- bounce rate rises above internal safe range
- spam complaints increase materially
- Gmail/Yahoo placement degrades sharply
- unsubscribes are not being processed reliably
- authentication breaks after a platform or DNS change

## 8. Summary

- Overall status: go / revise / pause
- Highest-risk issue:
- Immediate next action:
- Escalation owner:
