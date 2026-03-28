# 📋 Implementation Plan

> Detailed execution backlog for the completed 0.1.x foundation work and the next planned expansion track.

## Scope

The first task set covered the foundational fronts that mattered after the 0.1.x runtime landed:

1. selective MCP client expansion
2. final scorer and support-pack refinement
3. deeper specialization inside already-backed bundles
4. private enhancer live stability against hosted OmniRoute
5. private enhancer observability and consolidated batch reporting
6. hardening the public contribution flow that now depends on the enhancer pipeline

That first set is now complete. The release/workflow baseline is also closed:

- public release `v0.1.2` published successfully
- private enhancer release `v0.0.1` published successfully
- public validation, release, and CodeQL are green on the latest release baseline
- private poller and private release workflows are green on the latest baseline

The next track is narrower and more product-directed:

7. catalog specialization and category expansion
8. private enhancer operating-model formalization for hosted vs LAN `live`
9. second category wave across the remaining code-native dormant categories

## Completed Track

1. [TASK-01-MCP-CLIENT-EXPANSION.md](TASK-01-MCP-CLIENT-EXPANSION.md)
2. [TASK-02-SCORER-AND-SUPPORT-PACK-REFINEMENT.md](TASK-02-SCORER-AND-SUPPORT-PACK-REFINEMENT.md)
3. [TASK-03-BUNDLE-SPECIALIZATION-DEPTH.md](TASK-03-BUNDLE-SPECIALIZATION-DEPTH.md)
4. [TASK-04-ENHANCER-LIVE-STABILITY.md](TASK-04-ENHANCER-LIVE-STABILITY.md)
5. [TASK-05-ENHANCER-OBSERVABILITY-AND-BATCH-REPORTS.md](TASK-05-ENHANCER-OBSERVABILITY-AND-BATCH-REPORTS.md)
6. [TASK-06-CONTRIBUTION-AUTOMATION-HARDENING.md](TASK-06-CONTRIBUTION-AUTOMATION-HARDENING.md)

That order was deliberate:

- MCP client expansion should close while the support matrix is still small enough to stay coherent.
- Scorer refinement should happen before one more large catalog growth wave.
- Bundle specialization depends on the stronger scorer and reference-pack criteria.
- Private enhancer live stability must precede any attempt to trust hosted live processing for PR-time enhancement.
- Observability and reporting should land after live stability, so it measures the final operational path.
- Contribution automation hardening came last because it depended on the enhancer and the catalog being stable enough to formalize.

## Next Track

1. [TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md](TASK-07-CATALOG-SPECIALIZATION-AND-CATEGORY-EXPANSION.md)
2. [TASK-08-SECOND-CATEGORY-WAVE.md](TASK-08-SECOND-CATEGORY-WAVE.md)

The private hosted-live stabilization track is intentionally documented in the private enhancer repository, because the implementation, prompts, provider routing, and operator guidance all live there.

## Status Summary

| Task | Status | Priority | Notes |
|:-----|:-------|:---------|:------|
| `TASK-01` | Completed | High | Closed this round with Goose; remaining gaps are intentional and documented |
| `TASK-02` | Completed | High | Final scoring pass landed with stronger support-pack weighting and last-mile editorial depth |
| `TASK-03` | Completed | Medium | Added specialization depth with `auth-flows`, `threat-modeling`, `release-engineering`, and `context-engineering` |
| `TASK-04` | Completed | High | Hosted live is explicitly preflight-gated and downgraded cleanly when public OmniRoute is blocked |
| `TASK-05` | Completed | Medium | Batch JSON plus markdown summaries and per-skill progress comments now exist |
| `TASK-06` | Completed | High | Public/private contribution flow now documents intake, outcome states, attribution, and `skills_omni/` publication rules |
| `TASK-07` | Completed | Medium | Activated `design` with `design-systems-ops` and `accessibility-audit`, and added the fully backed `design` bundle |
| `TASK-08` | Completed | Medium | Landed `design-token-governance`, `mcp-server-authoring`, `data-contracts`, and `model-serving`, activating `tools`, `data-ai`, and `machine-learning` |

## Primary References

Public references:

- [../architecture/AGENT-NATIVE-ROADMAP.md](../architecture/AGENT-NATIVE-ROADMAP.md)
- [../architecture/CODEBASE-ANALYSIS.md](../architecture/CODEBASE-ANALYSIS.md)
- [../specs/CLIENT-SUPPORT-MATRIX.md](../specs/CLIENT-SUPPORT-MATRIX.md)
- [../specs/SKILL-CLASSIFICATION.md](../specs/SKILL-CLASSIFICATION.md)
- [../contributors/QUALITY-BAR.md](../contributors/QUALITY-BAR.md)
- [../contributors/HIGH-SCORE-PLAYBOOK.md](../contributors/HIGH-SCORE-PLAYBOOK.md)
- [../contributors/SKILL-PR-WORKFLOW.md](../contributors/SKILL-PR-WORKFLOW.md)

Private references:

- `omni-skills-private/README.md`
- `omni-skills-private/docs/GITHUB-AUTOMATION.md`
- `omni-skills-private/docs/REVIEW-FLOW.md`
- `omni-skills-private/scripts/`

## Done Criteria For The Completed Track

This backlog can be considered complete when all of the following are true:

- the MCP matrix has only intentional gaps, each gap justified by missing or unstable official client docs
- the scorer has a believable spread between merely polished skills and genuinely exceptional skills
- each priority bundle has meaningful depth, not just coverage
- the private enhancer hosted limitation is formally downgraded and the LAN/self-hosted path is declared canonical for reliable `live` execution
- private runs produce consolidated operational summaries that make batch review easy
- the contribution flow is documented end-to-end for contributors and maintainers, including native intake and `skills_omni` publication rules

Use [CHECKLIST.md](CHECKLIST.md) as the live progress sheet.

## Done Criteria For The Next Track

The next catalog-expansion track can be considered complete when:

- active taxonomy coverage expands beyond the previous 11 active categories without introducing filler skills
- new skills deepen real coding and agent workflows rather than only inflating bundle counts
- any newly activated category lands with at least one high-quality, clearly scoped skill and a support pack that meets the current quality bar
- the public docs explain which canonical categories remain intentionally inactive and why

The second category wave is now complete. It landed when:

- `tools` became active through `mcp-server-authoring`
- `data-ai` became active through `data-contracts`
- `machine-learning` became active through `model-serving`
- `design` gained additional specialization through `design-token-governance`
- all newly activated skills landed at the current quality floor without relaxing the scorer
