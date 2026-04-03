# Playwright Skill Router

Use this router when deciding whether to stay in this skill.

## Stay in `playwright-skill`

Choose this skill when the task is primarily:
- repeatable browser automation
- screenshots or evidence capture
- form submission or login validation
- responsive or device-oriented UI checks
- scoped link validation from a page

## Route to `chrome-devtools`

Switch when the task is primarily:
- quick DOM inspection
- console debugging
- manual reproduction with live inspection
- low-level network troubleshooting

## Route to accessibility-oriented workflows

Switch when the task becomes:
- structured accessibility auditing
- ARIA, keyboard, focus, or screen-reader review beyond general automation

## Route to API-focused workflows

Switch when the main issue is backend behavior and a browser adds little value.

## Route to security-focused workflows

Switch when the task becomes a security assessment rather than normal functional automation.

## Handoff checklist

When handing off, preserve:
- target URL and environment
- steps already attempted
- artifact paths
- auth constraints and whether secrets were used
- the main failure class observed
