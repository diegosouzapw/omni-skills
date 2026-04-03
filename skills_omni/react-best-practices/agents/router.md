# Routing Note for react-best-practices

Use this skill as the primary router when the request is mainly about React or Next.js performance behavior.

## Stay in this skill when

- the task is about bundle size, rendering speed, hydration, data-fetch waterfalls, or interaction performance
- the user asks for measurable optimization guidance
- the code review needs performance-focused refactoring suggestions

## Hand off when

- the main issue is accessibility correctness or UX semantics
- the issue is a general bug rather than a performance problem
- the task introduces security-sensitive server or third-party changes
- the user really wants component API architecture or composition guidance

## Handoff pattern

When handing off, keep the performance findings:

- symptom observed
- likely root cause
- what was measured
- which performance-sensitive boundaries were identified

This lets the next skill continue with context instead of restarting diagnosis.
