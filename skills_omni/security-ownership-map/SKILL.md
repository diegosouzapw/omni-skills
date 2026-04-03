---
name: "security-ownership-map"
description: "Security Ownership Map workflow skill. Use this skill when a user needs a security-oriented ownership analysis grounded in git history: map people to files, identify sensitive-code maintainers, estimate bus-factor risk, compare observed maintainers against CODEOWNERS, and export bounded CSV/JSON artifacts for graph review or database import. Do not use it for generic maintainer lists, non-security ownership questions, or threat modeling; use it when repository fidelity, attribution choices, and reviewable evidence need to stay explicit."
version: "0.0.1"
category: "testing-security"
tags:
  - "security-ownership-map"
  - "git"
  - "ownership"
  - "bus-factor"
  - "codeowners"
  - "history-analysis"
  - "sensitive-code"
  - "graph-analysis"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/security-ownership-map"
upstream_author: "github.com/openai/skills"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Security Ownership Map

## Overview

Use this skill to analyze a git repository as a **security ownership system**, not just a contributor list. The workflow builds a people-to-file map from git history, highlights sensitive-code maintainers, estimates low-bus-factor hotspots, identifies potentially orphaned security-relevant code, and exports artifacts for bounded review or graph import.

This skill is best when the user needs answers such as:

- who actually maintains auth, crypto, secret-handling, or deployment-sensitive code
- where sensitive files have only one realistic maintainer
- whether CODEOWNERS matches observed historical maintenance
- which file clusters move together and appear to share stewardship
- which security-relevant areas are stale, fragmented, or bot-dominated

Treat all ownership and bus-factor output as **heuristic evidence from git history**, not as proof of accountability, approval authority, or organizational ownership.

## When to Use This Skill

Use this skill when:

- you need a **security-oriented ownership map** grounded in repository history
- you want to find **sensitive hotspots** with low bus factor
- you need to identify **orphaned or stale sensitive code**
- you want a **CODEOWNERS reality check** against observed maintainers
- you need **bounded CSV/JSON outputs** for audit, graphing, or database import
- you are reviewing a large codebase and need a **repeatable, evidence-backed maintainer inference workflow**

Do **not** use this skill when:

- the user only wants a general maintainer list or contributor leaderboard
- the task is threat modeling rather than git-history analysis
- the repository history is known to be incomplete, mirrored incorrectly, shallow, or otherwise untrustworthy and cannot be corrected
- the question depends on official team assignments rather than observed maintenance behavior

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First run on a repository | `references/repo-fidelity-checks.md` | Prevents false conclusions from shallow, filtered, or wrong-branch history |
| Contributor names look split or duplicated | `references/identity-normalization.md` | Consolidates aliases before bus-factor or ownership interpretation |
| Need to compare declared vs observed owners | `references/codeowners-drift-check.md` | Distinguishes governance drift from syntax or coverage issues |
| Large or noisy monorepo | `references/monorepo-tuning.md` | Reduces glue-file noise, oversized outputs, and meaningless co-change clusters |
| Validate artifacts before handoff | `references/output-validation.md` | Checks summary, CSV shape, bounded queries, and graph export assumptions |
| Need optional preflight automation | `scripts/validate_repo_fidelity.sh` | Fast, read-only checks for clone depth, filters, branch, and revision |
| Need optional alias sanity check | `scripts/check_mailmap_consistency.sh` | Compares raw identities with mailmap-aware aggregation |
| Need graph database import guidance | `references/neo4j-import.md` | Keeps CSV import typed, constrained, and repeatable |

## Workflow

1. **Define the question before running anything**  
   Record the user goal in one sentence, for example: *identify auth/crypto files with bus factor <= 1 over the last 12 months* or *compare CODEOWNERS against observed security maintainers on the default branch*.

2. **Preflight repository fidelity**  
   Confirm the analysis target is trustworthy before drawing conclusions.

   - verify the correct repository and branch are checked out
   - verify the clone is not shallow
   - verify the repository is not partially cloned or blob-filtered in a way that breaks history analysis
   - decide whether submodules are intentionally in or out of scope
   - decide the analysis window, such as `--since "12 months ago"`

   Use `references/repo-fidelity-checks.md` or the helper script:

   ```bash
   bash scripts/validate_repo_fidelity.sh .
   ```

