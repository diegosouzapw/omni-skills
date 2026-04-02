# Notion Schema Validation Checklist

Use this before any write operation to a Notion page tree or database.

## 1. Confirm the destination type

Identify whether the target is:
- a page tree where you will create child pages
- a database where you will create records with properties

Do not assume a task system is always a database until verified.

## 2. Fetch the destination object

Verify:
- object title or name
- object ID
- parent type
- available properties

## 3. Validate the title field

Confirm:
- which property is the title field
- exact property name
- expected content shape

## 4. Validate required properties

Check whether the workspace requires any of the following:
- status
- priority
- assignee
- due date
- estimate or story points
- relation to project, plan, or spec

If a property is required, do not omit it.

## 5. Validate allowed values

For select or status fields, confirm:
- exact option names
- case sensitivity if relevant in the client payload
- whether a requested option actually exists

Do not invent new select values unless the workspace and user explicitly allow that workflow.

## 6. Validate relation properties

Confirm:
- property name
- target database or page type
- expected related object IDs

If relation creation fails, verify the IDs first before retrying.

## 7. Validate parent payload shape

Ensure the write target matches the actual destination:
- child page under a page
- record under a database

A correct content body with the wrong parent type will still fail.

## 8. Safe write rule

If any required property, relation target, or parent type is unknown:
- stop
- re-fetch the schema
- explain the mismatch
- adjust the payload only after confirmation

## Minimal pre-write checklist

- [ ] Destination object confirmed
- [ ] Parent type confirmed
- [ ] Title property confirmed
- [ ] Required properties confirmed
- [ ] Select/status options confirmed
- [ ] Relation properties and IDs confirmed
- [ ] Payload matches actual schema
