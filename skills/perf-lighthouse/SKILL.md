---
name: perf-lighthouse
description: "Lighthouse Audits workflow skill. Use this skill when the user needs Run Lighthouse audits locally via CLI or Node API, parse and interpret reports, and set performance budgets. Use when measuring site performance, understanding Lighthouse scores, setting up budgets, or integrating audits into CI. Triggers on: lighthouse, run lighthouse, lighthouse score, performance audit, performance budget. Do NOT use for fixing specific performance issues (use perf-web-optimization or core-web-vitals) or Astro-specific optimization (use perf-astro) and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["perf-lighthouse", "run", "lighthouse", "audits", "locally", "via", "cli", "node"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-01"
date_updated: "2026-04-01"
---

# Lighthouse Audits

## Overview

This public intake copy packages `packages/skills-catalog/skills/(performance)/perf-lighthouse` from `https://github.com/tech-leads-club/agent-skills.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Lighthouse Audits

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CLI Quick Start, Common Flags, Performance Budgets, Node API, GitHub Actions, Lighthouse CI (LHCI).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Run Lighthouse audits locally via CLI or Node API, parse and interpret reports, and set performance budgets. Use when measuring site performance, understanding Lighthouse scores, setting up budgets, or integrating....
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

#### Imported: CLI Quick Start

```bash
# Install
npm install -g lighthouse

# Basic audit
lighthouse https://example.com

# Mobile performance only (faster)
lighthouse https://example.com --preset=perf --form-factor=mobile

# Output JSON for parsing
lighthouse https://example.com --output=json --output-path=./report.json

# Output HTML report
lighthouse https://example.com --output=html --output-path=./report.html
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @perf-lighthouse to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/perf-lighthouse/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/perf-lighthouse/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @perf-lighthouse using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(performance)/perf-lighthouse`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

| Issue               | Solution                                              |
| ------------------- | ----------------------------------------------------- |
| Inconsistent scores | Run multiple times (`--number-of-runs=3`), use median |
| Chrome not found    | Set `CHROME_PATH` env var                             |
| Timeouts            | Increase with `--max-wait-for-load=60000`             |
| Auth required       | Use `--extra-headers` or puppeteer script             |

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

#### Imported: Common Flags

```bash
--preset=perf           # Performance only (skip accessibility, SEO, etc.)
--form-factor=mobile    # Mobile device emulation (default)
--form-factor=desktop   # Desktop
--throttling-method=devtools  # More accurate throttling
--only-categories=performance,accessibility  # Specific categories
--chrome-flags="--headless"   # Headless Chrome
```

#### Imported: Performance Budgets

Create `budget.json`:

```json
[
  {
    "resourceSizes": [
      { "resourceType": "script", "budget": 200 },
      { "resourceType": "image", "budget": 300 },
      { "resourceType": "stylesheet", "budget": 50 },
      { "resourceType": "total", "budget": 500 }
    ],
    "resourceCounts": [{ "resourceType": "third-party", "budget": 5 }],
    "timings": [
      { "metric": "interactive", "budget": 3000 },
      { "metric": "first-contentful-paint", "budget": 1500 },
      { "metric": "largest-contentful-paint", "budget": 2500 }
    ]
  }
]
```

Run with budget:

```bash
lighthouse https://example.com --budget-path=./budget.json
```

#### Imported: Node API

```javascript
import lighthouse from 'lighthouse'
import * as chromeLauncher from 'chrome-launcher'

async function runAudit(url) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] })

  const result = await lighthouse(url, {
    port: chrome.port,
    onlyCategories: ['performance'],
    formFactor: 'mobile',
    throttling: {
      cpuSlowdownMultiplier: 4,
    },
  })

  await chrome.kill()

  const { performance } = result.lhr.categories
  const { 'largest-contentful-paint': lcp } = result.lhr.audits

  return {
    score: Math.round(performance.score * 100),
    lcp: lcp.numericValue,
  }
}
```

#### Imported: GitHub Actions

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse

on:
  pull_request:
  push:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build site
        run: npm ci && npm run build

      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v11
        with:
          urls: |
            http://localhost:3000
            http://localhost:3000/about
          budgetPath: ./budget.json
          uploadArtifacts: true
          temporaryPublicStorage: true
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

#### Imported: Lighthouse CI (LHCI)

For full CI integration with historical tracking:

```bash
# Install
npm install -g @lhci/cli

# Initialize config
lhci wizard
```

Creates `lighthouserc.js`:

```javascript
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/', 'http://localhost:3000/about'],
      startServerCommand: 'npm run start',
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1500 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
      },
    },
    upload: {
      target: 'temporary-public-storage', // or 'lhci' for self-hosted
    },
  },
}
```

Run:

```bash
lhci autorun
```

#### Imported: Parse JSON Report

```javascript
import fs from 'fs'

const report = JSON.parse(fs.readFileSync('./report.json'))

// Overall scores (0-1, multiply by 100 for percentage)
const scores = {
  performance: report.categories.performance.score,
  accessibility: report.categories.accessibility.score,
  seo: report.categories.seo.score,
}

// Core Web Vitals
const vitals = {
  lcp: report.audits['largest-contentful-paint'].numericValue,
  cls: report.audits['cumulative-layout-shift'].numericValue,
  fcp: report.audits['first-contentful-paint'].numericValue,
  tbt: report.audits['total-blocking-time'].numericValue,
}

// Failed audits
const failed = Object.values(report.audits)
  .filter((a) => a.score !== null && a.score < 0.9)
  .map((a) => ({ id: a.id, score: a.score, title: a.title }))
```

#### Imported: Compare Builds

```bash
# Save baseline
lighthouse https://prod.example.com --output=json --output-path=baseline.json

# Run on PR
lighthouse https://preview.example.com --output=json --output-path=pr.json

# Compare (custom script)
node compare-reports.js baseline.json pr.json
```

Simple comparison script:

```javascript
const baseline = JSON.parse(fs.readFileSync(process.argv[2]))
const pr = JSON.parse(fs.readFileSync(process.argv[3]))

const metrics = ['largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time']

metrics.forEach((metric) => {
  const base = baseline.audits[metric].numericValue
  const current = pr.audits[metric].numericValue
  const diff = (((current - base) / base) * 100).toFixed(1)
  const emoji = current <= base ? '✅' : '❌'
  console.log(`${emoji} ${metric}: ${diff}% (${base.toFixed(0)} → ${current.toFixed(0)})`)
})
```