3. **Choose an attribution model and write it down**  
   Attribution choices materially change results. Record all of the following in your notes or handoff:

   - identity basis: `author` or `committer`
   - date basis: author date or committer date
   - whether merge commits are included
   - whether bots are excluded
   - whether `.mailmap` or alias normalization is in effect

   Default interpretation from the packaged workflow is typically:

   - author identity
   - author date
   - merges excluded
   - common bot identities excluded

4. **Normalize contributor identities before trusting people-level rankings**  
   If the same person appears under multiple names or emails, bus-factor and hidden-owner findings become unreliable.

   - check for `.mailmap`
   - compare raw contributor output to mailmap-aware summaries
   - document any unresolved alias ambiguity

   Optional helper:

   ```bash
   bash scripts/check_mailmap_consistency.sh .
   ```

5. **Decide sensitivity rules**  
   Use default auth/crypto/secret heuristics if they are sufficient, or provide a CSV config when the repository has custom security-sensitive paths.

   Example CSV:

   ```csv
   # pattern,tag,weight
   **/auth/**,auth,1.0
   **/crypto/**,crypto,1.0
   **/*.pem,secrets,1.0
   **/iam/**,authz,0.9
   ```

   Use it with `--sensitive-config path/to/sensitive.csv`.

6. **Run the ownership map with a bounded scope first**  
   Prefer a time-bounded first pass. Do not start with the largest possible history unless the task requires it.

   ```bash
   python skills/security-ownership-map/scripts/run_ownership_map.py \
     --repo . \
     --out ownership-map-out \
     --since "12 months ago" \
     --emit-commits
   ```

   Useful adjustments:

   - `--identity committer` when release engineering or cherry-pick flows make committer attribution the better fit
   - `--date-field committer` when operational timing matters more than original authorship timing
   - `--include-merges` only when merges are part of the intended signal
   - `--cochange-max-files` to suppress supernode commits in noisy monorepos
   - `--cochange-exclude` for lockfiles, generated files, build glue, or repo-wide config
   - `--no-communities` if co-change communities are not needed
   - `--graphml` only when a downstream visualization tool specifically requires it

7. **Inspect bounded outputs first, not full artifacts**  
   For agent safety and review quality, inspect small JSON slices before loading full CSVs or graph files into context.

   Examples:

   ```bash
   python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out summary --section orphaned_sensitive_code
   python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out summary --section bus_factor_hotspots
   python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out people --sort sensitive_touches --limit 10
   python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out files --tag auth --bus-factor-max 1
   python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out community --id 3
   ```

8. **Interpret results as risk signals, not verdicts**  
   Ask:

   - is this a true ownership concentration or an alias problem
   - is the hotspot real or caused by bots, merges, or generated files
   - is “orphaned” actually stale business logic, or just low-churn stable code
   - does the co-change cluster reflect meaningful maintenance coupling, or only repo-wide edits

9. **Run a CODEOWNERS reality check when relevant**  
   Compare observed maintainers to declared owners.

   Classify mismatches as one of:

   - **drift**: declared owners no longer appear to maintain the area
   - **coverage gap**: historically active maintainers are not represented
   - **over-broad ownership**: declared ownership is too wide to be meaningful
   - **syntax/precedence issue**: CODEOWNERS semantics explain the mismatch
   - **branch mismatch**: CODEOWNERS file or target branch differs from the analyzed history

   Use `references/codeowners-drift-check.md`.

10. **Validate outputs before handoff or import**  
    Confirm the artifact set matches the intended use.

    Expected outputs may include:

    - `people.csv`
    - `files.csv`
    - `edges.csv`
    - `cochange_edges.csv`
    - `summary.json`
    - `commits.jsonl` when `--emit-commits` is enabled
    - `communities.json`
    - `cochange.graph.json` or `ownership.graph.json`
    - optional GraphML files

    Use `references/output-validation.md`.

11. **Export or persist only what is needed**  
    Treat CSV and JSON as the primary artifacts for audit and automation. Use GraphML only as an optional visualization convenience. If importing into Neo4j, follow `references/neo4j-import.md` and apply constraints before repeated imports.

12. **Produce a short findings packet**  
    Every handoff should state:

    - repository and branch analyzed
    - history window
    - attribution model
    - bot handling
    - identity normalization status
    - sensitivity rules used
    - top findings
    - limitations that could change the conclusion

## Examples

### Example 1: Basic 12-month security ownership pass

```bash
python skills/security-ownership-map/scripts/run_ownership_map.py \
  --repo . \
  --out ownership-map-out \
  --since "12 months ago" \
  --emit-commits
```

Then inspect bounded findings:

