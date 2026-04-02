# Skill Trigger Writing Guide

Use this guide to write frontmatter descriptions that help the skill activate reliably.

## Goal

A strong description states:

1. what the skill does
2. when it should be used
3. the kinds of requests, tools, files, or contexts that should activate it

## Recommended pattern

Use this shape:

```yaml
description: "<What the skill does>. Use this skill when <specific contexts, requests, tools, or file types that should trigger it>."
```

## Strong example

```yaml
description: "PDF editing workflow skill. Use this skill when a user needs to rotate, split, merge, annotate, or rewrite PDF files and the workflow benefits from repeatable scripts or file-format guidance."
```

Why it works:

- capability is explicit
- trigger contexts are explicit
- likely user intents are visible

## Weak example

```yaml
description: "Helps with PDFs."
```

Why it fails:

- no activation boundary
- too generic for discovery
- does not distinguish editing from reading, conversion, or extraction

## Better versus worse trigger phrases

### Better

- "Use this skill when creating a new skill or updating an existing skill..."
- "Use this skill when working with `.docx` files that need tracked changes, comments, or formatting preservation..."
- "Use this skill when GitHub review comments need triage, reply drafting, or batch resolution..."

### Worse

- "Useful for docs"
- "Helps with code"
- "General workflow support"

## Frontmatter versus body

Put these in frontmatter:

- the main capability
- the activation boundary
- major request types
- important tools, file types, or contexts that affect triggering

Put these in the body:

- workflow steps after trigger
- support-pack navigation
- examples
- troubleshooting

## Quick self-check

Before finalizing a description, test it against 3-5 realistic user prompts.

Ask:

- would the right prompts clearly match this wording?
- would unrelated prompts avoid matching it?
- does the description say both what and when?
