---
name: "frontend-skill"
description: "Frontend Skill workflow skill. Use this skill when a user needs a visually strong landing page, marketing site, app surface, prototype, demo, or game UI shell with restrained composition, image-led hierarchy, cohesive content structure, responsive behavior, accessible motion, and performance-aware implementation."
version: "0.0.1"
category: "frontend"
tags:
  - "frontend-skill"
  - "frontend"
  - "landing-page"
  - "responsive-ui"
  - "accessibility"
  - "performance"
  - "motion"
  - "visual-design"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-02"
date_updated: "2026-04-02"
upstream_skill: "skills/frontend-skill"
upstream_author: "openai"
upstream_source: "community"
upstream_pr: "13"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "c292e03c3b041d3986375359a4bcf256e02890c8"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Frontend Skill

## Overview

This skill packages the upstream `skills/.curated/frontend-skill` workflow into an execution-oriented frontend delivery guide without hiding its origin.

Use it when the quality of the result depends on art direction, visual hierarchy, restraint, imagery, layout, and motion rather than component count alone. The goal is to ship interfaces that feel deliberate, premium, current, and usable across mobile and desktop.

This enhanced version preserves the imported intent while making the workflow more operational for real frontend work: define the visual thesis, structure the page semantically, implement responsive layout safely, prepare media correctly, add motion only where it improves hierarchy, and verify accessibility and performance before handoff.

Default toward award-level composition with practical discipline: one big idea per section, strong imagery, sparse copy, rigorous spacing, a small number of memorable motions, and no unnecessary chrome.

Imported source sections that did not map cleanly to the public headings are preserved here or in the local support pack. Notable imported themes include: Working Model, Beautiful Defaults, Landing Pages, Apps, Imagery, Copy, Motion, and Litmus Checks.

## When to Use This Skill

Use this skill when the request is primarily about frontend composition and implementation quality.

### Use this skill when

- The user needs a visually strong landing page, marketing site, editorial page, app surface, prototype, demo, or game UI shell.
- The result depends on composition, hierarchy, brand presence, responsive layout, imagery, and tasteful motion.
- You need to turn a visual direction into real frontend structure, not just produce mock copy or generic component lists.
- You need explicit checks for accessibility, responsive behavior, media handling, and Core Web Vitals risk.
- You want to preserve upstream provenance while still delivering a practical workflow and review packet.

### Do not use this skill when

- The task is mainly backend or API implementation.
- The task is framework architecture, state management design, or large-scale frontend platform engineering.
- The task is design-system governance or component-library maintenance across many products.
- The task is heavy game logic or engine-specific behavior rather than the UI shell.
- The task is ChatGPT Apps SDK integration or tool wiring rather than conventional frontend composition.
- The task is primarily a security audit, release process, or infrastructure review.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| New landing page or visual-first site | `examples/landing-page-brief-template.md` | Forces a clear visual thesis, content map, CTA, and media plan before implementation |
| Product surface, dashboard, or workspace UI | `examples/app-surface-structure-template.md` | Keeps the layout focused on workspace, navigation, status, and action rather than marketing hero patterns |
| Accessibility review | `references/frontend-accessibility-checklist.md` | Covers landmarks, headings, focus, alt text, contrast, target size, and reduced-motion checks |
| Responsive layout and hero fit issues | `references/frontend-responsive-layout-checklist.md` | Helps diagnose viewport clipping, fixed-header collisions, and breakpoint reflow problems |
| Hero image or media-heavy page | `references/frontend-hero-media-prep-guide.md` | Reduces LCP, contrast, and crop-direction failures before they reach implementation |
| Motion or carousel review | `references/frontend-motion-safety-guide.md` | Keeps motion purposeful, performant, keyboard-safe, and compatible with reduced-motion preferences |
| Performance review before handoff | `references/frontend-performance-budget-guide.md` | Gives practical LCP, INP, and CLS checks for image-led and animation-heavy pages |
| Final merge or handoff | `references/frontend-handoff-checklist.md` | Ensures the reviewer gets evidence, not just claims |
| Scope drift or handoff decision | `agents/frontend-router.md` | Routes to app integration, backend, design-system, documentation, or game-specialist skills |

## Workflow

1. **Confirm the deliverable type**  
   Decide whether the task is a landing page, app surface, prototype/demo, or game UI shell. This changes layout, copy density, and motion choices.

2. **Write the pre-build brief**  
   Before building, write:
   - visual thesis: one sentence describing mood, material, and energy
   - content plan: hero, support, detail, final CTA
   - interaction thesis: 2-3 motion ideas that materially improve feel or clarity

