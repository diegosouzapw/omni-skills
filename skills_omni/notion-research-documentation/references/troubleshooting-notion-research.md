# Troubleshooting Notion Research

## Case 1: Search finds a page, but fetch fails

**Likely cause:** The integration cannot access the page even though the human user can.

**Checks:**

- correct workspace connected
- page shared with integration
- content not moved or archived
- capability boundary allows the action

**Recovery:**

Reconfirm access and sharing before continuing. Do not synthesize from the search result alone.

## Case 2: OAuth completed, but tools still do not work

**Likely cause:** The client needs restart or the session was not fully refreshed.

**Checks:**

- login completed successfully
- MCP appears configured
- client restarted after auth if needed

**Recovery:**

Restart the client and retry the smallest possible action first.

## Case 3: Important content appears missing from a long page

**Likely cause:** Retrieval was incomplete or the page is larger than the initial fetch coverage.

**Checks:**

- whether all needed content blocks were retrieved
- whether nested content exists
- whether the section exists in the page UI but not in current notes

**Recovery:**

Re-fetch carefully and verify completeness before drawing conclusions.

## Case 4: Draft claims cannot be audited

**Likely cause:** Writing started before a proper evidence log was built.

**Checks:**

- claim-to-source mapping exists
- critical facts have quotes or tight paraphrases
- references section is complete

**Recovery:**

Pause drafting, rebuild the evidence matrix, and revise the report from traced evidence.

## Case 5: Create or update fails on long content

**Likely cause:** The write is too large or too brittle for one step.

**Checks:**

- document length
- number of sections
- number of citations
- whether this could be split into staged updates

**Recovery:**

Switch to skeleton-first creation, then append sections incrementally.

## Case 6: The report is accurate but unusable

**Likely cause:** Wrong format for the audience.

**Checks:**

- audience type
- decision urgency
- level of detail needed

**Recovery:**

Recast the document into the correct format, usually by moving summary, recommendation, and risks earlier.
