---
name: "security-ownership-map-v2"
description: "Security Ownership Map workflow skill. Use this skill when the user needs a security-focused ownership analysis grounded in Git history: build people-to-file ownership maps, estimate bus factor on sensitive code, compare observed ownership with CODEOWNERS intent, identify orphaned or concentrated security-critical areas, and export bounded CSV/JSON artifacts for graph analysis and visualization. Do not use it for generic maintainer lists or broad security triage that is better handled by dedicated secret-scanning, dependency, or infrastructure skills."
version: "0.0.1"
category: "testing-security"
tags:
  - "security-ownership-map-v2"
  - "security-ownership-map"
  - "git"
  - "ownership"
  - "bus-factor"
  - "codeowners"
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
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/security-ownership-map-v2"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Security Ownership Map

## Overview

This skill packages the upstream `security-ownership-map` workflow into an Omni-friendly operational kit without hiding provenance.

Use it when the user explicitly wants a **security-oriented ownership analysis based on Git history**, such as:

- finding sensitive files with low bus factor
- identifying hidden or concentrated maintainers for auth, crypto, secrets, or key infrastructure paths
- checking whether `CODEOWNERS` matches observed maintenance reality
- building ownership and co-change outputs for Neo4j, Gephi, or bounded LLM follow-up queries

This skill is intentionally narrower than general repository analysis. It answers **who actually touches sensitive code, how concentrated that ownership is, and where declared ownership may differ from observed history**.

It also preserves the imported workflow's support pack so operators can keep provenance visible during review, handoff, and reporting.

## When to Use This Skill

Use this skill when the request is clearly about **security ownership topology**, not generic contributor reporting.

### Good fits

- "Which people effectively own our auth and crypto code?"
- "Show me sensitive files with bus factor 1 or stale security ownership."
- "Compare `CODEOWNERS` against Git history to find ownership drift or unenforced assumptions."
- "Export repo ownership data to CSV/JSON so we can inspect it in Neo4j or another graph tool."
- "Find co-change clusters around sensitive code to identify hidden maintenance communities."

### Do not use this skill when

- the user only wants a maintainer list or top committers
- the task is primarily secret scanning, SCA, container scanning, Kubernetes triage, or vuln remediation
- the repository history is clearly unavailable and the user does not want a history-grounded result
- the request is about policy-only ownership without comparing against observed repository history

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First run on a repository | `references/git-history-preflight.md` | Verifies branch/ref, shallow or filtered clone issues, and whether history is complete enough for ownership claims |
| Contributor identities look split | `references/identity-normalization.md` | Prevents one person from appearing as multiple owners because of email/name aliases |
| `CODEOWNERS` drift analysis | `references/codeowners-reality-check.md` | Frames `CODEOWNERS` as declared review intent, not proof of actual maintenance ownership |
| Sensitive-path tuning | `references/sensitivity-tuning.md` and `examples/sensitive-config.example.csv` | Keeps sensitivity tagging explicit, reviewable, and configurable |
| Co-change graph looks noisy | `references/cochange-noise-control.md` | Helps filter bots, glue files, vendored code, and mega-commits |
| Graph import into Neo4j | `references/neo4j-import-hardening.md` | Reduces duplicate nodes and import errors |
| LLM follow-up or reviewer packet | `references/llm-safe-querying.md` | Keeps prompts bounded and avoids dumping raw sensitive data |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms upstream repository, branch, commit, and imported path |

## Workflow

Follow this sequence unless the user explicitly requests a narrower slice.

### 1. Confirm scope and analysis parameters

Establish:

- target repository path
- target branch or ref
- time window, if any, such as `--since` / `--until`
- whether attribution should use **author** or **committer** identity
- whether merge commits should be included
- whether the goal is ownership only, ownership + co-change, or graph export

Record those choices in the final notes because bus-factor and ownership results change materially with attribution mode, merge policy, and time window.

### 2. Run history preflight before trusting any output

Before analyzing ownership, verify that the local clone is usable for history-based conclusions.

Use `references/git-history-preflight.md` to check for:

- shallow clone state
- partial clone or filtered history surprises
- wrong branch/ref
- time window extending beyond locally available history

