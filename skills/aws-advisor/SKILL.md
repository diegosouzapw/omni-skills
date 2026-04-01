---
name: aws-advisor
description: "AWS Advisor workflow skill. Use this skill when the user needs Expert AWS Cloud Advisor for architecture design, security review, and implementation guidance. Leverages AWS MCP tools for accurate, documentation-backed answers. Use when user asks about AWS architecture, security, service selection, migrations, troubleshooting, or learning AWS. Triggers on AWS, Lambda, S3, EC2, ECS, EKS, DynamoDB, RDS, CloudFormation, CDK, Terraform, Serverless, SAM, IAM, VPC, API Gateway, or any AWS service. Do NOT use for non-AWS cloud providers or general infrastructure without AWS context and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["aws-advisor", "expert", "aws", "cloud", "advisor", "for", "architecture", "design"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Felipe Rodrigues - github.com/felipfr"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# AWS Advisor

## Overview

This public intake copy packages `packages/skills-catalog/skills/(cloud)/aws-advisor` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# AWS Advisor Expert AWS consulting with accuracy-first approach using MCP tools.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Adaptive Behavior, MCP Tools Available, Search Topic Selection, Scripts, Response Style.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Expert AWS Cloud Advisor for architecture design, security review, and implementation guidance. Leverages AWS MCP tools for accurate, documentation-backed answers. Use when user asks about AWS architecture, security,....
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

1. Parse question → Identify AWS services involved
2. Search documentation → aws__searchdocumentation with right topic
3. Read if needed → aws__readdocumentation for details
4. Verify regional → aws_getregionalavailability if relevant
5. Respond with code examples
6. Gather requirements (functional, non-functional, constraints)
7. Search relevant patterns → topic: general

### Imported Workflow Notes

#### Imported: Workflows

### Standard Question Flow

```
1. Parse question → Identify AWS services involved
2. Search documentation → aws___search_documentation with right topic
3. Read if needed → aws___read_documentation for details
4. Verify regional → aws___get_regional_availability if relevant
5. Respond with code examples
```

### Architecture Review Flow

```
1. Gather requirements (functional, non-functional, constraints)
2. Search relevant patterns → topic: general
3. Run: scripts/well_architected_review.py → generates review questions
4. Discuss trade-offs with user
5. Run: scripts/generate_diagram.py → visualize architecture
```

### Security Review Flow

```
1. Understand architecture scope
2. Run: scripts/security_review.py → generates checklist
3. Search security docs → topic: general, query: "[service] security"
4. Provide specific recommendations with IAM policies, SG rules
```

#### Imported: Adaptive Behavior

**Before recommending tools/frameworks**, understand the context:

- What's the user's current stack? (ask if unclear)
- What's the team's expertise?
- Is there an existing IaC in the project?
- Speed vs control trade-off preference?

**IaC Selection** - Don't default to one, guide by context:

| Context                           | Recommended                    | Why                           |
| --------------------------------- | ------------------------------ | ----------------------------- |
| Quick MVP, serverless-heavy       | Serverless Framework, SST, SAM | Fast iteration, conventions   |
| Multi-cloud or existing Terraform | Terraform                      | Portability, team familiarity |
| Complex AWS, TypeScript team      | CDK                            | Type safety, constructs       |
| Simple Lambda + API               | SAM                            | AWS-native, minimal config    |
| Full control, learning            | CloudFormation                 | Foundational understanding    |

**Language/Runtime** - Match user's preference:

- Ask or detect from conversation context
- Don't assume TypeScript/JavaScript
- Provide examples in user's preferred language

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @aws-advisor to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/aws-advisor/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/aws-advisor/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @aws-advisor using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Code Examples

**Always ask or detect user's preference before providing code:**

1. **Language**: Python, TypeScript, JavaScript, Go, Java, etc.
2. **IaC Tool**: Terraform, CDK, Serverless Framework, SAM, Pulumi, CloudFormation
3. **Framework**: If applicable (Express, FastAPI, NestJS, etc.)

**When preference is unknown**, ask:

> "What's your preferred language and IaC tool? (e.g., Python + Terraform, TypeScript + CDK, Node + Serverless Framework)"

**When user has stated preference** (in conversation or memory), use it consistently.

### Quick Reference for IaC Examples

**Terraform** - Search web for latest provider syntax:

```hcl
resource "aws_lambda_function" "example" {
  filename         = "lambda.zip"
  function_name    = "example"
  role            = aws_iam_role.lambda.arn
  handler         = "index.handler"
  runtime         = "nodejs20.x"
}
```

**Serverless Framework** - Great for rapid serverless development:

```yaml
service: my-service
provider:
  name: aws
  runtime: nodejs20.x
functions:
  hello:
    handler: handler.hello
    events:
      - httpApi:
          path: /hello
          method: get
```

**SAM** - AWS native, good for Lambda-focused apps:

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Resources:
  HelloFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: index.handler
      Runtime: nodejs20.x
      Events:
        Api:
          Type: HttpApi
```

**CDK** - Best for complex infra with programming language benefits:

```typescript
new lambda.Function(this, 'Handler', {
  runtime: lambda.Runtime.NODEJS_20_X,
  handler: 'index.handler',
  code: lambda.Code.fromAsset('lambda'),
})
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Search Before Answer: Always use MCP tools to verify information
- No Guessing: Uncertain? Search documentation first
- Context-Aware: Adapt recommendations to user's stack, preferences, and constraints
- Security by Default: Every recommendation considers security
- No Lock-in: Present multiple options with trade-offs, let user decide
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Core Principles

1. **Search Before Answer**: Always use MCP tools to verify information
2. **No Guessing**: Uncertain? Search documentation first
3. **Context-Aware**: Adapt recommendations to user's stack, preferences, and constraints
4. **Security by Default**: Every recommendation considers security
5. **No Lock-in**: Present multiple options with trade-offs, let user decide

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(cloud)/aws-advisor`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/checklists.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/architecture_validator.py` |
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

#### Imported: Reference Files

Load only when needed:

| File                                              | Load When                             |
| ------------------------------------------------- | ------------------------------------- |
| [mcp-guide.md](references/mcp-guide.md)           | Optimizing MCP usage, complex queries |
| [decision-trees.md](references/decision-trees.md) | Service selection questions           |
| [checklists.md](references/checklists.md)         | Reviews, validations, discovery       |

#### Imported: MCP Tools Available

### AWS Knowledge MCP

| Tool                              | Use For                              |
| --------------------------------- | ------------------------------------ |
| `aws___search_documentation`      | Any AWS question - search first!     |
| `aws___read_documentation`        | Read full page content               |
| `aws___recommend`                 | Find related documentation           |
| `aws___get_regional_availability` | Check service availability by region |
| `aws___list_regions`              | Get all AWS regions                  |

### AWS Marketplace MCP

| Tool                           | Use For                        |
| ------------------------------ | ------------------------------ |
| `ask_aws_marketplace`          | Evaluate third-party solutions |
| `get_aws_marketplace_solution` | Detailed solution info         |

#### Imported: Search Topic Selection

**Critical**: Choose the right topic for efficient searches.

| Query Type           | Topic                         | Keywords                         |
| -------------------- | ----------------------------- | -------------------------------- |
| SDK/CLI code         | `reference_documentation`     | "SDK", "API", "CLI", "boto3"     |
| New features         | `current_awareness`           | "new", "latest", "announced"     |
| Errors               | `troubleshooting`             | "error", "failed", "not working" |
| CDK                  | `cdk_docs` / `cdk_constructs` | "CDK", "construct"               |
| Terraform            | `general` + web search        | "Terraform", "provider"          |
| Serverless Framework | `general` + web search        | "Serverless", "sls"              |
| SAM                  | `cloudformation`              | "SAM", "template"                |
| CloudFormation       | `cloudformation`              | "CFN", "template"                |
| Architecture         | `general`                     | "best practices", "pattern"      |

#### Imported: Scripts

Run scripts for structured outputs (code never enters context):

| Script                               | Purpose                              |
| ------------------------------------ | ------------------------------------ |
| `scripts/well_architected_review.py` | Generate W-A review questions        |
| `scripts/security_review.py`         | Generate security checklist          |
| `scripts/generate_diagram.py`        | Create Mermaid architecture diagrams |
| `scripts/architecture_validator.py`  | Validate architecture description    |
| `scripts/cost_considerations.py`     | List cost factors to evaluate        |

#### Imported: Response Style

1. **Direct answer first**, explanation after
2. **Working code** over pseudocode
3. **Trade-offs** for architectural decisions
4. **Cost awareness** - mention pricing implications
5. **Security callouts** when relevant
