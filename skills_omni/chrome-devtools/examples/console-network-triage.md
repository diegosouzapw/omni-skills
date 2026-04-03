# Example: Console and Network Triage

## Scenario

The user reports: "Checkout fails after I click Pay Now."

## Investigation shape

1. Confirm the correct page.
2. Reproduce the failure once.
3. Inspect console output.
4. Inspect network requests triggered by the action.
5. Summarize the likely cause with evidence.

## Example result format

- **Page:** `/checkout`
- **Repro:** Clicked `Pay Now` after completing required form fields.
- **Console evidence:** `TypeError` thrown in checkout submission handler.
- **Network evidence:** `POST /api/checkout` returned `500`.
- **Likely cause:** Frontend error handling is weak, but the primary failure appears to be the backend checkout endpoint returning `500`.
- **Confidence:** Medium, because both console and network signals align.

## Notes

If request details include tokens, cookies, or personal data, redact them before returning the summary.
