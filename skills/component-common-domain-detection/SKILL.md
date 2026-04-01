---
name: component-common-domain-detection
description: "Common Domain Component Detection workflow skill. Use this skill when the user needs Finds duplicate business logic spread across multiple components and suggests consolidation. Use when asking \"where is this logic duplicated?\", \"find common code between services\", \"what can be consolidated?\", \"detect shared domain logic\", or analyzing component overlap before refactoring. Do NOT use for code-level duplication detection (use linters) or dependency analysis (use coupling-analysis) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["component-common-domain-detection", "finds", "duplicate", "business", "logic", "spread", "across", "multiple"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Common Domain Component Detection

## Overview

This public intake copy packages `packages/skills-catalog/skills/(architecture)/component-common-domain-detection` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Common Domain Component Detection This skill identifies common domain functionality that is duplicated across multiple components and suggests consolidation opportunities to reduce duplication and improve maintainability.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How to Use, Core Concepts, Common Namespace Patterns Found, Shared Classes Found, Functionality Analysis, Coupling Impact Analysis.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- After identifying and sizing components (Pattern 1)
- Before flattening components (Pattern 3)
- When planning to reduce code duplication
- Analyzing shared domain logic across the codebase
- Preparing for component consolidation
- Identifying candidates for shared services or libraries

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

1. Extract leaf nodes from all component namespaces
2. Example: services/billing/notification → notification
3. Example: services/ticket/notification → notification
4. Group by common leaf nodes
5. Find components with same leaf node name
6. Example: All components ending in .notification
7. Filter out infrastructure patterns

### Imported Workflow Notes

#### Imported: Analysis Process

### Phase 1: Identify Common Namespace Patterns

Scan component namespaces for common leaf node names:

1. **Extract leaf nodes** from all component namespaces
   - Example: `services/billing/notification` → `notification`
   - Example: `services/ticket/notification` → `notification`

2. **Group by common leaf nodes**
   - Find components with same leaf node name
   - Example: All components ending in `.notification`

3. **Filter out infrastructure patterns**
   - Exclude: `.util`, `.helper`, `.common` (usually infrastructure)
   - Focus on: `.notification`, `.audit`, `.validation`, `.formatting`

**Example Output**:

```markdown

#### Imported: Next Steps

After identifying common domain components:

1. **Apply Flatten Components Pattern** - Remove orphaned classes
2. **Apply Determine Component Dependencies Pattern** - Analyze coupling
3. **Create Component Domains** - Group components into domains
4. **Plan Consolidation** - Execute consolidation recommendations

#### Imported: How to Use

### Quick Start

Request analysis of your codebase:

- **"Find common domain functionality across components"**
- **"Identify duplicate domain logic that should be consolidated"**
- **"Detect shared classes used across multiple components"**
- **"Analyze consolidation opportunities for common components"**

### Usage Examples

**Example 1: Find Common Functionality**

```
User: "Find common domain functionality across components"

The skill will:
1. Scan component namespaces for common patterns
2. Detect shared classes used across components
3. Identify duplicate domain logic
4. Analyze coupling impact of consolidation
5. Suggest consolidation opportunities
```

**Example 2: Detect Duplicate Notification Logic**

```
User: "Are there multiple notification components that should be consolidated?"

The skill will:
1. Find all components with notification-related names
2. Analyze their functionality and dependencies
3. Calculate coupling impact if consolidated
4. Recommend consolidation approach
```

**Example 3: Analyze Shared Classes**

```
User: "Find classes that are shared across multiple components"

The skill will:
1. Identify classes imported/used by multiple components
2. Classify as domain vs infrastructure functionality
3. Suggest consolidation or shared library approach
4. Assess impact on coupling
```

### Step-by-Step Process

1. **Scan Components**: Identify components with common namespace patterns
2. **Detect Shared Code**: Find classes/files used across components
3. **Analyze Functionality**: Determine if functionality is truly common
4. **Assess Coupling**: Calculate coupling impact before consolidation
5. **Recommend Actions**: Suggest consolidation or shared library approach

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @component-common-domain-detection to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/component-common-domain-detection/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/component-common-domain-detection/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @component-common-domain-detection using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Distinguish domain from infrastructure functionality
- Analyze coupling impact before consolidating
- Consider both shared service and shared library approaches
- Look for namespace patterns AND shared classes
- Verify functionality is truly similar before consolidating
- Calculate coupling metrics (CA) before and after
- Don't consolidate infrastructure functionality (handled separately)

### Imported Operating Notes

#### Imported: Best Practices

### Do's ✅

- Distinguish domain from infrastructure functionality
- Analyze coupling impact before consolidating
- Consider both shared service and shared library approaches
- Look for namespace patterns AND shared classes
- Verify functionality is truly similar before consolidating
- Calculate coupling metrics (CA) before and after

### Don'ts ❌

- Don't consolidate infrastructure functionality (handled separately)
- Don't consolidate without analyzing coupling impact
- Don't assume all common patterns should be consolidated
- Don't ignore differences in functionality
- Don't consolidate if coupling increase is too high
- Don't mix domain and infrastructure in same analysis

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(architecture)/component-common-domain-detection`, fails to mention provenance, or does not use the support pack at all.
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

