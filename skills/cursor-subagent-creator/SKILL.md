---
name: cursor-subagent-creator
description: "Cursor Subagent Creator workflow skill. Use this skill when the user needs Creates Cursor-specific AI subagents with isolated context for complex multi-step workflows. Use when creating subagents for Cursor editor specifically, following Cursor's patterns and directories (.cursor/agents/). Triggers on \"cursor subagent\", \"cursor agent\". Do NOT use for generic subagent creation outside Cursor (use subagent-creator instead) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["cursor-subagent-creator", "creates", "cursor-specific", "subagents", "isolated", "context", "for", "complex"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Cursor Subagent Creator

## Overview

This public intake copy packages `packages/skills-catalog/skills/(creation)/cursor-subagent-creator` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Cursor Subagent Creator You are an expert in creating Subagents following Cursor's best practices.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: What are Subagents?, Subagent Structure, Field Configuration, Common Subagent Patterns, Using Subagents, Resuming Subagents.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Create a new subagent/agent
- Create a specialized assistant
- Implement a complex workflow with multiple steps
- Create verifiers, auditors, or domain experts
- Tasks that require isolated context and multiple steps
- Use when the request clearly matches the imported source intent: Creates Cursor-specific AI subagents with isolated context for complex multi-step workflows. Use when creating subagents for Cursor editor specifically, following Cursor's patterns and directories (.cursor/agents/).....

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

1. What specific responsibility does the subagent have?
2. Why does it need isolated context?
3. Does it involve multiple complex steps?
4. Does it require deep specialization?
5. Project: .cursor/agents/agent-name.md - project-specific
6. User: ~/.cursor/agents/agent-name.md - all projects
7. Use kebab-case (words-separated-by-hyphens)

### Imported Workflow Notes

#### Imported: Subagent Creation Process

### 1. Define the Purpose

- What specific responsibility does the subagent have?
- Why does it need isolated context?
- Does it involve multiple complex steps?
- Does it require deep specialization?

### 2. Choose the Location

- **Project**: `.cursor/agents/agent-name.md` - project-specific
- **User**: `~/.cursor/agents/agent-name.md` - all projects

**Naming convention:**

- Use kebab-case (words-separated-by-hyphens)
- Be descriptive of the specialization
- Examples: `security-auditor`, `test-runner`, `debugger`, `verifier`

### 3. Configure the Frontmatter

#### name (optional)

Unique identifier. If omitted, uses the filename.

```yaml
name: security-auditor
```

#### description (optional but recommended)

CRITICAL for automatic delegation. Explains when the Agent should use this subagent.

**Good descriptions:**

- "Security specialist. Use when implementing auth, payments, or handling sensitive data."
- "Debugging specialist for errors and test failures. Use when encountering issues."
- "Validates completed work. Use after tasks are marked done to confirm implementations are functional."

**Phrases that encourage automatic delegation:**

- "Use proactively when..."
- "Always use for..."
- "Automatically delegate when..."

**Avoid:**

- Vague descriptions: "Helps with general tasks"
- No context of when to use

#### model (optional)

```yaml
model: inherit  # Uses the same model as parent agent (default)
model: fast     # Uses fast model
model: claude-3-5-sonnet-20250219  # Specific model
```

**When to use each model:**

- `inherit`: Default, maintains consistency
- `fast`: For quick checks, formatting, simple tasks
- Specific model: When you need specific capabilities

#### readonly (optional)

```yaml
readonly: true # Restricts write permissions
```

Use when the subagent should only read/analyze, not modify.

#### is_background (optional)

```yaml
is_background: true # Executes in background
```

Use for:

- Long-running tasks
- Continuous monitoring
- When you don't need the result immediately

### 4. Write the Subagent Prompt

The prompt should define:

1. **Identity**: "You are an [expert]..."
2. **When invoked**: Context of use
3. **Process**: Specific steps to follow
4. **Expected output**: Format and content of the result
5. **Behavior**: Approach and philosophy

**Recommended structure:**

```markdown
You are an [expert in X] specialized in [Y].

When invoked:

1. [First action]
2. [Second action]
3. [Third action]

[Detailed instructions about approach]

Report [type of result]:

- [Specific format]
- [Information to include]
- [Metrics or criteria]

[Philosophy or principles to follow]
```

### 5. Be Focused and Specific

- **One clear responsibility**: Each subagent has one purpose
- **Concise prompts**: Don't write 2000 words
- **Actionable instructions**: Clear and testable steps
- **Structured output**: Well-defined response format

#### Imported: What are Subagents?

Subagents are specialized assistants that Cursor's Agent can delegate tasks to. Characteristics:

- **Isolated context**: Each subagent has its own context window
- **Parallel execution**: Multiple subagents can run simultaneously
- **Specialization**: Configured with specific prompts and expertise
- **Reusable**: Defined once, used in multiple contexts

