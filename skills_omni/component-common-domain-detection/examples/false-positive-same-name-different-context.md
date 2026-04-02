# Example: False Positive — Same Name, Different Context

Candidate components:

- `services/customer/validation`
- `services/fraud/validation`

Why they looked similar:

- Same leaf name: `validation`
- Both reject invalid requests

Why they should remain separate:

- Customer validation checks profile completeness and policy acceptance.
- Fraud validation evaluates suspicious activity rules and investigation thresholds.
- Inputs, invariants, and ownership differ.
- A shared abstraction would hide materially different business meaning.

Correct recommendation:

- Outcome: Keep separate
- Rationale: same name, different bounded context
- Follow-up: if needed, extract only tiny infrastructure helpers, not business rules
