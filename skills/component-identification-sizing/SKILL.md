---
name: component-identification-sizing
description: "Component Identification and Sizing workflow skill. Use this skill when the user needs Maps architectural components in a codebase and measures their size to identify what should be extracted first. Use when asking \"how big is each module?\", \"what components do I have?\", \"which service is too large?\", \"analyze codebase structure\", \"size my monolith\", or planning where to start decomposing. Do NOT use for runtime performance sizing or infrastructure capacity planning and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["component-identification-sizing", "maps", "architectural", "components", "codebase", "and", "measures", "size"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Component Identification and Sizing

## Overview

This public intake copy packages `packages/skills-catalog/skills/(architecture)/component-identification-sizing` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Component Identification and Sizing This skill identifies architectural components (logical building blocks) in a codebase and calculates size metrics to assess decomposition feasibility and identify oversized components.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How to Use, Core Concepts, Output Format, Component Inventory, Size Analysis Summary, Component Size Distribution.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Starting a monolithic decomposition effort
- Assessing codebase structure and organization
- Identifying components that are too large or too small
- Creating component inventory for migration planning
- Analyzing code distribution across components
- Preparing for component-based decomposition patterns

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

1. Map directory/namespace structure
2. For Node.js: services/, routes/, models/, utils/
3. For Java: Package structure (e.g., com.company.domain.service)
4. For Python: Module paths (e.g., app/billing/payment)
5. Identify leaf nodes
6. Components are the deepest directories containing source files
7. Example: services/BillingService/ is a component

### Imported Workflow Notes

#### Imported: Analysis Process

### Phase 1: Identify Components

Scan the codebase directory structure:

1. **Map directory/namespace structure**
   - For Node.js: `services/`, `routes/`, `models/`, `utils/`
   - For Java: Package structure (e.g., `com.company.domain.service`)
   - For Python: Module paths (e.g., `app/billing/payment`)

2. **Identify leaf nodes**
   - Components are the deepest directories containing source files
   - Example: `services/BillingService/` is a component
   - Example: `services/BillingService/payment/` extends it, making `BillingService` a subdomain

3. **Create component inventory**
   - List each component with its namespace/path
   - Note any parent namespaces (subdomains)

### Phase 2: Calculate Size Metrics

For each component:

1. **Count statements**
   - Parse source files in component directory
   - Count executable statements (not comments, blank lines, or declarations alone)
   - Sum across all files in component

2. **Count files**
   - Total source files (`.js`, `.ts`, `.java`, `.py`, etc.)
   - Exclude test files, config files, documentation

3. **Calculate percentage**

   ```
   component_percent = (component_statements / total_statements) * 100
   ```

4. **Calculate statistics**
   - Mean component size: `total_statements / number_of_components`
   - Standard deviation: `sqrt(sum((size - mean)^2) / (n - 1))`
   - Component's deviation: `(component_size - mean) / std_dev`

### Phase 3: Identify Size Issues

**Oversized Components** (candidates for splitting):

- Exceeds 30% of total codebase (for small apps with <10 components)
- Exceeds 10% of total codebase (for large apps with >20 components)
- More than 2 standard deviations above mean
- Contains multiple distinct functional areas

**Undersized Components** (candidates for consolidation):

- Less than 1% of codebase (may be too granular)
- Less than 1 standard deviation below mean
- Contains only a few files with minimal functionality

**Well-Sized Components**:

- Between 1-2 standard deviations from mean
- Represents a single, cohesive functional area
- Appropriate percentage for application size

#### Imported: Next Steps

After completing component identification and sizing:

1. **Apply Gather Common Domain Components Pattern** - Identify duplicate functionality
2. **Apply Flatten Components Pattern** - Remove orphaned classes from root namespaces
3. **Apply Determine Component Dependencies Pattern** - Analyze coupling between components
4. **Create Component Domains** - Group components into logical domains

#### Imported: How to Use

### Quick Start

Request analysis of your codebase:

- **"Identify and size all components in this codebase"**
- **"Find oversized components that need splitting"**
- **"Create a component inventory for decomposition planning"**
- **"Analyze component size distribution"**

### Usage Examples

**Example 1: Complete Analysis**

```
User: "Identify and size all components in this codebase"

The skill will:
1. Map directory/namespace structures
2. Identify all components (leaf nodes)
3. Calculate size metrics (statements, files, percentages)
4. Generate component inventory table
5. Flag oversized/undersized components
6. Provide recommendations
```

**Example 2: Find Oversized Components**