If history is incomplete, state that clearly and treat the result as provisional.

### 3. Normalize contributor identities

People-to-file ownership is only as good as identity cleanup.

Use `.mailmap` if the repository has one, or document unresolved aliases before interpreting bus factor. See:

- `references/identity-normalization.md`
- `examples/mailmap.example`

If the same maintainer appears under multiple names/emails, reconcile that before presenting people-level metrics as authoritative.

### 4. Decide sensitivity classification rules

The upstream workflow supports default sensitive-path heuristics and custom CSV-based tuning.

Use defaults when the repository is conventional and the user wants a quick first pass. Use a reviewed CSV config when:

- the repo is a monorepo
- sensitive code lives under unusual paths
- false positives from generic patterns would distort the result

See:

- `references/sensitivity-tuning.md`
- `examples/sensitive-config.example.csv`

Do not copy secret material, keys, or sensitive file bodies into outputs. Summarize by path, tag, counts, ownership, and timestamps instead.

### 5. Build the ownership map

Run from the repository root when possible.

#### Quick start

```bash
python skills/skills/security-ownership-map/scripts/run_ownership_map.py \
  --repo . \
  --out ownership-map-out \
  --since "12 months ago" \
  --emit-commits
```

Defaults from the imported workflow:

- author identity
- author date
- merge commits excluded
- co-change graph enabled
- communities computed by default
- common glue files excluded from co-change clustering
- Dependabot-style commits excluded by default

Useful adjustments:

```bash
python skills/skills/security-ownership-map/scripts/run_ownership_map.py \
  --repo . \
  --out ownership-map-out \
  --identity committer \
  --date-field committer \
  --include-merges
```

```bash
python skills/skills/security-ownership-map/scripts/run_ownership_map.py \
  --repo . \
  --out ownership-map-out \
  --cochange-exclude "**/Cargo.lock" \
  --cochange-exclude "**/.github/**" \
  --no-default-cochange-excludes
```

```bash
python skills/skills/security-ownership-map/scripts/run_ownership_map.py \
  --repo /path/to/linux \
  --out ownership-map-out \
  --cochange-exclude "**/Kbuild"
```

If communities are not needed:

```bash
python skills/skills/security-ownership-map/scripts/run_ownership_map.py \
  --repo . \
  --out ownership-map-out \
  --no-communities
```

### 6. Query bounded outputs instead of loading everything into context

Prefer small slices from `summary.json`, `people.csv`, `files.csv`, and related artifacts.

Use `scripts/query_ownership.py` for bounded, machine-readable follow-up.

Examples:

```bash
python skills/skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out people --limit 10
python skills/skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out files --tag auth --bus-factor-max 1
python skills/skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out summary --section orphaned_sensitive_code
python skills/skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out cochange --file crypto/tls --limit 10
python skills/skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out community --id 3
```

See `references/llm-safe-querying.md` for safe prompt and review patterns.

### 7. Compare observed ownership with `CODEOWNERS` carefully

When the user asks for a `CODEOWNERS` reality check:

- validate whether the file applies to the branch being analyzed
- treat `CODEOWNERS` as declared review intent, not proof of actual maintenance ownership
- note whether code-owner review is likely enforced through branch protection
- compare declared owners against observed maintainers from Git history

See `references/codeowners-reality-check.md`.

### 8. Export and persist results

The imported workflow emits artifacts such as:

- `people.csv`
- `files.csv`
- `edges.csv`
- `cochange_edges.csv`
- `summary.json`
- `commits.jsonl` if `--emit-commits`
- `communities.json`
- graph JSON outputs
- optional GraphML outputs

Prefer **CSV/JSON** as the default interchange format. Treat GraphML as optional and consumer-dependent.

For Neo4j import guidance, use `references/neo4j-import-hardening.md`.

### 9. Report findings with provenance and limits

Final reporting should include:

- repository and branch/ref analyzed
- time window
- attribution mode: author or committer
- merge inclusion policy
- whether history was complete or provisional
- whether identities were normalized
- sensitivity config used
- notable exclusions for co-change or author filtering
- key findings, bounded evidence, and where to inspect exported artifacts

## Examples

### Example 1: Find orphaned sensitive code

