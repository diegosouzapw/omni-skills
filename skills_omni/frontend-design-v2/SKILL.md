---
name: "frontend-design-v2"
description: "frontend-design workflow skill. Use this skill when the user needs distinctive, production-grade frontend interfaces with strong visual direction and real implementation quality. Use this skill when building web components, pages, posters, landing pages, dashboards, or applications that should feel intentionally designed rather than generic. Generates creative, polished code while preserving semantic structure, accessibility, responsiveness, motion safety, and performance awareness. Do NOT use for design review or audit alone; route to web-design-guidelines or web-quality-audit when the task is primarily critique, compliance review, or post-build assessment."
version: "0.0.1"
category: "frontend"
tags:
  - "frontend-design-v2"
  - "frontend-design"
  - "frontend"
  - "ui"
  - "web-components"
  - "landing-pages"
  - "dashboards"
  - "design-systems"
  - "accessibility"
  - "responsive-design"
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
upstream_skill: "skills/frontend-design-v2"
upstream_author: "Impeccable (Paul Bakaus), based on Anthropic frontend-design"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# frontend-design

## Overview

Use this skill to create distinctive, production-grade frontend interfaces that feel intentionally designed and ship as real working code.

This skill preserves the original upstream identity and anti-generic-aesthetic stance, but it is organized as an execution workflow rather than a packaging wrapper. It is for building interfaces, not merely describing them. The goal is to help an agent move from aesthetic direction to implementation, validation, and handoff while keeping provenance visible and preserving safe delivery practices.

Use it when the user wants a strong visual point of view: landing pages, dashboards, product surfaces, marketing artifacts, posters, component libraries, or application UI that should not look like default AI-generated output.

Do not use this skill as a substitute for a dedicated accessibility audit, design critique, or general web QA pass. This skill embeds validation gates, but its primary job is creation.

## When to Use This Skill

Use this skill when:

- The user asks for a distinctive web UI, component, page, poster, or product surface that should feel polished and memorable.
- The work requires both design direction and implementation details, not just visual inspiration.
- The task needs careful typography, spacing, composition, color, responsiveness, and interaction design.
- The output must avoid common AI aesthetics such as repetitive card grids, generic glow-on-dark themes, templated hero sections, and decorative clutter.
- The interface must remain production-safe: semantic HTML, keyboard support, reduced-motion handling, responsive behavior, and reasonable performance hygiene.

Do not use this skill when:

- The main request is to audit an existing design for accessibility, UX, or compliance issues.
- The task is primarily frontend debugging, performance remediation, or framework-specific refactoring with little design work.
- The operator only needs visual review criteria rather than a build workflow.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New build from scratch | `references/execution-workflow.md` | Gives the full build sequence from discovery through handoff |
| Need a concrete visual direction before coding | `examples/aesthetic-direction-worksheet.md` | Forces explicit choices about audience, tone, constraints, and differentiator |
| Building responsive reusable components | `references/component-responsiveness.md` | Helps avoid viewport-only thinking and supports nested layout behavior |
| Building forms or interaction-heavy UI | `references/interaction-and-forms.md` | Covers labels, states, focus, and form semantics |
| Building a highly visual or animated interface | `references/motion-and-reduced-motion.md` | Adds intentional motion rules and reduced-motion fallbacks |
| Need accessibility and semantic guardrails | `references/accessibility-and-semantics.md` | Prevents visual experimentation from breaking usability |
| Need performance review before handoff | `references/performance-and-loading.md` | Helps catch LCP, CLS, INP, image, and font risks |
| Need to confirm upstream lineage | `scripts/omni_import_print_origin.py` | Preserves provenance and import traceability |
| Need a quick support-pack inventory | `scripts/omni_import_list_support_pack.py` | Shows the local assets that should guide the task |
| Work drifts into another specialization | `agents/omni-import-router.md` | Helps hand off deliberately without losing context |

## Workflow

1. **Confirm the build goal**
   - Identify artifact type: component, landing page, dashboard, app screen, poster, or full page.
   - Confirm target stack if known: plain HTML/CSS/JS, React, Next.js, Vue, etc.
   - Capture device context, audience, tone, content constraints, and success criteria.
   - Confirm whether the result must be implementation-ready or concept-first.

