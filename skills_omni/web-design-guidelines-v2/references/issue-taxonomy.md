# Issue Taxonomy

Use this taxonomy to keep findings consistent across PR reviews and UI audit packets.

## Severity

### High

Use when the issue causes a significant accessibility or usability failure, blocks task completion, breaks a core interaction, or creates substantial risk for many users.

Examples:
- keyboard trap
- inaccessible dialog focus behavior
- unlabeled required field in a core form
- invisible focus on all interactive controls

### Medium

Use when the issue degrades usability or accessibility meaningfully but does not usually block all users from completing the task.

Examples:
- error state not clearly associated with field
- dark-mode-only contrast regression
- overflow on narrow screens in secondary layouts
- tabs not restoring state as expected

### Low

Use when the issue is real but lower impact, localized, or primarily polish-oriented.

Examples:
- inconsistent spacing around helper text
- weak empty-state hierarchy
- a non-blocking icon contrast issue in one theme

## Confidence

### High confidence

Use when the issue is directly observable in code or behavior and the remediation direction is clear.

### Medium confidence

Use when the issue is likely but depends on runtime behavior, app context, or files not yet inspected.

### Low confidence

Use sparingly. Prefer asking for more files, states, or screenshots rather than guessing.

## Categories

- `semantics`
- `keyboard`
- `focus`
- `forms`
- `status-messaging`
- `dialog`
- `navigation-state`
- `responsive`
- `touch`
- `motion`
- `theming`
- `images`
- `content`
- `typography`
- `i18n`
- `anti-pattern`

## Impact framing

When helpful, note who is affected:

- keyboard users
- screen reader users
- low-vision users
- mobile users
- reduced-motion users
- dark-mode users
- all users under narrow screens or long content

## Routing guidance

Route out when:

- the main issue is performance metrics or rendering cost
- the main issue is SEO or indexing
- the main issue is runtime debugging
- the main issue is system-wide localization quality
- the user expects a formal accessibility program or compliance statement

## Preferred finding shape

```text
path/to/file.tsx:line [severity][category] Short description of the issue.
```

Optional extension when needed:

```text
path/to/file.tsx:line [medium][forms] Error text is shown visually but is not associated with the input. Affected state: submit with invalid email.
```
