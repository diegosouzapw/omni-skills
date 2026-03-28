# Impact Analysis Worksheet

Use this worksheet to attach downstream evidence to a contract review.

## 1. Change Summary

- **Contract name:**
- **Current version:**
- **Proposed version:**
- **Change summary:**
- **Preliminary classification:** additive / behavior-changing / breaking

## 2. Upstream And Transformation Context

- **Producers:**
- **Pipelines / jobs / transformations:**
- **Storage or serving layer:**

## 3. Known Consumers

| Consumer | Type | Criticality | Contact | Migration needed? | Notes |
| :------- | :--- | :---------- | :------ | :---------------- | :---- |
| Example dashboard | BI | high | analytics@example | yes | Depends on deprecated field |

## 4. Suspected Unknown Consumers

- Catalog gaps:
- Ad hoc query risk:
- Extract / export risk:
- Reverse ETL / ML feature risk:

## 5. Evidence Collected

- **Catalog or lineage links:**
- **Usage logs or query history:**
- **Stakeholder confirmations:**
- **Test or validation evidence:**

## 6. Decision Notes

- **Safe without versioning?** yes / no
- **Needs versioning or migration window?** yes / no
- **Blocking uncertainties:**
- **Recommended decision:** approve / approve with conditions / block
