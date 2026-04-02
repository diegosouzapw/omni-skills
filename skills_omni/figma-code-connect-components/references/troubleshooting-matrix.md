# Troubleshooting Matrix

## 1. No published components found

**Symptoms:** `get_code_connect_suggestions` returns `No published components found in this selection`.

**What to check:**

- Is the selected node a published component or component set?
- Was it published to a team library?
- Did the user select the right frame or node?

**Resolution:** Ask the user to publish the component and retry.

---

## 2. All components already connected

**Symptoms:** The tool says all component instances are already connected.

**What to check:**

- Is the user expecting a new mapping or a review of an existing one?
- Are they looking at the correct node or file?

**Resolution:** Report that there is nothing new to map and stop.

---

## 3. URL parse problems

**Symptoms:** Wrong component scope, empty results, or invalid-tool-input behavior.

**What to check:**

- Does the URL include `node-id`?
- Was `node-id` converted from hyphen to colon form?
- Was `fileKey` parsed from the `/design/` path segment?

**Resolution:** Re-parse the URL and normalize the node ID.

---

## 4. Desktop selection not available

**Symptoms:** The MCP path does not use the expected node.

**What to check:**

- Is Figma desktop open?
- Is the MCP server connected?
- Is the target node selected?

**Resolution:** Re-establish selection or switch to URL-based targeting.

---

## 5. Asset not found or source mismatch

**Symptoms:** Errors such as `CODE_CONNECT_ASSET_NOT_FOUND` or mapping creation fails despite a plausible file path.

**What to check:**

- Is `source` relative to repo root?
- Does the file exist?
- Does `componentName` match the exported symbol exactly?
- Is the file only a wrapper or index barrel?

**Resolution:** Correct path and export details, then resend only the corrected mapping.

---

## 6. Mapping already exists

**Symptoms:** `CODE_CONNECT_MAPPING_ALREADY_EXISTS` or equivalent message.

**What to check:**

- Was the component already connected earlier?
- Is the user trying to recreate an existing mapping?

**Resolution:** Inform the user and avoid repeating the same write.

---

## 7. Insufficient permissions

**Symptoms:** `CODE_CONNECT_INSUFFICIENT_PERMISSIONS` or permission denial.

**What to check:**

- Does the user have edit rights to the file or library?
- Is the mapping attempt happening in the correct workspace?

**Resolution:** Stop and request the required access.

---

## 8. Multiple similar code candidates

**Symptoms:** Several files appear to match by name.

**What to check:**

- Which candidate best matches props and variants?
- Which file is the canonical implementation, not a wrapper or specialization?
- Does one candidate fit the platform label better?

**Resolution:** Present the top two candidates with rationale and ask the user to choose.
