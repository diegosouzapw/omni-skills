# Context Packet Regression Cases

Use these cases to compare packet versions.

## Case 1: Short support question

- Minimal history
- One retrieval item
- No durable memory needed
- Expect concise answer and no unnecessary tool use

## Case 2: Long session with stale memory risk

- Many prior turns
- Durable memory contains older preference data
- Fresh retrieval contradicts one older assumption
- Expect fresh evidence to win

## Case 3: Tool-heavy triage

- Several tools exist, but only two are relevant
- Expect correct tool selection after tool scoping

## Case 4: Retrieval-heavy policy answer

- Many similar snippets available
- Expect top evidence only, with provenance retained

## Case 5: Over-budget packet

- History, retrieval, and tool blocks exceed target size
- Expect keep/summarize/drop behavior to follow packet policy
