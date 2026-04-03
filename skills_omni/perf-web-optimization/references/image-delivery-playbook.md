# Image Delivery Playbook

## Goals

Improve perceived speed and reduce transfer size without delaying the most important visual content.

## Rules of thumb

### Likely hero or LCP image

- do not lazy-load it
- provide explicit dimensions
- use responsive sources where appropriate
- consider `fetchpriority="high"` if it is clearly the key image
- verify it is requested early in the waterfall

Example:

```html
<img
  src="/hero-1200.webp"
  srcset="/hero-640.webp 640w, /hero-960.webp 960w, /hero-1200.webp 1200w"
  sizes="100vw"
  alt="Hero"
  width="1200"
  height="675"
  loading="eager"
  fetchpriority="high"
  decoding="async"
/>
```

### Below-the-fold images

- use `loading="lazy"`
- still provide dimensions
- still use responsive sizing
- avoid shipping originals that are much larger than displayed size

### Galleries and cards

- use `srcset` and `sizes`
- avoid one-size-fits-all image exports
- verify mobile layouts do not receive desktop-sized files

## Format and payload guidance

- prefer modern formats where your delivery stack supports them reliably
- compress aggressively enough to reduce bytes without damaging visible quality unacceptably
- replace decorative animations or GIF-like content with video where appropriate

## Common mistakes

- lazy-loading the hero image
- omitting `width` and `height`
- serving a single oversized source to every viewport
- preloading multiple alternative image formats for the same image
- assuming compression alone fixes late discovery or low priority