2. **Choose one clear aesthetic direction before coding**
   - State the intended tone explicitly, such as editorial, brutalist, refined luxury, industrial, playful, retro-futurist, or organic.
   - Pick one dominant visual system: typography-led, composition-led, color-led, motion-led, or image-led.
   - Define one memorable differentiator that makes the result recognizable.
   - Record technical constraints: accessibility expectations, performance sensitivity, framework limitations, and theming needs.

3. **Define execution guardrails**
   - Choose semantic structure before styling.
   - Decide whether responsiveness is page-level, component-level, or both.
   - Define whether motion is essential, optional, or absent.
   - Set practical quality gates for this task: keyboard support, contrast, reduced motion, loading behavior, and content clarity.

4. **Build the structure first**
   - Use meaningful HTML landmarks, heading hierarchy, buttons, links, lists, and form controls.
   - Keep decorative layers out of the accessibility tree when they do not convey content.
   - Avoid generic clickable `div` containers when native controls are appropriate.
   - Ensure the layout still makes sense before visual styling is added.

5. **Apply the visual system intentionally**
   - Build hierarchy through scale, spacing, rhythm, alignment, and contrast.
   - Use typography and composition as primary tools before adding decorative effects.
   - Prefer a few strong decisions over many weak accents.
   - Keep the anti-generic test in mind: if the interface instantly reads as template output, redesign the visual system.

6. **Make components responsive in context**
   - Use viewport breakpoints for macro layout shifts.
   - Prefer container queries for reusable cards, panels, sidebars, and modules that must adapt inside different parent widths.
   - Preserve content and functionality on small screens; adapt, do not amputate.
   - Do not use viewport settings that disable pinch zoom.

7. **Add interactions and motion carefully**
   - Use motion to clarify state changes, reveal hierarchy, or support orientation.
   - Design one or two intentional motion moments rather than scattering animation everywhere.
   - Provide reduced-motion alternatives for non-essential animation.
   - Favor transform and opacity over layout-triggering animation.

8. **Harden forms and interactions**
   - Use visible labels, useful helper text, clear errors, and sensible `autocomplete` tokens.
   - Ensure keyboard access, focus visibility, target sizing, and loading or empty states.
   - Use buttons for actions and links for navigation.
   - Avoid visual polish that obscures interaction affordances.

9. **Review performance risks before handoff**
   - Reserve space for images and media.
   - Use responsive image sources where appropriate.
   - Keep hero media, fonts, and animation from causing avoidable LCP or CLS issues.
   - Lazy-load non-critical assets instead of delaying first render with decorative media.

10. **Validate and hand off with evidence**
   - Check semantics, responsiveness, reduced-motion behavior, interaction states, and basic performance risks.
   - Summarize the chosen aesthetic direction, notable tradeoffs, and any remaining review needs.
   - Preserve provenance if the operator or reviewer needs to trace the original imported source.

## Examples

### Example 1: Landing page with a strong aesthetic direction

**User request:** "Build a landing page for a developer tools product that does not look like every other SaaS homepage."

**Recommended execution:**
- Choose a defined direction such as editorial, industrial, or brutalist restraint.
- Decide the page is typography-led rather than illustration-led.
- Use one dominant focal point instead of stacking generic feature cards.
- Build semantic sections, responsive media, and a memorable hero composition.
- Validate mobile hierarchy, text contrast, and reduced-motion behavior.

**Expected result:**
A single-page layout with a clear visual opinion, strong type hierarchy, non-generic composition, and production-safe structure.

### Example 2: Dark analytics dashboard

**User request:** "Create a dark dashboard for analytics that feels premium and modern."

**Recommended execution:**
- Avoid default neon-on-black or cyan-purple glow aesthetics.
- Build a tinted-neutral dark palette with selective accent color.
- Use container queries so panels adapt inside resizable or nested layouts.
- Include helpful empty states, focus styles, and one intentional motion moment such as staged data reveal.
- Check chart contrast, button semantics, keyboard navigation, and loading stability.

**Expected result:**
A functional dashboard with a distinct point of view, readable hierarchy, adaptable component behavior, and fewer AI-template fingerprints.

### Example 3: Marketing poster or event artifact

**User request:** "Make a poster for a conference talk about frontend performance."

