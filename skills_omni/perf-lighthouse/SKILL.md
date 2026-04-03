---
name: "perf-lighthouse"
description: "Lighthouse Audits workflow skill. Use this skill when a user needs to run Lighthouse audits locally or in CI, generate and parse JSON/HTML reports, interpret scores and metrics, configure budgets or assertions, or automate repeatable audits with the CLI, Node API, or Lighthouse CI. Do not use it to fix specific performance problems; route optimization work to perf-web-optimization, core-web-vitals, or perf-astro as appropriate."
version: "0.0.1"
category: "cli-automation"
tags:
  - "perf-lighthouse"
  - "lighthouse"
  - "performance-audit"
  - "lhci"
  - "performance-budget"
  - "web-performance"
  - "cli"
  - "node-api"
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
date_added: "2026-04-01"
date_updated: "2026-04-02"
upstream_skill: "skills/perf-lighthouse"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "12"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2bccf6e90ded3cbcbbf30a0e9d06016be8ba0bc4"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
---

# Lighthouse Audits

## Overview

Use this skill to run Lighthouse audits in a controlled, repeatable way and turn the results into actionable evidence.

This skill covers:

- local Lighthouse CLI runs
- Node API automation
- report generation and parsing
- repeatable configuration for mobile or desktop runs
- performance budgets and Lighthouse CI assertions
- CI workflows that collect, assert, and retain artifacts
- interpretation of lab metrics versus aggregate scores
- authenticated or multi-step audits that need scripted flows

This skill is for **measuring and operationalizing Lighthouse**, not for fixing the underlying performance issues. Lighthouse produces **lab data**, so use it to detect regressions, compare builds under like-for-like conditions, and identify likely optimization targets. For real-user impact, pair Lighthouse findings with field data when available.

The original public intake emphasized provenance and import packaging. That intent is preserved, but this enhanced version is execution-first so agents can run audits, keep evidence, and hand off optimization work safely.

## When to Use This Skill

Use this skill when the request is primarily about **running or operationalizing Lighthouse**:

- Run a Lighthouse audit on one or more URLs locally.
- Generate HTML or JSON Lighthouse reports for review.
- Compare Lighthouse results between baseline and candidate builds.
- Parse Lighthouse JSON into a concise summary for a user, PR, or CI log.
- Set up a reusable Lighthouse config instead of long one-off CLI flags.
- Define a `budget.json` file for resource or timing budgets.
- Add Lighthouse CI to GitHub Actions or another CI system.
- Add pass/fail assertions for categories or specific metrics.
- Audit authenticated pages or SPA journeys with a scripted flow.

Do **not** use this skill when the request is mainly about **fixing** performance issues such as:

- improving LCP, CLS, TBT, image loading, caching, code splitting, or hydration
- framework-specific optimization work
- Core Web Vitals remediation strategy

Route those requests to:

- `@perf-web-optimization` for implementation changes
- `@core-web-vitals` for lab/field interpretation and CWV-focused follow-up
- `@perf-astro` for Astro-specific performance optimization

## Operating Table

| Goal | Command or path | Key options / notes | Evidence to keep | Common failure mode |
| --- | --- | --- | --- | --- |
| Single local audit | `lighthouse <url>` | Prefer explicit categories, output path, form factor | HTML or JSON report | Unclear defaults or no saved artifact |
| Repeatable local performance run | `lighthouse <url> --config-path=examples/lighthouse.config.js --output=json --output-path=./artifacts/lhr.json` | Prefer committed config over long flag strings | Config file, JSON report, Lighthouse version | Results not comparable across runs |
| Mobile versus desktop comparison | Run separate audits with explicit settings | Do not compare mixed form factors | Two named JSON reports | False regression due to different emulation |
| Budget check | `lighthouse <url> --budget-path=examples/budget.json --output=json --output-path=./artifacts/budget-lhr.json` | Good for resource and timing budgets | Budget file and report | Budget file exists but is not versioned |
| Node automation | `node examples/run-lighthouse-node.mjs <url> ./artifacts/node-lhr.json` | Use `finally` cleanup for Chrome | Script output and JSON report | Chrome process left running |
| Report summary | `node examples/parse-lhr-report.mjs ./artifacts/lhr.json` | Report metrics and failed audits, not score alone | Parsed summary in logs or PR | Over-indexing on overall score |
| Baseline versus candidate comparison | `node examples/compare-lhr-reports.mjs baseline.json candidate.json` | Compare same URL shape and environment | Both JSON reports and diff output | Comparing non-equivalent environments |
| CI collection and assertions | `lhci autorun --config=examples/lighthouserc.js` | Ensure app build/start/wait is deterministic | LHCI artifacts and config | App not ready before collection |
| Authenticated or multi-step flow | `node examples/authenticated-user-flow.mjs <url>` | Prefer scripted session setup over shell headers for complex auth | Flow script and generated report | Session or redirect breaks audit |

