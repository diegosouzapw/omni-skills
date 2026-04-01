---
name: web-quality-audit
description: "Web quality audit workflow skill. Use this skill when the user needs Comprehensive web quality audit covering performance, accessibility, SEO, and best practices in a single review. Use when asked to \"audit my site\", \"review web quality\", \"run lighthouse audit\", \"check page quality\", or \"optimize my website\" across multiple areas at once. Orchestrates specialized skills for depth. Do NOT use for single-area audits \u2014 prefer core-web-vitals, web-accessibility, seo, or web-best-practices for focused work and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["web-quality-audit", "comprehensive", "web", "quality", "audit", "covering", "performance", "accessibility"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "web-quality-skills"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Web quality audit

## Overview

This public intake copy packages `packages/skills-catalog/skills/(quality)/web-quality-audit` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Web quality audit Comprehensive quality review based on Google Lighthouse audits. Covers Performance, Accessibility, SEO, and Best Practices across 150+ checks.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How it works, Audit categories, Severity levels, Audit output format, Audit results, Quick checklist.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Comprehensive web quality audit covering performance, accessibility, SEO, and best practices in a single review. Use when asked to "audit my site", "review web quality", "run lighthouse audit", "check page quality", or....
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: How it works

1. Analyze the provided code/project for quality issues
2. Categorize findings by severity (Critical, High, Medium, Low)
3. Provide specific, actionable recommendations
4. Include code examples for fixes

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @web-quality-audit to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/web-quality-audit/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/web-quality-audit/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @web-quality-audit using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(quality)/web-quality-audit`, fails to mention provenance, or does not use the support pack at all.
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
| `scripts` | origin inspection and support-pack listing | `scripts/analyze.sh` |
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

#### Imported: References

For detailed guidelines on specific areas:

- [Performance Optimization](../performance/SKILL.md)
- [Core Web Vitals](../core-web-vitals/SKILL.md)
- [Accessibility](../accessibility/SKILL.md)
- [SEO](../seo/SKILL.md)
- [Best Practices](../best-practices/SKILL.md)

#### Imported: Audit categories

### Performance (40% of typical issues)

**Core Web Vitals** — Must pass for good page experience:

- **LCP (Largest Contentful Paint) < 2.5s.** The largest visible element must render quickly. Optimize images, fonts, and server response time.
- **INP (Interaction to Next Paint) < 200ms.** User interactions must feel instant. Reduce JavaScript execution time and break up long tasks.
- **CLS (Cumulative Layout Shift) < 0.1.** Content must not jump around. Set explicit dimensions on images, embeds, and ads.

**Resource Optimization:**

- **Compress images.** Use WebP/AVIF with fallbacks. Serve correctly sized images via `srcset`.
- **Minimize JavaScript.** Remove unused code. Use code splitting. Defer non-critical scripts.
- **Optimize CSS.** Extract critical CSS. Remove unused styles. Avoid `@import`.
- **Efficient fonts.** Use `font-display: swap`. Preload critical fonts. Subset to needed characters.

**Loading Strategy:**

- **Preconnect to origins.** Add `<link rel="preconnect">` for third-party domains.
- **Preload critical assets.** LCP images, fonts, and above-fold CSS.
- **Lazy load below-fold content.** Images, iframes, and heavy components.
- **Cache effectively.** Long cache TTLs for static assets. Immutable caching for hashed files.

### Accessibility (30% of typical issues)

**Perceivable:**

- **Text alternatives.** Every `<img>` has meaningful `alt` text. Decorative images use `alt=""`.
- **Color contrast.** Minimum 4.5:1 for normal text, 3:1 for large text (WCAG AA).
- **Don't rely on color alone.** Use icons, patterns, or text alongside color indicators.
- **Captions and transcripts.** Video has captions. Audio has transcripts.

**Operable:**

- **Keyboard accessible.** All functionality available via keyboard. No keyboard traps.
- **Focus visible.** Clear focus indicators on all interactive elements.
- **Skip links.** Provide "Skip to main content" for keyboard users.
- **Sufficient time.** Users can extend time limits. No auto-advancing content without controls.

**Understandable:**

- **Page language.** Set `lang` attribute on `<html>`.
- **Consistent navigation.** Same navigation structure across pages.
- **Error identification.** Form errors clearly described and associated with fields.
- **Labels and instructions.** All form inputs have associated labels.

**Robust:**

- **Valid HTML.** No duplicate IDs. Properly nested elements.
- **ARIA used correctly.** Prefer native elements. ARIA roles match behavior.
- **Name, role, value.** Interactive elements have accessible names and correct roles.

### SEO (15% of typical issues)

**Crawlability:**

- **Valid robots.txt.** Doesn't block important resources.
- **XML sitemap.** Lists all important pages. Submitted to Search Console.
- **Canonical URLs.** Prevent duplicate content issues.
- **No noindex on important pages.** Check meta robots and headers.

**On-Page SEO:**

- **Unique title tags.** 50-60 characters. Primary keyword included.
- **Meta descriptions.** 150-160 characters. Compelling and unique.
- **Heading hierarchy.** Single `<h1>`. Logical heading structure.
- **Descriptive link text.** Not "click here" or "read more".

**Technical SEO:**

- **Mobile-friendly.** Responsive design. Tap targets ≥ 48px.
- **HTTPS.** Secure connection required.
- **Fast loading.** Performance directly impacts ranking.
- **Structured data.** JSON-LD for rich snippets (Article, Product, FAQ, etc.).

### Best practices (15% of typical issues)

**Security:**

- **HTTPS everywhere.** No mixed content. HSTS enabled.
- **No vulnerable libraries.** Keep dependencies updated.
- **CSP headers.** Content Security Policy to prevent XSS.
- **No exposed source maps.** In production builds.

**Modern Standards:**

- **No deprecated APIs.** Replace `document.write`, synchronous XHR, etc.
- **Valid doctype.** Use `<!DOCTYPE html>`.
- **Charset declared.** `<meta charset="UTF-8">` as first element in `<head>`.
- **No browser errors.** Clean console. No CORS issues.

**UX Patterns:**

- **No intrusive interstitials.** Especially on mobile.
- **Clear permission requests.** Only ask when needed, with context.
- **No misleading buttons.** Buttons do what they say.

#### Imported: Severity levels

| Level        | Description                                   | Action              |
| ------------ | --------------------------------------------- | ------------------- |
| **Critical** | Security vulnerabilities, complete failures   | Fix immediately     |
| **High**     | Core Web Vitals failures, major a11y barriers | Fix before launch   |
| **Medium**   | Performance opportunities, SEO improvements   | Fix within sprint   |
| **Low**      | Minor optimizations, code quality             | Fix when convenient |

#### Imported: Audit output format

When performing an audit, structure findings as:

```markdown

#### Imported: Audit results

### Critical issues (X found)

- **[Category]** Issue description. File: `path/to/file.js:123`
  - **Impact:** Why this matters
  - **Fix:** Specific code change or recommendation

### High priority (X found)

...

### Summary

- Performance: X issues (Y critical)
- Accessibility: X issues (Y critical)
- SEO: X issues
- Best Practices: X issues

### Recommended priority

1. First fix this because...
2. Then address...
3. Finally optimize...
```

#### Imported: Quick checklist

### Before every deploy

- [ ] Core Web Vitals passing
- [ ] No accessibility errors (axe/Lighthouse)
- [ ] No console errors
- [ ] HTTPS working
- [ ] Meta tags present

### Weekly review

- [ ] Check Search Console for issues
- [ ] Review Core Web Vitals trends
- [ ] Update dependencies
- [ ] Test with screen reader

### Monthly deep dive

- [ ] Full Lighthouse audit
- [ ] Performance profiling
- [ ] Accessibility audit with real users
- [ ] SEO keyword review
