# Deliverability and Authentication Checklist

Use this checklist before any AI SDR email launch or scale-up.

## Purpose

This is an operational checklist, not legal advice. It helps confirm whether outbound email basics are in place before automation volume increases.

## Preflight checks

### 1. Domain and mailbox readiness

- Identify the exact domains and mailboxes that will send outreach.
- Confirm domain ownership and who can change DNS records.
- Confirm who owns sender reputation monitoring.
- Confirm bounce, complaint, and suppression handling ownership.

### 2. Authentication

Verify that the sending setup has:

- SPF configured for approved sending infrastructure
- DKIM signing enabled and passing
- DMARC published and aligned with the sending domain strategy

Record:

- sending domain
- SPF status
- DKIM selector and status
- DMARC policy and reporting destination
- owner responsible for remediation

### 3. Unsubscribe handling

Verify that the program supports:

- visible unsubscribe mechanism in the message body when required by policy or platform
- one-click unsubscribe support where expected by major mailbox providers
- prompt suppression after opt-out
- suppression list sync across sending tools and CRM where applicable

### 4. Complaint and bounce monitoring

Before launch, define:

- who reviews complaint rate
- who reviews bounce rate
- where alerts are sent
- what threshold pauses sending
- how quickly bad segments are suppressed

Minimum operating questions:

- Can the team detect a complaint spike within one business day?
- Can the team identify which mailbox, domain, or segment caused the issue?
- Is there a documented pause owner?

### 5. List quality checks

Confirm:

- source of prospect data is documented
- verification or validation step exists for email quality
- role/account suppression rules are defined
- old or unverified data is excluded from initial pilot cohorts

### 6. Launch controls

Before launch, document:

- pilot audience size
- ramp plan
- pause conditions
- recovery owner
- last known good configuration

## No-launch blockers

Treat these as blockers until resolved:

- SPF, DKIM, or DMARC missing or broken
- no unsubscribe or opt-out handling
- no suppression list owner
- no complaint monitoring process
- no bounce monitoring process
- no clear sender/domain owner
- no rollback or pause condition

## Troubleshooting prompts

### Complaints increased suddenly

Check:

- whether volume changed abruptly
- whether a new segment was added
- whether unsubscribe handling failed
- whether copy or targeting changed without review

### Bounce rate increased

Check:

- whether source data quality changed
- whether verification was skipped
- whether the segment came from a lower-quality provider
- whether duplicate or stale records were re-enrolled

### Authentication looks correct, but placement worsened

Check:

- whether complaint rate changed
- whether relevance declined
- whether reply quality fell
- whether a new mailbox or domain was added without monitoring

## Reference points

Use official mailbox-provider and standards guidance for the latest requirements:

- Google sender guidance
- Yahoo sender best practices
- SPF, DKIM, DMARC, and one-click unsubscribe standards
