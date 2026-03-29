# Sample Component Audit: Sign-In Form

## Scope

Review the sign-in form and password-reset entry point for labels, validation, accessible authentication concerns, keyboard flow, and status announcements.

## Findings

### 1. Password field error is visible but not associated programmatically

- **Severity:** high
- **Affected task:** Sign in after invalid submission
- **User impact:** Screen-reader users hear the field label but not the specific validation failure.
- **Steps to reproduce:**
  1. Submit the form with an empty password.
  2. Move focus to the password field.
- **Observed behavior:** The error appears visually below the field, but the field does not expose the message.
- **Expected accessible behavior:** The user should be able to identify the invalid field and understand the error message.
- **Relevant WCAG 2.2 mapping:** 3.3.1, 3.3.3, 4.1.2
- **Remediation direction:** Associate the error with the field and expose invalid state semantically.

### 2. Sign-in failure message appears after submit with no announcement

- **Severity:** high
- **Affected task:** Recover from invalid credentials
- **User impact:** Users may not know the request failed or why the form did not progress.
- **Steps to reproduce:**
  1. Submit invalid credentials.
  2. Listen for an announcement or inspect status handling.
- **Observed behavior:** Error banner updates visually only.
- **Expected accessible behavior:** Important status changes should be announced.
- **Relevant WCAG 2.2 mapping:** 4.1.3
- **Remediation direction:** Expose the server-side error through an appropriate status or alert pattern and verify timing.

### 3. Authentication flow disables paste into the password field

- **Severity:** medium
- **Affected task:** Sign in with a password manager or copied credential
- **User impact:** Creates unnecessary friction and may interfere with accessible authentication workflows.
- **Steps to reproduce:**
  1. Copy a password.
  2. Attempt to paste into the password field.
- **Observed behavior:** Paste is blocked.
- **Expected accessible behavior:** The flow should not require unnecessary memory-based entry.
- **Relevant WCAG 2.2 mapping:** 3.3.7
- **Remediation direction:** Allow standard paste and password-manager workflows unless there is a narrowly justified security constraint.