```bash
python skills/skills/security-ownership-map/scripts/query_ownership.py \
  --data-dir ownership-map-out \
  summary \
  --section orphaned_sensitive_code
```

**Expected outcome:** A bounded JSON slice listing stale sensitive files with low bus factor.

### Example 2: Show auth or crypto files with bus factor 1

```bash
python skills/skills/security-ownership-map/scripts/query_ownership.py \
  --data-dir ownership-map-out \
  files \
  --tag auth \
  --bus-factor-max 1
```

```bash
python skills/skills/security-ownership-map/scripts/query_ownership.py \
  --data-dir ownership-map-out \
  files \
  --tag crypto \
  --bus-factor-max 1
```

**Expected outcome:** A focused list of sensitive files with concentrated ownership risk.

### Example 3: Identify heavy maintainers of sensitive code

```bash
python skills/skills/security-ownership-map/scripts/query_ownership.py \
  --data-dir ownership-map-out \
  people \
  --sort sensitive_touches \
  --limit 10
```

**Expected outcome:** Top people by sensitive-code touch volume for the analyzed window.

### Example 4: Inspect co-change neighbors for a sensitive file

```bash
python skills/skills/security-ownership-map/scripts/query_ownership.py \
  --data-dir ownership-map-out \
  cochange \
  --file path/to/file \
  --min-jaccard 0.05 \
  --limit 20
```

**Expected outcome:** Nearby files that tend to change with the target file, useful for maintenance-cluster interpretation.

### Example 5: Build a monthly maintainer view for a community

```bash
python skills/skills/security-ownership-map/scripts/community_maintainers.py \
  --data-dir ownership-map-out \
  --file network/card.c \
  --since 2025-01-01 \
  --top 5
```

**Expected outcome:** A time-bucketed maintainer summary for the community containing the file.

### Example 6: Ask for a `CODEOWNERS` drift analysis

```text
Use @security-ownership-map-v2 on this repository to compare observed Git-history ownership for auth and crypto paths against CODEOWNERS on the default branch. Record whether the clone is complete, whether identities were normalized, and whether branch-specific CODEOWNERS or required reviews could affect interpretation.
```

## Best Practices

### Do

- Verify clone completeness before drawing ownership conclusions.
- Record whether results use author or committer attribution.
- Normalize identities with `.mailmap` or equivalent alias rules before presenting people-level metrics.
- Treat sensitive-path tagging as configurable heuristics unless independently validated.
- Use bounded query outputs for LLM follow-up, reviewer packets, and dashboards.
- Compare `CODEOWNERS`, observed ownership, and enforcement context together.
- Document co-change exclusions, bot filters, and mega-commit handling.
- Keep provenance visible: upstream source, analyzed repo, branch/ref, and output directory.

### Do not

- Do not present shallow-clone results as authoritative.
- Do not treat `CODEOWNERS` as proof of real maintenance ownership.
- Do not paste raw secrets, private keys, or full sensitive file contents into prompts or exports.
- Do not rely on people-based metrics when aliases are obviously unresolved.
- Do not over-interpret co-change communities if glue files, vendored code, or formatting sweeps dominate the graph.
- Do not default to `commits.jsonl` in prompts when `summary.json` or targeted query slices are sufficient.

### Interpretation notes

- Bus factor is highly sensitive to time window, attribution mode, and merge policy.
- `hidden_owners` and related metrics are signals for review, not standalone proof of security accountability.
- Path-based sensitivity rules are useful for triage but may under- or over-classify risk.
- GraphML is optional; prefer CSV/JSON when downstream compatibility matters.

## Troubleshooting

### Problem: Bus factor looks wrong or suspiciously low

**Symptoms:** Many files show bus factor 1, long-time maintainers seem to disappear, or the result only covers recent months unexpectedly.

**Solution:** Check for shallow or filtered clone issues first using `references/git-history-preflight.md`. Confirm the correct branch/ref, requested `--since` window, and whether local history actually spans that interval.

### Problem: One maintainer appears as multiple different people

**Symptoms:** The same person appears under multiple emails or name variants, inflating owner counts and distorting bus factor.

