# Upgrade Review Playbook

Use this playbook before changing target frameworks or introducing newer ASP.NET Core APIs.

## 1. Inventory the current baseline

- inspect `global.json`
- inspect all web project TFMs
- inspect package baselines and centrally managed packages
- identify hosting style and major framework patterns in use

## 2. Define the upgrade scope

- patch, minor, or major version change
- framework-only or framework plus package ecosystem changes
- code changes required for obsolete or removed APIs

## 3. Review compatibility risks

Check official compatibility and breaking-change guidance for the exact source and target versions.

Focus on:

- hosting model changes
- auth and cookie behavior
- serialization behavior
- middleware or endpoint behavior
- package compatibility

## 4. Plan validation

Minimum validation usually includes:

- restore and build
- automated tests
- auth-critical flows
- proxy-sensitive flows
- publish or deployment smoke checks where relevant

## 5. Handoff notes

Document:

- verified source and target versions
- required code changes
- deployment prerequisites
- rollback or mitigation concerns

## Review rule

Do not recommend a major-version migration without inventory, compatibility review, and regression validation.
