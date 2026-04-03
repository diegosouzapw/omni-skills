# Schema Change Learning Exercise

## Scenario

A nullable foreign key was introduced during a phased rollout.

## Good prompt

**Agent:** We finished the migration. Why do you think the new foreign key is nullable during rollout? (Take your best guess.)

## Why this works

- tied to one migration decision
- answerable without reading the whole system
- leads naturally into rollout safety, backfills, and deploy order

## Good follow-up after answer

State what was correct, what was missing, and why nullability reduces rollout risk while old rows are being backfilled.
