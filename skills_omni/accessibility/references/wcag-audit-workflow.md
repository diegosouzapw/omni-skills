# WCAG Audit Workflow

Use this workflow for page, flow, or component-level accessibility reviews.

## 1. Intake

Record:

- page, route, component, or flow under review
- target conformance level, usually WCAG 2.1 AA
- whether the task is audit-only, remediation, or regression prevention
- environments available for testing
- any known assistive technology constraints

## 2. Fast semantic inspection

Check first:

- document title and language
- heading hierarchy
- landmarks
- buttons vs links
- labels and form grouping
- table semantics where relevant
- visible text matching control purpose

## 3. Automated checks

Recommended use:

- Lighthouse accessibility category for page-level signals
- axe for rule-based detection
- framework or CI checks for regressions

Record the command used and the output file.

## 4. Manual checks

Minimum manual checks:

- keyboard-only traversal
- focus visibility
- focus order
- modal and overlay behavior
- form completion and validation
- zoom at 200%
- reduced motion where animations exist
- screen reader spot checks for changed or high-risk areas

## 5. Findings

Each finding should include:

- title
- location
- reproduction steps
- expected behavior
- actual behavior
- likely WCAG criterion
- affected users
- severity / release impact
- recommended fix
- verification status

## 6. Remediation order

Prefer this order:

1. semantic HTML fix
2. label/name/description fix
3. focus or keyboard fix
4. ARIA state synchronization fix
5. custom widget redesign if necessary

## 7. Verification

After changes:

- re-run relevant automated checks
- re-test the affected task manually
- verify no hidden-focus or stale-state regressions were introduced
- document any remaining known gaps

## 8. Output packet

A complete review packet should state:

- scope
- target
- tools used
- manual checks performed
- findings
- fixes applied or proposed
- retest result
- residual risk
