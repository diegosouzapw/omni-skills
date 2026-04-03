# CRM Field Mapping Template

Use this template to map AI SDR decisions into explicit CRM state transitions.

## Purpose

Avoid ambiguous routing, duplicate ownership, and inconsistent lifecycle updates.

## Core fields to define

| Field | Definition | Allowed values | Owner |
| --- | --- | --- | --- |
| Lifecycle stage | Global funnel stage |  |  |
| Lead status | Current outreach or qualification state |  |  |
| AI qualification band | Score or band used by the workflow |  |  |
| Reply class | Positive, neutral, objection, negative, compliance-sensitive |  |  |
| Disqualification reason | Why a lead is excluded |  |  |
| Current owner | Human owner of next action |  |  |
| Handoff timestamp | When AI routed to human |  |  |
| SLA due timestamp | When follow-up is due |  |  |
| Suppression status | Whether the lead must not be contacted |  |  |

## State transition table

| Trigger | AI action | CRM update | New owner | SLA |
| --- | --- | --- | --- | --- |
| Tier 1 fit, no disqualifier | enroll or queue for review |  |  |  |
| Positive reply | route to human |  |  |  |
| Neutral reply | approved follow-up or review |  |  |  |
| Objection reply | route by playbook |  |  |  |
| Negative reply | suppress |  |  |  |
| Compliance-sensitive reply | escalate |  |  |  |

## Duplicate and sync review

Document:

- which system is source of truth
- how duplicates are detected
- whether multiple tools can create or update the same record
- which events should never create a new record

## Minimum launch condition

Do not scale until each reply class maps to:

- one state transition
- one owner
- one SLA expectation
