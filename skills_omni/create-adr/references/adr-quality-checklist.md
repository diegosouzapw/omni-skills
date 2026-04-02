# ADR Quality Checklist

Use this before finalizing or handing off an ADR.

## Required

- [ ] The title records the decision and is not phrased as a question.
- [ ] The ADR has a date.
- [ ] The ADR has a status.
- [ ] The context explains forces, constraints, or background.
- [ ] The decision statement says what was chosen.
- [ ] The consequences include at least one downside or cost.

## Strongly recommended

- [ ] At least one realistic alternative is recorded.
- [ ] The rationale explains why the chosen option beat the alternatives.
- [ ] The ADR links to related RFCs, issues, PRs, docs, or ADRs.
- [ ] The file path follows repository naming and numbering conventions.
- [ ] The wording is concise and avoids implementation-plan sprawl.

## For medium- or high-impact decisions

- [ ] Include decision drivers or evaluation criteria.
- [ ] Include a status quo or "do nothing" option when relevant.
- [ ] Include cross-links for supersession if the decision replaces an older one.
- [ ] Check that the ADR preserves history rather than rewriting it.

## Smell checks

If any are true, improve the draft:

- The ADR reads like a celebration of the chosen option.
- There are no trade-offs.
- There is no evidence alternatives were considered.
- The document looks like an implementation plan.
- A future engineer would still ask, "Why did we do this?"
