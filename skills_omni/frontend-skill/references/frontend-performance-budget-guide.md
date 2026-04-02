# Frontend Performance Budget Guide

Use this guide to keep visual quality from turning into performance debt.

## Primary concerns

For this skill, the most common failures are:

- oversized hero media hurting LCP
- layout instability hurting CLS
- heavy animation or interaction scripts hurting INP

## Practical budgets

Use these as review triggers, not rigid universal limits:

- keep above-the-fold media as small as quality allows
- avoid multiple competing hero assets loading at once
- avoid loading decorative video or heavy embeds in the initial viewport unless clearly required
- keep font choices restrained and avoid unnecessary families or weights

## LCP review

Check the likely largest above-the-fold element:

- Is it an image, text block, or media container?
- Can the asset be compressed, cropped, or swapped for a lighter format?
- Is the most important content visible quickly even before every enhancement loads?

## CLS review

Check for:

- missing width and height on images
- unstable embed containers
- late-loading banners or sticky bars
- font swaps that move buttons or headlines significantly

## INP review

Check whether interaction feels delayed because of:

- too many concurrent animations
- layout-heavy transitions
- overly complex hover effects
- large scripts attached to basic UI behavior

## Safe defaults

- lazy-load below-the-fold images and iframes
- reserve space for media before it loads
- simplify motion before trying advanced optimization tricks
- ship fewer effects rather than layering optimizations on top of avoidable complexity

## Handoff notes

Record:

- likely LCP element
- major media decisions
- known CLS protections added
- any interaction patterns that still need device-level review
