# Context Budget Decision Tree

Use this when the packet is near or over budget.

## Step 1: Protect the essentials

Keep these first unless clearly unnecessary:

- core instructions
- current task state
- must-have evidence
- the minimal tool contract set

## Step 2: Classify each oversized section

Ask:

1. Is it required for the next action?
2. Is it unique, or duplicated elsewhere?
3. Is it fresh enough to trust?
4. Can it be summarized without losing a needed detail?
5. Can it stay external and be fetched later?

## Step 3: Choose an action

- **Keep raw** when exact wording or exact evidence matters.
- **Summarize** when the section is repetitive, long, or mostly supporting detail.
- **Drop** when it is stale, duplicated, or not needed for the next action.
- **Fetch later** when it is useful but not necessary yet.

## Step 4: Over-budget fallback order

1. Remove irrelevant tools.
2. Replace long history with a short session summary.
3. Remove duplicated instructions.
4. Compress retrieval to only the highest-value chunks.
5. Demote temporary memory into task-local notes or drop it.
6. Split the task into multiple model calls if the packet is still too large.

## Warning signs

- multiple sections restating the same rule
- retrieval blocks included because they were available, not because they are needed
- memory items with no clear reuse value
- tool lists that describe capabilities unrelated to the task
