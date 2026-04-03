# Refactor Learning Exercise

## Scenario

A large handler was split into smaller units.

## Good prompt

**Agent:** Before I show the final refactor, how would you separate parsing from persistence in this handler?

## Why this works

- asks for one structural decision
- easy to compare against the implementation
- reinforces separation of concerns and testability

## Good follow-up after answer

Compare the learner's structure to the implemented one, then explain one advantage such as easier testing, narrower side effects, or clearer interfaces.
