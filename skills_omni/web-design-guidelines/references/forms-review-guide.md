# Forms Review Guide

Use this guide for sign-up, checkout, search, account settings, and other form-heavy flows.

## Labels and instructions

- Every input has a visible label.
- Label is programmatically associated with the control.
- Placeholder text is not the only label.
- Required vs optional state is clear.
- Instructions appear before the user fails where the format is unusual.

## Input purpose and autocomplete

- Use suitable `autocomplete` tokens where appropriate.
- Do not fight browser or password-manager behavior without a strong reason.
- Email, name, address, and auth-related fields should expose meaningful input purpose.

## Validation UX

- Validate at sensible times; do not interrupt too early.
- Client-side validation messages are clear and actionable.
- Errors identify what is wrong and how to fix it.
- Error text is associated with the relevant field.
- Focus moves to the first relevant error or summary when needed.
- Validation does not clear previously entered data unnecessarily.

## Submission states

- Pending state is visible.
- Repeated submission is prevented or handled safely.
- Success and failure outcomes are communicated clearly.
- Disabled states still communicate what is happening.

## Accessibility and recovery

- Error indication is not color-only.
- Screen reader users can identify the field, issue, and fix.
- Keyboard users can recover without losing context.
- Complex or multi-step forms preserve progress where possible.

## Boundary note

This skill reviews form UX and client-side behavior.

Escalate when findings depend on:
- server-side validation rules
- backend trust boundaries
- authentication/session security
- storage or transmission of sensitive data
