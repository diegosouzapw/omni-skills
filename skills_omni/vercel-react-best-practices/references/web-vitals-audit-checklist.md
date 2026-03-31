# Web Vitals Audit Checklist

Use this checklist before and after a performance change.

## Baseline questions

- What is the user-visible complaint?
- Which route, component, or interaction is affected?
- Is this a lab-only issue, a field issue, or both?
- What metric matters most here: LCP, CLS, INP, hydration cost, route transition time, JS size?

## Capture before-state evidence

Record what is available:

- Web Vitals or RUM data
- route-level timing observations
- bundle analysis notes
- hydration or rendering profiler notes
- screenshots or traces of layout shift or delayed hero content

## Core metric prompts

### LCP

- What is the likely LCP element?
- Is it an image, text block, or large container?
- Is it delayed by data fetching, script execution, font loading, or image delivery?

### CLS

- Are dimensions reserved for images and embeds?
- Do fonts swap late and move text?
- Does content appear above existing layout after hydration?

### INP / interaction responsiveness

- Are urgent updates blocked by expensive renders?
- Does typing trigger repeated filtering or sorting in render?
- Are transitions appropriate for non-urgent updates?

### Hydration cost

- Is too much of the route client-rendered?
- Are heavy packages loaded on first paint?
- Are there hydration warnings or mismatches?

## Validate after-state evidence

Confirm:

- original symptom improved
- no new hydration or cache regressions were introduced
- no new layout instability appeared
- no security boundary was weakened while optimizing

## Minimal reporting template

- Problem:
- Affected route or interaction:
- Baseline evidence:
- Root cause hypothesis:
- Changes made:
- Expected metric impact:
- Follow-up validation needed:
