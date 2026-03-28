# Troubleshooting Playbook

Use this playbook to narrow failures before changing server code.

## 1. Initialization failure

Check:

- transport wiring
- initialize request and response flow
- advertised capabilities
- version expectations

## 2. Feature visible in one client only

Check:

- client compatibility matrix
- transport support mismatch
- prompt/resource support gaps
- client-specific approval or config differences

## 3. Auth accepted but operation denied

Check:

- token audience assumptions
- tenant scoping
- per-tool authorization policy
- approval/consent boundary for sensitive actions

## 4. Long-running request looks stuck

Check:

- timeout budget
- progress signaling strategy
- cancellation handling
- proxy or buffering behavior for remote transports

## 5. Schema-valid request still fails

Check:

- semantic contract mismatch
- malformed success payload shape
- ambiguous error structure
- undocumented preconditions

## Recommended log fields

Capture at minimum:

- request ID
- correlation ID if separate
- client identifier when available
- transport mode
- capability or tool name
- outcome class: success, validation_error, auth_error, timeout, cancelled, unsupported, transport_error
