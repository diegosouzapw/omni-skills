# Quick Mode Example

## Request

"Fix the app so production logs are not shown in the local debug banner."

## Right-sized approach

- Scope: one small UI condition change
- Mode: Quick mode

## Example packet

```md
# TASK

## Scope
Hide production log details from the local debug banner.

## Atomic steps
1. Find the banner visibility condition.
2. Update the condition so production logs are excluded.
3. Verify the banner still appears for local debug cases only.

## Verification
- Run the targeted UI test if it exists, or
- manually confirm banner behavior in local and production-like modes
```

## Example summary

```md
# SUMMARY

Changed the debug banner condition to exclude production log details.
Verified by checking that the banner still appears in local debug mode and does not appear for production-like data.
```
