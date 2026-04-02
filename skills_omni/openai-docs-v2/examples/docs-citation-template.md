# Docs Citation Template

Use this example shape for concise, source-grounded answers.

## Template

**Answer:** <direct answer in 1-4 sentences>

**Why:** <brief rationale tied to the user’s request>

**Source:**
- <document title> — <URL>

**Notes:**
- <optional caveat>
- <optional discrepancy between local reference and live docs>

## Example

**Answer:** For new tool-using or stateful workflows, start by checking the current official guidance on API choice rather than defaulting to Chat Completions.

**Why:** The user’s requirements imply a workflow that may depend on newer agentic or state-handling patterns, so the current API-choice docs are the right authority.

**Source:**
- Responses vs Chat Completions — https://platform.openai.com/docs/guides/responses-vs-chat-completions

**Notes:**
- If the user has an existing legacy integration, include that as a compatibility consideration rather than ignoring it.
