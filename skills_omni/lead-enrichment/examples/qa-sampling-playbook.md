# QA Sampling Playbook

Use this before broad rollout of a new or revised enrichment workflow.

## Sample size

Start with a manual review sample large enough to include:

- different segments
- multiple providers
- records that passed and failed routing
- edge cases such as catch-all or conflicting-provider results

## QA checks

For each sampled record, review:

- company-domain correctness
- person-to-company match
- title accuracy
- whether the selected email is defensible
- whether verification class matches actual risk
- whether suppression state is respected
- whether route decision matches policy

## Record issues by type

| Issue type | Example | Action |
| --- | --- | --- |
| Wrong identity | wrong person at right company | tighten identity matching |
| Wrong company | title belongs to another org | strengthen domain/linkedin checks |
| Stale title | former role returned | prefer fresher source or re-verify |
| False confidence | marked safe but risky in context | tighten routing policy |
| Governance gap | no source or timestamp | add provenance columns |

## Exit criteria

Do not scale volume until:

- key fields are accurate enough for the use case
- routing mistakes are understood and reduced
- provenance is visible for important fields
- suppression and exclusion handling is verified
