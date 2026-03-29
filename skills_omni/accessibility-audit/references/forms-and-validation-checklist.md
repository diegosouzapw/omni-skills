# Forms and Validation Checklist

Use this checklist for forms, sign-in flows, settings panels, checkout steps, and other input-heavy interfaces.

## Labels and instructions

- Does each field have a clear programmatic label?
- Are required fields identified without relying on color alone?
- Are instructions available before submission when needed?

## Validation and errors

- On invalid submit, can the user tell what failed?
- Are errors associated with the correct fields?
- Is invalid state exposed semantically, not only visually?
- Does focus move or remain in a way that helps recovery?

## Dynamic announcements

- Are status messages announced exactly once?
- Are loading, saving, success, and failure states exposed to assistive technology?
- Are toast messages important enough to require announcement?

## Input support

- Can users paste passwords or codes where appropriate?
- Are input constraints explained before failure when possible?
- Is timed input or session expiry communicated clearly?

## Accessible authentication checks

- Does the flow avoid unnecessary memory tests?
- Can password managers and copy-paste workflows still function?
- Are CAPTCHA or equivalent challenges paired with accessible alternatives when needed?

## Recovery

- Can the user correct errors without losing prior input?
- Are server-side errors presented clearly?
- Is there a clear path to retry, cancel, or get help?