### Domain vs Infrastructure Functionality

**Domain Functionality** (candidates for consolidation):

- Business processing logic (notification, validation, auditing, formatting)
- Common to **some** processes, not all
- Examples: Customer notification, ticket auditing, data validation

**Infrastructure Functionality** (usually not consolidated here):

- Operational concerns (logging, metrics, security)
- Common to **all** processes
- Examples: Logging, authentication, database connections

### Common Domain Patterns

Common domain functionality often appears as:

1. **Namespace Patterns**: Components ending in same leaf node
   - `*.notification`, `*.audit`, `*.validation`, `*.formatting`
   - Example: `TicketNotification`, `BillingNotification`, `SurveyNotification`

2. **Shared Classes**: Same class used across multiple components
   - Example: `SMTPConnection` used by 5 different components
   - Example: `AuditLogger` used by multiple domain components

3. **Similar Functionality**: Different components doing similar things
   - Example: Multiple components sending emails with slight variations
   - Example: Multiple components writing audit logs

### Consolidation Approaches

**Shared Service**:

- Common functionality becomes a separate service
- Other components call this service
- Good for: Frequently changing logic, complex operations

**Shared Library**:

- Common code packaged as library (JAR, DLL, npm package)
- Components import and use the library
- Good for: Stable functionality, simple utilities

**Component Consolidation**:

- Merge multiple components into one
- Good for: Highly related functionality, low coupling impact

#### Imported: Common Namespace Patterns Found

**Notification Components**:

- services/customer/notification
- services/ticket/notification
- services/survey/notification

**Audit Components**:

- services/billing/audit
- services/ticket/audit
- services/survey/audit
```

### Phase 2: Detect Shared Classes

Find classes/files used across multiple components:

1. **Scan imports/dependencies** in each component
   - Track which classes are imported from where
   - Note classes used by multiple components

2. **Identify shared classes**
   - Classes imported by 2+ components
   - Exclude infrastructure classes (Logger, Config, etc.)

3. **Classify as domain vs infrastructure**
   - Domain: Business logic classes (SMTPConnection, AuditLogger)
   - Infrastructure: Technical utilities (Logger, DatabaseConnection)

**Example Output**:

```markdown

#### Imported: Shared Classes Found

**Domain Classes**:

- `SMTPConnection` - Used by 5 components (notification-related)
- `AuditLogger` - Used by 8 components (audit-related)
- `DataFormatter` - Used by 3 components (formatting-related)

**Infrastructure Classes** (exclude from consolidation):

- `Logger` - Used by all components (infrastructure)
- `Config` - Used by all components (infrastructure)
```

### Phase 3: Analyze Functionality Similarity

For each group of common components:

1. **Examine functionality**
   - Read source code of each component
   - Identify what each component does
   - Note similarities and differences

2. **Assess consolidation feasibility**
   - Are differences minor (configurable)?
   - Can differences be abstracted?
   - Is functionality truly the same?

3. **Calculate coupling impact**
   - Count incoming dependencies (afferent coupling) before consolidation
   - Estimate incoming dependencies after consolidation
   - Compare total coupling levels

**Example Analysis**:

```markdown

#### Imported: Functionality Analysis

**Notification Components**:

- CustomerNotification: Sends billing notifications
- TicketNotification: Sends ticket assignment notifications
- SurveyNotification: Sends survey emails

**Similarities**: All send emails to customers
**Differences**: Email content/templates, triggers

**Consolidation Feasibility**: ✅ High

