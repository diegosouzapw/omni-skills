# Red-Team Abuse Case Example

## User request

> Red-team our internal AI support assistant.

## Critique excerpt

**Steelmanned thesis:**  
You believe an internal AI support assistant can improve employee support throughput safely because it is restricted to internal use and can only access approved knowledge sources.

**Mode used:**  
Attack This

**Abuse case 1**  
- **Actor:** Malicious insider
- **Goal:** Exfiltrate sensitive internal HR guidance and privileged case notes
- **Asset:** Sensitive support knowledge and case context
- **Entry point:** Prompting the assistant through a legitimate employee account
- **Preconditions:** The assistant can retrieve broad internal content and output filtering is weak
- **Weakness:** Trust boundary assumes authenticated employees should see all retrieved content
- **Impact:** Sensitive disclosures, policy violations, and loss of internal trust

**Abuse case 2**  
- **Actor:** External attacker using a compromised employee session
- **Goal:** Extract internal workflows and abuse support actions
- **Asset:** Internal operational procedures and support capabilities
- **Entry point:** Stolen browser session or compromised endpoint
- **Preconditions:** Session remains active and approval gates are weak
- **Weakness:** The workflow over-trusts authenticated context and lacks strong human review
- **Impact:** Unauthorized actions, data exposure, and operational disruption

**Residual adversarial risk:**  
The proposal appears to treat internal-only access as a sufficient control, which is not a reliable security boundary.
