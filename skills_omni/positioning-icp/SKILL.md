---
name: "positioning-icp"
description: "Positioning, ICP & Messaging Architecture for AI Products workflow skill. Use this skill when a user needs to define an ideal customer profile, sharpen AI product positioning, build messaging architecture, validate product-market fit, or structure evidence-backed competitive messaging for an AI-native product. Do not use it for implementation, software architecture, martech setup, outbound execution, or legal review."
version: "0.0.1"
category: "development"
tags:
  - "positioning-icp"
  - "positioning"
  - "ideal-customer-profile"
  - "messaging"
  - "product-market-fit"
  - "pmf"
  - "competitive-positioning"
  - "buyer-persona"
  - "jtbd"
  - "ai-go-to-market"
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
upstream_skill: "skills/positioning-icp"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Positioning, ICP & Messaging Architecture for AI Products

## Overview

Use this skill to define or refresh market positioning, ideal customer profile (ICP), messaging architecture, and product-market-fit validation for AI products.

It preserves the intent of the upstream `positioning-icp` workflow while making it more operator-ready: clearer routing, stronger deliverables, safer enrichment guidance, better proof discipline, and a recurring PMF revalidation loop.

This skill is for strategy and message design, not execution plumbing. It helps an agent turn scattered customer evidence, win/loss signals, and product claims into a usable GTM packet:

- an evidence-backed ICP
- an explicit anti-ICP
- a positioning stack
- a messaging house by audience altitude
- a proof ledger for AI claims
- a PMF scorecard and review cadence

## When to Use This Skill

Use this skill when the user needs one or more of these outcomes:

- define or narrow the ICP for an AI product
- separate account-level ICP from buyer/persona messaging
- reposition an AI product against competitors, incumbents, or DIY alternatives
- convert technical capabilities into buyer-relevant messaging
- build message architecture for homepage, sales deck, product pages, or comparison content
- diagnose stale positioning, broad ICP, weak proof, or low-converting messaging
- validate or revalidate PMF using survey, retention, win/loss, and expansion signals
- prepare a strategic input packet for sales, content, pricing, or outbound teams

Typical triggers:

- “Help define our ICP.”
- “Our messaging sounds good but does not convert.”
- “We need positioning for an AI feature or product launch.”
- “Who is the real buyer now?”
- “How do we know if we still have PMF?”
- “Build a competitor alternative narrative.”

### Do not use this skill for

Do not use this skill as the primary workflow for:

- software architecture or implementation design
- model selection, eval harnesses, or code review
- CRM or martech system setup
- SDR operations or outbound campaign execution
- legal/privacy review as a substitute for counsel
- SEO implementation or publishing mechanics
- pricing design beyond positioning inputs

Use related skills for those downstream tasks after this skill produces the strategic inputs.

## Required Inputs

Ask for the smallest set of inputs that can support a credible first draft:

- one-paragraph product description focused on current capability, not vision
- 3-5 best customers or best-fit accounts
- recent wins, losses, churn, or expansion notes
- primary buyer title and signing authority
- common alternatives: competitor, spreadsheet, in-house workflow, or “do nothing”
- pricing model and sales motion
- any current claims, case studies, retention data, or PMF survey data
- date of last ICP or positioning update

If critical inputs are missing, continue with explicit assumptions and label confidence.

## Operating Table

| Situation | Start here | Primary deliverables |
| --- | --- | --- |
| New AI product or first GTM draft | `references/positioning-stack-template.md` | Positioning stack, draft messaging house |
| ICP is broad or sales quality is poor | `references/icp-evidence-model.md` | ICP card, anti-ICP, fit/intent logic |
| Messaging exists but does not convert | `references/messaging-validation-checklist.md` | Revised narrative, value props, proof fixes |
| PMF feels stale or contradictory | `references/pmf-revalidation-scorecard.md` | PMF evidence pack, warning flags, 90-day plan |
| Team wants to use enrichment or intent data | `references/privacy-safe-enrichment-guidance.md` | Privacy-safe signal plan, vendor confidence notes |
| Need interview or testing prompts | `examples/customer-discovery-interview-guide.md` | Discovery notes, buyer-language evidence |
| Need message-testing workflow | `examples/messaging-test-script.md` | Message comprehension and resonance findings |
| Need a concrete scoring example | `examples/icp-scorecard-example.md` | Example fit/intent scoring packet |
| Need honest competitor comparison input | `examples/competitive-comparison-brief.md` | Comparison brief for content or sales enablement |
| Need cross-skill routing | `agents/handoff-map.md` | Deliberate handoff to pricing, outreach, SEO, analytics |

## Workflow

1. **Confirm scope and routing**
   - Verify the request is about positioning, ICP, messaging, PMF, or competitive framing.
   - Exclude implementation, legal review, and outbound execution as primary tasks.

2. **Collect intake evidence**
   - Gather product description, best customers, alternatives, buyer roles, sales motion, pricing model, and recent GTM signals.
   - Record what is known, unknown, and assumed.

