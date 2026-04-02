# Example: Build a Screen from Code

## Scenario

The user wants the Settings page from a React app recreated in Figma using the existing design system.

## Recommended approach

1. Load `figma-use` and this skill.
2. Read the page source and identify sections:
   - page header
   - profile settings card
   - notifications section
   - security section
3. Inspect the target Figma file for an existing settings or account page.
4. Extract component families already in use:
   - buttons
   - text fields
   - toggles
   - cards
5. Discover the relevant tokens and styles:
   - background and border colors
   - spacing scale
   - heading and body styles
6. Create the page wrapper.
7. Build one section per call.
8. After each section, take a screenshot and validate text wrapping, spacing, and variants.
9. Capture the final full-screen screenshot and run the QA checklist.

## Example request

```text
Use @figma-generate-design with @figma-use to build the Settings page in Figma from the React source. Reuse existing components and tokens from the design system. Build the page section by section and validate each section before moving on.
```

## Expected outcome

- the page exists as a new frame
- major controls are instances from the design system
- spacing and color decisions use tokens where available
- the result is editable and remains linked to system assets
