# Lighthouse Audit Workflow

Use this workflow when you need a repeatable audit that can survive local review, CI, or handoff.

## 1. Define the run

Record:

- target URL or URLs
- mobile or desktop
- categories to collect
- auth requirements
- local CLI, Node API, or LHCI mode
- where artifacts will be stored

## 2. Normalize the environment

Prefer:

- a production-like build
- deterministic startup
- explicit config checked into the repo
- a dedicated `artifacts/` directory

Avoid comparing:

- dev server versus production server
- mobile versus desktop
- one Lighthouse version versus another without noting the change

## 3. Perform an initial smoke run

Run one audit to validate:

- Chrome launches
- the target URL is reachable
- the report is generated
- the route under test is the intended route

## 4. Collect repeatable evidence

For important decisions, keep:

- JSON report
- HTML report when useful for review
- command or config used
- Lighthouse version
- form factor and throttling context
- app build identifier or commit SHA

## 5. Handle noisy results correctly

If the page is unstable or CI is noisy:

- run at least 3 times
- keep all JSON outputs
- compare medians or stable repeated values
- do not report a regression from a single noisy run

## 6. Interpret before enforcing

Summarize:

- category score
- key metrics and units
- failed or regressed audits
- confidence based on run consistency
- whether the result needs a follow-up in a performance remediation skill

## 7. Enforce with the right tool

Use `budget.json` when you want Lighthouse budget support for resource and timing budgets.

Use LHCI assertions when you want CI pass/fail rules for categories and metrics.

## 8. Handoff cleanly

When the audit is complete, provide:

- environment summary
- saved artifact paths
- metrics summary
- likely regression areas
- recommended next skill if implementation work is needed