## Workflow

1. **Confirm scope and route correctly**
   - Verify the user wants Lighthouse execution, interpretation, budgeting, or CI integration.
   - If they want fixes for specific regressions, route to a performance optimization skill after collecting evidence here.

2. **Define the audit conditions before running anything**
   - Record the exact URL or URLs.
   - Decide mobile or desktop.
   - Decide which categories matter.
   - Decide whether this is a local one-off run, a repeatable scripted run, or CI automation.
   - Record whether auth or a user journey is required.

3. **Prepare a reproducible environment**
   - Build and serve the app in a stable way.
   - Prefer a local production-like build over a noisy dev server unless the task explicitly requires otherwise.
   - Use explicit config for repeat runs.
   - Save all output into an `artifacts/` directory or equivalent.

4. **Run at least one audit to validate the path**
   - Start with a single run to confirm Chrome launches, the app is reachable, and reports are generated.
   - If the page is noisy or CI is unstable, plan for at least 3 runs and compare medians or stable repeated results.

5. **Collect evidence, not just scores**
   - Save JSON reports for machine parsing.
   - Save HTML reports when a human reviewer needs visual detail.
   - Record Lighthouse version, form factor, throttling approach, URL, run context, and any auth setup.

6. **Interpret results carefully**
   - Report category score and key metrics together.
   - Call out important metric values with units.
   - Note which audits failed or regressed.
   - Treat large claims cautiously if run-to-run variance is high.

7. **Choose enforcement mode when needed**
   - Use `budget.json` when you want resource and timing budget rules tied to Lighthouse budget support.
   - Use LHCI assertions when you want CI pass/fail logic for categories and metrics.
   - In CI, keep artifacts even when the run fails.

8. **Hand off clearly**
   - Summarize environment, score, metrics, failed audits, confidence level, and whether field data is needed.
   - Route implementation fixes to the correct optimization skill.

## Quick Start

### Local CLI run with explicit output

```bash
mkdir -p artifacts
lighthouse https://example.com \
  --only-categories=performance \
  --output=json \
  --output=html \
  --output-path=./artifacts/example-report
```

This produces JSON and HTML artifacts for the same run.

### Explicit mobile run

```bash
lighthouse https://example.com \
  --preset=perf \
  --form-factor=mobile \
  --output=json \
  --output-path=./artifacts/mobile-performance.json
```

### Explicit desktop run

```bash
lighthouse https://example.com \
  --preset=perf \
  --form-factor=desktop \
  --output=json \
  --output-path=./artifacts/desktop-performance.json
```

### Prefer committed config for repeatability

```bash
lighthouse https://example.com \
  --config-path=examples/lighthouse.config.js \
  --output=json \
  --output-path=./artifacts/config-driven-report.json
```

## Examples

### Example 1: Run a local audit and summarize it

```bash
mkdir -p artifacts
lighthouse https://example.com \
  --only-categories=performance \
  --output=json \
  --output-path=./artifacts/report.json
node examples/parse-lhr-report.mjs ./artifacts/report.json
```

Expected outcome: a saved JSON report and a concise terminal summary with score, key metrics, and failing audits.

### Example 2: Compare baseline versus candidate

```bash
node examples/compare-lhr-reports.mjs \
  ./artifacts/baseline.json \
  ./artifacts/candidate.json
```

Expected outcome: a metric-by-metric diff for selected performance signals. Use only when both reports were collected under equivalent conditions.

### Example 3: Run with Node API

```bash
node examples/run-lighthouse-node.mjs \
  https://example.com \
  ./artifacts/node-report.json
```

Expected outcome: Lighthouse launches Chrome, writes a JSON report, prints a short summary, and always closes Chrome.

### Example 4: Run Lighthouse CI locally

```bash
npx @lhci/cli autorun --config=examples/lighthouserc.js
```

Expected outcome: CI-style collection, assertions, and upload behavior using a committed config.

### Example 5: Audit an authenticated or multi-step flow

```bash
node examples/authenticated-user-flow.mjs https://example.com
```

Expected outcome: a user-flow report for a scripted session. Adjust the script to your app's selectors and authentication path.

## Best Practices

### Do

- Prefer committed config files for repeatable audits.
- Compare like-for-like conditions only: same URL shape, app build, form factor, throttling, and Lighthouse version.
- Save JSON artifacts for every important run.
- Run multiple times for noisy pages or unstable CI and report a median or consistent repeated result.
- Report score **and** underlying metrics such as LCP, CLS, TBT, and FCP where present.
- Use LHCI assertions or budgets for enforcement instead of ad hoc pass/fail logic.
- Keep CI startup deterministic: build, start, wait for readiness, then collect.
- Keep stderr/stdout and app logs when troubleshooting CI failures.
- Treat authenticated audits carefully and avoid expose credentials into shell history or CI logs.

