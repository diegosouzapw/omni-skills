# Error Recovery and Resume Reference

Use this reference whenever a long build is interrupted or partially fails.

## Core rule

Do not retry blindly.

## Safe recovery sequence

1. stop mutating
2. perform a read-only inventory scan
3. load or reconstruct the latest state ledger
4. compare expected entities to actual entities
5. identify the smallest safe incomplete unit
6. clean up only explicit duplicates or orphans created by the interrupted run
7. rerun that unit
8. revalidate before continuing

## Cleanup rules

Allowed cleanup targets:
- explicit returned IDs from the interrupted run
- scene nodes tagged with explicit shared-plugin-data keys for that run

Do not:
- delete by broad name prefix
- guess ownership of similarly named nodes
- detach or remove remote library content without a confirmed reason

## Recovery questions to answer first

- What was the last approved checkpoint?
- Which step was in progress?
- Which IDs were already returned?
- Which entities exist in the file but are missing from the ledger?
- Which entities are in the ledger but not actually present?

## Resume output template

Before resuming writes, produce:
- current phase
- last approved checkpoint
- reconstructed entity map summary
- duplicates/orphans requiring action
- smallest safe next mutating step

## Common failure patterns

- duplicate creation after retrying without refreshing state
- partial component pages with missing bindings
- variables created in the wrong collection or mode
- text mutations failing because fonts were not loaded
- drift between code naming and Figma naming after mid-run renames
