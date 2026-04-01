---
name: create-adr
description: "ADR Creator workflow skill. Use this skill when the user needs Creates Architecture Decision Records (ADRs) to document significant architectural choices and their rationale for future team members. Use when the user says \"write an ADR\", \"document this decision\", \"record why we chose X\", \"add an architecture decision record\", \"create an ADR for\", or wants to capture the reasoning behind a technical choice so the team understands it later. Do NOT use when the decision hasn't been made yet (use create-rfc instead), for implementation planning (use technical-design-doc-creator), or for general documentation and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["create-adr", "creates", "architecture", "decision", "records", "adrs", "document", "significant"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Tech Leads Club - github.com/tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# ADR Creator

## Overview

This public intake copy packages `packages/skills-catalog/skills/(creation)/create-adr` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# ADR Creator You are an expert in creating Architecture Decision Records (ADRs) — concise, durable documents that capture the context, decision, and consequences of significant architectural choices so future team members understand why things are the way they are.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: ADR vs RFC — Critical Distinction, Language Adaptation, ADR Format Selection, Document Templates, Decision Drivers, Considered Options.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User asks to "write an ADR", "create an ADR", "add an architecture decision record"
- User wants to "document why we chose X", "record this decision", "capture this architectural choice"
- A significant technical decision has been made (or is being finalized) and needs to be recorded
- The team wants to preserve the reasoning behind a choice for future engineers
- User asks "why did we choose X" and the answer should be written down permanently
- Decisions not yet made — use create-rfc to drive the decision process first

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

