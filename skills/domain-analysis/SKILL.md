---
name: domain-analysis
description: "Subdomain Identification & Bounded Context Analysis workflow skill. Use this skill when the user needs Maps business domains and suggests service boundaries in any codebase using DDD Strategic Design. Use when asking \"what are the domains in this codebase?\", \"where should I draw service boundaries?\", \"identify bounded contexts\", \"classify subdomains\", \"DDD analysis\", or analyzing domain cohesion. Do NOT use for grouping existing components into domains (use domain-identification-grouping) or dependency analysis (use coupling-analysis) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["domain-analysis", "maps", "business", "domains", "and", "suggests", "service", "boundaries"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Subdomain Identification & Bounded Context Analysis

## Overview

This public intake copy packages `packages/skills-catalog/skills/(architecture)/domain-analysis` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Subdomain Identification & Bounded Context Analysis This skill analyzes codebases to identify subdomains (Core, Supporting, Generic) and suggest bounded contexts following Domain-Driven Design Strategic Design principles.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Format, Domain: {Name}, Cross-Domain Cohesion, Issues Detected, Suggested Bounded Contexts, Analysis Checklist.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Analyzing domain boundaries in any codebase
- Identifying Core, Supporting, and Generic subdomains
- Mapping bounded contexts from problem space to solution space
- Assessing domain cohesion and detecting coupling issues
- Planning domain-driven refactoring
- Understanding business capabilities in code

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

1. Entities (domain models with identity)
2. Patterns: @Entity, class, domain models
3. Focus: Business concepts, not technical classes
4. Services (business operations)
5. Patterns: Service, Manager, *Handler
6. Focus: Business logic, not technical utilities
7. Use Cases (business workflows)

### Imported Workflow Notes

#### Imported: Analysis Process

### Phase 1: Extract Concepts

Scan codebase for business concepts (not infrastructure):

1. **Entities** (domain models with identity)
   - Patterns: `@Entity`, `class`, domain models
   - Focus: Business concepts, not technical classes

2. **Services** (business operations)
   - Patterns: `*Service`, `*Manager`, `*Handler`
   - Focus: Business logic, not technical utilities

3. **Use Cases** (business workflows)
   - Patterns: `*UseCase`, `*Command`, `*Handler`
   - Focus: Business processes, not CRUD

4. **Controllers/Resolvers** (entry points)
   - Patterns: `*Controller`, `*Resolver`, API endpoints
   - Focus: Business capabilities, not technical routes

### Phase 2: Group by Ubiquitous Language

For each concept, determine:

**Primary Language Context**

- What business vocabulary does this belong to?
- Examples:
  - `Subscription`, `Invoice`, `Payment` → Billing language
  - `Movie`, `Video`, `Episode` → Content language
  - `User`, `Authentication` → Identity language

**Linguistic Boundaries**

- Where do term meanings change?
- Same term, different meaning = different bounded context
- Example: "Customer" in Sales vs "Customer" in Support

**Concept Relationships**

- Which concepts naturally belong together?
- Which share business vocabulary?
- Which reference each other?

### Phase 3: Identify Subdomains

A subdomain has:

- Distinct business capability
- Independent business value
- Unique vocabulary
- Multiple related entities working together
- Cohesive set of business operations

**Common Domain Patterns**:

- Billing/Subscription: Payments, invoices, plans
- Content/Catalog: Media, products, inventory
- Identity/Access: Users, authentication, authorization
- Analytics: Metrics, dashboards, insights
- Notifications: Messages, alerts, communications

**Classify Each Subdomain**:

Use this decision tree:

```
Is it a competitive advantage?
  YES → Core Domain
  NO → Does it require business-specific knowledge?
        YES → Supporting Subdomain
        NO → Generic Subdomain
```

### Phase 4: Assess Cohesion

**High Cohesion Indicators** ✅

- Concepts share Ubiquitous Language
- Concepts frequently used together
- Direct business relationships
- Changes to one affect others in group
- Solve same business problem

**Low Cohesion Indicators** ❌

- Different business vocabularies mixed
- Concepts rarely used together
- No direct business relationship
- Changes don't affect others
- Solve different business problems

**Cohesion Score Formula**:

