# Task Router

Use this note when the task drifts beyond one-off Chrome DevTools investigation.

## Stay with `chrome-devtools` when

- the task is live browser inspection
- the user wants screenshots or quick reproduction
- the task is console/network debugging
- the task is one-off performance profiling
- the work is exploratory rather than a durable automated suite

## Hand off when

### Route to Playwright-oriented automation

Use a Playwright skill when the task becomes:

- repeatable end-to-end automation
- assertions and regression coverage
- CI execution
- multi-step deterministic test flows

### Route to accessibility work

Use an accessibility skill when the task becomes:

- semantic accessibility auditing
- keyboard/focus review
- screen-reader-specific investigation
- remediation planning for WCAG issues

### Route to deeper frontend performance work

Use a frontend performance skill when the task becomes:

- remediation planning after trace evidence
- bundle, rendering, or framework-level optimization work
- broader performance strategy beyond one trace session

### Route to security investigation

Use a web-security skill when the task becomes:

- security validation beyond debugging clues
- CSP design or policy hardening
- authentication/session security analysis
- browser-exposed security misconfiguration review

## Handoff packet

When handing off, include:

- page or flow investigated
- exact repro steps
- console findings
- network findings
- screenshots if relevant
- trace findings if relevant
- any remaining uncertainty
