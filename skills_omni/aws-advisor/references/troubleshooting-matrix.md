# AWS Troubleshooting Matrix

## IAM AccessDenied

**Symptoms:** `AccessDenied`, `not authorized to perform`, action denied despite apparent allow.

**Gather:**
- principal ARN
- API action
- resource ARN
- exact error text
- identity policy
- resource policy if applicable
- permissions boundary
- session context
- Organizations SCP context if known

**Likely causes:**
- explicit deny
- missing allow on correct resource
- condition key mismatch
- permissions boundary restriction
- SCP restriction
- wrong role/session in use

**Safe next step:** Review policy evaluation layers before changing permissions.

## Region or feature mismatch

**Symptoms:** unsupported region, missing feature, endpoint not available.

**Gather:**
- service name
- feature name
- target region
- compliance constraints
- exact deployment or runtime error

**Likely causes:**
- feature not launched in region
- endpoint mismatch
- design assumed global parity

**Safe next step:** Validate regional support, then choose alternate region or alternate service design.

## Quota exceeded

**Symptoms:** service limit, quota exceeded, throttled provisioning, capacity ceiling.

**Gather:**
- exact quota name if known
- account and region scope
- current usage estimate
- deployment stage when failure occurred

**Likely causes:**
- default quota too low
- burst beyond expected growth
- hidden dependency on another limited resource

**Safe next step:** Confirm quota and whether it is adjustable before changing architecture.

## CloudFormation create/update failure

**Symptoms:** stack rollback, failed logical resource, create/update/delete failure.

**Gather:**
- stack status
- stack events
- first failed logical resource
- underlying service error
- recent template change

**Likely causes:**
- IAM permissions
- invalid property combination
- immutable property update
- dependency or ordering issue
- naming conflict
- deletion protection or retained resource behavior

**Safe next step:** Triage the first failing event, not only the final rollback state.

## Drift or mismatch

**Symptoms:** actual resource config differs from IaC or expected stack state.

**Gather:**
- source template or IaC
- observed deployed config
- recent manual changes
- drift detection output if available

**Likely causes:**
- manual console change
- partial failed deployment
- imported or unmanaged resource differences

**Safe next step:** Decide whether to update IaC to reality or restore reality to IaC.

## Observability gap

**Symptoms:** insufficient logs, metrics, alarms, or traces to explain behavior.

**Gather:**
- existing dashboards
- log groups
- metrics and alarms
- service-specific diagnostics already enabled

**Likely causes:**
- observability omitted from initial design
- retention too short
- no workload-level instrumentation

**Safe next step:** Enable the minimum useful telemetry before broad remediation.
