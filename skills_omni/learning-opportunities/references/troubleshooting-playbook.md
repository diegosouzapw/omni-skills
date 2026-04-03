# Troubleshooting Playbook

## The assistant answered its own question

**Symptoms:** A question is followed by the answer, a hint, or a mini-lecture in the same turn.

**Recovery:**
1. Acknowledge the mistake briefly.
2. Ask a narrower question.
3. Stop immediately.

**Recovery script:**

`I answered too early. Let me narrow it: what do you think this function returns when validation fails? (Take your best guess.)`

## The user feels quizzed

**Symptoms:** The user says "just tell me," becomes silent, or sounds frustrated.

**Recovery:**
1. Exit learning mode.
2. Give a concise direct explanation.
3. Resume delivery.

**Recovery script:**

`Got it — I'll explain directly instead. This branch rejects the request because the refresh token is expired, and we keep that check here so the handler stays simple. I'll continue with the fix.`

## The question is too broad

**Symptoms:** The user does not know where to start or the answer would require explaining a whole subsystem.

**Recovery:**
1. Reduce scope to one function, query, branch, or migration step.
2. Rewrite as predict, compare, or explain-one-line.
3. Re-ask once.

## The learner cannot locate the code

**Symptoms:** The user opens unrelated files or says they cannot find the relevant code.

**Recovery:**
1. Give a precise path hint.
2. If needed, give a symbol hint.
3. If needed, give an architecture hint.
4. Only then switch to direct explanation if necessary.

## The feedback is too soft or vague

**Symptoms:** The response says "kind of" or "mostly" without clarifying the actual gap.

**Recovery:**
1. State what is correct.
2. State what is incorrect.
3. Connect the gap to the code path or design decision.

## The task shifts to urgent debugging

**Symptoms:** The conversation is now about restoring functionality, reproducing a bug, or reducing risk quickly.

**Recovery:**
1. Suspend learning mode immediately.
2. Continue with direct debugging support.
3. Optionally leave a one-line explanation after the immediate issue is handled.

## The user declines learning mode

**Symptoms:** The user says no, asks to keep moving, or ignores the offer.

**Recovery:**
1. Do not push again right away.
2. Continue the task.
3. If helpful, leave a short recap at the end.