3. **Choose the page structure before styling**  
   Map semantic landmarks and section jobs first. Use meaningful headings, a clear main content region, and one responsibility per section.

4. **Plan the first viewport deliberately**  
   Treat the first screen like a poster, not a document. Confirm what must be visible immediately: brand/product, promise, primary CTA, and dominant visual anchor.

5. **Design responsive behavior early**  
   Start mobile-first. Check whether the hero, header, CTA, and visual anchor still work at narrow widths. Avoid assuming raw `100vh` is safe on mobile; account for browser chrome, keyboards, and fixed headers.

6. **Prepare media before committing layout**  
   Choose image crops, focal points, and file formats intentionally. Reserve space for images and embeds. Use responsive images where appropriate and lazy-load non-critical media.

7. **Implement restrained visual hierarchy**  
   Start with composition, not components. Use spacing, scale, cropping, alignment, and contrast before adding cards, borders, or decorative UI devices.

8. **Add motion only where it improves hierarchy or affordance**  
   Use a small number of intentional motions: hero entrance, scroll-linked depth, hover/reveal, or layout transition. Motion must remain smooth, optional when necessary, and removable when ornamental.

9. **Run accessibility checks**  
   Verify landmarks, heading order, text contrast, keyboard reachability, visible focus, target sizing, image semantics, and reduced-motion behavior.

10. **Run performance checks**  
    Inspect likely LCP content, reserve media dimensions to avoid CLS, and avoid heavy interaction scripts that harm INP. If the page feels premium only when over-animated, simplify it.

11. **Validate against deliverable-specific litmus checks**  
    Re-check whether each section has one job, whether cards are truly necessary, and whether the first viewport communicates clearly in one glance.

12. **Prepare handoff evidence**  
    Record what was built, what assets were used, what was tested across breakpoints, what accessibility and performance checks were performed, and any remaining reviewer concerns.

### Deliverable branches

#### Landing page / marketing site

Use this default sequence unless the brief strongly argues otherwise:

1. Hero: brand or product, promise, CTA, one dominant visual
2. Support: one concrete feature, proof point, or offer
3. Detail: workflow, atmosphere, story, or product depth
4. Final CTA: convert, start, visit, contact, or download

#### App surface / dashboard / admin UI

Default to utility over marketing:

- prioritize orientation, status, and action
- organize around workspace, navigation, secondary context, and one clear accent
- avoid decorative hero sections unless explicitly requested
- use cards only when the card itself is the interaction

#### Prototype / demo

Keep the interaction thesis explicit. The prototype should show where hierarchy, motion, and content sequencing do real work, not just present styled frames.

#### Game UI shell

Use this skill for menus, shell layout, scene overlays, HUD framing, and visual presentation. Hand off when the work becomes gameplay logic, engine-specific systems, or advanced game-state architecture.

## Examples

### Example 1: Start a landing-page build with a proper brief

```text
Use @frontend-skill to design and implement a premium landing page for <product>. Start by filling the landing page brief template, define the first-viewport hierarchy, choose the hero media approach, then build with accessibility and Core Web Vitals checks before handoff.
```

**Expected outcome:** A page plan with clear hero hierarchy, media strategy, section sequence, and review criteria before code changes expand.

### Example 2: Audit a visually strong page that feels weak on mobile

```text
Use @frontend-skill to review this landing page for mobile viewport failures. Check hero height assumptions, header overlap, CTA visibility, image crop behavior, contrast over imagery, and reduced-motion handling. Summarize exact fixes.
```

**Expected outcome:** A breakpoint-aware review identifying clipped content, unstable hero fit, unreadable text, or motion issues with concrete remedies.

### Example 3: Review a dashboard that has turned into a card mosaic

```text
Use @frontend-skill to simplify this dashboard UI. Preserve the data and actions, but remove unnecessary card treatment, improve hierarchy, and rewrite headings so the page reads like product UI instead of marketing.
```

**Expected outcome:** A cleaner app surface organized around workspace, navigation, status, and action.

### Example 4: Create a motion review packet before merge

```text
Use @frontend-skill to document every meaningful animation on this page, explain its purpose, identify reduced-motion behavior, and flag any interaction or accessibility risks.
```

**Expected outcome:** A review artifact that distinguishes purposeful motion from ornamental motion and makes handoff safer.

## Best Practices

### Composition and hierarchy

#### Do

- Start with composition, not components.
- Prefer a full-bleed hero or full-canvas visual anchor when the brief calls for strong brand presence.
- Make the brand or product unmistakable in the first screen.
- Give each section one job, one dominant visual idea, and one primary takeaway.
- Use whitespace, alignment, scale, cropping, and contrast before adding chrome.
- Default to cardless layouts. Use sections, columns, lists, media blocks, and dividers first.

