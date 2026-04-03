# Deliverability Readiness Checklist

Use this checklist before recommending an AI SDR email launch or scale-up.

## 1. Sender identity and authentication

Confirm all of the following are defined:

- sending domains identified
- mailbox owners identified
- SPF configured
- DKIM configured
- DMARC configured
- authentication alignment reviewed
- TLS supported by sending path

If any of the above is unknown, treat the program as not ready for scale.

## 2. Recipient-friendly controls

Confirm:

- unsubscribe process exists
- one-click unsubscribe support is planned where applicable
- suppression list process exists
- opt-out requests are routed and honored promptly
- complaint monitoring exists

## 3. List and data hygiene

Check:

- source lists are documented
- duplicates are controlled
- role accounts and weak-fit records are handled intentionally
- invalid or risky addresses are filtered
- bounce handling process exists

## 4. Volume discipline

Check:

- launch begins with a narrow ICP slice
- volume increases are staged
- mailbox-level and domain-level monitoring exists
- complaint and bounce spikes trigger pause conditions

Do not recommend aggressive scale on day one.

## 5. Monitoring metrics

Track at minimum:

- delivery rate
- bounce rate
- complaint rate
- unsubscribe rate
- positive reply rate
- handoff time to human

## 6. Pause conditions

Pause launch or expansion when any of the following occurs:

- authentication breaks or cannot be verified
- complaint trend worsens materially
- bounce rate spikes materially
- unsubscribe handling fails
- mailbox/domain reputation deteriorates

## Review packet evidence

Ask the operator to provide:

- sender domains in scope
- mailbox count and owners
- authentication status summary
- unsubscribe and suppression process summary
- recent deliverability metrics if any
- pilot volume plan

## Notes

This checklist is a strategic readiness aid, not a substitute for deliverability engineering or legal review.