```
Score = (
  Linguistic Cohesion (0-3) +    // Shared vocabulary
  Usage Cohesion (0-3) +         // Used together
  Data Cohesion (0-2) +          // Entity relationships
  Change Cohesion (0-2)          // Change together
) / 10

8-10: High Cohesion ✅
5-7:  Medium Cohesion ⚠️
0-4:  Low Cohesion ❌
```

### Phase 5: Detect Low Cohesion Issues

**Rule 1: Linguistic Mismatch**

- Problem: Different business vocabularies mixed
- Example: `User` (identity) + `Subscription` (billing) in same service
- Action: Suggest separation into different bounded contexts

**Rule 2: Cross-Domain Dependencies**

- Problem: Tight coupling between domains
- Example: Service A directly instantiates entities from Domain B
- Action: Suggest interface-based integration

**Rule 3: Mixed Responsibilities**

- Problem: Single class handles multiple business concerns
- Example: Service handling both billing and content
- Action: Suggest splitting by subdomain

**Rule 4: Generic in Core**

- Problem: Generic functionality in core business logic
- Example: Email sending in billing service
- Action: Extract to Generic Subdomain

**Rule 5: Unclear Boundaries**

- Problem: Cannot determine which domain concept belongs to
- Example: Entity with relationships to multiple domains
- Action: Clarify boundaries, possibly split concept

### Phase 6: Map Bounded Contexts

For each subdomain identified, suggest bounded context:

**Bounded Context Characteristics**:

- Name reflects Ubiquitous Language
- Contains complete domain model
- Has explicit integration points
- Clear linguistic boundary

**Integration Patterns**:

- Shared Kernel: Shared model between contexts (use sparingly)
- Customer/Supplier: Downstream depends on upstream
- Conformist: Downstream conforms to upstream
- Anti-corruption Layer: Translation layer between contexts
- Open Host Service: Published interface for integration
- Published Language: Well-documented integration protocol

#### Imported: Output Format

### Domain Map

For each domain/subdomain:

```markdown

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @domain-analysis to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/domain-analysis/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/domain-analysis/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @domain-analysis using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Indicators: Complex business logic, frequent changes, domain experts needed
- Indicators: Supports Core Domain, moderate complexity, business-specific rules
- Indicators: Well-understood problem, low differentiation, standard functionality
- Primary nature: Linguistic boundary, not technical
- Key rule: Inside boundary, all Ubiquitous Language terms are unambiguous
- Goal: Align 1 subdomain to 1 bounded context (ideal)
- Focus on business language, not code structure

### Imported Operating Notes

#### Imported: Core Principles

### Subdomain Classification

**Core Domain**: Competitive advantage, highest business value, requires best developers

- Indicators: Complex business logic, frequent changes, domain experts needed

**Supporting Subdomain**: Essential but not differentiating, business-specific

- Indicators: Supports Core Domain, moderate complexity, business-specific rules

**Generic Subdomain**: Common functionality, could be outsourced

- Indicators: Well-understood problem, low differentiation, standard functionality

### Bounded Context

An explicit linguistic boundary where domain terms have specific, unambiguous meanings.

- Primary nature: Linguistic boundary, not technical
- Key rule: Inside boundary, all Ubiquitous Language terms are unambiguous
- Goal: Align 1 subdomain to 1 bounded context (ideal)

#### Imported: Best Practices

### Do's ✅

- Focus on business language, not code structure
- Let Ubiquitous Language guide boundaries
- Measure cohesion objectively
- Identify clear integration points
- Classify every subdomain (Core/Supporting/Generic)
- Look for linguistic boundaries first

### Don'ts ❌

- Don't group by technical layers
- Don't force single global model
- Don't ignore linguistic differences
- Don't couple domains directly
- Don't create contexts by architecture
- Don't eliminate all dependencies (some are necessary)

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(architecture)/domain-analysis`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



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

#### Imported: Quick Reference

### Subdomain Decision Tree

```
Analyze business capability
└─ Is it competitive advantage?
   ├─ YES → Core Domain
   └─ NO → Is it business-specific?
      ├─ YES → Supporting Subdomain
      └─ NO → Generic Subdomain
```

### Cohesion Quick Check

```
Same vocabulary? → High linguistic cohesion
Used together? → High usage cohesion
Direct relationships? → High data cohesion
Change together? → High change cohesion

All high → Strong subdomain candidate
Mix of high/low → Review boundaries
All low → Likely wrong grouping
```

### Bounded Context Signals

