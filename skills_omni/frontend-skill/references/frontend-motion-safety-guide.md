# Frontend Motion Safety Guide

Motion should create presence, hierarchy, and affordance, not noise.

## Allowed default motion types

- one hero entrance sequence
- one scroll-linked or sticky depth effect
- one hover, reveal, or layout transition that sharpens affordance

If more motion is needed, the brief should justify it.

## Motion rules

- motion must have a job
- motion must not block reading
- motion must not delay input
- motion must feel smooth on mobile
- ornamental motion should be removed

## Reduced-motion expectations

- provide a calmer or static fallback for non-essential motion
- avoid large parallax, intense zoom, or constant movement when reduced motion is preferred
- preserve meaning without requiring animation to understand the UI

## Carousels and narrative strips

Use only when there is a real narrative reason.

Required checks:

- keyboard-safe controls
- clear previous/next behavior
- visible pause behavior when content persists or auto-advances
- logical focus order
- content still understandable if presented statically

## Scroll effects

- prefer subtle opacity, translate, or scale shifts
- avoid effects that cause jank or disorienting motion
- test on lower-powered mobile devices or equivalent throttled conditions

## Review prompts

- If all motion were removed, would the page still work?
- Does every animation improve hierarchy, story, or affordance?
- Does any motion compete with reading or action?
- Is the effect still worth keeping on mobile?