**Recommended execution:**
- Choose a composition-led or typography-led direction.
- Limit the palette, define the grid or anti-grid strategy, and commit to a type system.
- Use decorative graphics only when they support the concept.
- Keep text hierarchy and contrast legible even in expressive layouts.

**Expected result:**
A designed artifact that reads as deliberate visual communication rather than a generic promo template.

### Example 4: Run the local support-pack inventory

```bash
python3 skills/frontend-design-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** Use this to review the local references, examples, scripts, and routing notes before execution.

### Example 5: Confirm provenance before review

```bash
python3 skills/frontend-design-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this when a reviewer needs source lineage and import context.

## Best Practices

### Aesthetic direction

**Do**
- Commit to one strong design direction before implementation.
- Make a small number of bold, coherent decisions.
- Let typography, layout, and color carry the identity.
- Build interfaces that look authored, not assembled from defaults.

**Do not**
- Mix several unrelated aesthetics into one surface.
- Reach for decorative effects before fixing hierarchy and composition.
- Repeat the same card, icon, and heading pattern across every section.
- Default to glow-heavy dark themes, gradient headlines, or generic SaaS hero tropes.

### Typography

Use typography as a primary system, not as filler around UI boxes.

**Do**
- Use a clear type scale with fluid sizing where appropriate.
- Pair display and body type intentionally.
- Create hierarchy with weight, size, line length, and spacing.
- Check font loading strategy so typographic choices do not degrade load stability.

**Do not**
- Use overexposed defaults as an unexamined choice.
- Use monospace as shorthand for "technical" unless it fits the concept.
- Depend on oversized icons to create false hierarchy.

### Color and theme

**Do**
- Build palettes intentionally, ideally from a structured system rather than ad hoc hex values.
- Use modern CSS color features such as `oklch()`, `color-mix()`, and `light-dark()` where support fits the project.
- Check contrast for text, controls, icons, and focus indicators.
- Tint neutrals toward the brand direction when it improves cohesion.

**Do not**
- Use distinctive color purely for novelty if readability suffers.
- Assume a dark theme is more premium by default.
- Use gradient text or glowing accents as a substitute for hierarchy.
- Put low-contrast gray text on colored backgrounds.

### Layout and responsiveness

**Do**
- Create rhythm through varied spacing and intentional alignment.
- Use viewport breakpoints for macro layout changes.
- Use container queries for reusable components that live in different contexts.
- Adapt content hierarchy for mobile rather than just shrinking the desktop layout.

**Do not**
- Wrap everything in cards.
- Nest cards inside cards without a strong reason.
- Center every section by habit.
- Hide critical actions or information on mobile to preserve aesthetics.

### Semantics and accessibility

**Do**
- Start with semantic HTML and landmarks.
- Use real buttons for actions and links for navigation.
- Keep decorative assets hidden from assistive technology when they are not meaningful.
- Preserve visible focus states, readable labels, and logical heading structure.

**Do not**
- Place meaningful text inside `aria-hidden` layers.
- Simulate controls with generic containers when native elements exist.
- Remove outlines without replacing them with an accessible focus treatment.
- Treat accessibility as something to audit later if the task is implementation-ready.

### Motion and interaction

**Do**
- Use motion to support orientation, feedback, and state change.
- Provide reduced-motion fallbacks for non-essential effects.
- Use opacity and transform for smoother animation.
- Design empty, loading, success, and error states as part of the interface.

**Do not**
- Fill the interface with ambient motion loops.
- Animate layout properties when simpler alternatives exist.
- Use motion that competes with content hierarchy.
- Make every button look primary.

### Performance-aware polish

**Do**
- Reserve space for media to reduce layout shift.
- Prioritize true hero assets and defer decorative media.
- Use responsive images and sensible lazy loading.
- Review likely LCP, CLS, and interaction latency risks before handoff.

**Do not**
- Load oversized artwork at full resolution without reason.
- Let web fonts cause avoidable reflow.
- Ship decorative animation that harms responsiveness.
- Confuse static mockup quality with production readiness.

## Troubleshooting

### Problem: The result looks polished but still feels like generic AI output

**Symptoms:** Repeated card patterns, predictable SaaS hero structure, purple-blue gradients, decorative glow, safe-but-forgettable typography, or many surface effects with no strong point of view.

