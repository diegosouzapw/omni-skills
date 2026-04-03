# Confluence Operations Playbook

Use this playbook when executing Confluence tasks through Atlassian MCP.

## Preflight checklist

1. Confirm the Confluence site context.
2. Identify the operation type:
   - search
   - read
   - list spaces
   - create page
   - update page
   - add comment
3. Identify the strongest target identifier available:
   - ARI
   - page ID
   - page URL
   - space key
   - space ID
   - title or natural-language description
4. Check whether the request is read-only or mutating.
5. If mutating, verify the target before writing.

## Search flow

Use search when the page is not already known.

1. Search with the user’s language.
2. Narrow by space when possible.
3. Inspect candidate results.
4. Confirm the selected target before making changes.

## Read flow

1. Resolve the page.
2. Retrieve the page.
3. Summarize or extract requested details.
4. Report page title and ID used.

## Create flow

1. Resolve the target space.
2. Check for likely duplicate titles in that space.
3. Draft structured content.
4. Create the page in the format expected by the tool.
5. Report page title and ID returned.

## Update flow

1. Resolve the page.
2. Retrieve current content first.
3. Determine whether the request is additive, partial replacement, or full rewrite.
4. Preserve unaffected content unless a full rewrite was explicitly requested.
5. Update the page.
6. Report what changed and the returned identifiers.

## Comment flow

1. Resolve the page.
2. Confirm the user wants a comment, not an edit.
3. Add the comment.
4. Confirm the target page and result.

## Final response checklist

Include, when available:

- site context used
- operation performed
- page title
- page ID
- space key or space ID
- returned URL or location
- short summary of the outcome
