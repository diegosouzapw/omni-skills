---
name: synthesize-research-report
description: "Synthesize Research Report workflow skill. Use this skill when the user needs Synthesize a comprehensive qualitative research report from raw interview materials (transcripts, notes, summaries). Handles 50+ interviews via batched sub-agents, builds codebooks iteratively, constructs data-driven personas, and produces prioritized findings with outcome-oriented opportunities. Use when you have completed qualitative interviews and need to turn raw data into a structured, evidence-backed research report and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["synthesize-research-report", "synthesize", "comprehensive", "qualitative", "research", "report", "raw", "interview"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "cookiy-ai"
date_added: "2026-03-30"
date_updated: "2026-03-30"
---

# Synthesize Research Report

## Overview

This public intake copy packages `skills/synthesize-research-report` from `https://github.com/cookiy-ai/cookiy-skill.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Synthesize Research Report Transform raw qualitative interview data into a comprehensive, evidence-backed research report through a multi-phase autonomous pipeline.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites — Gather Before Starting, Determining Analysis Configuration, The Five Phases, Output Directory Structure, Sub-Agent Orchestration, Extensibility Model.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Synthesize a comprehensive qualitative research report from raw interview materials (transcripts, notes, summaries). Handles 50+ interviews via batched sub-agents, builds codebooks iteratively, constructs data-driven....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Prerequisites — Gather Before Starting

Before any analysis begins, you MUST have three things. If any are missing, ask the user:

### 1. Research Overview & Objectives
Ask: *"What is the research objective? What questions were you trying to answer?"*
You need:
- The core research question(s)
- What decisions this research will inform
- The target audience for the final report (product team, executives, design, academic)
- The research goal type — this determines the prioritization framework later:

| Research Goal | Prioritization Framework |
|--------------|------------------------|
| Tactical usability fixes | Criticality Scoring (Severity x Frequency) |
| Market gaps & innovation | Opportunity Scoring (Importance vs. Satisfaction) |
| MVP / sprint scoping | Impact/Effort Matrix |
| High-risk discovery | Hypothesis Canvas (Risk vs. Perceived Value) |
| Product strategy | Opportunity Solution Tree |

### 2. Interview Guide / Discussion Guide
Ask: *"Do you have the interview guide or discussion guide used? Please provide it or point me to it."*
This is essential for:
- Generating deductive "start list" codes
- Understanding what topics were probed
- Assessing coverage across interviews

### 3. Raw Interview Materials
Ask: *"Where are the interview transcripts, notes, or summaries located?"*
Supported formats:
- **Raw transcripts** (full verbatim or cleaned)
- **Interview notes** (researcher's contemporaneous notes)
- **Interview summaries** (post-interview write-ups)

Confirm the count and location of materials.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @synthesize-research-report to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/synthesize-research-report/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/synthesize-research-report/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @synthesize-research-report using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Usage

```
/synthesize-research-report $ARGUMENTS
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `skills/synthesize-research-report`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@cookiy` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@pm-research` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@qualitative-research-planner` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@context-engineering` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Determining Analysis Configuration

Based on the research context, make two key decisions and record them in `analysis/config.md`:

### Coding Depth: Full Codebook vs. Lightweight Tags

| Condition | Use Full Codebook | Use Lightweight Tags |
|-----------|-------------------|---------------------|
| Theory-building research | Yes | |
| Team-based analysis / multiple coders | Yes | |
| Regulatory or compliance context | Yes | |
| Exploratory / rapid discovery | | Yes |
| Stakeholders want to read raw data | | Yes |
| Non-interview data (tickets, surveys) | | Yes |

**Full Codebook**: Two-level hierarchy (Category > Code), operational definitions, inclusion/exclusion criteria, typical and atypical exemplars.

**Lightweight Tags**: Descriptive topic labels with brief definitions and representative quotes.

### Coding Approach: Deductive, Inductive, or Hybrid

| Condition | Approach |
|-----------|----------|
| Well-understood domain + established framework (JTBD, heuristics) | Deductive start |
| Unfamiliar domain, understudied population, complex social processes | Inductive |
| Most product/UX research | Hybrid (deductive start + inductive growth) |

For **Hybrid** (recommended default):
1. Generate a "start list" of 12-40 provisional codes from the interview guide, research objectives, or a framework
2. Remain open to emergent in-vivo codes during transcript review
3. Formalize emergent codes into the codebook structure during Phase 3

### Persona Type Selection

Auto-determine based on research context:

