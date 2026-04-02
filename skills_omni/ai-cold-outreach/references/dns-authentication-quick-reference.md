# DNS and Authentication Quick Reference

This reference explains what to check. It does not replace provider-specific admin procedures.

## Why it matters

Modern mailbox providers expect authenticated, well-managed senders. Outreach quality cannot compensate for broken authentication or poor sender hygiene.

## SPF

Sender Policy Framework (SPF) lets a domain publish which servers are allowed to send mail on its behalf.

Check:

- an SPF record exists
- it includes the actual sending service
- it is not broken by bad syntax or conflicting records

## DKIM

DomainKeys Identified Mail (DKIM) cryptographically signs outgoing messages.

Check:

- DKIM signing is enabled in the sending service
- the public key record is published in DNS
- signatures are present and valid on sent mail

## DMARC

DMARC tells receivers how to evaluate mail that claims to be from your domain and whether SPF or DKIM alignment passes.

Check:

- a DMARC record exists
- policy is appropriate for rollout stage
- reporting mailbox is monitored
- alignment between visible From and authenticated domains is understood

## Alignment

A sender can have SPF or DKIM configured and still fail practical checks if the visible From domain does not align properly.

Check:

- From domain
- return-path / envelope domain
- DKIM signing domain

## PTR / reverse DNS

Reverse DNS is generally controlled by the sending infrastructure provider, not by the campaign operator.

Check:

- whether the sending provider manages it
- whether there is any known mismatch or unmanaged infrastructure

## Unsubscribe headers

For commercial or promotional bulk mail, list-unsubscribe support and one-click unsubscribe handling may be important for deliverability and provider expectations.

Check:

- whether the platform supports List-Unsubscribe headers
- whether one-click unsubscribe is available where needed
- whether the suppression list actually processes removals

## Safe operator guidance

- ask whether these controls exist before recommending scale
- do not provide brittle UI click-path instructions
- route actual DNS or provider-console changes to the responsible administrator
