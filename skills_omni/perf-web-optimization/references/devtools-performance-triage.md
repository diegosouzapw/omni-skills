# DevTools Performance Triage

Use this reference before changing code. The goal is to identify whether the main problem is transfer size, discovery order, render blocking, or main-thread work.

## 1. Network panel checks

Look for:

- the largest requests by transfer size
- the likely hero image and when it starts loading
- render-blocking CSS or synchronous scripts
- duplicate downloads
- cache headers on HTML, static assets, fonts, and APIs
- compression on text assets
- third-party requests competing with critical content

Questions to answer:

- What is the first resource the user must see?
- Is it discovered early enough?
- What blocks it?
- Are stable assets being re-downloaded on repeat visits?

## 2. Performance panel checks

Record a representative load and inspect:

- long tasks
- script evaluation cost
- layout and style recalculation spikes
- post-load third-party execution
- expensive hydration or bootstrapping work

Questions to answer:

- Is the slowdown mostly download time or execution time?
- Which tasks are consuming the main thread?
- Did a deferred script still execute too much work right after load?

## 3. Common decision rules

- If the likely hero image starts late, fix discovery and priority before optimizing secondary assets.
- If transfer sizes are modest but interaction is poor, focus on JavaScript execution and third-party cost.
- If repeat visits still transfer stable files, inspect cache policy, hashed filenames, CDN behavior, and service workers.
- If many requests are present but the page still feels fine, avoid optimizing request count in isolation.

## 4. Verification after changes

After each optimization pass, re-check:

- resource sizes
- discovery order
- request priority
- repeat-visit cache behavior
- long-task count and duration
- whether the visible page feels faster, not only whether files are smaller
