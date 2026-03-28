# Auth Deployment Checklist

Use this checklist to keep authorization and consent boundaries explicit.

## 1. Deployment shape

Mark one primary pattern:

- [ ] Local-only server
- [ ] Remote single-tenant server
- [ ] Remote multi-tenant server

## 2. Trust boundary questions

- [ ] Who authenticates the caller?
- [ ] Who authorizes specific operations?
- [ ] Are user consent or client approval steps required for sensitive tools?
- [ ] What tenant boundary exists, if any?
- [ ] Which data should never cross the server boundary?

## 3. Token handling questions

- [ ] Are token audience expectations documented?
- [ ] Is token validation handled by the correct system?
- [ ] Are authentication and authorization treated as separate checks?
- [ ] Are sensitive tokens excluded from logs?

## 4. Tool policy questions

- [ ] Which tools are read-only?
- [ ] Which tools require explicit approval?
- [ ] Which operations are intentionally not exposed over MCP?
- [ ] Are side effects and approval expectations documented per tool?

## 5. Client compatibility questions

- [ ] Do target clients support the required approval UX?
- [ ] Do target clients differ in how they pass auth or launch config?
- [ ] Have unsupported auth scenarios been documented explicitly?

## 6. Release check

Do not mark the server ready until the design packet states:

- deployment mode
- auth model
- consent boundary
- token audience assumptions
- sensitive-tool approval model
- unsupported client or tenant scenarios
