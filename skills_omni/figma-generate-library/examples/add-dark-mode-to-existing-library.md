# Example: Add Dark Mode To An Existing Library

## Prompt

```text
Use @figma-generate-library with @figma-use to add dark mode to the existing design system. First inspect all current variable collections, semantic color usage, and component bindings. Then propose the safest way to introduce dark-mode values without destabilizing the existing component library.
```

## Expected focus

- inspect semantic color architecture first
- avoid direct primitive bindings for themeable properties
- update tokens before components
- validate representative components in both modes
