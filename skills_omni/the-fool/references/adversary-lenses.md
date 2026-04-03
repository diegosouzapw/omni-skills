# Adversary Lenses

Use this in **Attack This** mode to keep red-team critique concrete.

## Minimum adversary frame

For each abuse case, name:

- **Actor:** Who is attacking or abusing the system?
- **Goal:** What are they trying to gain or disrupt?
- **Target asset:** Data, capability, workflow, identity, or decision point.
- **Entry point:** Prompt, API, file upload, integration, operator workflow, credentialed surface, or social path.
- **Preconditions:** What must be true first?
- **Likely bypass or weakness:** What control is absent, weak, or misapplied?
- **Impact chain:** What happens first, then next, then at business level?

## Prompts

- If I were a malicious insider, how would I misuse this workflow?
- If I were an external attacker, what is the cheapest path to high impact?
- What assumptions about trusted inputs could be abused?
- What data exposure or privilege escalation path is being ignored?
- What safety or review checkpoint is easiest to bypass?

## AI-system abuse reminders

Consider whether the proposal is exposed to:

- prompt injection
- sensitive data leakage
- tool misuse
- over-trust in model output
- insecure retrieval or context poisoning
- weak human approval gates

## Output skeleton

| Actor | Goal | Asset | Entry point | Preconditions | Weakness | Impact |
| --- | --- | --- | --- | --- | --- | --- |
| <actor> | <goal> | <asset> | <entry> | <conditions> | <weakness> | <impact> |