```
Clear boundary signs:
✅ Distinct Ubiquitous Language
✅ Concepts have unambiguous meaning
✅ Different meanings across contexts
✅ Clear integration points

Unclear boundary signs:
❌ Same terms with same meanings everywhere
❌ Concepts used identically across system
❌ No clear linguistic differences
❌ Tight coupling everywhere
```

#### Imported: Domain: {Name}

**Type**: Core Domain | Supporting Subdomain | Generic Subdomain

**Ubiquitous Language**: {key business terms}

**Business Capability**: {what business problem it solves}

**Key Concepts**:

- {Concept} (Entity|Service|UseCase) - {brief description}

**Subdomains** (if applicable):

1. {Subdomain} (Core|Supporting|Generic)
   - Concepts: {list}
   - Cohesion: {score}/10
   - Dependencies: → {other domains}

**Suggested Bounded Context**: {Name}Context

- Linguistic boundary: {where terms have specific meaning}
- Integration: {how it should integrate with other contexts}

**Dependencies**:

- → {OtherDomain} via {interface/API}
- ← {OtherDomain} via {interface/API}

**Cohesion Score**: {score}/10
```

### Cohesion Matrix

```markdown

#### Imported: Cross-Domain Cohesion

| Domain A | Domain B | Cohesion | Issue              | Recommendation          |
| -------- | -------- | -------- | ------------------ | ----------------------- |
| Billing  | Identity | 2/10     | ❌ Direct coupling | Use interface           |
| Content  | Billing  | 6/10     | ⚠️ Usage tracking  | Event-based integration |
```

### Low Cohesion Report

```markdown

#### Imported: Issues Detected

### Priority: High

**Issue**: {description}

- **Location**: {file/class/method}
- **Problem**: {what's wrong}
- **Concepts**: {involved concepts}
- **Cohesion**: {score}/10
- **Recommendation**: {suggested fix}

### Priority: Medium

{similar format}
```

### Bounded Context Map

```markdown

#### Imported: Suggested Bounded Contexts

### {ContextName}Context

**Contains Subdomains**:

- {Subdomain1} (Core)
- {Subdomain2} (Supporting)

**Ubiquitous Language**:

- Term: Definition in this context

**Integration Requirements**:

- Consumes from: {OtherContext} via {pattern}
- Publishes to: {OtherContext} via {pattern}

**Implementation Notes**:

- Separate persistence
- Independent deployment
- Explicit API boundaries
```

#### Imported: Analysis Checklist

**For Each Concept**:

- [ ] What business language does it belong to?
- [ ] What domain/subdomain is it part of?
- [ ] Is it Core, Supporting, or Generic?
- [ ] What other concepts does it relate to?
- [ ] Are dependencies within same domain?
- [ ] Any linguistic mismatches?

**For Each Domain**:

- [ ] What is the Ubiquitous Language?
- [ ] What are the key concepts?
- [ ] What are the subdomains?
- [ ] Which is the Core Domain?
- [ ] What are cross-domain dependencies?
- [ ] Is internal cohesion high?
- [ ] Are boundaries clear?

**For Cohesion Analysis**:

- [ ] Calculate cohesion scores
- [ ] Identify low cohesion areas
- [ ] Map cross-domain dependencies
- [ ] Flag linguistic mismatches
- [ ] Note tight coupling
- [ ] Suggest boundary clarifications

#### Imported: Anti-Patterns to Avoid

**Big Ball of Mud**

- Everything connected to everything
- No clear boundaries
- Mixed vocabularies
- Prevention: Explicit bounded contexts

**All-Inclusive Model**

- Single model for entire business
- Impossible global definitions
- Creates conflicts
- Prevention: Embrace multiple contexts

**Mixed Linguistic Concepts**

- Different vocabularies in same context
- Example: User/Permission with Forum/Post
- Prevention: Keep linguistic associations

#### Imported: Notes

- This is strategic analysis, not tactical implementation
- Focus on WHAT domains exist, not HOW to implement
- Some cross-domain dependencies are normal
- Low cohesion doesn't always mean "bad," it means "needs attention"
- Generic Subdomains naturally have lower cohesion
- Always validate with domain experts when possible

#### Imported: Validation Criteria

Good domain identification has:

- ✅ Clear boundaries with distinct Ubiquitous Language
- ✅ High internal cohesion within domains
- ✅ Explicit cross-domain dependencies
- ✅ Business alignment with capabilities
- ✅ Actionable recommendations for issues