### Don't

- Do not gate releases on a single aggregate performance score alone.
- Do not compare mobile and desktop reports as if they were equivalent.
- Do not compare local dev-server runs against production runs and call the delta a regression without qualification.
- Do not rely on a single run when variance is obvious.
- Do not assume lab results equal real-user experience.
- Do not use `--extra-headers` for complex auth flows when session scripting is required.
- Do not leave temporary public report links enabled without checking privacy expectations.

### Reporting template

Use the bundled template in `references/lighthouse-interpretation-guide.md` and `examples/report-summary-template.md` to summarize:

- URL under test
- Lighthouse version and run context
- form factor and throttling method
- category score
- key metric values and units
- failed or regressed audits
- run consistency or confidence level
- recommendation to hand off or continue

## Troubleshooting

### Problem: Chrome is not found or Lighthouse cannot launch the browser

**Symptoms:** Lighthouse exits early, reports Chrome launch errors, or cannot find a browser binary.

**Solution:** Confirm Chrome or Chromium is installed and runnable on the host. If needed, set `CHROME_PATH` to the browser binary for the current environment. Re-run a minimal audit first before adding config complexity.

### Problem: Scores vary too much between runs

**Symptoms:** Large swings in score or metrics between repeated runs on the same URL.

**Solution:** Run at least 3 times, save every JSON artifact, and compare medians or stable repeated values. Make sure the build, server state, form factor, and throttling method are identical. Reduce environmental noise before reporting regressions.

### Problem: The app times out or is not ready when Lighthouse starts

**Symptoms:** Navigation timeouts, incomplete reports, or CI failures immediately after server startup.

**Solution:** Ensure the app is fully built and served before the audit starts. In CI, add an explicit readiness wait step. If necessary, increase max wait settings narrowly and keep server logs as artifacts.

### Problem: Authenticated pages fail or redirect to login

**Symptoms:** The report covers the login page instead of the target page, or protected routes return unauthorized content.

**Solution:** For simple header-based auth, use extra headers carefully. For real login flows, use a scripted user flow with Puppeteer or a pre-authenticated session approach. Never place secrets directly in reusable examples or committed shell history.

### Problem: CI shows regressions that local runs do not reproduce

**Symptoms:** A pull request fails LHCI assertions, but local runs look healthy.

**Solution:** Check whether CI is using a different build, environment variables, network conditions, or server start sequence. Verify the same URL, same config, same run count, and same app readiness behavior. Retain CI artifacts and logs so the discrepancy can be inspected.

### Problem: The score dropped but the actionable metrics barely changed

**Symptoms:** Aggregate performance score moves more than expected while metric deltas are small or mixed.

**Solution:** Report the underlying metrics and relevant audits, not just the category score. Explain that Lighthouse scoring is weighted and may shift in ways that are less actionable than metric-level changes.

## Related Skills

- `@perf-web-optimization` — use after this skill identifies likely causes and the user wants implementation changes.
- `@core-web-vitals` — use when the user needs deeper lab-versus-field interpretation or CWV strategy.
- `@perf-astro` — use for Astro-specific performance remediation.

## Additional Resources

### Local support pack

- [Workflow guide](references/lighthouse-workflow.md)
- [Interpretation guide](references/lighthouse-interpretation-guide.md)
- [Budgets and assertions guide](references/lighthouse-budgets-and-assertions.md)
- [Troubleshooting runbook](references/lighthouse-troubleshooting-runbook.md)
- [Reusable Lighthouse config](examples/lighthouse.config.js)
- [Reusable LHCI config](examples/lighthouserc.js)
- [Starter budget file](examples/budget.json)
- [Node API runner](examples/run-lighthouse-node.mjs)
- [LHR parser](examples/parse-lhr-report.mjs)
- [LHR comparison script](examples/compare-lhr-reports.mjs)
- [GitHub Actions example](examples/github-actions-lhci.yml)
- [Authenticated flow example](examples/authenticated-user-flow.mjs)
- [Report summary template](examples/report-summary-template.md)

### Official references

- Lighthouse overview: `https://developer.chrome.com/docs/lighthouse/overview`
- Lighthouse in DevTools: `https://developer.chrome.com/docs/devtools/lighthouse`
- Lighthouse CLI and config docs: `https://github.com/GoogleChrome/lighthouse`
- Lighthouse user flows: `https://developer.chrome.com/docs/lighthouse/user-flows`
- Lighthouse performance scoring: `https://developer.chrome.com/docs/lighthouse/performance/performance-scoring`
- Lighthouse performance budgets: `https://developer.chrome.com/docs/lighthouse/performance/budgets`
- Lighthouse CI docs: `https://googlechrome.github.io/lighthouse-ci/docs/`
- Chrome UX Report overview: `https://developer.chrome.com/docs/crux`
