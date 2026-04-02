# Common Frontend Issues to WCAG 2.1 Mapping

Use this as a quick mapping aid. It is not a substitute for reading the criterion text.

| Issue type | Common WCAG 2.1 mapping | Notes |
| --- | --- | --- |
| Missing alt text on informative image | 1.1.1 Non-text Content | Decorative images should usually use empty alt |
| Missing captions for prerecorded video | 1.2.2 Captions (Prerecorded) | Audio-only and live media have different requirements |
| Low text contrast | 1.4.3 Contrast (Minimum) | Check text size and state styling |
| UI state shown by color only | 1.3.3 Sensory Characteristics, 1.4.1 Use of Color | Add text, icons, or other non-color cues |
| Keyboard trap | 2.1.2 No Keyboard Trap | Especially common in modals and custom widgets |
| Clickable div without keyboard support | 2.1.1 Keyboard, 4.1.2 Name, Role, Value | Usually better fixed with native controls |
| Missing visible focus indicator | 2.4.7 Focus Visible | WCAG 2.2 may also raise stronger focus concerns |
| Missing skip link or poor bypass for repeated blocks | 2.4.1 Bypass Blocks | Useful for content-heavy pages |
| Poor heading hierarchy | 1.3.1 Info and Relationships, 2.4.6 Headings and Labels | Depends on the impact and actual structure |
| Placeholder used as only label | 3.3.2 Labels or Instructions, 1.3.1 Info and Relationships | Placeholder is not a reliable label |
| Error not announced or not connected to field | 3.3.1 Error Identification, 3.3.3 Error Suggestion, 4.1.3 Status Messages | Check field-level and summary behavior |
| Dialog lacks accessible name or focus handling | 1.3.1 Info and Relationships, 2.1.1 Keyboard, 2.4.3 Focus Order, 4.1.2 Name, Role, Value | Prefer native dialog when feasible |
| Hidden content remains focusable | 2.4.3 Focus Order, 4.1.2 Name, Role, Value | Often caused by CSS-only hiding or stale tabindex |
| Duplicate IDs break labeling or descriptions | 1.3.1 Info and Relationships, 4.1.2 Name, Role, Value | Can silently break form relationships |
| Live updates not announced | 4.1.3 Status Messages | Use polite or assertive announcements carefully |

## Evidence standard

A good finding should be testable by another reviewer. Include:

- exact URL or component name
- reproduction steps
- actual and expected behavior
- code reference if available
- affected user groups
- criterion mapping
- retest notes