3. **Separate the three layers that teams often collapse**
   - **ICP/account criteria:** company fit
   - **Buying committee/persona map:** who evaluates, champions, signs
   - **User/job context:** daily workflow, pain, desired outcome

4. **Build the ICP from evidence, not preference**
   - Use won deals, retention, expansion, interviews, usage patterns, and only then enrichment.
   - Document anti-ICP explicitly.
   - Keep fit and intent separate.

5. **Construct the positioning stack**
   - Choose a market category buyers already understand.
   - Define the wedge: the specific outcome gap you exploit.
   - Attach proof vector with evidence quality noted.
   - Frame the primary alternative honestly.

6. **Translate capabilities into messaging architecture**
   - Write Tier 1 strategic narrative.
   - Write Tier 2 value propositions for economic buyers.
   - Write Tier 3 feature/evaluator messaging.
   - Test each claim for specificity, differentiation, buyer language, proof, and altitude match.

7. **Pressure-test claims and proof**
   - Remove unsupported language such as “fully autonomous,” “100% accurate,” or vague “AI-powered” copy without buyer outcome context.
   - Add caveats, sample context, comparison basis, and dates where needed.

8. **Assess PMF signals**
   - Review Sean Ellis score if available.
   - Triangulate with retention, expansion, sales cycle, win/loss, and segment performance.
   - Flag contradictory signals rather than forcing a clean conclusion.

9. **Produce the output packet**
   - Deliver named artifacts, not generic advice:
     - ICP card
     - anti-ICP list
     - buying committee map
     - positioning stack
     - messaging house
     - proof ledger
     - PMF scorecard
     - 90-day revalidation plan

10. **Route downstream work deliberately**
   - Hand off pricing, outbound, SEO/content, analytics, or implementation work to the appropriate skill with this packet as input.

## Core Deliverables

### 1. ICP card
Must include:

- firmographic criteria
- technographic or workflow readiness criteria
- evidence-backed pain or job patterns
- buying triggers
- disqualifiers
- confidence level per criterion

### 2. Anti-ICP
Required to prevent broad positioning:

- segments that consume support but do not retain
- buyers who like the story but rarely buy
- use cases with weak proof or poor onboarding fit
- deal shapes that consistently stall or churn

### 3. Buying committee map
Separate:

- economic buyer
- functional leader
- champion
- evaluator
- procurement/security stakeholders if relevant

### 4. Positioning stack
Use the four-layer structure:

- **Category**: the market context buyers already understand
- **Wedge**: what you do materially better for a narrow situation
- **Proof vector**: credible evidence that the wedge works
- **Alternative framing**: who or what the buyer would otherwise choose

### 5. Messaging house
At minimum:

- one strategic narrative paragraph
- 3-5 value propositions with proof
- feature/evaluator messaging for technical or operational reviewers
- message-by-audience mapping

### 6. Proof ledger
Track each meaningful claim with:

- claim text
- supporting metric or quote
- source and date
- sample context
- comparison basis
- caveats
- confidence level

### 7. PMF evidence pack
Include:

- Sean Ellis result if available
- retention/cohort notes
- expansion/churn signals
- win/loss patterns
- segment deltas
- warning signs and next review date

## Examples

### Example 1: Define ICP and positioning for an AI workflow product

```text
Use @positioning-icp to define our ICP and positioning for an AI support automation product. We sell to B2B fintech teams, have 12 customers, and our best accounts are mid-market firms with high ticket volume. Separate ICP from buyer roles, produce an anti-ICP, and include proof hygiene for all claims.
```

**Expected output:** ICP card, anti-ICP, buying committee map, positioning stack, draft message tiers, and open evidence gaps.

### Example 2: Diagnose weak messaging

```text
Use @positioning-icp to diagnose why our homepage messaging is not converting. Our copy says 'AI-powered support transformation' but demo requests are flat. Use buyer-language checks, proof review, and the VP-forwarding test.
```

**Expected output:** rewritten narrative, sharper value props, proof gaps, and test plan.

### Example 3: Run a PMF audit

```text
Use @positioning-icp to assess whether we still have PMF for our AI sales coaching product. We have a recent Sean Ellis survey, rising pipeline, lower win rate, and mixed retention by segment. Create a PMF evidence pack and call out contradictory signals.
```

**Expected output:** PMF scorecard, interpretation by segment, positioning implications, and 90-day revalidation actions.

### Example 4: Prepare a competitor alternative brief

```text
Use @positioning-icp to create a comparison brief against our main incumbent competitor. Keep claims honest, note known gaps, and structure the output so content or sales teams can use it later.
```

**Expected output:** alternative framing, switcher pain points, comparison angles, proof requirements, and risks to avoid.

## Best Practices

### Do

