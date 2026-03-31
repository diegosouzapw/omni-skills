# Review Router

Use this note when a web UI review finds issues outside this skill's primary scope.

## Stay in this skill when

- the task is mainly about UI review
- findings are about semantics, accessibility, focus, keyboard support, forms UX, layout, or responsive behavior
- the user needs evidence-based review notes before merge or handoff

## Escalate when

### Security-focused review is needed

Route when you find:
- unsafe HTML or markdown rendering
- likely XSS vectors
- risky third-party embed or script behavior
- auth/session UI concerns that depend on backend security design
- CSP or trust-boundary questions beyond simple UI notes

### Framework or architecture review is needed

Route when:
- the issue depends on rendering lifecycle, hydration, state architecture, or composition design
- fixes require app-wide refactoring rather than local UI remediation

### Deployment or platform review is needed

Route when:
- the failure appears only in deployment environments
- environment configuration, hosting behavior, or platform policy determines the outcome

## Handoff format

When escalating, include:
- what files/routes/components were reviewed
- what UI behavior was observed
- what users or interaction modes are affected
- what evidence was captured
- what remains uncertain without the next specialist review
