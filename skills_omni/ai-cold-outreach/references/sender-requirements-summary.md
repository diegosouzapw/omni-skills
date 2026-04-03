# Sender Requirements Summary

This is a condensed operator summary of current mailbox-provider expectations. Re-check the official sources before major launches because provider requirements evolve.

## Gmail-oriented requirements and best practices

Operationally important themes from Google's guidance include:

- authenticate sending mail with SPF and DKIM
- publish DMARC for bulk sending scenarios
- keep spam rates low
- support unsubscribe handling, including easy unsubscribe where applicable
- send consistently and maintain list hygiene
- use TLS
- avoid sudden quality drops caused by invalid recipients or poor targeting

References:

- https://support.google.com/a/answer/81126
- https://support.google.com/a/answer/14229414

## Outlook-oriented best practices

Operational themes from Microsoft's sender guidance include:

- authenticate your mail
- maintain healthy list hygiene
- monitor reputation and complaints
- avoid sending to stale or poor-quality lists
- honor removals and complaint signals quickly

Reference:

- https://sendersupport.olc.protection.outlook.com/pm/policies-guidelines

## Practical implications for this skill

Do not frame deliverability as mainly a matter of warmup or rotating more mailboxes. Those tactics do not replace:

- proper authentication
- alignment verification
- low complaint rates
- reliable suppression handling
- healthy list quality

## Before launch

Confirm all of the following:

- authentication is configured and validated on test sends
- unsubscribe and suppression handling is functional
- list quality has been checked recently
- reply ownership is assigned
- scaling can be paused quickly if reputation worsens
