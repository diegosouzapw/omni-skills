# Abuse Case Matrix

| Asset or action | Attacker goal | Abuse path | Control candidate |
| :-------------- | :------------ | :--------- | :---------------- |
| Admin action | privilege misuse | stolen session or unsafe internal approval call | step-up auth plus approval logging |
| File upload | malicious content delivery | oversized or unsafe payload reaches downstream processor | type restrictions, scanning, sandboxing |
| Internal API | unauthorized mutation | weak service identity or missing authorization check | mutual identity plus server-side authorization |
| Secret-bearing job | lateral movement | exposed runtime env or over-broad role scope | least privilege and secret access narrowing |
