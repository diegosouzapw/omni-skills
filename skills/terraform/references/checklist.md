# Terraform Checklist

Use this checklist when reviewing Terraform structure or proposing infrastructure changes.

## Structure

- Keep reusable modules in `modules/<name>` and environment wiring in root modules.
- Name modules and repositories according to the ownership boundary they represent.
- Avoid mixing generic modules and direct environment resources in the same abstraction without a clear reason.

## State and Secrets

- Decide state boundaries before recommending repository structure.
- Prefer narrow interfaces such as provider data sources or remote outputs over sharing whole state files.
- Use managed secrets and dynamic credentials instead of committed secrets or long-lived static tokens.

## Validation

- Treat `terraform plan` review as a required artifact, not a side effect.
- Run tests and policy checks in CI where the team can see failures before apply.
- Explain destructive or replacement behavior explicitly before recommending apply.

## Official Sources Used

- Terraform style guide: https://developer.hashicorp.com/terraform/language/style