**Solution:** Revisit the aesthetic direction. State one dominant visual system and one memorable differentiator. Remove weak decorative accents and rebuild hierarchy through typography, spacing, composition, and color instead.

### Problem: The page works on desktop but breaks inside sidebars, grids, or nested layouts

**Symptoms:** Cards collapse awkwardly, panel internals overflow, content becomes cramped in resizable containers, or components only respond to viewport width.

**Solution:** Move component responsiveness to container queries where appropriate. Rework intrinsic sizing, text wrapping, and spacing so modules adapt to their actual container, not just the browser width.

### Problem: The interface looks distinctive but text or controls are hard to read

**Symptoms:** Low-contrast text in dark sections, accent colors that weaken focus visibility, washed-out copy on colored backgrounds, or expressive palettes that hurt legibility.

**Solution:** Adjust luminance and chroma, not just hue. Re-check contrast for body text, controls, icons, and focus states. Use the color reference to tune palette steps without losing the overall identity.

### Problem: Animations feel impressive in review but tiring, janky, or inaccessible in use

**Symptoms:** Too many simultaneous transitions, decorative loops distracting from content, lag during interaction, or discomfort for motion-sensitive users.

**Solution:** Reduce the number of animated elements, keep motion tied to state change, switch to transform and opacity where possible, and implement a reduced-motion path that removes or simplifies non-essential effects.

### Problem: The layout looks good visually but keyboard or screen-reader use is broken

**Symptoms:** Missing focus indication, broken heading order, click targets implemented as `div`s, unlabeled inputs, decorative layers announced as content, or navigation landmarks missing.

**Solution:** Rebuild the affected areas with semantic HTML first. Verify headings, landmarks, labels, button/link semantics, and decorative asset handling. Use ARIA only where native semantics cannot express the needed behavior.

### Problem: The interface feels premium in static review but is slow or shifts during load

**Symptoms:** Hero content appears late, media causes layout movement, fonts reflow text after render, or interactions feel sluggish after initial load.

**Solution:** Reserve dimensions for media, use responsive image sources, prioritize the actual hero asset, defer non-critical visuals, and revisit font and animation strategy. Check the performance reference and handoff checklist before merging.

### Problem: The task drifted into a different specialization

**Symptoms:** Work becomes mostly accessibility auditing, performance debugging, design-system governance, or framework-level debugging rather than frontend design execution.

**Solution:** Hand off deliberately using the routing notes. Preserve the chosen aesthetic direction, known constraints, and provenance so the next skill can continue without re-discovery.

## Related Skills

- `@web-design-guidelines` - Use when the task is primarily design critique, UX guidance, or review criteria.
- `@web-quality-audit` - Use when the task is a structured audit of an existing implementation.
- `@accessibility` - Use when accessibility remediation or specialist review becomes the main work.
- `@frontend-debugging` - Use when the main problem is implementation failure rather than design execution.
- `@performance-optimization` - Use when the task is dominated by Core Web Vitals or runtime performance remediation.
- `@design-system` - Use when the work shifts from one interface to reusable tokens, patterns, and governance.

## Additional Resources

### Local references

- [Execution workflow](references/execution-workflow.md)
- [Accessibility and semantics](references/accessibility-and-semantics.md)
- [Component responsiveness](references/component-responsiveness.md)
- [Modern color systems](references/modern-color-systems.md)
- [Motion and reduced motion](references/motion-and-reduced-motion.md)
- [Interaction and forms](references/interaction-and-forms.md)
- [Performance and loading](references/performance-and-loading.md)

### Local examples

- [Aesthetic direction worksheet](examples/aesthetic-direction-worksheet.md)
- [Responsive component patterns](examples/responsive-component-patterns.md)
- [Performance review checklist](examples/performance-review-checklist.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)

### Local scripts and routing

- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)
- [Router notes](agents/omni-import-router.md)

### Imported reference notes

#### The AI Slop Test

If you showed the interface to someone and told them AI made it, would they believe you instantly? If yes, treat that as a design failure signal.

A strong result should prompt questions about craft, not immediate recognition of a template pattern.

Use that test as a final qualitative check after semantics, responsiveness, accessibility, motion safety, and loading behavior are already in acceptable shape.
