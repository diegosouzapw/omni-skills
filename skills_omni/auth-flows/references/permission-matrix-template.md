# Permission Matrix Template

| Actor | Resource | Action | Enforcement point | Notes |
| :---- | :------- | :----- | :---------------- | :---- |
| member | project | read | API authorization | tenant-scoped |
| member | project | write | API authorization + business rule | may depend on project state |
| admin | workspace | impersonate | step-up auth + audit log | privileged path |
| support | account | recover access | limited workflow with review | emergency-only |
