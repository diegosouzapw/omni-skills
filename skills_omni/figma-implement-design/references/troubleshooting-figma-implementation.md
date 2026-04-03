# Troubleshooting Figma Implementation

## Problem: MCP unavailable or auth expired

**Symptoms:** Tool calls fail immediately, Figma tools are missing, or authorization appears invalid.

**Likely cause:** The Figma MCP connection is not active or the session expired.

**Immediate checks:**

- confirm the MCP connection is supposed to be available
- confirm the user is authenticated in the current agent environment
- confirm this is not actually a setup problem

**Next action:** Stop and route to `@figma`. Do not spend the implementation pass debugging MCP setup here.

---

## Problem: URL does not resolve to the expected node

**Symptoms:** The returned design context does not match the screen or component the user referenced.

**Likely cause:** Wrong `node-id`, wrong file key, or a copied URL that points to another selection.

**Immediate checks:**

- re-read the `node-id` query parameter
- re-read the segment after `/design/`
- ask the user to confirm the intended frame or selection if ambiguity remains

**Next action:** Re-run the workflow with the corrected target node.

---

## Problem: `get_design_context` is too large or truncated

**Symptoms:** The result is incomplete, contains partial structure, or omits important nested details.

**Likely cause:** The selected node is too large or deeply nested.

**Immediate checks:**

- request metadata for the parent node
- identify major child sections
- pick a decomposition plan before coding

**Next action:** Implement child sections separately, then reassemble and review against the full screenshot.

---

## Problem: `localhost` assets do not work later

**Symptoms:** Assets worked during context gathering but fail later in the session or in another environment.

**Likely cause:** The asset URL is session-scoped or environment-scoped.

**Immediate checks:**

- confirm whether the project expects checked-in assets, copied files, or runtime URLs
- confirm whether the current session is still active

**Next action:** Consume or save assets during the active session according to project policy. Avoid replacing them with unrelated package assets unless explicitly approved.

---

## Problem: Structure is right but the screen still looks wrong

**Symptoms:** The implementation uses the right components but spacing, hierarchy, or proportions feel visibly off.

**Likely cause:** Token mapping drift, layout constraint mismatch, or implementation from structure without frequent screenshot comparison.

**Immediate checks:**

- compare screenshot and implementation side by side
- inspect spacing and typography values in design context
- verify container sizing and alignment behavior

**Next action:** Correct the drift section by section. Do not tune blindly across the whole screen at once.

---

## Problem: Existing component almost matches but not quite

**Symptoms:** Reuse is tempting, but the existing component does not fully support the design.

**Likely cause:** The design is a new variant or exposes a gap in the component API.

**Immediate checks:**

- determine whether a small prop or variant extension is enough
- check whether similar variants already exist elsewhere in the codebase

**Next action:** Extend the existing component if the change fits its model. Create a new component only when extension would distort the design system.

---

## Problem: Exact design values are unavailable in the token system

**Symptoms:** Figma spacing, color, or radius values do not have direct equivalents in code.

**Likely cause:** The design file and implementation token sets are not fully aligned.

**Immediate checks:**

- identify the nearest approved token
- estimate whether the visual delta is minor or material
- decide whether a temporary local constant is justified

**Next action:** Prefer the nearest approved token and document the difference. Use a temporary constant only if necessary and allowed by repository norms.
