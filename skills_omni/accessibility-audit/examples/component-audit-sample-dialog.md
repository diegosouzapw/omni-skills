# Sample Component Audit: Settings Dialog

## Scope

Review the account settings dialog for keyboard access, focus management, naming, background inertness, and save-state announcements.

## Findings

### 1. Focus does not enter the dialog on open

- **Severity:** blocker
- **Affected task:** Open settings and edit profile
- **User impact:** Keyboard and screen-reader users remain on the trigger and may not know the dialog opened.
- **Steps to reproduce:**
  1. Open the settings dialog using keyboard.
  2. Observe current focus.
- **Observed behavior:** Visual dialog opens, but focus remains on the page trigger.
- **Expected accessible behavior:** Focus should move to a meaningful element inside the dialog.
- **Relevant WCAG 2.2 mapping:** 2.4.3, 4.1.2
- **Remediation direction:** Move focus into the dialog on open and ensure it lands on the heading, close button, or first meaningful field depending on task priority.

### 2. Background links remain tabbable while dialog is open

- **Severity:** high
- **Affected task:** Navigate and save settings
- **User impact:** Users can tab into hidden page content and lose context.
- **Steps to reproduce:**
  1. Open the dialog.
  2. Press Tab repeatedly.
- **Observed behavior:** Focus reaches navigation links behind the modal.
- **Expected accessible behavior:** Focus should remain within the active modal while it is open.
- **Relevant WCAG 2.2 mapping:** 2.1.2, 2.4.3
- **Remediation direction:** Apply a correct modal focus-management pattern and make background content inactive for the duration of the modal.

### 3. Save success toast is not announced

- **Severity:** medium
- **Affected task:** Save profile changes
- **User impact:** Non-visual users may not know whether the action succeeded.
- **Steps to reproduce:**
  1. Edit a field.
  2. Save changes.
- **Observed behavior:** Visual toast appears briefly with no detectable announcement.
- **Expected accessible behavior:** Important status changes should be exposed to assistive technology.
- **Relevant WCAG 2.2 mapping:** 4.1.3
- **Remediation direction:** Expose the save result through an appropriate status pattern and verify that it is announced once.
