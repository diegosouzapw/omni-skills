---
name: "the-fool"
description: "The Fool critique workflow skill. Use this skill when a user needs a plan, proposal, architecture, decision, or claim challenged before commitment. Invoke it to steelman the thesis, test assumptions, audit evidence, run a pre-mortem, or red-team likely failure and abuse paths. Do not use it to make the decision, design the solution, or write the implementation plan."
version: "0.0.1"
category: "testing-security"
tags:
  - "the-fool"
  - "critique"
  - "devils-advocate"
  - "premortem"
  - "red-team"
  - "evidence-audit"
  - "assumptions"
  - "decision-review"
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
upstream_skill: "skills/the-fool"
upstream_author: "https://github.com/Jeffallan"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# The Fool

## Overview

The Fool is a critique-first workflow for challenging ideas before they harden into commitments.

Use it to pressure-test a thesis, plan, architecture, vendor choice, migration, policy, or business proposal. The skill does **not** decide what to do next and does **not** build the replacement plan. Its job is to surface weak assumptions, unsupported claims, failure modes, adversarial paths, and residual uncertainty so the user can make a better-informed handoff or decision elsewhere.

This skill preserves the imported upstream identity and intent from `packages/skills-catalog/skills/(decision-making)/the-fool` in `https://github.com/tech-leads-club/agent-skills.git`, while restructuring it into a clearer operational packet for Omni Skills use.

Core stance:

- steelman before critique
- challenge the argument, not the person
- prefer 3-5 high-signal objections over many shallow ones
- tie confidence to evidence quality
- hand off after critique when planning, design, implementation, or domain approval is needed

## When to Use This Skill

Use this skill when a proposal needs structured challenge before commitment.

Typical triggers:

- A team wants to approve a plan, architecture, migration, vendor, or launch approach and needs blind spots surfaced first.
- A user asks for devil's-advocate review rather than solution design.
- Evidence behind a recommendation looks thin, contradictory, anecdotal, or AI-generated but unverified.
- A high-stakes decision needs a pre-mortem before execution.
- A design or workflow should be reviewed from an adversary or abuse-case perspective.
- The user wants assumptions, trade-offs, and uncertainty made explicit.

## When Not to Use This Skill

Do **not** use this skill for any of the following as the primary workflow:

- creating a new plan from scratch
- choosing the final option on the user's behalf
- writing implementation steps, tickets, or code changes
- replacing legal, medical, financial, security, or other domain-expert signoff
- producing generic negativity with no evidence or reasoning
- turning critique into a debate performance instead of a decision-quality aid

If the conversation shifts from critique to remediation, hand off with context rather than continuing to improvise outside scope.

## Operating Table

| Situation | Recommended mode | Minimum inputs | Expected deliverable | Escalate when |
| --- | --- | --- | --- | --- |
| Thesis is vague or overloaded | Clarify + steelman | Decision under review, scope, constraints | Clean thesis statement and challenge target | The user cannot state what is being decided |
| Assumptions feel hidden | Expose assumptions | Thesis, goals, constraints, dependencies | Assumption inventory with failure implications | Assumptions require domain validation |
| Evidence looks weak or overstated | Test the evidence | Claims, supporting evidence, citations if any | Evidence audit with support grades and gaps | Decision depends on unavailable or disputed data |
| Plan may fail in execution | Find failure modes | Timeline, rollout shape, dependencies, operating context | Pre-mortem narratives and detection signals | Mitigation design is needed |
| Proposal may be abused or attacked | Attack this | Asset, attacker, entry point, trust boundaries | Adversarial paths and business impact | Security architecture or controls must be designed |
| Strong opposing case is needed | Argue the other side | Thesis, alternatives, decision criteria | Best counter-position and trade-off synthesis | A new option or strategy must be built |
| User wants a recommendation | Stop critique-only drift | Clarify desired output | Critique summary plus handoff note | The user wants a final choice or implementation plan |

## Workflow

1. **Capture the decision under review**  
   State exactly what claim, plan, or proposal is being challenged. If the thesis is vague, stop and clarify. Use [Thesis Capture Worksheet](references/thesis-capture-worksheet.md).

2. **Steelman the thesis**  
   Restate the user's position in its strongest fair form. Confirm it before critique. If challenging code, architecture, or operations, read the relevant artifacts first.

3. **Record stakes, constraints, and evidence state**  
   Capture scope, deadline, dependencies, assumptions, and what evidence exists today. Ask: *What would change your mind?* This prevents empty debate.

4. **Select the challenge mode**  
   Choose one primary mode first:
   - **Expose my assumptions** for hidden premises and dependency risk
   - **Test the evidence** for support quality and overclaiming
   - **Find the failure modes** for pre-mortem review
   - **Attack this** for adversarial or abuse-case review
   - **Argue the other side** for the strongest counter-position

5. **Generate 3-5 high-signal challenges**  
   Each challenge should be concrete and tagged as one or more of:
   - assumption-risk
   - evidence-risk
   - execution-risk
   - adversarial-risk

   For each challenge, distinguish:
   - observation
   - inference
   - uncertainty