```
User: "Which components are too large?"

The skill will:
1. Calculate mean and standard deviation
2. Identify components >2 std dev or >10% threshold
3. Analyze functional areas within large components
4. Suggest specific splits with estimated sizes
```

**Example 3: Component Size Analysis**

```
User: "Analyze component sizes and distribution"

The skill will:
1. Calculate all size metrics
2. Generate size distribution summary
3. Identify outliers
4. Provide statistics and recommendations
```

### Step-by-Step Process

1. **Initial Analysis**: Start with complete component inventory
2. **Identify Issues**: Find components that need attention
3. **Get Recommendations**: Request actionable split/consolidation suggestions
4. **Monitor Progress**: Track component growth over time

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @component-identification-sizing to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/component-identification-sizing/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/component-identification-sizing/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @component-identification-sizing using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use statements, not lines of code
- Identify components as leaf nodes only
- Calculate both percentage and standard deviation
- Consider application size when setting thresholds
- Document namespace/path for each component
- Create visual size distribution if possible
- Don't count test files in component size

### Imported Operating Notes

#### Imported: Best Practices

### Do's ✅

- Use statements, not lines of code
- Identify components as leaf nodes only
- Calculate both percentage and standard deviation
- Consider application size when setting thresholds
- Document namespace/path for each component
- Create visual size distribution if possible

### Don'ts ❌

- Don't count test files in component size
- Don't treat parent directories as components
- Don't use fixed thresholds without considering app size
- Don't ignore small components (may need consolidation)
- Don't skip standard deviation calculation
- Don't mix infrastructure and domain components in same analysis

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(architecture)/component-identification-sizing`, fails to mention provenance, or does not use the support pack at all.
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

### Component Definition

A **component** is an architectural building block that:

- Has a well-defined role and responsibility
- Is identified by a namespace, package structure, or directory path
- Contains source code files (classes, functions, modules) grouped together
- Performs specific business or infrastructure functionality

**Key Rule**: Components are identified by **leaf nodes** in directory/namespace structures. If a namespace is extended (e.g., `services/billing` extended to `services/billing/payment`), the parent becomes a **subdomain**, not a component.

### Size Metrics

**Statements** (not lines of code):

- Count executable statements terminated by semicolons or newlines
- More accurate than lines of code for size comparison
- Accounts for code complexity, not formatting

**Component Size Indicators**:

- **Percent of codebase**: Component statements / Total statements
- **File count**: Number of source files in component
- **Standard deviation**: Distance from mean component size

#### Imported: Output Format

### Component Inventory Table

```markdown

#### Imported: Component Inventory

| Component Name  | Namespace/Path               | Statements | Files | Percent | Status       |
| --------------- | ---------------------------- | ---------- | ----- | ------- | ------------ |
| Billing Payment | services/BillingService      | 4,312      | 23    | 5%      | ✅ OK        |
| Reporting       | services/ReportingService    | 27,765     | 162   | 33%     | ⚠️ Too Large |
| Notification    | services/NotificationService | 1,433      | 7     | 2%      | ✅ OK        |
```

**Status Legend**:

- ✅ OK: Well-sized (within 1-2 std dev from mean)
- ⚠️ Too Large: Exceeds size threshold or >2 std dev above mean
- 🔍 Too Small: <1% of codebase or <1 std dev below mean

### Size Analysis Summary

```markdown

#### Imported: Size Analysis Summary

**Total Components**: 18
**Total Statements**: 82,931
**Mean Component Size**: 4,607 statements
**Standard Deviation**: 5,234 statements

**Oversized Components** (>2 std dev or >10%):

- Reporting (33% - 27,765 statements) - Consider splitting into:
  - Ticket Reports
  - Expert Reports
  - Financial Reports

**Well-Sized Components** (within 1-2 std dev):

- Billing Payment (5%)
- Customer Profile (5%)
- Ticket Assignment (9%)

**Undersized Components** (<1 std dev):

- Login (2% - 1,865 statements) - Consider consolidating with Authentication
```

### Component Size Distribution

```markdown

#### Imported: Component Size Distribution

```

Component Size Distribution (by percent of codebase)

[Visual representation or histogram if possible]

Largest: ████████████████████████████████████ 33% (Reporting)
████████ 9% (Ticket Assign)
██████ 8% (Ticket)
██████ 6% (Expert Profile)
█████ 5% (Billing Payment)
████ 4% (Billing History)
...

````

### Recommendations

```markdown

#### Imported: Recommendations

### High Priority: Split Large Components