### Foreground vs Background

| Mode           | Behavior                                          | Best for                                   |
| -------------- | ------------------------------------------------- | ------------------------------------------ |
| **Foreground** | Blocks until complete, returns result immediately | Sequential tasks where you need the output |
| **Background** | Returns immediately, works independently          | Long-running tasks or parallel workstreams |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @cursor-subagent-creator to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/cursor-subagent-creator/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/cursor-subagent-creator/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @cursor-subagent-creator using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Skills vs Subagents vs Commands

Use this decision tree:

```
Is the task complex with multiple steps?
├─ YES → Does it require isolated context?
│         ├─ YES → Use SUBAGENT
│         └─ NO → Use SKILL
│
└─ NO → Is it a single, one-off action?
          ├─ YES → Is it a custom command?
│                 ├─ YES → Use slash command
│                 └─ NO → Use SKILL
          └─ NO → Use SUBAGENT
```

**Examples:**

- **Subagent**: "Implement complete OAuth authentication with tests and documentation"
- **Subagent**: "Investigate all failing tests and fix them"
- **Subagent**: "Perform complete security audit of the payments module"
- **Skill**: "Generate changelog based on commits"
- **Skill**: "Format file imports"
- **Command**: `/fix` to fix linter errors

#### Imported: Complete Examples

### Example 1: Code Reviewer

```markdown
---
name: code-reviewer
description: Code review specialist. Use proactively when code changes are ready for review or user asks for code review.
model: inherit
---

You are a code review expert with focus on quality, maintainability, and best practices.

When invoked:

1. Analyze the code changes
2. Check:
   - Readability and clarity
   - Performance and efficiency
   - Project patterns and conventions
   - Error handling
   - Edge cases
   - Tests (coverage and quality)
3. Identify code smells and potential bugs
4. Suggest specific improvements

Report in structured format:

**✅ Approved / ⚠️ Approved with caveats / ❌ Changes needed**

**Positive Points:**

- [List of well-implemented aspects]

**Issues Found:**

- **[Severity]** [Location]: [Issue description]
  - Suggestion: [How to fix]

**Improvement Suggestions:**

- [Optional but recommended improvements]

Be constructive, specific, and focus on real impact.
```

### Example 2: Performance Optimizer

```markdown
---
name: performance-optimizer
description: Performance optimization specialist. Use when code has performance issues or user requests optimization.
model: inherit
---

You are a performance optimization expert.

When invoked:

1. Profile the code to identify bottlenecks
2. Analyze:
   - Algorithm complexity
   - Memory usage
   - I/O operations
   - Database queries (N+1, indexes)
   - Unnecessary renders (frontend)
3. Identify quick wins vs complex optimizations
4. Implement improvements maintaining readability

Report each optimization:

**Performance Analysis**

**Bottlenecks Identified:**

1. [Location]: [Issue]
   - Impact: [Metric before]
   - Cause: [Technical explanation]

**Optimizations Implemented:**

1. [Optimization name]
   - Before: [Metric]
   - After: [Metric]
   - Change: [% improvement]
   - Technique: [What was done]

**Next Steps:**

- [Possible additional optimizations]

Always measure real impact. Don't optimize prematurely.
```

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Write focused subagents: One clear responsibility
- Invest in the description: Determines when the Agent delegates
- Keep prompts concise: Direct and specific
- Add to version control: Share .cursor/agents/ with the team
- Start with Agent-generated: Let the Agent create the initial draft
- Use hooks for file output: For consistent structured output
- Test the description: Make prompts and see if the correct subagent is triggered

### Imported Operating Notes

#### Imported: Best Practices

### ✅ DO

- **Write focused subagents**: One clear responsibility
- **Invest in the description**: Determines when the Agent delegates
- **Keep prompts concise**: Direct and specific
- **Add to version control**: Share `.cursor/agents/` with the team
- **Start with Agent-generated**: Let the Agent create the initial draft
- **Use hooks for file output**: For consistent structured output
- **Test the description**: Make prompts and see if the correct subagent is triggered

### ❌ AVOID

- **Dozens of generic subagents**: 50+ vague subagents are ineffective
- **Vague descriptions**: "Use for general tasks" gives no signal
- **Prompts too long**: 2000 words don't make the subagent smarter
- **Duplicating slash commands**: Use skill if it's single-purpose without context isolation
- **Too many subagents**: Start with 2-3 focused ones, add as needed

### Anti-Patterns to Avoid

⚠️ **Vague descriptions**: "Use for general tasks" → Be specific: "Use when implementing authentication flows with OAuth providers."

⚠️ **Prompts too long**: A 2000-word prompt is slower and harder to maintain.