```bash
python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out summary --section bus_factor_hotspots
```

**Expected outcome:** a machine-readable summary of sensitive files with low bus factor, suitable for triage without loading the entire graph.

### Example 2: Compare auth ownership against CODEOWNERS reality

1. Run the ownership map for the relevant branch.
2. Query sensitive auth files with low bus factor.
3. Compare those files and top maintainers against CODEOWNERS coverage using `references/codeowners-drift-check.md`.

Bounded query example:

```bash
python skills/security-ownership-map/scripts/query_ownership.py \
  --data-dir ownership-map-out files \
  --tag auth \
  --bus-factor-max 1
```

**Expected outcome:** a short report labeling each mismatch as drift, coverage gap, branch mismatch, or syntax/precedence issue.

### Example 3: Large monorepo with glue-file suppression

```bash
python skills/security-ownership-map/scripts/run_ownership_map.py \
  --repo /path/to/monorepo \
  --out ownership-map-out \
  --since "9 months ago" \
  --cochange-exclude "**/.github/**" \
  --cochange-exclude "**/Cargo.lock" \
  --cochange-exclude "**/package-lock.json" \
  --cochange-exclude "**/Kbuild"
```

**Expected outcome:** cleaner co-change communities with less distortion from repo-wide or generated-file edits.

### Example 4: Investigate one sensitive file deeply

```bash
python skills/security-ownership-map/scripts/query_ownership.py \
  --data-dir ownership-map-out file \
  --file crypto/tls/handshake.rs
```

Then inspect nearby co-change context if available:

```bash
python skills/security-ownership-map/scripts/query_ownership.py \
  --data-dir ownership-map-out cochange \
  --file crypto/tls/handshake.rs \
  --min-jaccard 0.05 \
  --limit 20
```

**Expected outcome:** one-file drill-down showing likely maintainers, sensitivity tags, and nearby ownership cluster hints.

### Example 5: Monthly maintainers for the community containing a file

```bash
python skills/security-ownership-map/scripts/community_maintainers.py \
  --data-dir ownership-map-out \
  --file network/card.c \
  --since 2025-01-01 \
  --top 5
```

**Expected outcome:** a time-bucketed view of maintainers for the community around the selected file.

## Best Practices

### Do

- **Do verify repository fidelity first.** Shallow or filtered history can silently invalidate ownership conclusions.
- **Do record the attribution model in every handoff.** Author vs committer and merge inclusion can materially change results.
- **Do normalize identities before trusting people-level metrics.** Alias fragmentation creates false low bus-factor findings.
- **Do exclude bots by default or label them explicitly.** Otherwise automation can appear to “own” sensitive code.
- **Do start with bounded time windows and bounded queries.** This keeps review focused and avoids oversized artifacts in model context.
- **Do treat CSV/JSON as the primary interchange artifacts.** They are more reliable than GraphML for machine review and database import.
- **Do compare observed maintainers against CODEOWNERS carefully.** Neither source is absolute ground truth.
- **Do tune co-change exclusions in monorepos.** Lockfiles, CI config, and build glue often produce misleading graph structure.
- **Do state uncertainty explicitly.** A low bus factor is a risk indicator, not proof that only one person can safely change the code.

### Don’t

- **Don’t present bus factor as a precise organizational metric.** It is a heuristic derived from history.
- **Don’t trust people rankings when the same person appears under multiple emails or names.**
- **Don’t include full graph artifacts inline in model context unless absolutely necessary.** Query slices first.
- **Don’t assume CODEOWNERS equals historical maintenance truth.** It expresses declared review ownership, not guaranteed ongoing stewardship.
- **Don’t keep merge commits, bots, generated files, and glue files in scope by default unless they are part of the question.**
- **Don’t make GraphML the only artifact used for handoff or audit.**
- **Don’t infer approval authority, accountability, or incident ownership solely from commit history.**

## Troubleshooting

### Problem: Results look suspiciously sparse or ownership appears missing

**Symptoms:** Very few commits are attributed, expected maintainers disappear, or many files appear orphaned.

**Solution:** Verify clone fidelity first. Check for a shallow repository, partial clone filters, wrong branch, or an overly narrow `--since/--until` window. Re-run the preflight from `references/repo-fidelity-checks.md`.

### Problem: One person appears as several different maintainers

**Symptoms:** The same contributor appears under multiple names or emails, and bus factor looks artificially low.

**Solution:** Normalize identities with `.mailmap` or an explicit alias map. Compare raw and mailmap-aware aggregation using `references/identity-normalization.md` or `scripts/check_mailmap_consistency.sh`.