#### Do not

- Start with generic SaaS card grids.
- Put the hero inside a boxed center column when the page needs full-bleed presence.
- Let the headline overpower the brand on branded pages.
- Stack many small UI devices to compensate for weak hierarchy.
- Repeat the same mood statement across multiple sections.

### Responsive layout and viewport behavior

#### Do

- Design mobile-first and test the first viewport at narrow sizes early.
- Budget for sticky or fixed headers when sizing heroes.
- Prefer viewport-safe sizing decisions over simplistic raw `100vh` assumptions.
- Keep the main CTA visible and tappable without layout collisions.
- Re-check text wrapping, crop direction, and spacing at common mobile and tablet breakpoints.

#### Do not

- Assume desktop-first composition will gracefully compress to mobile.
- Let mobile browser chrome or keyboard behavior hide hero content.
- Use split-screen heroes unless the text side stays visually calm and readable.

### Accessibility

#### Do

- Use semantic landmarks and meaningful heading structure.
- Keep one clear top-level page heading and logical section headings.
- Ensure text over imagery maintains reliable contrast.
- Use meaningful alt text for informative images and hide decorative imagery from assistive tech appropriately.
- Ensure keyboard access, visible focus states, and usable target sizes.
- Respect reduced-motion preferences for any non-essential animation.

#### Do not

- Use imagery, iconography, or motion that adds noise to assistive technology.
- Depend on color alone to communicate state.
- Ship autoplaying or persistent motion without user control when it can distract or disorient.

### Performance

#### Do

- Treat hero media as likely LCP content and optimize it accordingly.
- Reserve width and height for images, embeds, and media regions to reduce CLS.
- Lazy-load below-the-fold media.
- Keep font and animation choices restrained enough to preserve responsiveness.
- Prefer simpler interaction patterns when animation harms input responsiveness.

#### Do not

- Ship oversized hero images by default.
- Add multiple heavy media layers above the fold.
- Let premium styling depend on expensive main-thread work.
- Use motion that causes scroll jank or delayed interactions.

### Motion

#### Do

- Use 2-3 intentional motions at most for visual-first work unless the brief clearly requires more.
- Make motion reinforce hierarchy, narrative progression, or affordance.
- Keep animation fast, restrained, and smooth on mobile hardware.
- Provide pause/control behavior when motion persists or advances automatically.

#### Do not

- Use a carousel without a narrative reason.
- Autoplay movement that competes with reading or interaction.
- Add scroll effects just to make the page look busy.
- Keep motion that looks impressive in a recording but harms usability.

### Imported operating rules preserved from source intent

- No cards by default.
- No hero cards by default.
- No boxed or center-column hero when the brief calls for full bleed.
- No more than one dominant idea per section.
- No section should need many tiny UI devices to explain itself.
- No filler copy.
- No more than two typefaces without a clear reason.
- No more than one accent color unless the product already has a strong system.

## Troubleshooting

### Problem: The page looks premium on desktop but falls apart on mobile

**Symptoms:** Hero text wraps badly, CTA drops below the fold, the image crop loses its focal point, or the fixed header pushes key content out of the first viewport.

**Solution:** Rework the first viewport using the responsive layout checklist. Budget header height into the hero, reduce copy length, re-crop or art-direct the image for narrow screens, and use viewport-safe sizing rather than relying blindly on raw `100vh`.

### Problem: Text over the hero image is hard to read

**Symptoms:** Contrast varies across the image, brand text disappears over bright regions, or the CTA is technically present but visually weak.

**Solution:** Change the image crop, choose a calmer tonal area for text, add a restrained overlay only if needed, shorten copy, and verify contrast again. If the image cannot support legible text, change the image rather than layering on decorative fixes.

### Problem: The page shifts during load

**Symptoms:** Hero media jumps, sections move after images appear, buttons shift when fonts load, or embeds push content downward.

**Solution:** Reserve dimensions for images and embeds, stabilize media containers, reduce late layout mutations, and review font-loading behavior. Re-check likely CLS sources before merge.

### Problem: The page feels sluggish even though it looks polished

**Symptoms:** Hover states lag, scrolling stutters, transitions delay interaction, or input feels sticky on lower-powered devices.

**Solution:** Remove non-essential animation, simplify layout-affecting transitions, reduce concurrent effects, and inspect whether scripts or motion libraries are doing too much work during interaction. Prioritize responsive input over visual flourish.

### Problem: The carousel or storytelling strip is inaccessible or annoying