| Persona Type | Best For | Key Variable |
|-------------|----------|-------------|
| Proto-Personas | Limited data, early alignment | Team assumptions |
| Behavioral | Complex workflows, B2B tools | Usage patterns & skills |
| Attitudinal | Brand, lifestyle, emotional design | Mindset & values |
| Goal-Based | Interface design, JTBD | Intended outcomes |
| Narrative | Communicating to non-researchers | Day-in-the-life stories |
| Ecosystem | B2B with multiple stakeholders | Organizational roles |
| System/VUI | Chatbot or voice interface design | Personality traits |

Record the selected type and rationale in `analysis/config.md`.

---

#### Imported: The Five Phases

The pipeline has exactly five fixed phases. Each runs in its own sub-agent(s). Phases are sequential — each reads the previous phase's summary. Future analysis signals (sentiment, journey maps, severity ratings, etc.) are added by embedding new instructions into the relevant phase file and writing outputs to that phase's `parallel/` directory.

| Phase | Name | Sub-Agent Strategy | Purpose |
|-------|------|--------------------|---------|
| 1 | Familiarization | Parallel batches (~15 interviews each) | Deep reading, memos, initial observations |
| 2 | Coding | Sequential batches (~5 interviews each) | Iterative codebook building, coded excerpts |
| 3 | Theme Development | Single agent | Group codes into themes, pattern analysis |
| 4 | Synthesis & Interpretation | Single agent (may spawn sub-agents for large persona clustering) | Findings, personas, opportunities, evidence |
| 5 | Report Compilation | Single agent | Final comprehensive markdown report |

### Phase Instruction Files

Each phase has a detailed instruction file in `phases/`:

| File | Loaded By |
|------|-----------|
| `phases/phase1-familiarization.md` | Each Phase 1 batch agent |
| `phases/phase2-coding.md` | Each Phase 2 sequential agent |
| `phases/phase3-themes.md` | Phase 3 agent |
| `phases/phase4-synthesis.md` | Phase 4 agent |
| `phases/phase5-report.md` | Phase 5 agent |

---

#### Imported: Output Directory Structure

```
analysis/
├── config.md                              # Configuration: coding depth, approach, persona type, prioritization framework
│
├── phase1-familiarization/
│   ├── batch-{n}-memos.md                 # Interview memos (~15 per file)
│   ├── consolidated-observations.md       # Merged observations across all batches
│   ├── parallel/                          # [Extensibility] e.g., sentiment-extraction.md, journey-raw-data.md
│   └── phase1-summary.md                  # Handoff to Phase 2
│
├── phase2-coding/
│   ├── codebook.md                        # Final codebook
│   ├── codebook-changelog.md              # Evolution log: what was added/merged/split per iteration
│   ├── coded-excerpts/
│   │   └── {category}--{code}.md          # All excerpts for a given code, grouped by participant
│   ├── parallel/                          # [Extensibility] e.g., in-vivo-lexicon.md
│   └── phase2-summary.md                  # Handoff to Phase 3
│
├── phase3-themes/
│   ├── themes.md                          # Theme definitions (with core category and codeweaving)
│   ├── frequency-matrix.md                # Code/theme prevalence per participant
│   ├── co-occurrence.md                   # Which codes/themes cluster together
│   ├── code-map.md                        # Abstraction progression: codes → focused → categories → themes
│   ├── pattern-analysis.md                # Cross-cutting patterns, contradictions, outliers, narrative threads
│   ├── parallel/                          # [Extensibility] e.g., severity-ratings.md, sentiment-patterns.md
│   └── phase3-summary.md                  # Handoff to Phase 4
│
├── phase4-synthesis/
│   ├── findings.md                        # Prioritized findings with evidence (min 2-interview threshold)
│   ├── prioritization-rationale.md        # Which framework was used and why
│   ├── evidence-bank.md                   # Extended quotes, luminous exemplars, anchor/echo candidates
│   ├── personas/
│   │   ├── persona-type-rationale.md      # Selection logic and clustering method
│   │   ├── clustering-analysis.md         # How participants map to personas
│   │   └── persona-{n}-{name}.md         # Individual persona profiles
│   ├── opportunities.md                   # Outcome-oriented opportunity statements
│   ├── recommendations.md                 # Actionable recommendations tied to findings
│   ├── open-questions.md                  # Gaps, unresolved puzzles, future research
│   ├── parallel/                          # [Extensibility] e.g., journey-map.md, competitive-gaps.md
│   └── phase4-summary.md                  # Handoff to Phase 5
│
└── final-report.md                        # Comprehensive synthesis report
```