1. Decision title (noun phrase, not a question — e.g., "Use Redis for session storage")
2. Date of the decision (or today's date)
3. Status (Accepted / Proposed / Deprecated / Superseded)
4. Context — the forces, constraints, and situation that made this decision necessary
5. The decision itself — what was chosen and why
6. Consequences — what becomes easier, harder, or different as a result
7. Decision drivers — the key criteria or constraints

### Imported Workflow Notes

#### Imported: Interactive Workflow

### Step 1: Gather Context (if not provided)

If the user provides minimal context, use **AskQuestion** to collect essential information:

```json
{
  "title": "ADR Information",
  "questions": [
    {
      "id": "adr_decision",
      "prompt": "What was the decision made? (e.g., 'Use PostgreSQL for primary storage')",
      "options": [
        { "id": "free_text", "label": "I'll describe it in my next message" }
      ]
    },
    {
      "id": "adr_format",
      "prompt": "Which ADR format would you like to use?",
      "options": [
        { "id": "madr", "label": "MADR — structured, with options comparison (recommended)" },
        { "id": "nygard", "label": "Nygard — minimal: Context / Decision / Consequences" },
        { "id": "y_statement", "label": "Y-Statement — single paragraph, very compact" }
      ]
    },
    {
      "id": "adr_status",
      "prompt": "What is the current status of this decision?",
      "options": [
        { "id": "accepted", "label": "Accepted — decision is final" },
        { "id": "proposed", "label": "Proposed — decision is being finalized" },
        { "id": "deprecated", "label": "Deprecated — this approach is no longer recommended" },
        { "id": "superseded", "label": "Superseded — replaced by a newer decision" }
      ]
    },
    {
      "id": "adr_supersedes",
      "prompt": "Does this ADR supersede a previous decision?",
      "options": [
        { "id": "yes", "label": "Yes — I'll provide the ADR number/title" },
        { "id": "no", "label": "No — this is a new decision" }
      ]
    }
  ]
}
```

### Step 2: Validate Mandatory Fields

**MANDATORY fields — ask if missing**:

- **Decision title** (noun phrase, not a question — e.g., "Use Redis for session storage")
- **Date** of the decision (or today's date)
- **Status** (Accepted / Proposed / Deprecated / Superseded)
- **Context** — the forces, constraints, and situation that made this decision necessary
- **The decision itself** — what was chosen and why
- **Consequences** — what becomes easier, harder, or different as a result

**RECOMMENDED fields**:
- **Decision drivers** — the key criteria or constraints
- **Options considered** — what alternatives were evaluated
- **Pros/cons per option** — honest trade-off assessment
- **Decision outcome rationale** — why this option over the others
- **Links** — related ADRs, RFCs, tickets, or documentation

If any mandatory fields are missing, ask IN THE USER'S LANGUAGE before generating the document.

### Step 3: Assign ADR Number

Scan the existing ADR directory for the next sequential number:

1. Check if an ADR directory exists (`docs/adr/`, `docs/decisions/`, `.adr/`, or `adr/`)
2. Find the highest existing number
3. Assign the next number (e.g., if ADR-007 exists, this becomes ADR-008)
4. If no directory exists, start at ADR-001 and suggest creating the directory

### Step 4: Generate the ADR

Generate the ADR following the format selected in Step 1.

### Step 5: Offer File Placement

After generating, ask where to save it:

```
ADR Created: "ADR-{NNN}: {Title}"

Suggested file path: docs/adr/{NNN}-{kebab-case-title}.md

Would you like me to:
1. Save it to docs/adr/ (recommended convention)
2. Save it to a different location
3. Just show the content (I'll place it manually)
```

---

#### Imported: ADR vs RFC — Critical Distinction

| Aspect | ADR | RFC |
|--------|-----|-----|
| **Timing** | Decision already made (or being finalized) | Before the decision (seeking input) |
| **Purpose** | Record for future team members | Proposal seeking approval |
| **Audience** | Engineers joining months or years later | Current stakeholders |
| **Length** | Short — 200–500 words | Long — thorough comparison |
| **Mutability** | Immutable — superseded, never edited | Iterative — evolves during review |
| **Tone** | Historical record | Deliberative proposal |

If the user says "I need to decide whether to do X" → use `create-rfc`.
If the user says "We decided to do X, let me document it" → use this skill.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @create-adr to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/create-adr/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/create-adr/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @create-adr using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(creation)/create-adr`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Context and Problem Statement

{Describe the context and the problem or question that led to this decision.
2–4 sentences. What situation forced this choice?}

## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Language Adaptation

**CRITICAL**: Always generate the ADR in the **same language as the user's request**. Detect the language automatically.

- Keep technical terms in English when appropriate (e.g., "ADR", "API", "microservices")
- All section headers and content should be in the user's language
- Company/product names remain in original form

#### Imported: ADR Format Selection

Three formats are widely used. Detect the right one from context, or ask:

| Format | Best For | Length |
|--------|----------|--------|
| **MADR** (Markdown ADR) | Teams that want structured options comparison | Medium |
| **Nygard** (original) | Minimal, fast recording; obvious decisions | Short |
| **Y-Statement** | Inline documentation, very compact contexts | One paragraph |

Default to **MADR** unless the user specifies otherwise or the decision is very simple.

---

#### Imported: Document Templates

### MADR Format (Default)

```markdown
# ADR-{NNN}: {Title}

- **Date**: YYYY-MM-DD
- **Status**: Accepted | Proposed | Deprecated | Superseded by [ADR-NNN]({link})
- **Deciders**: {who was involved in the decision}
- **Tags**: {optional: architecture, security, performance, database, etc.}

#### Imported: Decision Drivers

- {Driver 1 — e.g., "Must support 10k concurrent users"}
- {Driver 2 — e.g., "Team has no Go experience"}
- {Driver 3 — e.g., "Must be deployable on-premise"}

#### Imported: Considered Options

- {Option A}
- {Option B}
- {Option C — "Do nothing / status quo" when relevant}

#### Imported: Decision Outcome

Chosen option: **"{Option A}"**, because {concise rationale tied to decision drivers}.

### Positive Consequences

- {Benefit 1}
- {Benefit 2}

### Negative Consequences

- {Trade-off 1 — be honest}
- {Trade-off 2}

#### Imported: Pros and Cons of the Options

### {Option A} ✅ Chosen

- ✅ {Pro 1}
- ✅ {Pro 2}
- ❌ {Con 1}

### {Option B}

- ✅ {Pro 1}
- ❌ {Con 1}
- ❌ {Con 2}

### {Option C}

- ✅ {Pro 1}
- ❌ {Con 1}

#### Imported: Links

- {Related ADR, RFC, ticket, or documentation}
- Supersedes: [ADR-{NNN}: {Title}]({link}) (if applicable)
- Superseded by: [ADR-{NNN}: {Title}]({link}) (if applicable)
```

---

### Nygard Format (Minimal)

```markdown
# ADR-{NNN}: {Title}

#### Imported: Status

Accepted | Proposed | Deprecated | Superseded by ADR-{NNN}

#### Imported: Context

{What is the situation that led to this decision?
What forces are at play — technical, business, organizational?
What constraints exist? 2–5 sentences.}

#### Imported: Decision

{What did we decide to do?
State it directly, in active voice: "We will use X" or "We decided to adopt Y."
Include a brief rationale — why this option over the alternatives.}

#### Imported: Consequences

{What becomes easier or better as a result?}
{What becomes harder or worse? Be honest about trade-offs.}
{What new concerns or constraints does this introduce?}
```

---

### Y-Statement Format (Compact)

```markdown
# ADR-{NNN}: {Title}

**Date**: YYYY-MM-DD | **Status**: Accepted

In the context of **{situation/use case}**,
facing **{concern or constraint}**,
we decided **{the option chosen}**,
to achieve **{quality attribute or goal}**,
accepting **{the downside or trade-off}**.

**Deciders**: {names or roles}
**Links**: {related ADRs, tickets}
```

---

#### Imported: ADR Quality Checklist

Before finalizing, verify:

- [ ] **Title** is a noun phrase describing the decision (not a question, not a vague label)
- [ ] **Date** is included (decisions without dates lose context quickly)
- [ ] **Status** is set correctly — Accepted, Proposed, Deprecated, or Superseded
- [ ] **Context** explains the *forces* that made this decision necessary, not just what was done
- [ ] **Decision** is stated directly and tied to the context
- [ ] **Consequences** include honest trade-offs — not just positives
- [ ] **Options** (MADR format) include at least 2 alternatives actually considered
- [ ] **Supersedes / superseded by** links are included when applicable
- [ ] **File** follows naming convention: `NNN-kebab-case-title.md`
- [ ] **Number** is sequential in the ADR directory

---

#### Imported: ADR File Naming Convention

```
docs/adr/
├── 001-use-postgresql-for-primary-storage.md
├── 002-adopt-event-driven-architecture.md
├── 003-replace-jenkins-with-github-actions.md   ← supersedes ADR-001 if relevant
└── README.md                                     ← optional index
```

- Zero-padded numbers: `001`, `002`, ... `099`, `100`
- Kebab-case title
- `.md` extension
- Common directories: `docs/adr/`, `docs/decisions/`, `adr/`, `.adr/`

---

#### Imported: Common Anti-Patterns to Avoid

### Title as a Question

**BAD**: `# ADR-001: Should we use PostgreSQL?`

**GOOD**: `# ADR-001: Use PostgreSQL for Primary Storage`

Titles should record the decision, not the question. Future readers need to know *what was decided*, not what was considered.

---

### Vague Context

**BAD**:
```
We needed a database and chose PostgreSQL.
```

**GOOD**:
```
Our application requires a relational database with strong ACID guarantees.
The team has deep PostgreSQL experience. MySQL was evaluated but lacks
native support for JSONB columns, which our schema design requires.
Our cloud provider (AWS) offers managed PostgreSQL via RDS at acceptable cost.
```

Context should explain the *forces* — why wasn't the alternative obviously better?

---

### Consequences Without Trade-offs

**BAD**:
```

#### Imported: Consequences

PostgreSQL is fast and reliable.
```

**GOOD**:
```

#### Imported: Consequences

- Enables JSONB columns and advanced indexing for our query patterns
- Team expertise means fast onboarding and fewer operational surprises
- Adds operational burden compared to a managed NoSQL service
- Schema migrations require careful planning in a relational model
```

Honest trade-offs are what make ADRs valuable years later.

---

### Editing Instead of Superseding

**BAD**: Editing an old ADR to change the decision after the fact.

**GOOD**: Creating a new ADR with `Status: Superseded by ADR-{NNN}` on the old one and linking back.

ADRs are historical records. The old decision was correct *given what was known at the time*. Superseding preserves that context.

---

### Missing the "Why Not" Rationale

**BAD**:
```

#### Imported: Decision

We will use Redis for session storage.
```

**GOOD**:
```

#### Imported: Decision

We will use Redis for session storage. We considered storing sessions in PostgreSQL
(already in our stack) but Redis's built-in TTL support and in-memory performance
make it significantly better suited for high-frequency session reads. The operational
cost of an additional service is justified by the simplified session expiry logic.
```

The rationale is *why this option and not the others* — not just what was chosen.

---

#### Imported: Important Notes

- **ADRs are immutable** — never edit the decision. Supersede with a new ADR.
- **Short is better** — 200–500 words is ideal. If it needs to be longer, move detail to a linked TDD or RFC.
- **Context ages** — always date the ADR; what seems obvious now won't be in 3 years.
- **Honest consequences** — a one-sided ADR loses credibility. Future engineers will hit the downsides regardless.
- **Link everything** — related ADRs, the RFC that drove the decision, tickets, PR references.
- **Language adaptation** — always write in the user's language.
- **Number sequentially** — check the directory before assigning a number.
