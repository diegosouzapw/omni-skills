---
name: decomposition-planning-roadmap
description: "Decomposition Planning and Roadmap workflow skill. Use this skill when the user needs Creates step-by-step decomposition plans and migration roadmaps for breaking apart monolithic applications. Use when asking \"what order should I extract services?\", \"plan my migration\", \"create a decomposition roadmap\", \"prioritize what to split\", \"monolith to microservices strategy\", or tracking decomposition progress. Do NOT use for domain analysis (use domain-analysis) or component sizing (use component-identification-sizing) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: product
tags: ["decomposition-planning-roadmap", "creates", "step-by-step", "decomposition", "plans", "and", "migration", "roadmaps"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Decomposition Planning and Roadmap

## Overview

This public intake copy packages `packages/skills-catalog/skills/(architecture)/decomposition-planning-roadmap` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Decomposition Planning and Roadmap This skill creates structured decomposition plans and roadmaps to guide the migration from monolithic to distributed architectures, prioritizing work and tracking progress through decomposition patterns.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How to Use, Core Concepts, Output Format, Current State Assessment, Phased Roadmap, Prioritized Work Plan.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Starting a decomposition effort
- Planning migration from monolith to distributed architecture
- Prioritizing decomposition work
- Creating architecture stories for decomposition
- Tracking progress through decomposition patterns
- Need structured approach to decomposition

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

1. Check Component Inventory
2. Have components been identified and sized?
3. Is there a component inventory document?
4. Are oversized components identified?
5. Check Common Component Analysis
6. Have common domain components been identified?
7. Are consolidation opportunities documented?

### Imported Workflow Notes

#### Imported: Analysis Process

### Phase 1: Assess Current State

Analyze what's already been done:

1. **Check Component Inventory**
   - Have components been identified and sized?
   - Is there a component inventory document?
   - Are oversized components identified?

2. **Check Common Component Analysis**
   - Have common domain components been identified?
   - Are consolidation opportunities documented?
   - Has coupling impact been analyzed?

3. **Check Component Structure**
   - Have components been flattened?
   - Are there orphaned classes?
   - Is component structure clean?

4. **Check Dependency Analysis**
   - Have component dependencies been mapped?
   - Is coupling analysis complete?
   - Is feasibility assessed?

5. **Check Domain Identification**
   - Have domains been identified?
   - Are components grouped into domains?
   - Are namespaces aligned with domains?

6. **Check Service Extraction**
   - Have any services been extracted?
   - Are domain services created?
   - Is service-based architecture in place?

**Output**: Current state assessment showing what's done and what's remaining

### Phase 2: Identify Patterns to Apply

Determine which decomposition patterns need to be applied:

1. **Review Pattern Prerequisites**
   - Pattern 1: Always needed (foundation)
   - Pattern 2: Needed if common components exist
   - Pattern 3: Needed if components have hierarchy
   - Pattern 4: Always needed (feasibility check)
   - Pattern 5: Needed before service extraction
   - Pattern 6: Final step (service extraction)

2. **Check Pattern Completion**
   - Which patterns are complete?
   - Which patterns are in progress?
   - Which patterns haven't started?

3. **Identify Missing Patterns**
   - What patterns still need to be applied?
   - What's blocking pattern application?
   - What dependencies exist?

**Output**: List of patterns to apply with status

### Phase 3: Prioritize Work

Prioritize decomposition patterns and work items:

1. **Assess Risk**
   - Low Risk: Infrastructure components, standalone functionality
   - Medium Risk: Domain components with some dependencies
   - High Risk: Core business logic, high coupling

2. **Assess Value**
   - High Value: Business-critical, high impact, frequent changes
   - Medium Value: Important but not critical
   - Low Value: Nice to have, low impact

3. **Assess Dependencies**
   - Independent: Can be done without other work
   - Dependent: Requires other patterns/work first
   - Blocking: Blocks other work from proceeding

4. **Calculate Priority Score**

   ```
   Priority = (Value × 3) - (Risk × 2) - (Dependencies × 1)

   Higher score = Higher priority
   ```

**Output**: Prioritized list of patterns and work items

### Phase 4: Create Phased Roadmap

Build a phased roadmap with milestones:

1. **Define Phases**
   - Phase 1: Analysis & Preparation
   - Phase 2: Domain Organization
   - Phase 3: Service Extraction
   - Phase 4: Optimization & Refinement

2. **Assign Patterns to Phases**
   - Which patterns belong in which phase?
   - What's the sequence within each phase?
   - What are the phase dependencies?

3. **Set Milestones**
   - What marks completion of each phase?
   - What are the success criteria?
   - What deliverables are expected?

4. **Estimate Timeline**
   - How long will each phase take?
   - What are the dependencies?
   - What's the critical path?

**Output**: Phased roadmap with timeline and milestones

### Phase 5: Generate Architecture Stories

Create architecture stories for tracking work:

1. **Create Story Template**

   ```
   As an architect, I need to [apply pattern/refactor component]
   to support [architectural characteristic/business need]
   so that [benefit/outcome]
   ```

2. **Break Down Work**
   - One story per pattern application
   - One story per major refactoring
   - One story per domain grouping

3. **Add Acceptance Criteria**
   - What defines "done"?
   - What metrics validate success?
   - What tests verify completion?

4. **Estimate Effort**
   - Story points or time estimates
   - Complexity assessment
   - Risk factors

**Output**: List of architecture stories with estimates

### Phase 6: Track Progress

Monitor progress through decomposition:

1. **Track Pattern Completion**
   - Which patterns are complete?
   - Which are in progress?
   - Which are blocked?

2. **Track Story Completion**
   - Stories completed
   - Stories in progress
   - Stories not started

3. **Track Metrics**
   - Components identified
   - Components refactored
   - Domains created
   - Services extracted

4. **Identify Blockers**
   - What's blocking progress?
   - What dependencies are missing?
   - What risks have emerged?

**Output**: Progress dashboard and status report

#### Imported: Next Steps

After creating the roadmap:

1. **Review with Stakeholders** - Get buy-in on plan
2. **Start Phase 1** - Begin with analysis patterns
3. **Track Progress** - Monitor completion and blockers
4. **Adjust as Needed** - Update roadmap based on learnings
5. **Celebrate Milestones** - Recognize progress

#### Imported: How to Use

### Quick Start

Request creation of a decomposition plan:

- **"Create a decomposition roadmap for this codebase"**
- **"Plan the decomposition migration strategy"**
- **"Prioritize decomposition work based on component analysis"**
- **"Create a step-by-step decomposition plan"**

### Usage Examples

**Example 1: Complete Roadmap**

```
User: "Create a decomposition roadmap for this codebase"

The skill will:
1. Analyze current codebase state
2. Identify decomposition patterns to apply
3. Prioritize work based on risk and value
4. Create phased roadmap
5. Generate architecture stories
6. Estimate effort and dependencies
```

**Example 2: Prioritized Plan**

```
User: "Prioritize decomposition work based on component analysis"

The skill will:
1. Review component inventory and dependencies
2. Assess risk and value for each pattern
3. Prioritize patterns by impact
4. Create prioritized work plan
```

**Example 3: Phase Planning**

```
User: "Create a phased decomposition plan"

The skill will:
1. Group decomposition patterns into phases
2. Identify dependencies between phases
3. Create phase timeline
4. Define phase success criteria
```

### Step-by-Step Process

1. **Assess Current State**: Analyze codebase and identify what's been done
2. **Identify Patterns**: Determine which decomposition patterns to apply
3. **Prioritize Work**: Rank patterns by risk, value, and dependencies
4. **Create Roadmap**: Build phased plan with milestones
5. **Generate Stories**: Create architecture stories for tracking
6. **Track Progress**: Monitor progress through decomposition phases

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @decomposition-planning-roadmap to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/decomposition-planning-roadmap/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/decomposition-planning-roadmap/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @decomposition-planning-roadmap using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Start with analysis patterns (Patterns 1-4)
- Prioritize low-risk, high-value work
- Create architecture stories for tracking
- Set clear milestones and success criteria
- Track progress regularly
- Adjust roadmap based on learnings
- Collaborate with stakeholders on priorities

### Imported Operating Notes

#### Imported: Best Practices

### Do's ✅

- Start with analysis patterns (Patterns 1-4)
- Prioritize low-risk, high-value work
- Create architecture stories for tracking
- Set clear milestones and success criteria
- Track progress regularly
- Adjust roadmap based on learnings
- Collaborate with stakeholders on priorities

### Don'ts ❌

- Don't skip analysis patterns
- Don't start service extraction too early
- Don't ignore dependencies between patterns
- Don't create unrealistic timelines
- Don't skip progress tracking
- Don't forget to validate with stakeholders
- Don't proceed without feasibility assessment

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(architecture)/decomposition-planning-roadmap`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Core Concepts

### Decomposition Pattern Sequence

The six component-based decomposition patterns should be applied in sequence:

1. **Identify and Size Components** - Understand what you have
2. **Gather Common Domain Components** - Find duplicates
3. **Flatten Components** - Remove orphaned classes
4. **Determine Component Dependencies** - Assess coupling
5. **Create Component Domains** - Group into domains
6. **Create Domain Services** - Extract to services

### Phased Approach

Decomposition typically follows phases:

**Phase 1: Analysis & Preparation** (Patterns 1-4)

- Component identification and sizing
- Common component detection
- Component flattening
- Dependency analysis

**Phase 2: Domain Organization** (Pattern 5)

- Domain identification
- Component grouping
- Namespace refactoring

**Phase 3: Service Extraction** (Pattern 6)

- Domain service creation
- Service extraction
- API boundary definition

### Prioritization Factors

When prioritizing decomposition work, consider:

- **Risk**: Low risk = easier to extract, fewer dependencies
- **Value**: High value = business-critical, high impact
- **Dependencies**: Can this be done independently?
- **Complexity**: Simple = fewer components, clear boundaries
- **Coupling**: Low coupling = easier to extract

#### Imported: Output Format

### Decomposition Roadmap

```markdown
# Decomposition Roadmap

#### Imported: Current State Assessment

**Completed Patterns**:

- ✅ Pattern 1: Identify and Size Components
- ✅ Pattern 2: Gather Common Domain Components
- ⚠️ Pattern 3: Flatten Components (in progress)
- ❌ Pattern 4: Determine Component Dependencies (not started)
- ❌ Pattern 5: Create Component Domains (not started)
- ❌ Pattern 6: Create Domain Services (not started)

**Key Findings**:

- 75 components identified
- 3 common domain components found
- 2 oversized components need splitting
- High database coupling detected

#### Imported: Phased Roadmap

### Phase 1: Analysis & Preparation (Weeks 1-4)

**Goal**: Complete component analysis and refactoring

**Patterns**:

1. Complete Pattern 3: Flatten Components
2. Apply Pattern 4: Determine Component Dependencies
3. Refactor oversized components

**Milestones**:

- Week 2: Component flattening complete
- Week 4: Dependency analysis complete

**Deliverables**:

- Flattened component structure
- Dependency diagram
- Feasibility assessment

### Phase 2: Domain Organization (Weeks 5-8)

**Goal**: Organize components into domains

**Patterns**:

1. Apply Pattern 5: Create Component Domains
2. Refactor namespaces for domain alignment

**Milestones**:

- Week 6: Domains identified
- Week 8: Namespace refactoring complete

**Deliverables**:

- Domain map
- Refactored component namespaces
- Domain documentation

### Phase 3: Service Extraction (Weeks 9-16)

**Goal**: Extract domains to domain services

**Patterns**:

1. Apply Pattern 6: Create Domain Services
2. Extract services incrementally

**Milestones**:

- Week 12: First domain service extracted
- Week 16: All domain services extracted

**Deliverables**:

- Domain services deployed
- API boundaries defined
- Service documentation
```

### Prioritized Work Plan

```markdown

#### Imported: Prioritized Work Plan

### High Priority (Do First)

1. **Complete Component Flattening** (Priority: 9/10)
   - Risk: Low
   - Value: High (enables domain grouping)
   - Dependencies: None
   - Effort: 2 weeks

2. **Dependency Analysis** (Priority: 8/10)
   - Risk: Low
   - Value: High (validates feasibility)
   - Dependencies: Component flattening
   - Effort: 1 week

### Medium Priority (Do Next)

3. **Domain Identification** (Priority: 7/10)
   - Risk: Medium
   - Value: High (enables service extraction)
   - Dependencies: Dependency analysis
   - Effort: 2 weeks

### Low Priority (Do Later)

4. **Service Extraction** (Priority: 5/10)
   - Risk: High
   - Value: High (final goal)
   - Dependencies: Domain identification
   - Effort: 8 weeks
```

### Architecture Stories

```markdown

#### Imported: Architecture Stories

### Story 1: Flatten Ticket Components

**As an architect**, I need to flatten the Ticket component hierarchy
to support better component organization
so that components exist only as leaf nodes.

**Acceptance Criteria**:

- [ ] No orphaned classes in root namespaces
- [ ] All components are leaf nodes
- [ ] Component structure validated

**Estimate**: 5 story points
**Priority**: High
**Dependencies**: None

### Story 2: Identify Component Domains

**As an architect**, I need to group components into logical domains
to support service-based architecture
so that components can be extracted to domain services.

**Acceptance Criteria**:

- [ ] All components assigned to domains
- [ ] Domain boundaries validated with stakeholders
- [ ] Domain map created

**Estimate**: 8 story points
**Priority**: High
**Dependencies**: Component flattening complete
```

### Progress Dashboard

```markdown

#### Imported: Decomposition Progress Dashboard

### Pattern Completion Status

| Pattern                    | Status         | Progress | Blocker                 |
| -------------------------- | -------------- | -------- | ----------------------- |
| Identify & Size Components | ✅ Complete    | 100%     | None                    |
| Gather Common Components   | ✅ Complete    | 100%     | None                    |
| Flatten Components         | ⚠️ In Progress | 60%      | None                    |
| Determine Dependencies     | ❌ Not Started | 0%       | Waiting on flattening   |
| Create Domains             | ❌ Not Started | 0%       | Waiting on dependencies |
| Create Domain Services     | ❌ Not Started | 0%       | Waiting on domains      |

### Story Completion Status

**Completed**: 5 stories (25%)
**In Progress**: 3 stories (15%)
**Not Started**: 12 stories (60%)

### Key Metrics

- Components Identified: 75
- Components Refactored: 45 (60%)
- Domains Created: 0
- Services Extracted: 0
```

#### Imported: Analysis Checklist

**Current State Assessment**:

- [ ] Reviewed component inventory
- [ ] Checked common component analysis
- [ ] Assessed component structure
- [ ] Reviewed dependency analysis
- [ ] Checked domain identification
- [ ] Assessed service extraction status

**Pattern Identification**:

- [ ] Identified which patterns are complete
- [ ] Identified which patterns are in progress
- [ ] Identified which patterns need to be applied
- [ ] Checked pattern dependencies

**Prioritization**:

- [ ] Assessed risk for each pattern
- [ ] Assessed value for each pattern
- [ ] Assessed dependencies
- [ ] Calculated priority scores

**Roadmap Creation**:

- [ ] Defined phases
- [ ] Assigned patterns to phases
- [ ] Set milestones
- [ ] Estimated timeline

**Story Generation**:

- [ ] Created architecture stories
- [ ] Added acceptance criteria
- [ ] Estimated effort
- [ ] Prioritized stories

**Progress Tracking**:

- [ ] Set up tracking mechanism
- [ ] Defined metrics
- [ ] Created dashboard
- [ ] Identified blockers

#### Imported: Implementation Notes

### Roadmap Templates

**Simple Roadmap** (for small projects):

- Phase 1: Analysis (2-4 weeks)
- Phase 2: Refactoring (4-6 weeks)
- Phase 3: Extraction (8-12 weeks)

**Detailed Roadmap** (for large projects):

- Phase 1: Analysis & Preparation (4-8 weeks)
- Phase 2: Domain Organization (4-6 weeks)
- Phase 3: Service Extraction (12-16 weeks)
- Phase 4: Optimization (4-8 weeks)

### Prioritization Matrix

Use a 2x2 matrix for prioritization:

```
High Value, Low Risk    | High Value, High Risk
(Do First)              | (Do Carefully)
────────────────────────┼──────────────────────
Low Value, Low Risk     | Low Value, High Risk
(Do Later)              | (Avoid/Defer)
```

### Story Estimation

Use story points or time estimates:

**Story Points** (Fibonacci):

- 1: Trivial (few hours)
- 2: Simple (1 day)
- 3: Small (2-3 days)
- 5: Medium (1 week)
- 8: Large (2 weeks)
- 13: Very Large (3+ weeks)

**Time Estimates**:

- Small: 1-3 days
- Medium: 1-2 weeks
- Large: 2-4 weeks
- Very Large: 1+ month

#### Imported: Integration with Other Skills

This skill coordinates the use of other decomposition skills:

1. **Component Identification & Sizing** → Foundation for planning
2. **Common Domain Component Detection** → Identifies consolidation work
3. **Component Flattening** → Prepares for domain grouping
4. **Component Dependency Analysis** → Validates feasibility
5. **Domain Identification & Grouping** → Enables service extraction
6. **Decomposition Planning & Roadmap** (this skill) → Coordinates everything

#### Imported: Notes

- Roadmaps should be living documents, updated regularly
- Prioritization may change as you learn more
- Dependencies between patterns must be respected
- Feasibility assessment is critical before proceeding
- Stakeholder collaboration is essential for success
- Progress tracking helps identify issues early