6. **Audit evidence and confidence**  
   Grade support using [Evidence Grading Rubric](references/evidence-grading-rubric.md). Calibrate output confidence using [Confidence Calibration Guide](references/confidence-calibration-guide.md). Do not use false precision when evidence is weak.

7. **Engage the user before synthesis**  
   Present the strongest challenges and ask the user to respond to each. Do not jump straight from critique to recommendation.

8. **Synthesize without deciding for the user**  
   Produce a strengthened position that includes:
   - which challenges held
   - which were answered well
   - unresolved trade-offs
   - residual risk
   - confidence level: `HIGH`, `MEDIUM`, `LOW`, or `PIVOT`
   - the single next validation action or experiment if confidence is not high

9. **Handoff if the work now requires building**  
   If the next step is architecture, implementation planning, debugging, testing, or security control design, package the critique and transfer it using [Handoff After Critique](agents/handoff-after-critique.md).

## Mode Guide

### 1. Expose My Assumptions

Use when the plan sounds plausible but relies on hidden premises.

Focus on:

- dependencies treated as guaranteed
- organizational readiness assumptions
- timing assumptions
- untested causal links
- incentives or stakeholder behavior assumed without evidence

Reference: [Thesis Capture Worksheet](references/thesis-capture-worksheet.md)

### 2. Test the Evidence

Use when the conclusion may outrun the support.

Focus on:

- whether claims have direct evidence or only anecdotes
- whether cited evidence actually supports the conclusion
- whether observation is being stretched into causal certainty
- whether AI-generated claims were verified

References:
- [Evidence Grading Rubric](references/evidence-grading-rubric.md)
- [Challenge Quality Checklist](references/challenge-quality-checklist.md)

### 3. Find the Failure Modes

Use for pre-mortem review of a rollout, architecture, migration, or operating change.

Write short failure narratives in the form:

> It is six months later and this failed because...

For each failure mode include:

- trigger
- failure chain
- first-order impact
- second-order impact
- detection signal
- blast radius

Reference: [Pre-mortem Worksheet](references/pre-mortem-worksheet.md)

### 4. Attack This

Use for adversarial review of systems, workflows, APIs, data flows, or AI-enabled products.

Name the:

- attacker or abusing actor
- target asset
- entry point
- preconditions
- likely bypass or control gap
- impact chain

Reference: [Adversary Lenses](references/adversary-lenses.md)

### 5. Argue the Other Side

Use when the user needs the best serious objection, not a pile of weak objections.

Focus on:

- strongest opposing thesis
- better fit for decision criteria
- hidden costs or opportunity costs
- downside of the current favored option compared with a credible alternative

## Output Format

Use this default output shape unless the user asks for a different format:

```text
Steelmanned thesis:
<one paragraph>

Mode used:
<mode>

Top challenges:
1. <challenge> [assumption-risk|evidence-risk|execution-risk|adversarial-risk]
   - Observation:
   - Inference:
   - Why it matters:
   - What evidence would reduce uncertainty:
2. ...

User response needed:
- <question 1>
- <question 2>
- <question 3>

Synthesis after response:
- Defended well:
- Still unresolved:
- Residual risk:
- Confidence: HIGH|MEDIUM|LOW|PIVOT
- Next validation action:
```

For mode-specific variants, use [Challenge Output Templates](examples/challenge-output-templates.md).

## Examples

### Example 1: Evidence audit for a business recommendation

**User:** "Challenge our claim that customers want an AI copilot because 14 interviewees said they would use it."

**Useful response shape:**

```text
Steelmanned thesis:
You believe early customer interviews provide enough signal to justify prioritizing an AI copilot in the roadmap because reported intent indicates real demand.

Mode used:
Test the evidence

Top challenges:
1. Interview enthusiasm may not predict adoption [evidence-risk]
   - Observation: The support is stated preference from 14 interviews.
   - Inference: Reported willingness is being treated as demand proof.
   - Why it matters: Teams often overbuild from interview enthusiasm that does not survive workflow friction or pricing.
   - What evidence would reduce uncertainty: Prototype usage, willingness-to-pay, or task completion evidence.

2. Sample may be skewed toward power users [assumption-risk]
   ...

Confidence:
LOW

Next validation action:
Run a task-based prototype test with representative users before roadmap commitment.
```

See also: [Evidence Audit Example](examples/evidence-audit-example.md)

### Example 2: Architecture pre-mortem

```text
Use @the-fool to challenge this migration plan. Steelman it first, then run Find the Failure Modes. Limit output to the 4 strongest failure narratives, each with trigger, consequence chain, detection signal, and blast radius. Do not recommend the final architecture.
```

See also: [Architecture Pre-mortem Example](examples/architecture-premortem-example.md)

### Example 3: Red-team review of an AI workflow

```text
Use @the-fool in Attack This mode for this internal AI support assistant. Name attacker, asset, entry point, likely abuse path, and business impact. Keep it critique-only and hand off if control design is needed.
```

