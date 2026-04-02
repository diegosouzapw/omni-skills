# Status Update Cadence

Use this guidance to keep execution tracking current without losing history.

## Two-layer update model

### 1. Property updates
Use for current state:
- status
- milestone
- phase
- blocker flag
- owner if the workflow supports it

### 2. Narrative updates
Use for context that should remain visible over time:
- what changed since the last update
- blockers and risks
- decisions made
- next actions

## Recommended update moments

Update when:
- a phase starts
- a meaningful milestone completes
- a blocker appears or clears
- the implementation path changes
- the user explicitly requests a progress report

## Weekly update shape

A good update usually includes:
- overall status
- completed work
- current in-progress work
- blockers or risks
- decisions made
- next actions

## Reconciliation rule

If property fields and narrative notes disagree:
1. verify the latest actual execution state
2. correct the property fields first
3. append a narrative note that matches the corrected state

## Avoid

- replacing old progress notes with a rewritten summary
- updating narrative text without updating the main status fields
- marking work complete when acceptance criteria are not met