- Differences are in content, not mechanism
- Can be abstracted with templates/context
```

### Phase 4: Assess Coupling Impact

Before recommending consolidation, analyze coupling:

1. **Calculate current coupling**
   - Count components using each notification component
   - Sum total incoming dependencies

2. **Estimate consolidated coupling**
   - Count components that would use consolidated component
   - Compare to current total

3. **Evaluate coupling increase**
   - Is consolidated component too coupled?
   - Does it create a bottleneck?
   - Is coupling increase acceptable?

**Example Coupling Analysis**:

```markdown

#### Imported: Coupling Impact Analysis

**Before Consolidation**:

- CustomerNotification: Used by 2 components (CA = 2)
- TicketNotification: Used by 2 components (CA = 2)
- SurveyNotification: Used by 1 component (CA = 1)
- **Total CA**: 5

**After Consolidation**:

- Notification: Used by 5 components (CA = 5)
- **Total CA**: 5 (same!)

**Verdict**: ✅ No coupling increase, safe to consolidate
```

### Phase 5: Recommend Consolidation Approach

Based on analysis, recommend approach:

**Shared Service** (if):

- Functionality changes frequently
- Complex operations
- Needs independent scaling
- Multiple deployment units will use it

**Shared Library** (if):

- Stable functionality
- Simple utilities
- Compile-time dependency acceptable
- No need for independent deployment

**Component Consolidation** (if):

- Highly related functionality
- Low coupling impact
- Same deployment unit acceptable

#### Imported: Output Format

### Common Domain Components Report

```markdown

#### Imported: Common Domain Components Found

### Notification Functionality

**Components**:

- services/customer/notification (2% - 1,433 statements)
- services/ticket/notification (2% - 1,765 statements)
- services/survey/notification (2% - 1,299 statements)

**Shared Classes**: SMTPConnection (used by all 3)

**Functionality Analysis**:

- All send emails to customers
- Differences: Content/templates, triggers
- Consolidation Feasibility: ✅ High

**Coupling Analysis**:

- Before: CA = 2 + 2 + 1 = 5
- After: CA = 5 (no increase)
- Verdict: ✅ Safe to consolidate

**Recommendation**: Consolidate into `services/notification`

- Approach: Shared Service
- Expected Size: ~4,500 statements (5% of codebase)
- Benefits: Reduced duplication, easier maintenance
```

### Consolidation Opportunities Table

```markdown

#### Imported: Consolidation Opportunities

| Common Functionality | Components   | Current CA | After CA | Feasibility | Recommendation                |
| -------------------- | ------------ | ---------- | -------- | ----------- | ----------------------------- |
| Notification         | 3 components | 5          | 5        | ✅ High     | Consolidate to shared service |
| Audit                | 3 components | 8          | 12       | ⚠️ Medium   | Consolidate, monitor coupling |
| Validation           | 2 components | 3          | 3        | ✅ High     | Consolidate to shared library |
```

### Detailed Consolidation Plan

```markdown

#### Imported: Consolidation Plan

### Priority: High

**Notification Components** → `services/notification`

**Steps**:

1. Create new `services/notification` component
2. Move common functionality from 3 components
3. Create abstraction for content/templates
4. Update dependent components to use new service
5. Remove old notification components

**Expected Impact**:

- Reduced code: ~4,500 statements consolidated
- Reduced duplication: 3 components → 1
- Coupling: No increase (CA stays at 5)
- Maintenance: Easier to maintain single component

### Priority: Medium

**Audit Components** → `services/audit`

**Steps**:
[Similar format]

**Expected Impact**:

- Coupling increase: CA 8 → 12 (monitor)
- Benefits: Reduced duplication
```

#### Imported: Analysis Checklist

**Common Pattern Detection**:

- [ ] Scanned all component namespaces for common leaf nodes
- [ ] Identified components with same ending names
- [ ] Filtered out infrastructure patterns
- [ ] Grouped similar components

**Shared Class Detection**:

- [ ] Scanned imports/dependencies in each component
- [ ] Identified classes used by multiple components
- [ ] Classified as domain vs infrastructure
- [ ] Documented shared class usage

**Functionality Analysis**:

- [ ] Examined source code of common components
- [ ] Identified similarities and differences
- [ ] Assessed consolidation feasibility
- [ ] Determined if differences can be abstracted

**Coupling Assessment**:

- [ ] Calculated current coupling (CA) for each component
- [ ] Estimated consolidated coupling
- [ ] Compared total coupling levels
- [ ] Evaluated if coupling increase is acceptable

**Recommendations**:

- [ ] Suggested consolidation approach (service/library/merge)
- [ ] Prioritized recommendations by impact
- [ ] Created consolidation plan with steps
- [ ] Estimated expected benefits and risks

#### Imported: Implementation Notes

### For Node.js/Express Applications

Common patterns to look for:

```
services/
├── CustomerService/
│   └── notification.js      ← Common pattern
├── TicketService/
│   └── notification.js     ← Common pattern
└── SurveyService/
    └── notification.js      ← Common pattern