**Solution:** Reconcile identities before interpretation. Use `.mailmap` guidance in `references/identity-normalization.md` and the sample in `examples/mailmap.example`.

### Problem: `CODEOWNERS` and observed ownership disagree

**Symptoms:** Files appear owned by one set of maintainers in Git history but different users or teams in `CODEOWNERS`.

**Solution:** Treat this as drift analysis, not a tool failure. Check whether `CODEOWNERS` applies to the analyzed branch, whether the patterns are valid, and whether branch protection likely enforces code-owner review. Use `references/codeowners-reality-check.md`.

### Problem: Sensitive-code tagging misses important paths or over-flags unrelated files

**Symptoms:** Auth/crypto/secrets areas are absent, or generic folders dominate the sensitive summary.

**Solution:** Replace defaults with a reviewed CSV config. Start from `examples/sensitive-config.example.csv`, adapt patterns to the repo layout, and re-run. If the repo is secret-heavy, consider validation with separate security tooling rather than path heuristics alone.

### Problem: Co-change communities are dominated by glue files or formatting sweeps

**Symptoms:** `.github`, lockfiles, vendored code, or mass-edited files connect nearly everything.

**Solution:** Tighten exclusions and supernode filtering. Review `references/cochange-noise-control.md`, use `--cochange-exclude`, adjust `--cochange-max-files`, and consider bot filters.

### Problem: Neo4j import creates duplicates or fails on schema issues

**Symptoms:** Duplicate people/files appear after multiple imports, or `LOAD CSV` fails on headers or unexpected values.

**Solution:** Apply constraints before import and use idempotent Cypher patterns. Follow `references/neo4j-import-hardening.md`.

### Problem: GraphML output fails in downstream tools

**Symptoms:** The graph imports poorly or attribute types are rejected.

**Solution:** Prefer CSV/JSON unless the GraphML consumer is known-compatible. GraphML support is optional and downstream-tool dependent.

### Problem: The task has drifted outside ownership mapping

**Symptoms:** The analysis turns into secret discovery, dependency risk review, or infrastructure misconfiguration triage.

**Solution:** Hand off deliberately to a more appropriate security skill. Keep the ownership outputs as context, but do not force this skill to cover unrelated security domains.

## Related Skills

Use a different skill or workflow when the problem is adjacent but not actually ownership mapping:

- secret scanning or exposed credentials review
- dependency or package-risk analysis
- container or filesystem vulnerability scanning
- Kubernetes or infrastructure security triage
- generic maintainer inventory without security framing

This skill is strongest when Git history remains the primary evidence source.

## Additional Resources

### Local support pack

- [Git history preflight](references/git-history-preflight.md)
- [Identity normalization](references/identity-normalization.md)
- [CODEOWNERS reality check](references/codeowners-reality-check.md)
- [Sensitivity tuning](references/sensitivity-tuning.md)
- [Co-change noise control](references/cochange-noise-control.md)
- [Neo4j import hardening](references/neo4j-import-hardening.md)
- [LLM-safe querying](references/llm-safe-querying.md)
- [Sensitive config example](examples/sensitive-config.example.csv)
- [Mailmap example](examples/mailmap.example)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported workflow notes preserved from upstream

#### Requirements

- Python 3
- `networkx` for graph and community work

Install with:

```bash
pip install networkx
```

#### Output artifacts

`ownership-map-out/` may contain:

- `people.csv`
- `files.csv`
- `edges.csv`
- `cochange_edges.csv`
- `summary.json`
- `commits.jsonl` when `--emit-commits`
- `communities.json`
- `cochange.graph.json`
- `ownership.graphml` / `cochange.graphml` when requested

`people.csv` includes timezone-oriented fields derived from commit offsets such as `primary_tz_offset`, `primary_tz_minutes`, and `timezone_offsets`.

#### Common bounded security queries

```bash
python skills/skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out summary --section orphaned_sensitive_code
python skills/skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out summary --section hidden_owners
python skills/skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out summary --section bus_factor_hotspots
python skills/skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out files --tag auth --bus-factor-max 1
python skills/skills/security-ownership-map/scripts/query_ownership.py --data-dir ownership-map-out files --tag crypto --bus-factor-max 1
```

#### Summary format example

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
