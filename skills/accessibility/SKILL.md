---
name: accessibility
description: "Accessibility (a11y) workflow skill. Use this skill when the user needs Audit and improve web accessibility following WCAG 2.1 guidelines. Use when asked to \"improve accessibility\", \"a11y audit\", \"WCAG compliance\", \"screen reader support\", \"keyboard navigation\", or \"make accessible\". Do NOT use for SEO (use seo), performance (use core-web-vitals), or comprehensive site audits covering multiple areas (use web-quality-audit) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["accessibility", "audit", "and", "improve", "web", "following", "wcag", "guidelines"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "web-quality-skills"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Accessibility (a11y)

## Overview

This public intake copy packages `packages/skills-catalog/skills/(quality)/web-accessibility` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Accessibility (a11y) Comprehensive accessibility guidelines based on WCAG 2.1 and Lighthouse accessibility audits. Goal: make content usable by everyone, including people with disabilities.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Conformance levels, Perceivable, Operable, Understandable, Robust, Testing checklist.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Audit and improve web accessibility following WCAG 2.1 guidelines. Use when asked to "improve accessibility", "a11y audit", "WCAG compliance", "screen reader support", "keyboard navigation", or "make accessible". Do....
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

#### Imported: Conformance levels

| Level   | Requirement            | Target                                                |
| ------- | ---------------------- | ----------------------------------------------------- |
| **A**   | Minimum accessibility  | Must pass                                             |
| **AA**  | Standard compliance    | Should pass (legal requirement in many jurisdictions) |
| **AAA** | Enhanced accessibility | Nice to have                                          |

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @accessibility to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/accessibility/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/accessibility/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @accessibility using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Principle - Description
- Perceivable - Content can be perceived through different senses
- Operable - Interface can be operated by all users
- Understandable - Content and interface are understandable
- Robust - Content works with assistive technologies
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: WCAG Principles: POUR

| Principle          | Description                                       |
| ------------------ | ------------------------------------------------- |
| **P**erceivable    | Content can be perceived through different senses |
| **O**perable       | Interface can be operated by all users            |
| **U**nderstandable | Content and interface are understandable          |
| **R**obust         | Content works with assistive technologies         |

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(quality)/web-accessibility`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-seo` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/WCAG.md` |
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

#### Imported: References

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Deque axe Rules](https://dequeuniversity.com/rules/axe/)
- [Web Quality Audit](../web-quality-audit/SKILL.md)

#### Imported: Perceivable

### Text alternatives (1.1)

**Images require alt text:**

```html
<!-- ❌ Missing alt -->
<img src="chart.png" />

<!-- ✅ Descriptive alt -->
<img src="chart.png" alt="Bar chart showing 40% increase in Q3 sales" />

<!-- ✅ Decorative image (empty alt) -->
<img src="decorative-border.png" alt="" role="presentation" />

<!-- ✅ Complex image with longer description -->
<figure>
  <img src="infographic.png" alt="2024 market trends infographic" aria-describedby="infographic-desc" />
  <figcaption id="infographic-desc">
    <!-- Detailed description -->
  </figcaption>
</figure>
```

**Icon buttons need accessible names:**

```html
<!-- ❌ No accessible name -->
<button>
  <svg><!-- menu icon --></svg>
</button>

<!-- ✅ Using aria-label -->
<button aria-label="Open menu">
  <svg aria-hidden="true"><!-- menu icon --></svg>
</button>

<!-- ✅ Using visually hidden text -->
<button>
  <svg aria-hidden="true"><!-- menu icon --></svg>
  <span class="visually-hidden">Open menu</span>
</button>
```

**Visually hidden class:**

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Color contrast (1.4.3, 1.4.6)

| Text Size                          | AA minimum | AAA enhanced |
| ---------------------------------- | ---------- | ------------ |
| Normal text (< 18px / < 14px bold) | 4.5:1      | 7:1          |
| Large text (≥ 18px / ≥ 14px bold)  | 3:1        | 4.5:1        |
| UI components & graphics           | 3:1        | 3:1          |

```css
/* ❌ Low contrast (2.5:1) */
.low-contrast {
  color: #999;
  background: #fff;
}

