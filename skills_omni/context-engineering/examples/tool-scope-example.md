# Tool Scope Example

## Broad catalog

- search_docs
- get_customer_record
- issue_refund
- send_email
- run_sql
- create_ticket

## Task

Review whether a customer may qualify for a refund exception and draft the next support response.

## Better scoped subset

- search_docs
- get_customer_record
- send_email

## Why

- `issue_refund` is not needed until policy review is complete.
- `run_sql` is too broad for this task.
- `create_ticket` is unnecessary because the ticket already exists.

## Result

The model sees fewer overlapping actions and is less likely to call a premature or risky tool.