```

**Shared Classes**:

- Check `require()` statements
- Look for classes imported from other components
- Example: `const SMTPConnection = require('../shared/SMTPConnection')`

### For Java Applications

Common patterns:

```
com.company.billing.audit     ← Common pattern
com.company.ticket.audit      ← Common pattern
com.company.survey.audit      ← Common pattern
```

**Shared Classes**:

- Check `import` statements
- Look for classes in common packages
- Example: `import com.company.shared.AuditLogger`

### Detection Strategies

**Namespace Pattern Detection**:

```javascript
// Extract leaf nodes from namespaces
function extractLeafNode(namespace) {
  const parts = namespace.split('/')
  return parts[parts.length - 1]
}

// Group by common leaf nodes
function groupByLeafNode(components) {
  const groups = {}
  components.forEach((comp) => {
    const leaf = extractLeafNode(comp.namespace)
    if (!groups[leaf]) groups[leaf] = []
    groups[leaf].push(comp)
  })
  return groups
}
```

**Shared Class Detection**:

```javascript
// Find classes used by multiple components
function findSharedClasses(components) {
  const classUsage = {}
  components.forEach((comp) => {
    comp.imports.forEach((imp) => {
      if (!classUsage[imp]) classUsage[imp] = []
      classUsage[imp].push(comp.name)
    })
  })

  return Object.entries(classUsage)
    .filter(([cls, users]) => users.length > 1)
    .map(([cls, users]) => ({ class: cls, usedBy: users }))
}
```

#### Imported: Fitness Functions

After identifying common components, create automated checks:

### Common Namespace Pattern Detection

```javascript
// Alert if new components with common patterns are created
function checkCommonPatterns(components, exclusionList = []) {
  const leafNodes = {}
  components.forEach((comp) => {
    const leaf = extractLeafNode(comp.namespace)
    if (!exclusionList.includes(leaf)) {
      if (!leafNodes[leaf]) leafNodes[leaf] = []
      leafNodes[leaf].push(comp.name)
    }
  })

  return Object.entries(leafNodes)
    .filter(([leaf, comps]) => comps.length > 1)
    .map(([leaf, comps]) => ({
      pattern: leaf,
      components: comps,
      suggestion: 'Consider consolidating these components',
    }))
}
```

### Shared Class Usage Alert

```javascript
// Alert if class is used by multiple components
function checkSharedClasses(components, exclusionList = []) {
  const classUsage = {}
  components.forEach((comp) => {
    comp.imports.forEach((imp) => {
      if (!exclusionList.includes(imp)) {
        if (!classUsage[imp]) classUsage[imp] = []
        classUsage[imp].push(comp.name)
      }
    })
  })

  return Object.entries(classUsage)
    .filter(([cls, users]) => users.length > 1)
    .map(([cls, users]) => ({
      class: cls,
      usedBy: users,
      suggestion: 'Consider extracting to shared component or library',
    }))
}
```

#### Imported: Common Patterns to Look For

### High Consolidation Candidates

- **Notification**: `*.notification`, `*.notify`, `*.email`
- **Audit**: `*.audit`, `*.auditing`, `*.log`
- **Validation**: `*.validation`, `*.validate`, `*.validator`
- **Formatting**: `*.format`, `*.formatter`, `*.formatting`
- **Reporting**: `*.report`, `*.reporting` (if similar functionality)

### Low Consolidation Candidates

- **Infrastructure**: `*.util`, `*.helper`, `*.common` (usually infrastructure)
- **Different contexts**: Same name, different business meaning
- **High coupling risk**: Consolidation would create bottleneck

#### Imported: Notes

- Common domain functionality is different from infrastructure functionality
- Consolidation reduces duplication but may increase coupling
- Always analyze coupling impact before consolidating
- Shared services vs shared libraries have different trade-offs
- Some duplication is acceptable if it reduces coupling
- Not all common patterns should be consolidated
