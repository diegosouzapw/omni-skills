# Event Storming Lite Guide

Use this guide when code evidence is too weak to infer trustworthy domain boundaries.

## Goal

Recover business language and workflow structure from docs, stakeholders, or product artifacts.

## Minimal prompts

Ask:

1. What business events matter most?
2. What usually happens right before and right after each event?
3. Which actors trigger the workflow?
4. Which terms do different teams use differently?
5. Where do approvals, validations, or policy decisions happen?
6. Which data must stay consistent together?
7. Which workflows can tolerate asynchronous updates?

## Quick Event Table

| Event | Trigger | Actor | Command / action | Resulting state | Candidate context |
| --- | --- | --- | --- | --- | --- |

## Boundary Clues

- different event vocabularies suggest different contexts
- different business actors or goals suggest different capabilities
- policy decisions and invariants often reveal consistency boundaries
- translation between event languages suggests a context-map relationship

## Output Guidance

If this guide is used, say so explicitly in the final analysis and lower confidence where the codebase itself did not provide enough evidence.
