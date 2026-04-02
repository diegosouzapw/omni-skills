# Codebase Discovery Worksheet

Use this worksheet before generating project rules. Fill only what you can verify.

## 1. Project basics

- Repository / package:
- Primary frontend framework:
- Languages in use:
- Monorepo or single app:
- Target agent:
- Intended rule file path:

## 2. Component structure

- Reusable UI component directories:
- Feature component directories:
- Layout or primitive directories:
- Existing design system package or directory:
- Naming convention:
- Export convention:

## 3. Styling system

- Primary styling approach:
- Secondary styling approach, if any:
- Inline styles allowed? If yes, when:
- Theme configuration files:
- CSS utility framework config path:

## 4. Design tokens

- Token source files or directories:
- Token delivery mechanism:
  - CSS custom properties
  - TS/JS constants
  - theme object
  - config file
  - other
- Semantic tokens present?
- Raw palette tokens present?
- Alias chains present?
- Theme or mode support:
  - light
  - dark
  - brand variants
  - density modes
  - none

## 5. Component implementation patterns

- Common prop patterns:
- Variant pattern:
- Composition expectations:
- Shared utility hooks or composables:
- Import alias rules:
- File colocation expectations:

## 6. Accessibility conventions

- Existing accessibility guidelines or docs:
- Focus style convention:
- Testing expectations for interactive components:
- Accessibility libraries or helpers in use:
- Known accessibility gaps:

## 7. Testing and docs

- Test framework:
- Test file locations:
- Storybook or docs requirements:
- Visual regression tooling, if any:

## 8. Figma workflow expectations

- Must use `get_design_context` first?:
- Must use `get_screenshot` before final validation?:
- Asset storage path:
- Existing Figma implementation notes:

## 9. Risks and unresolved questions

- Missing token mapping areas:
- Current-state vs future-state conventions to distinguish:
- Rules that need team confirmation:
- Handoff recommendation, if any:
