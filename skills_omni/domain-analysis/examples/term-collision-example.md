# Example: Term Collision

## Term: Customer

### In Sales Context
- Meaning: prospective or paying buyer in a pipeline
- Evidence: `sales/opportunity_service.py`, `sales/customer_stage.py`
- Typical lifecycle: lead -> qualified -> won/lost

### In Support Context
- Meaning: person or organization receiving support service
- Evidence: `support/case_handler.py`, `support/customer_sla.py`
- Typical lifecycle: active -> escalated -> resolved

## Why it matters

These meanings overlap socially but differ operationally. Forcing one shared `Customer` model would likely mix pipeline terminology with service-case semantics.

## Boundary implication

Sales and Support may need separate bounded contexts with explicit translation or shared reference identifiers, rather than one global `Customer` model.
