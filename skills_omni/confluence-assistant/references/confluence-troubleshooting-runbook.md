# Confluence Troubleshooting Runbook

## 1. Wrong site context

**Symptoms:** Search or retrieval fails across all targets; the user insists the page exists.

**Likely causes:** Wrong site URL, wrong cloud ID, or the user works across multiple Atlassian sites.

**Operator actions:**

1. Ask which Confluence site to use.
2. Confirm the supplied site URL or cloud ID.
3. Retry using the confirmed site context.

## 2. Identifier confusion

**Symptoms:** Read, update, or create actions fail with apparently valid identifiers.

**Likely causes:** Page ID passed where space key or space ID is required, or vice versa.

**Operator actions:**

1. Confirm whether the identifier is a page ID, space key, or space ID.
2. Re-resolve the target.
3. Retry only after the identifier type is explicit.

## 3. Search miss or irrelevant results

**Symptoms:** Search returns nothing or too many unrelated pages.

**Likely causes:** Vague query, wrong site, permission limits, or indexing lag.

**Operator actions:**

1. Narrow by likely space if known.
2. Ask for a page URL, exact title, or page ID.
3. Explain that no result does not prove nonexistence.

## 4. Unsafe update request

**Symptoms:** User asks for a small change, but the operation may require replacing the full body.

**Likely causes:** Tool contract expects whole-body updates.

**Operator actions:**

1. Retrieve current content first.
2. Preserve unaffected sections.
3. Ask for confirmation if insertion scope is unclear.

## 5. Formatting or body mismatch

**Symptoms:** Page renders incorrectly after create or update.

**Likely causes:** Body submitted in the wrong representation for the wrapper or endpoint.

**Operator actions:**

1. Check the tool’s required body format.
2. Reformat the body accordingly.
3. Avoid assuming raw HTML support.

## 6. Permission denied

**Symptoms:** Read works inconsistently, or write operations fail with access-related errors.

**Likely causes:** Missing space/page permissions or insufficient app scopes.

**Operator actions:**

1. Tell the user access may be limited.
2. Ask them to verify site selection and Confluence permissions.
3. Do not reveal hidden content details.

## 7. Comment failure

**Symptoms:** A comment cannot be added to the selected page.

**Likely causes:** Wrong page target, insufficient comment permission, or unsupported comment path in the current tool.

**Operator actions:**

1. Reconfirm the page target.
2. Verify that a comment is the intended action.
3. Ask whether a page edit is acceptable if comments remain unavailable.

## 8. Rate limiting or transient errors

**Symptoms:** Requests fail intermittently or return throttling-style errors.

**Likely causes:** Too many repeated requests in a short period.

**Operator actions:**

1. Retry with backoff.
2. Reduce repeated polling or duplicate lookup calls.
3. Tell the user what succeeded before the failure.