---

#### Imported: Sub-Agent Orchestration

### Phase 1: Parallel Batch Agents

```
N = ceil(total_interviews / 15)

Spawn N agents IN PARALLEL. Each receives:
  - phases/phase1-familiarization.md (instructions)
  - Its batch of ~15 interview file paths
  - analysis/config.md
  - The research overview and interview guide

Each agent writes: analysis/phase1-familiarization/batch-{n}-memos.md

After ALL batch agents complete:
  Spawn 1 consolidation agent that:
    - Reads all batch-{n}-memos.md files
    - Writes consolidated-observations.md
    - Writes phase1-summary.md
```

### Phase 2: Sequential Batch Agents

```
M = ceil(total_interviews / 5)

For i = 1 to M:
  Spawn 1 agent that receives:
    - phases/phase2-coding.md (instructions)
    - Its batch of ~5 interview file paths
    - The CURRENT codebook:
        - If i == 1: the initial "start list" (from config) or empty codebook
        - If i > 1: analysis/phase2-coding/codebook.md (written by previous agent)
    - analysis/config.md
    - analysis/phase1-familiarization/phase1-summary.md

  Agent writes:
    - Updated analysis/phase2-coding/codebook.md (overwrite)
    - Appends to analysis/phase2-coding/codebook-changelog.md
    - Creates/updates coded-excerpts/{category}--{code}.md files

After all sequential agents complete:
  Spawn 1 agent to write phase2-summary.md
```

### Phases 3-5: Single Agents

```
Each phase spawns 1 agent that receives:
  - The phase instruction file
  - The previous phase's summary file
  - Paths to specific prior-phase artifacts it needs (listed in the phase instruction file)
  - analysis/config.md

Agent writes all outputs for its phase directory + phase{N}-summary.md
```

---

#### Imported: Extensibility Model

Phases are fixed. New analysis signals are added by:

1. **Adding instructions** to the relevant phase's `.md` file (e.g., add a "Sentiment Extraction" section to `phase1-familiarization.md`)
2. **Writing outputs** to that phase's `parallel/` subdirectory
3. **Adding a section** to `phase5-report.md` to incorporate the new signal into the final report

### Example: Adding Sentiment Analysis

| Where | What to Add |
|-------|------------|
| `phases/phase1-familiarization.md` | Section: "For each interview, rate overall emotional valence and flag high-intensity moments" → writes to `parallel/sentiment-extraction.md` |
| `phases/phase3-themes.md` | Section: "Analyze sentiment patterns across themes" → writes to `parallel/sentiment-patterns.md` |
| `phases/phase5-report.md` | Section: "Include Emotional Landscape section in final report" |

### Example: Adding Journey Mapping

| Where | What to Add |
|-------|------------|
| `phases/phase1-familiarization.md` | Section: "Extract temporal touchpoints and emotional states" → writes to `parallel/journey-raw-data.md` |
| `phases/phase4-synthesis.md` | Section: "Synthesize journey stages across personas" → writes to `parallel/journey-map.md` |
| `phases/phase5-report.md` | Section: "Include User Journey Map section in final report" |

---

#### Imported: Quality Assurance (Embedded)

Quality is NOT a separate phase. Every phase instruction file includes a **Quality Gate** section that checks:

| Dimension | What It Means | Checked In |
|-----------|---------------|------------|
| Cognitive Empathy | Understand participants as they understand themselves | Phase 1, 4 |
| Heterogeneity | Capture variation, not just the dominant pattern | Phase 1, 2, 3 |
| Palpability | Evidence is concrete and specific, not abstract | Phase 2, 4 |
| Groundedness | Claims traceable to specific data, min 2 interviews | Phase 3, 4 |
| Reflexivity | Analytic choices made explicit | Phase 2, 3, 4 |

If a quality gate fails, the agent must self-correct before writing outputs.

---

#### Imported: Running the Skill

After gathering all prerequisites:

1. Write `analysis/config.md` with all configuration decisions
2. Execute Phase 1 → 2 → 3 → 4 → 5 sequentially (spawning sub-agents per the strategies above)
3. After Phase 5, present the user with:
   - Path to `analysis/final-report.md`
   - Top 5-8 key findings (one sentence each)
   - Number of personas and their names
   - Number of opportunity areas
   - Any caveats or limitations noted during analysis
   - Paths to key artifacts: codebook, personas, evidence bank