/* ✅ Sufficient contrast (7:1) */
.high-contrast {
  color: #333;
  background: #fff;
}

/* ✅ Focus states need contrast too */
:focus-visible {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}
```

**Don't rely on color alone:**

```html
<!-- ❌ Only color indicates error -->
<input class="error-border" />
<style>
  .error-border {
    border-color: red;
  }
</style>

<!-- ✅ Color + icon + text -->
<div class="field-error">
  <input aria-invalid="true" aria-describedby="email-error" />
  <span id="email-error" class="error-message">
    <svg aria-hidden="true"><!-- error icon --></svg>
    Please enter a valid email address
  </span>
</div>
```

### Media alternatives (1.2)

```html
<!-- Video with captions -->
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" srclang="en" label="English" default />
  <track kind="descriptions" src="descriptions.vtt" srclang="en" label="Descriptions" />
</video>

<!-- Audio with transcript -->
<audio controls>
  <source src="podcast.mp3" type="audio/mp3" />
</audio>
<details>
  <summary>Transcript</summary>
  <p>Full transcript text...</p>
</details>
```

---

#### Imported: Operable

### Keyboard accessible (2.1)

**All functionality must be keyboard accessible:**

```javascript
// ❌ Only handles click
element.addEventListener('click', handleAction)

// ✅ Handles both click and keyboard
element.addEventListener('click', handleAction)
element.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    handleAction()
  }
})
```

**No keyboard traps:**

```javascript
// Modal focus management
function openModal(modal) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  )
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  // Trap focus within modal
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
    if (e.key === 'Escape') {
      closeModal()
    }
  })

  firstElement.focus()
}
```

### Focus visible (2.4.7)

```css
/* ❌ Never remove focus outlines */
*:focus {
  outline: none;
}

/* ✅ Use :focus-visible for keyboard-only focus */
:focus {
  outline: none;
}

:focus-visible {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

/* ✅ Or custom focus styles */
button:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 95, 204, 0.5);
}
```

### Skip links (2.4.1)

```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header><!-- navigation --></header>
  <main id="main-content" tabindex="-1">
    <!-- main content -->
  </main>
</body>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### Timing (2.2)

```javascript
// Allow users to extend time limits
function showSessionWarning() {
  const modal = createModal({
    title: 'Session Expiring',
    content: 'Your session will expire in 2 minutes.',
    actions: [
      { label: 'Extend session', action: extendSession },
      { label: 'Log out', action: logout },
    ],
    timeout: 120000, // 2 minutes to respond
  })
}
```

### Motion (2.3)

```css
/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

#### Imported: Understandable

### Page language (3.1.1)

```html
<!-- ❌ No language specified -->
<html>
  <!-- ✅ Language specified -->
  <html lang="en">
    <!-- ✅ Language changes within page -->
    <p>The French word for hello is <span lang="fr">bonjour</span>.</p>
  </html>
</html>
```

### Consistent navigation (3.2.3)

```html
<!-- Navigation should be consistent across pages -->
<nav aria-label="Main">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

### Form labels (3.3.2)

```html
<!-- ❌ No label association -->
<input type="email" placeholder="Email" />

<!-- ✅ Explicit label -->
<label for="email">Email address</label>
<input type="email" id="email" name="email" autocomplete="email" required />

<!-- ✅ Implicit label -->
<label>
  Email address
  <input type="email" name="email" autocomplete="email" required />
</label>

<!-- ✅ With instructions -->
<label for="password">Password</label>
<input type="password" id="password" aria-describedby="password-requirements" />
<p id="password-requirements">Must be at least 8 characters with one number.</p>
```

### Error handling (3.3.1, 3.3.3)

```html
<!-- Announce errors to screen readers -->
<form novalidate>
  <div class="field" aria-live="polite">
    <label for="email">Email</label>
    <input type="email" id="email" aria-invalid="true" aria-describedby="email-error" />
    <p id="email-error" class="error" role="alert">Please enter a valid email address (e.g., name@example.com)</p>
  </div>
</form>
```

