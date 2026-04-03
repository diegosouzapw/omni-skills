# Browser Compatibility Workflow

Use this workflow when a feature appears modern but support assumptions may be wrong.

## Review sequence

1. Define supported browsers, device classes, and runtime environments.
2. Identify the exact API, CSS feature, or platform behavior in question.
3. Check whether support is broad enough for the target audience.
4. Prefer feature detection over browser detection.
5. Add fallback behavior or progressive enhancement where necessary.
6. Add a polyfill only when target support requires it and the operational cost is justified.

## Preferred patterns

### JavaScript

```javascript
if ('IntersectionObserver' in window) {
  enableObserverMode()
} else {
  enableFallbackMode()
}
```

### CSS

```css
@supports (display: grid) {
  .layout { display: grid; }
}

@supports not (display: grid) {
  .layout { display: flex; }
}
```

## Avoid

- UA sniffing as a first-choice compatibility strategy
- assuming one evergreen browser result generalizes everywhere
- adding broad polyfill bundles without proving the need

## Review questions

- What exact browsers must be supported?
- Is the feature essential or progressive?
- What is the fallback when unsupported?
- Is a polyfill cheaper than maintaining a simpler fallback?
