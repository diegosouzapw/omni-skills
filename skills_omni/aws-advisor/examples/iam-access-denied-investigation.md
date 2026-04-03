# IAM Access Denied Investigation Example

## Input

```text
User arn:aws:sts::123456789012:assumed-role/DeployRole/ci is not authorized to perform iam:PassRole on resource arn:aws:iam::123456789012:role/AppTaskRole
```

## Investigation shape

- confirm the exact principal in use
- confirm the denied action and target resource
- check whether the role policy allows `iam:PassRole` on the specific role
- check whether conditions restrict which services or roles may be passed
- check whether permissions boundaries, session policies, or SCPs apply
- confirm whether the target service also requires trust policy alignment

## Example output shape

- likely cause: missing or constrained `iam:PassRole` permission
- other policy layers to verify: permissions boundary, SCP, session policy
- safe next step: review effective permissions for the assumed role before broadening access
