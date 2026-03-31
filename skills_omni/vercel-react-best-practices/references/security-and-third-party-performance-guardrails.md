# Security and Third-Party Performance Guardrails

Use this document when performance work touches Server Actions, analytics, scripts, embeds, or external integrations.

## Server Actions

Performance optimizations do not remove the need for server-side safety.

Always verify:

- authentication
- authorization
- input validation
- error handling
- data exposure boundaries

Treat Server Actions like sensitive server entry points, not like harmless UI helpers.

## Third-party scripts and embeds

For each script or embed, ask:

- Is it required?
- Can it load later?
- Is the chosen Next Script strategy appropriate?
- Is placement aligned with framework guidance?
- Does it degrade LCP, CLS, or responsiveness?

## Safety rules

- Do not move scripts into unsafe locations just to load them earlier.
- Do not bypass framework guidance for script loading without a strong reason.
- Do not weaken CSP, integrity, or review discipline during performance work.
- Do not accept a speed improvement that exposes sensitive actions or data.

## Review output

Document:

- what third-party code was reviewed
- why it is needed
- how it is loaded
- what safety checks remain in place
- what performance tradeoff was accepted, if any
