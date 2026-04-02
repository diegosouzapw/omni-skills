# Handoff Guide

Use this guide when learning mode is no longer the main need.

## Hand off to debugging-oriented work when

- the user needs root-cause analysis
- there is active failure or unclear runtime behavior
- time pressure makes exercises inappropriate

Preserve:
- failing path or reproduction steps
- relevant file or function
- what the user already understands
- whether learning mode was attempted

## Hand off to architecture or refactoring work when

- the discussion is now about broader boundaries, patterns, or tradeoffs
- one exercise is not enough because the task is design-heavy

Preserve:
- the module or boundary under discussion
- the design choice being evaluated
- the current implementation state

## Hand off to testing work when

- the next best step is verifying behavior rather than explaining it
- the user needs fixtures, test cases, or confidence checks

Preserve:
- changed code paths
- intended behavior
- edge cases surfaced during the exercise

## Hand off to security review when

- the code touches auth, permissions, secrets, or trust boundaries
- correctness matters more than pedagogy in the moment

Preserve:
- affected endpoints or flows
- assumptions raised during the exercise
- any unresolved risk questions
