# Core Web Vitals workflow

Use this workflow when the ask is specifically about LCP, INP, or CLS.

## 1. Confirm the field regression

Collect one or more of:

- Search Console Core Web Vitals report
- PageSpeed Insights field data
- CrUX origin or URL data
- internal RUM data

Record:

- metric affected
- device segment
- URL or template scope
- time window
- whether the issue is origin-level or page-level

## 2. Pick one representative URL

Do not debug a whole site at once unless field data shows the same problem across a shared template.

Choose:

- one representative URL
- one device strategy, usually mobile first
- one environment matching production behavior as closely as possible

## 3. Diagnose with lab tools

Use Chrome DevTools, Lighthouse, or WebPageTest to understand why the metric is poor.

- For **LCP**, identify the actual LCP element and classify the delay by subpart.
- For **INP**, identify the slow interaction and whether time is lost before handler start, inside JS, or before the next paint.
- For **CLS**, identify what moved, when it moved, and whether the movement was expected.

## 4. Apply a narrow fix

Prefer the smallest credible change tied to the measured cause.

Examples:

- improve the priority or discovery of the real LCP resource
- split long tasks and defer non-visual INP work
- reserve space for banners, embeds, ads, or media causing CLS

## 5. Validate in lab

Compare before and after on the same URL and same scenario.

Capture:

- trace or audit evidence
- code diff summary
- any tradeoffs introduced

## 6. Watch field recovery

Do not claim success based on one local run.

Use:

- Search Console for grouped URLs and validation state
- PSI or CrUX for public field trends
- internal RUM for faster release-specific confirmation

## Evidence checklist

A good handoff note includes:

- failing metric and threshold
- affected pages or template
- field source used
- lab artifact reviewed
- likely root cause
- fix applied
- what still needs field confirmation