### Problem: Bots dominate sensitive ownership or hotspot rankings

**Symptoms:** Dependabot or other automation appears among top maintainers, hidden owners, or community maintainers.

**Solution:** Re-run with bot exclusions enabled or expanded. Document whether bot activity is excluded or separately classified. Validate the effect by comparing bounded before/after query output.

### Problem: Co-change communities look meaningless

**Symptoms:** Clusters are dominated by lockfiles, CI files, editor config, or repo-wide build glue.

**Solution:** Add `--cochange-exclude` rules, use default co-change excludes, lower the scope window, or suppress supernode commits with `--cochange-max-files`. See `references/monorepo-tuning.md`.

### Problem: CODEOWNERS disagrees with observed maintainers

**Symptoms:** Historical maintainers are not listed in CODEOWNERS, or declared owners do not appear active in the analyzed time window.

**Solution:** Classify the mismatch instead of treating it as an error by default. Check branch alignment, file precedence, syntax issues, and path coverage using `references/codeowners-drift-check.md`.

### Problem: Output is too large for safe review

**Symptoms:** CSVs, JSON, or graph artifacts are too large to inspect directly in an agent session.

**Solution:** Use `scripts/query_ownership.py` to retrieve only the sections or slices needed for the task. Prefer `summary`, `files --tag ...`, `people --limit ...`, `file`, or `community` queries rather than opening full artifacts.

### Problem: Neo4j import creates duplicate nodes or type confusion

**Symptoms:** Repeated imports create duplicate people/files, numeric values are treated as strings, or load commands fail on malformed CSV assumptions.

**Solution:** Treat CSV headers and typing explicitly, apply uniqueness constraints before import, and use the import notes in `references/neo4j-import.md`. Validate the CSV artifacts first with `references/output-validation.md`.

### Problem: GraphML behaves differently across tools

**Symptoms:** Missing attributes, type conversion surprises, or visualization inconsistencies between graph tools.

**Solution:** Treat GraphML as optional. Use CSV/JSON as the authoritative handoff artifacts and regenerate GraphML only for a specific visualization need.

## Related Skills

- `@security-threat-model` - Use when the task is about attack paths, trust boundaries, or architectural risk rather than historical ownership.
- `@code-review` - Use after this workflow when the next step is reviewing a concrete change in a hotspot you identified.
- `@incident-retrospective` - Use when ownership findings need to feed an operational follow-up after an incident.

## Additional Resources

### Local support pack

- [Repository fidelity checks](references/repo-fidelity-checks.md)
- [Identity normalization and mailmap checks](references/identity-normalization.md)
- [CODEOWNERS drift check](references/codeowners-drift-check.md)
- [Monorepo tuning](references/monorepo-tuning.md)
- [Output validation checklist](references/output-validation.md)
- [Neo4j import notes](references/neo4j-import.md)
- [Worked example: CODEOWNERS reality check](examples/codeowners-reality-check.md)
- [Worked example: large monorepo analysis](examples/large-monorepo-analysis.md)
- [Optional repo preflight helper](scripts/validate_repo_fidelity.sh)
- [Optional mailmap consistency helper](scripts/check_mailmap_consistency.sh)

### Output artifacts

A typical run emits some or all of the following under `ownership-map-out/`:

- `people.csv`
- `files.csv`
- `edges.csv`
- `cochange_edges.csv`
- `summary.json`
- `commits.jsonl` when `--emit-commits` is enabled
- `communities.json`
- `cochange.graph.json` or `ownership.graph.json`
- optional `ownership.graphml` / `cochange.graphml`

`people.csv` may also include timezone-derived fields such as `primary_tz_offset`, `primary_tz_minutes`, and `timezone_offsets`.

### Quick bounded queries

```bash
python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out people --limit 10
python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out files --tag auth --bus-factor-max 1
python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out person --person alice@corp --limit 10
python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out file --file crypto/tls
python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out cochange --file crypto/tls --limit 10
python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out summary --section orphaned_sensitive_code
python skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out community --id 3
```

### Summary format example

```json
{
  "orphaned_sensitive_code": [
    {
      "path": "crypto/tls/handshake.rs",
      "last_security_touch": "2023-03-12T18:10:04+00:00",
      "bus_factor": 1
    }
  ],
  "hidden_owners": [
    {
      "person": "alice@corp",
      "controls": "63% of auth code"
    }
  ]
}
```
