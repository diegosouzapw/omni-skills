# Troubleshooting Playbook

## Problem: Ambiguous requirements

**Symptoms:** Multiple behaviors fit the request, acceptance criteria are missing, or user language is underspecified.

**Recovery path:** Pause, list plausible interpretations, identify the smallest clarifying question, and avoid irreversible implementation choices.

## Problem: Scope creep

**Symptoms:** The diff grows across unrelated files, optional cleanup appears, or new abstractions are being added for future use.

**Recovery path:** Revert unrelated edits, split follow-up ideas from the current task, and return to the smallest request-aligned implementation.

## Problem: Validation failure after editing

**Symptoms:** Tests, lint, or typecheck fail and ownership of the failure is unclear.

**Recovery path:** Run the narrowest relevant checks, compare against baseline if possible, and label failures as pre-existing, introduced, or environment-related.

## Problem: Convention mismatch

**Symptoms:** The repository uses patterns different from your preferred design or style.

**Recovery path:** Follow local conventions unless the user explicitly requested standardization. Optimize for consistency and maintainability inside the existing codebase.

## Problem: Low-confidence security-sensitive change

**Symptoms:** The task touches auth, permissions, command execution, secrets, or untrusted input and you cannot explain the resulting risk confidently.

**Recovery path:** Narrow the implementation, add defensive checks where possible, state assumptions explicitly, and recommend security review instead of improvising.
