# Auth Flow Checklist

## Identity Model

- define actors and roles
- define identity states
- define privileged actions
- define cross-tenant or cross-resource rules

## Flow Coverage

- sign-in
- sign-up or invitation
- MFA or step-up auth
- session refresh and expiry
- account recovery
- impersonation or delegated admin

## Enforcement

- define server-side authorization points
- define token or session invariants
- define audit requirements for privileged actions
- define revocation or logout behavior

## Review Questions

- where is the frontend hiding actions that the backend still allows?
- where can stale sessions create inconsistent behavior?
- which recovery or admin path is weaker than the primary auth flow?