**Symptoms:** Auto-advancing content steals attention, keyboard users cannot operate controls reliably, focus order becomes confusing, or the content has no real narrative purpose.

**Solution:** Remove the carousel unless it is clearly justified. If it must stay, provide controls, pause behavior, logical focus order, and keyboard-safe navigation. Consider simpler scroll-snap or static section alternatives when they communicate the same story more clearly.

### Problem: The app UI reads like marketing instead of product

**Symptoms:** A dashboard has aspirational hero copy, decorative gradients behind operational content, too many accent colors, or every region is boxed in a card.

**Solution:** Rewrite headings into utility language, remove decorative hero treatment, simplify surfaces, reduce accents, and organize around workspace, navigation, status, and actions instead of campaign-style presentation.

### Problem: The operator answered too generically and lost the imported intent

**Symptoms:** The result ignores the upstream workflow, omits provenance, or defaults to generic frontend advice instead of the visual discipline this skill is meant to preserve.

**Solution:** Re-open the local support pack, restate the visual thesis, sequence, and imported design rules, then continue with explicit provenance and concrete frontend decisions.

## Related Skills

- `@chatgpt-apps` - Use when the work becomes Apps SDK integration, tool wiring, or ChatGPT app behavior instead of conventional frontend composition.
- `@develop-web-game` - Use when the task moves from UI shell design into gameplay systems, engine logic, or interactive game mechanics.
- `@aspnet-core` - Use when backend endpoints, server rendering strategy, or API integration dominates the task.
- `@doc` - Use when the main deliverable is handoff documentation, UX writing systems, or broader documentation packaging.

See `agents/frontend-router.md` for more explicit routing triggers.

## Additional Resources

### References

- [Frontend accessibility checklist](references/frontend-accessibility-checklist.md)
- [Frontend responsive layout checklist](references/frontend-responsive-layout-checklist.md)
- [Frontend performance budget guide](references/frontend-performance-budget-guide.md)
- [Frontend motion safety guide](references/frontend-motion-safety-guide.md)
- [Frontend hero media prep guide](references/frontend-hero-media-prep-guide.md)
- [Frontend handoff checklist](references/frontend-handoff-checklist.md)

### Examples

- [Landing page brief template](examples/landing-page-brief-template.md)
- [App surface structure template](examples/app-surface-structure-template.md)
- [Motion review packet](examples/motion-review-packet.md)
- [Visual QA worksheet](examples/visual-qa-worksheet.md)

### Agents

- [Frontend router](agents/frontend-router.md)

## Preserved source guidance

### Beautiful defaults

- Start with composition, not components.
- Prefer a full-bleed hero or full-canvas visual anchor.
- Make the brand or product name the loudest text.
- Keep copy short enough to scan in seconds.
- Limit the system: two typefaces max, one accent color by default.
- Treat the first viewport as a poster, not a document.

### Landing-page defaults

Default sequence:

1. Hero: brand or product, promise, CTA, and one dominant visual
2. Support: one concrete feature, offer, or proof point
3. Detail: atmosphere, workflow, product depth, or story
4. Final CTA: convert, start, visit, or contact

Hero rules:

- One composition only.
- Full-bleed image or dominant visual plane.
- Constrain the inner text/action column, not the hero itself, when full bleed is required.
- Brand first, headline second, body third, CTA fourth.
- No hero cards, stat strips, logo clouds, pill soup, or floating dashboards by default.
- Keep headlines to roughly 2-3 lines on desktop and readable in one glance on mobile.
- Keep the text column narrow and anchored to a calm area of the image.
- All text over imagery must maintain strong contrast and clear tap targets.

### App defaults

- Calm surface hierarchy
- Strong typography and spacing
- Few colors
- Dense but readable information
- Minimal chrome
- Cards only when the card is the interaction

### Imagery

- Imagery must do narrative work.
- Prefer real-looking, in-situ imagery over abstract filler.
- Choose or crop images with a stable tonal area for text.
- Avoid images with embedded signage, logos, or typographic clutter fighting the UI.
- If multiple moments are needed, use multiple images, not one collage.

### Copy

- Write in product language, not design commentary.
- Let the headline carry the meaning.
- Supporting copy should usually be one short sentence.
- Cut repetition between sections.
- Give every section one responsibility: explain, prove, deepen, or convert.

### Motion litmus checks

- Is the brand or product unmistakable in the first screen?
- Is there one strong visual anchor?
- Can the page be understood by scanning headlines only?
- Does each section have one job?
- Are cards actually necessary?
- Does motion improve hierarchy or atmosphere?
- Would the design still feel premium if all decorative shadows were removed?
