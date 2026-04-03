# Review Router

Use this note when deciding whether `web-design-guidelines-v2` should remain the lead skill.

## Stay with this skill when

- the core task is reviewing UI code or behavior
- the main findings concern semantics, focus, keyboard behavior, forms, motion, responsive layout, theming, or navigation state
- the output is a PR review, audit packet, or implementation guidance for interface quality

## Hand off when

### `@accessibility`
The user needs a deeper accessibility investigation, standards mapping, or broader conformance-oriented review.

### `@core-web-vitals`
The dominant issue is render performance, layout shift, long interactions, or performance budgets.

### `@seo`
The main concern is indexing, metadata, content discoverability, or search visibility.

### `@frontend-debugging`
The work is mostly about reproducing and fixing runtime bugs, crashes, hydration defects, or broken event flows.

### `@design-system`
The request is primarily about component governance, token usage, shared pattern decisions, or system-wide consistency policy.

### `@web-quality-audit`
The user wants a broader multi-domain website assessment rather than a focused UI review.

### `@localization` / `@i18n`
The dominant issues involve locale formatting, translation quality, bidi support, or localization workflow quality.

## Multi-skill overlap rule

If the task starts as a UI review but reveals adjacent issues, keep this skill as the lead only for the UI findings. Summarize the overlap and recommend the follow-on skill rather than inflating this review into a broader audit.
