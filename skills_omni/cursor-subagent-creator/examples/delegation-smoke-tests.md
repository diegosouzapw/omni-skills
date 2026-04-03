# Delegation Smoke Tests

Use these prompts after creating a Cursor subagent.

## Explicit invocation tests

```text
/verifier confirm the new export feature is fully implemented and tested
```

```text
/security-auditor review the payment flow for security issues
```

```text
/orchestrator break this migration into phases and coordinate the work
```

## Natural-language delegation tests

```text
Please verify that the completed authentication work actually functions and list anything still incomplete.
```

```text
Before merge, review these payment changes for security risks around auth, secrets, and permissions.
```

```text
This migration is large. Split it into phases, coordinate the work, and keep the handoffs clear.
```

## What to check

- Did Cursor delegate to the intended subagent?
- Did the output match the requested structure?
- Did the subagent stay within its scope?
- Did permissions match expected behavior?
- Was the description specific enough?
