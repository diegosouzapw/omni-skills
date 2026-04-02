# Troubleshooting Playbook

## Problem: The graph is too noisy to interpret

**Symptoms:** Hundreds of edges, many from framework wiring, tests, generated files, or transitive package relationships.

**Solution:** Reduce scope. Filter generated, vendor, and test paths. Separate manifest dependencies from code imports and runtime calls. Focus on a bounded subsystem instead of the full repository first.

## Problem: Static evidence and runtime behavior disagree

**Symptoms:** Imports look mild, but runtime failures or coordination costs are high.

**Solution:** Inspect runtime calls, deployment topology, retries, transaction boundaries, and release coordination. Re-evaluate distance and functional coupling.

## Problem: Coupling looks acceptable structurally but changes still cascade

**Symptoms:** Teams report synchronized changes even though APIs look clean.

**Solution:** Check for hidden shared rules, duplicated logic, semantic coupling, and temporal coupling in git history. Review ADRs and release notes for recurring joint changes.

## Problem: There is no clear ownership data

**Symptoms:** It is unclear whether a dependency crosses teams or release trains.

**Solution:** Use CODEOWNERS, deployment ownership, review patterns, or explicit assumptions. Mark uncertain distance scoring as medium or low confidence.

## Problem: The report is mixing levels of abstraction

**Symptoms:** Class-level findings and service-level findings appear in one map or severity list.

**Solution:** Split the report into separate passes. Keep one abstraction level per analysis and only cross-reference between levels when necessary.

## Problem: The remediation advice is too generic

**Symptoms:** Recommendations say only "decouple" or "refactor" without a concrete path.

**Solution:** Tie the recommendation to the coupling type. For intrusive coupling, introduce an interface. For model coupling, introduce DTOs or ACLs. For symmetric functional coupling, centralize shared rules or explicitly document accepted duplication.