**Reporting Component** (33% of codebase):
- **Current**: Single component with 27,765 statements
- **Issue**: Too large, contains multiple functional areas
- **Recommendation**: Split into:
  1. Reporting Shared (common utilities)
  2. Ticket Reports (ticket-related reports)
  3. Expert Reports (expert-related reports)
  4. Financial Reports (financial reports)
- **Expected Result**: Each component ~7-9% of codebase

### Medium Priority: Review Small Components

**Login Component** (2% of codebase):
- **Current**: 1,865 statements, 3 files
- **Consideration**: May be too granular if related to broader authentication
- **Recommendation**: Evaluate if should be consolidated with Authentication/User components

### Low Priority: Monitor Well-Sized Components

Most components are appropriately sized. Continue monitoring during decomposition.
````

#### Imported: Analysis Checklist

**Component Identification**:

- [ ] Mapped all directory/namespace structures
- [ ] Identified leaf nodes (components) vs parent nodes (subdomains)
- [ ] Created complete component inventory
- [ ] Documented namespace/path for each component

**Size Calculation**:

- [ ] Counted statements (not lines) for each component
- [ ] Counted source files (excluding tests/configs)
- [ ] Calculated percentage of total codebase
- [ ] Calculated mean and standard deviation

**Size Assessment**:

- [ ] Identified oversized components (>threshold or >2 std dev)
- [ ] Identified undersized components (<1% or <1 std dev)
- [ ] Flagged components for splitting or consolidation
- [ ] Documented size distribution

**Recommendations**:

- [ ] Suggested splits for oversized components
- [ ] Suggested consolidations for undersized components
- [ ] Prioritized recommendations by impact
- [ ] Created architecture stories for refactoring

#### Imported: Implementation Notes

### For Node.js/Express Applications

Components typically found in:

- `services/` - Business logic components
- `routes/` - API endpoint components
- `models/` - Data model components
- `utils/` - Utility components
- `middleware/` - Middleware components

**Example Component Identification**:

```
services/
├── BillingService/          ← Component (leaf node)
│   ├── index.js
│   └── BillingService.js
├── CustomerService/          ← Component (leaf node)
│   └── CustomerService.js
└── NotificationService/      ← Component (leaf node)
    └── NotificationService.js
```

### For Java Applications

Components identified by package structure:

- `com.company.domain.service` - Service components
- `com.company.domain.model` - Model components
- `com.company.domain.repository` - Repository components

**Example Component Identification**:

```
com.company.billing.payment   ← Component (leaf package)
com.company.billing.history   ← Component (leaf package)
com.company.billing           ← Subdomain (parent of payment/history)
```

### Statement Counting

**JavaScript/TypeScript**:

- Count statements terminated by `;` or newline
- Include: assignments, function calls, returns, conditionals, loops
- Exclude: comments, blank lines, declarations without assignment

**Java**:

- Count statements terminated by `;`
- Include: method calls, assignments, returns, conditionals
- Exclude: class/interface declarations, comments, blank lines

**Python**:

- Count executable statements (not comments or blank lines)
- Include: assignments, function calls, returns, conditionals
- Exclude: docstrings, comments, blank lines

#### Imported: Fitness Functions

After identifying and sizing components, create automated checks:

### Component Size Threshold

```javascript
// Alert if any component exceeds 10% of codebase
function checkComponentSize(components, threshold = 0.1) {
  const totalStatements = components.reduce((sum, c) => sum + c.statements, 0)
  return components
    .filter((c) => c.statements / totalStatements > threshold)
    .map((c) => ({
      component: c.name,
      percent: ((c.statements / totalStatements) * 100).toFixed(1),
      issue: 'Exceeds size threshold',
    }))
}
```

### Standard Deviation Check

```javascript
// Alert if component is >2 standard deviations from mean
function checkStandardDeviation(components) {
  const sizes = components.map((c) => c.statements)
  const mean = sizes.reduce((a, b) => a + b, 0) / sizes.length
  const stdDev = Math.sqrt(sizes.reduce((sum, size) => sum + Math.pow(size - mean, 2), 0) / (sizes.length - 1))

  return components
    .filter((c) => Math.abs(c.statements - mean) > 2 * stdDev)
    .map((c) => ({
      component: c.name,
      deviation: ((c.statements - mean) / stdDev).toFixed(2),
      issue: 'More than 2 standard deviations from mean',
    }))
}
```

#### Imported: Notes

- Component size thresholds vary by application size
- Small apps (<10 components): 30% threshold may be appropriate
- Large apps (>20 components): 10% threshold is more appropriate
- Standard deviation is more reliable than fixed percentages
- Well-sized components are 1-2 standard deviations from mean
- Oversized components often contain multiple functional areas that can be split