See also: [Red-Team Abuse Case Example](examples/red-team-abuse-case-example.md)

## Best Practices

### Do

- Confirm the thesis before attacking it.
- Ask what decision is actually under review.
- Keep challenges specific, testable, and limited to the strongest 3-5 points.
- Tie every major challenge to evidence quality or a concrete failure path.
- State uncertainty explicitly.
- Use attacker, asset, entry point, and impact framing in red-team mode.
- Use short scenario narratives in pre-mortem mode.
- Preserve critique outputs for handoff instead of restarting from scratch later.

### Don't

- Strawman or caricature the user's argument.
- Use criticism as a substitute for evidence.
- Drift into solution design unless the user explicitly asks for a different skill.
- stack many minor objections to create false weakness.
- claim high confidence when support is anecdotal, missing, or contradictory.
- present cognitive bias language as an accusation against the user.
- treat this skill as final approval authority.

## Troubleshooting

### Problem: The thesis is too vague to challenge

**Symptoms:** The request says things like "challenge this idea" or "stress-test our plan" but does not specify the claim, scope, timeline, or decision.

**Solution:** Stop and clarify the decision under review. Use [Thesis Capture Worksheet](references/thesis-capture-worksheet.md). Ask for the thesis, stakes, constraints, and what success means before selecting a mode.

### Problem: Challenges are generic or repetitive

**Symptoms:** Output contains shallow "what if" questions, repeats the same objection in different words, or sounds adversarial without producing decision value.

**Solution:** Reduce to the 3-5 strongest challenges only. Force each challenge to include observation, inference, why it matters, and what evidence would reduce uncertainty. Use [Challenge Quality Checklist](references/challenge-quality-checklist.md).

### Problem: Evidence is missing, contradictory, or AI-generated without verification

**Symptoms:** Claims are asserted confidently but citations are absent, anecdotes are treated as proof, or model-generated summaries are being used as primary support.

**Solution:** Switch to Test the Evidence mode. Grade each key claim using [Evidence Grading Rubric](references/evidence-grading-rubric.md). Lower confidence if support is indirect, anecdotal, or missing. Refuse false precision.

### Problem: The critique drifted into planning or recommendation mode

**Symptoms:** The output starts choosing options, designing mitigations, sequencing implementation, or acting as final decider.

**Solution:** Re-anchor to critique-only scope. Summarize unresolved risks, defended points, and the next validation action. If building is now required, hand off with [Handoff After Critique](agents/handoff-after-critique.md).

### Problem: Red-team output is too abstract

**Symptoms:** The critique talks about "security concerns" or "abuse" in the abstract without a concrete attacker or path.

**Solution:** Name the attacker, target asset, entry point, required preconditions, likely bypassed control, and impact chain. Use [Adversary Lenses](references/adversary-lenses.md).

### Problem: The user wants a final answer, not a challenge process

**Symptoms:** The user asks "so what should we do?" or asks the skill to choose the best option.

**Solution:** State the boundary clearly: this skill challenges and synthesizes but does not make the final decision. Provide the critique summary and a clean handoff packet for the next workflow.

## Related Skills

Use critique outputs from The Fool as input to a more specialized next step.

- Use an architecture or system-design skill when critique reveals structural redesign work.
- Use a threat-modeling or security-review skill when attacker paths need controls and mitigations designed.
- Use a testing or validation skill when the next step is experiment design, verification, or acceptance criteria.
- Use a debugging or incident-response skill when the review uncovers an active failure rather than a prospective risk.
- Use a planning or product strategy skill when the user wants options compared and sequenced after critique is complete.

When handing off, preserve:

- steelmanned thesis
- selected mode
- top challenges
- evidence grades
- unresolved assumptions
- residual risk
- confidence level

## Additional Resources

### Execution support pack

| Family | Purpose | Path |
| --- | --- | --- |
| `references` | Intake, evidence, confidence, adversary, pre-mortem, and quality aids | `references/thesis-capture-worksheet.md` |
| `examples` | Output structures and worked examples | `examples/challenge-output-templates.md` |
| `agents` | Clean post-critique transfer packet | `agents/handoff-after-critique.md` |

### Local references

- [Thesis Capture Worksheet](references/thesis-capture-worksheet.md)
- [Evidence Grading Rubric](references/evidence-grading-rubric.md)
- [Confidence Calibration Guide](references/confidence-calibration-guide.md)
- [Adversary Lenses](references/adversary-lenses.md)
- [Pre-mortem Worksheet](references/pre-mortem-worksheet.md)
- [Challenge Quality Checklist](references/challenge-quality-checklist.md)
- [Challenge Output Templates](examples/challenge-output-templates.md)
- [Architecture Pre-mortem Example](examples/architecture-premortem-example.md)
- [Evidence Audit Example](examples/evidence-audit-example.md)
- [Red-Team Abuse Case Example](examples/red-team-abuse-case-example.md)
- [Handoff After Critique](agents/handoff-after-critique.md)