```javascript
// Focus first error on submit
form.addEventListener('submit', (e) => {
  const firstError = form.querySelector('[aria-invalid="true"]')
  if (firstError) {
    e.preventDefault()
    firstError.focus()

    // Announce error summary
    const errorSummary = document.getElementById('error-summary')
    errorSummary.textContent = `${errors.length} errors found. Please fix them and try again.`
    errorSummary.focus()
  }
})
```

---

#### Imported: Robust

### Valid HTML (4.1.1)

```html
<!-- ❌ Duplicate IDs -->
<div id="content">...</div>
<div id="content">...</div>

<!-- ❌ Invalid nesting -->
<a href="/"><button>Click</button></a>

<!-- ✅ Unique IDs -->
<div id="main-content">...</div>
<div id="sidebar-content">...</div>

<!-- ✅ Proper nesting -->
<a href="/" class="button-link">Click</a>
```

### ARIA usage (4.1.2)

**Prefer native elements:**

```html
<!-- ❌ ARIA role on div -->
<div role="button" tabindex="0">Click me</div>

<!-- ✅ Native button -->
<button>Click me</button>

<!-- ❌ ARIA checkbox -->
<div role="checkbox" aria-checked="false">Option</div>

<!-- ✅ Native checkbox -->
<label><input type="checkbox" /> Option</label>
```

**When ARIA is needed:**

```html
<!-- Custom tabs component -->
<div role="tablist" aria-label="Product information">
  <button role="tab" id="tab-1" aria-selected="true" aria-controls="panel-1">Description</button>
  <button role="tab" id="tab-2" aria-selected="false" aria-controls="panel-2" tabindex="-1">Reviews</button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">
  <!-- Panel content -->
</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
  <!-- Panel content -->
</div>
```

### Live regions (4.1.3)

```html
<!-- Status updates -->
<div aria-live="polite" aria-atomic="true" class="status">
  <!-- Content updates announced to screen readers -->
</div>

<!-- Urgent alerts -->
<div role="alert" aria-live="assertive">
  <!-- Interrupts current announcement -->
</div>
```

```javascript
// Announce dynamic content changes
function showNotification(message, type = 'polite') {
  const container = document.getElementById(`${type}-announcer`)
  container.textContent = '' // Clear first
  requestAnimationFrame(() => {
    container.textContent = message
  })
}
```

---

#### Imported: Testing checklist

### Automated testing

```bash
# Lighthouse accessibility audit
npx lighthouse https://example.com --only-categories=accessibility

# axe-core
npm install @axe-core/cli -g
axe https://example.com
```

### Manual testing

- [ ] **Keyboard navigation:** Tab through entire page, use Enter/Space to activate
- [ ] **Screen reader:** Test with VoiceOver (Mac), NVDA (Windows), or TalkBack (Android)
- [ ] **Zoom:** Content usable at 200% zoom
- [ ] **High contrast:** Test with Windows High Contrast Mode
- [ ] **Reduced motion:** Test with `prefers-reduced-motion: reduce`
- [ ] **Focus order:** Logical and follows visual order

### Screen reader commands

| Action        | VoiceOver (Mac)     | NVDA (Windows) |
| ------------- | ------------------- | -------------- |
| Start/Stop    | ⌘ + F5              | Ctrl + Alt + N |
| Next item     | VO + →              | ↓              |
| Previous item | VO + ←              | ↑              |
| Activate      | VO + Space          | Enter          |
| Headings list | VO + U, then arrows | H / Shift + H  |
| Links list    | VO + U              | K / Shift + K  |

---

#### Imported: Common issues by impact

### Critical (fix immediately)

1. Missing form labels
2. Missing image alt text
3. Insufficient color contrast
4. Keyboard traps
5. No focus indicators

### Serious (fix before launch)

1. Missing page language
2. Missing heading structure
3. Non-descriptive link text
4. Auto-playing media
5. Missing skip links

### Moderate (fix soon)

1. Missing ARIA labels on icons
2. Inconsistent navigation
3. Missing error identification
4. Timing without controls
5. Missing landmark regions
