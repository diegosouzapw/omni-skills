# Prerequisites Checklist

Use this checklist before calling `get_code_connect_suggestions` or `send_code_connect_mappings`.

## Product and access checks

- [ ] The user has access to Figma Code Connect.
- [ ] The operator can reach the Figma MCP server.
- [ ] The user has permission to create mappings for the target file or library.

## Figma selection checks

Choose one path:

### Desktop selection path

- [ ] The Figma desktop app is open.
- [ ] The MCP connection is active.
- [ ] The user has selected the intended node in the open Figma file.

### URL path

- [ ] The URL uses the Figma design format.
- [ ] The URL contains a `node-id` query parameter.
- [ ] The `fileKey` can be extracted from the URL path.
- [ ] The `node-id` can be normalized from hyphen form to colon form.

## Component eligibility checks

- [ ] The target is a published component or component set.
- [ ] The component is available through a team library.
- [ ] The selection is expected to contain unmapped components.

## Codebase checks

- [ ] The repository is available for search.
- [ ] Candidate source files can be opened and inspected.
- [ ] Proposed source paths can be expressed relative to the repo root.
- [ ] Export names can be verified before writing mappings.

## Stop if any of these are true

- Code Connect is unavailable to the user.
- The component is unpublished.
- The URL has no `node-id`.
- There is no desktop selection and no valid URL.
- Permissions are insufficient.
- The codebase cannot be inspected well enough to validate a mapping.