- build the ICP from evidence hierarchy: won/retained customers, interviews, usage, then enrichment
- separate account ICP from buyer persona and user/job context
- choose a category buyers already understand before trying category creation
- lead with business outcomes, not model names
- require proof for automation, accuracy, ROI, compliance, and time-saved claims
- document anti-ICP and disqualification rules
- test messaging with real buyer language from interviews, calls, and reviews
- treat PMF as a recurring operating discipline, not a milestone
- include timestamps on competitor comparisons and proof claims
- use enrichment and intent data conservatively, with data minimization and regional caution

### Do not

- define the ICP as “everyone with AI interest”
- collapse fit and intent into one opaque score
- lead with “AI-powered” unless tied to a specific buyer outcome
- claim “fully autonomous,” “100% accurate,” or “guaranteed ROI” without strong substantiation
- present stale competitor comparisons as current
- treat survey results alone as conclusive PMF evidence
- use personal data enrichment or outreach assumptions as if they are universally lawful
- confuse what buyers praise in calls with what they actually purchase

## Troubleshooting

### Problem: The ICP is too broad

**Symptoms:** Many segments appear attractive; pipeline grows but win rate or retention is weak; sales says leads “look interested” but rarely close.

**Solution:** Start from retained and expanded customers, not total pipeline. Build the anti-ICP. Reduce to 1-2 segments where the wedge is strongest. Re-score fit separately from intent.

### Problem: Messaging sounds strong but does not convert

**Symptoms:** Prospects say the story is interesting, but demos do not advance; copy contains broad claims like “transform,” “optimize,” or “AI-powered” without concrete outcome.

**Solution:** Rewrite using buyer language, named outcomes, and proof. Check whether the message is too high-level for the page or too technical for the buyer. Use the message testing script to inspect comprehension, relevance, and credibility separately.

### Problem: Proof is weak or non-credible

**Symptoms:** Claims rely on anecdotes, tiny samples, old case studies, or unsupported superiority language.

**Solution:** Downgrade the claim to qualitative wording or directional evidence. Add context, date, sample size, and caveats. Remove hard numeric promises until the proof ledger is defensible.

### Problem: PMF signals conflict

**Symptoms:** Sean Ellis score looks healthy but retention is weak; pipeline is growing but win rate is falling; users stay active but expansion is flat.

**Solution:** Segment the data. Check whether one narrow use case has PMF while the broader story does not. Use the PMF scorecard to triangulate survey, retention, expansion, and commercial outcomes before changing positioning.

### Problem: Data vendor signals conflict or feel stale

**Symptoms:** Different enrichment vendors disagree on employee count, stack, buyer data, or trigger events.

**Solution:** Treat third-party enrichment as supporting evidence, not truth. Prefer first-party and observed customer evidence. Record vendor confidence and freshness. Avoid high-stakes decisions based on one stale signal.

### Problem: Privacy or compliance concerns block enrichment use

**Symptoms:** The team is unsure whether intent or personal data can be used for scoring or outreach in a target region.

**Solution:** Minimize personal data, prefer account-level signals where possible, document purpose and retention, and route legal interpretation to counsel. This skill may define a safer scoring approach, but it does not replace legal review.

### Problem: Comparison pages rank or get shared but do not convert

**Symptoms:** Competitor-alternative content generates visits, but buyers still hesitate or sales disputes the claims.

**Solution:** Tighten the switcher narrative, include honest gaps, add timestamped proof, and ensure the page targets a real buying trigger rather than generic feature parity.

## Related Skills

- `@ai-pricing` - Use after this skill when packaging positioning inputs into pricing strategy.
- `@ai-sdr` - Use after ICP and qualification logic are defined for sales execution.
- `@ai-cold-outreach` - Use after messaging, proof, and audience targeting are stable.
- `@accessibility` - Use only if downstream content or product artifacts need accessibility review.

## Additional Resources

### Local references

- [ICP evidence model](references/icp-evidence-model.md)
- [Positioning stack template](references/positioning-stack-template.md)
- [Messaging validation checklist](references/messaging-validation-checklist.md)
- [PMF revalidation scorecard](references/pmf-revalidation-scorecard.md)
- [Privacy-safe enrichment guidance](references/privacy-safe-enrichment-guidance.md)

### Local examples

- [Customer discovery interview guide](examples/customer-discovery-interview-guide.md)
- [Messaging test script](examples/messaging-test-script.md)
- [ICP scorecard example](examples/icp-scorecard-example.md)
- [Competitive comparison brief](examples/competitive-comparison-brief.md)

### Agent routing

- [Handoff map](agents/handoff-map.md)

## Source Notes

This enhanced version preserves the upstream identity and intent of the original `positioning-icp` workflow while translating it into a more operational Omni Skills package.

The methodology remains anchored in:

- evidence-based ICP definition rather than generic personas
- a four-layer positioning stack
- capability-to-outcome messaging translation
- recurring PMF revalidation for AI products
- explicit recognition that buyer context, competitive alternatives, and proof requirements change quickly in AI markets
