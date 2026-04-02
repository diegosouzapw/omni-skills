# Figma Implementation Checklist

Use this checklist during execution, not only at the end.

## 1. Intake

- [ ] Confirm the user wants implementation, not exploration
- [ ] Confirm a working Figma MCP connection is expected
- [ ] Confirm the target repository or code location
- [ ] Confirm any constraints: responsiveness, accessibility, no new dependencies, deadline, scope

## 2. Resolve the node

- [ ] If using a URL, extract `fileKey`
- [ ] If using a URL, extract `nodeId`
- [ ] If using desktop selection mode, confirm the correct node is selected
- [ ] Confirm the node represents the component or frame the user actually wants

## 3. Fetch source material

- [ ] Request `get_design_context`
- [ ] Request `get_screenshot`
- [ ] Keep screenshot available during implementation
- [ ] If context is truncated, request `get_metadata` and decompose by child nodes

## 4. Inspect the target codebase

- [ ] Search for an equivalent existing component
- [ ] Search for layout primitives already used for similar screens
- [ ] Identify project token sources for color, spacing, typography, radius, shadows
- [ ] Confirm styling conventions used by nearby files

## 5. Map design to implementation

- [ ] Map Figma component to code component
- [ ] Map variants/states to props or composition
- [ ] Map colors to project tokens
- [ ] Map spacing to project tokens
- [ ] Map typography to project scale/tokens
- [ ] Map radius and effects where supported

## 6. Handle assets

- [ ] Retrieve images/icons/SVGs from the MCP-provided asset flow
- [ ] Use provided asset sources directly during the active session
- [ ] Avoid third-party substitutions unless requested
- [ ] Store or copy assets according to project policy if URLs are session-scoped

## 7. Implement

- [ ] Follow project file placement and naming conventions
- [ ] Reuse or extend existing components first
- [ ] Use native HTML elements where possible
- [ ] Add ARIA only when necessary
- [ ] Avoid unnecessary inline styles
- [ ] Keep output aligned with repository conventions, not demo code style

## 8. Validate

- [ ] Compare against screenshot for spacing and alignment
- [ ] Validate typography and hierarchy
- [ ] Validate states and responsiveness
- [ ] Validate semantic HTML
- [ ] Validate keyboard access and visible focus
- [ ] Validate accessible names and state announcements where applicable
- [ ] Document any justified deviations

## 9. Handoff note

- [ ] Record the implemented node
- [ ] Record reused or extended components
- [ ] Record token mappings
- [ ] Record asset handling
- [ ] Record any accessibility or token-driven deviations