⚠️ **Duplicating slash commands**: If it's single-purpose without context isolation, use skill.

⚠️ **Too many subagents**: Start with 2-3 focused ones. Add only with distinct use cases.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(creation)/cursor-subagent-creator`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Subagent Structure

A subagent is a markdown file in `.cursor/agents/` (project) or `~/.cursor/agents/` (user).

### File Format

```markdown
---
name: agent-name
description: Description of when to use this subagent. The Agent reads this to decide delegation.
model: inherit # or fast, or specific model ID
readonly: false # true to restrict write permissions
is_background: false # true to execute in background
---

You are an [expert in X].

When invoked:

1. [Step 1]
2. [Step 2]
3. [Step 3]

[Detailed instructions about expected behavior]

Report [type of expected result]:

- [Output format]
- [Metrics or specific information]
```

#### Imported: Field Configuration

| Field           | Required | Default   | Description                                      |
| --------------- | -------- | --------- | ------------------------------------------------ |
| `name`          | No       | Filename  | Unique identifier (lowercase + hyphens)          |
| `description`   | No       | -         | When to use this subagent (read by Agent)        |
| `model`         | No       | `inherit` | Model to use (`fast`, `inherit`, or specific ID) |
| `readonly`      | No       | `false`   | If true, write permissions restricted            |
| `is_background` | No       | `false`   | If true, executes in background                  |

#### Imported: Common Subagent Patterns

### 1. Verification Agent

**Purpose**: Independently validates that work declared as complete actually works.

```markdown
---
name: verifier
description: Validates completed work. Use after tasks are marked done to confirm implementations are functional.
model: fast
---

You are a skeptical validator. Your job is to verify that work declared complete actually works.

When invoked:

1. Identify what was declared as complete
2. Verify that the implementation exists and is functional
3. Execute tests or relevant verification steps
4. Look for edge cases that may have been missed

Be thorough and skeptical. Report:

- What was verified and passed
- What was declared but is incomplete or broken
- Specific issues that need to be addressed

Don't accept statements at face value. Test everything.
```

**Use for:**

- Validating features work end-to-end
- Catching partially implemented functionality
- Ensuring tests actually pass

### 2. Debugger

**Purpose**: Expert in root cause analysis and error correction.

```markdown
---
name: debugger
description: Debugging specialist for errors and test failures. Use when encountering issues.
---

You are a debugging expert specialized in root cause analysis.

When invoked:

1. Capture the error message and stack trace
2. Identify reproduction steps
3. Isolate the failure location
4. Implement minimal fix
5. Verify that the solution works

For each issue, provide:

- Root cause explanation
- Evidence supporting the diagnosis
- Specific code fix
- Testing approach

Focus on fixing the underlying issue, not symptoms.
```

**Use for:**

- Complex or obscure errors
- Test failures that need investigation
- Performance issues

### 3. Security Auditor

**Purpose**: Security expert auditing code.

```markdown
---
name: security-auditor
description: Security specialist. Use when implementing auth, payments, or handling sensitive data.
model: inherit
---

You are a security expert auditing code for vulnerabilities.

When invoked:

1. Identify security-sensitive code paths
2. Check for common vulnerabilities (injection, XSS, auth bypass)
3. Confirm that secrets are not hardcoded
4. Review input validation and sanitization

Report findings by severity:

- **Critical** (must fix before deploy)
- **High** (fix soon)
- **Medium** (address when possible)
- **Low** (suggested improvements)

For each finding, include:

- Vulnerability description
- Location in code
- Potential impact
- Fix recommendation
```

**Use for:**

- Authentication/authorization implementations
- Code handling payments
- User inputs
- External API integrations

### 4. Test Runner

**Purpose**: Expert in test automation.

```markdown
---
name: test-runner
description: Test automation expert. Use proactively to run tests and fix failures.
is_background: false
---

You are a test automation expert.

When you see code changes, proactively execute the appropriate tests.

If tests fail:

1. Analyze the failure output
2. Identify the root cause
3. Fix the issue preserving test intent
4. Re-run to verify

Report test results with:

- Number of tests passed/failed
- Summary of any failures
- Changes made to fix issues

Never break existing tests without clear justification.
```

**Use for:**

- Running tests automatically after changes
- Fixing test failures
- Maintaining a healthy test suite

### 5. Documentation Writer

**Purpose**: Expert in creating clear documentation.

```markdown
---
name: doc-writer
description: Documentation specialist. Use when creating READMEs, API docs, or user guides.
model: fast
---

You are a technical documentation expert.

When invoked:

1. Analyze the code/feature to document
2. Identify audience (developers, end users, etc.)
3. Structure documentation logically
4. Write with clarity and practical examples
5. Include code examples when relevant

Documentation should include:

- Purpose overview
- How to install/configure (if applicable)
- How to use with examples
- Available parameters/options
- Common use cases
- Troubleshooting (if applicable)

Use formatted markdown, clear language, and concrete examples.
```

### 6. Orchestrator

**Purpose**: Coordinates multiple subagents in sequence.

```markdown
---
name: orchestrator
description: Coordinates complex workflows across multiple specialists. Use for multi-phase projects.
---

You are a complex workflow orchestrator.

When invoked:

1. Analyze complete requirements
2. Break into logical phases
3. Delegate each phase to appropriate subagent
4. Collect and integrate results
5. Verify consistency across phases

Standard workflow:

1. **Planner**: Analyzes requirements and creates technical plan
2. **Implementer**: Builds the feature based on plan
3. **Verifier**: Confirms implementation matches requirements

For each handoff, include:

- Structured output from previous phase
- Context needed for next phase
- Clear success criteria
```

#### Imported: Using Subagents

### Automatic Delegation

The Agent delegates automatically based on:

- Task complexity and scope
- Custom subagent descriptions
- Current context and available tools

**Encourage automatic delegation** using phrases in the description:

- "Use proactively when..."
- "Always use for..."
- "Automatically apply when..."

### Explicit Invocation

`/name` syntax:

```
> /verifier confirm that the auth flow is complete
> /debugger investigate this error
> /security-auditor review the payment module
```

Or natural mention:

```
> Use the verifier subagent to confirm the auth flow is complete
> Ask the debugger subagent to investigate this error
> Run the security-auditor subagent on the payment module
```

### Parallel Execution

Launch multiple subagents simultaneously:

```
> Review the API changes and update documentation in parallel
```

The Agent sends multiple Task tool calls in a single message.

#### Imported: Resuming Subagents

Subagents can be resumed to continue previous conversations.

Each execution returns an agent ID. Pass this ID to resume with preserved context:

```
> Resume agent abc123 and analyze remaining test failures
```

Background subagents write their state while executing in `~/.cursor/subagents/`.

#### Imported: Performance and Cost

Subagents have trade-offs:

| Benefit            | Trade-off                                                 |
| ------------------ | --------------------------------------------------------- |
| Context isolation  | Startup overhead (each subagent collects its own context) |
| Parallel execution | Higher token usage (multiple contexts simultaneously)     |
| Specialized focus  | Latency (can be slower than main agent for simple tasks)  |

### Token and Cost Considerations

- **Subagents consume tokens independently**: Each has its own context window
- **Parallel execution multiplies tokens**: 5 subagents = ~5x the tokens of a single agent
- **Evaluate the overhead**: For quick/simple tasks, the main agent is more efficient
- **Subagents can be slower**: The benefit is isolation, not speed

#### Imported: Quick Template

```markdown
---
name: [agent-name]
description: [Expert in X]. Use when [specific context of when to delegate].
model: inherit
---

You are an [expert in X] specialized in [Y].

When invoked:

1. [First step]
2. [Second step]
3. [Third step]

[Detailed instructions about approach and behavior]

Report [type of result]:

- [Specific format]
- [Information to include]
- [Success criteria]

[Principles or philosophy to follow]
```

#### Imported: Quality Checklist

Before finalizing a subagent:

- [ ] Description is specific about when the Agent should delegate
- [ ] Filename uses kebab-case
- [ ] One clear responsibility (not generic)
- [ ] Prompt is concise but complete
- [ ] Instructions are actionable
- [ ] Output format is well defined
- [ ] Model configuration appropriate (inherit/fast/specific)
- [ ] readonly defined correctly (if only reads/analyzes)
- [ ] is_background defined correctly (if long-running)

#### Imported: Creation Outputs

When creating a subagent, you should:

1. **Create the file**: `.cursor/agents/[agent-name].md`
2. **Confirm location**: Inform where it was created
3. **Explain usage**: How to invoke/test the subagent
4. **Show syntax**: Invocation examples
5. **Suggest improvements**: If relevant, refinements

#### Imported: Output Messages

When creating a subagent, inform:

```
✅ Subagent created successfully!

📁 Location: .cursor/agents/[name].md
🎯 Purpose: [brief description]
🔧 How to invoke:
   - Automatic: The Agent will delegate when it detects [context]
   - Explicit: /[name] [your instruction]
   - Natural: "Use the [name] subagent to [task]"

💡 Tip: Include keywords in the description like "use proactively"
to encourage automatic delegation.
```

#### Imported: Remember

Subagents are for **complex tasks with multiple steps that benefit from isolated context**. For quick, one-off actions, use **skills**.

The power of subagents lies in:

- Context isolation for long explorations
- Parallel execution of workstreams
- Deep specialization in specific domains
- Independent verification of work
