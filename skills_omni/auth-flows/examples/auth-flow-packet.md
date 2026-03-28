# Auth Flow Packet Example

## Flow

- sign-in with password plus MFA
- session refresh every 20 minutes of activity
- forced re-auth for workspace-admin changes
- password reset invalidates all active sessions

## Key invariants

- server rejects role changes without fresh authorization context
- UI hides privileged actions, but server remains authoritative
- impersonation emits immutable audit events

## Review hotspots

- stale admin session after role downgrade
- token refresh after account suspension
- invitation flow across multiple workspaces
