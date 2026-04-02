# Decomposition Roadmap Template

Use this template to produce a phased, reviewable migration roadmap.

## 1. Objective and Constraints

- **Primary business outcome:**
- **Secondary outcomes:**
- **Non-goals:**
- **Time horizon:**
- **Constraints:** budget / staffing / compliance / runtime / freeze windows

## 2. Current-State Assessment

### Completed patterns
- [ ] Component inventory
- [ ] Dependency mapping
- [ ] Domain grouping
- [ ] Partial extraction already in place

### Current blockers
- [ ] Shared database
- [ ] Cross-cutting transactions
- [ ] Batch/reporting dependency
- [ ] No clear team ownership
- [ ] Weak observability
- [ ] Weak rollback capability

### Readiness gaps
- CI/CD:
- Telemetry:
- Ownership:
- Runbooks:
- Testing:

## 3. Candidate Extraction Summary

| Candidate | Business capability / domain | Value | Coupling | Data independence | Ownership readiness | Recommendation |
| --- | --- | --- | --- | --- | --- | --- |
| | | | | | | |

## 4. Recommended Extraction Order

1. **First:**
   - Why now:
   - Preconditions:
   - Rollback point:
2. **Next:**
3. **Deferred:**
4. **Rejected:**

## 5. Transition Pattern by Candidate

| Candidate | Pattern | Temporary adapters needed | Cutover style | Rollback point |
| --- | --- | --- | --- | --- |
| | | | | |

## 6. Phased Roadmap

### Phase 1: Analysis and preparation
- **Objective:**
- **Scope:**
- **Dependencies:**
- **Milestones:**
- **Success criteria:**
- **Pause conditions:**
- **Owners:**

### Phase 2: Boundary preparation
- **Objective:**
- **Scope:**
- **Dependencies:**
- **Milestones:**
- **Success criteria:**
- **Pause conditions:**
- **Owners:**

### Phase 3: First extraction
- **Objective:**
- **Scope:**
- **Dependencies:**
- **Milestones:**
- **Success criteria:**
- **Rollback conditions:**
- **Owners:**

### Phase 4: Expansion
- **Objective:**
- **Scope:**
- **Dependencies:**
- **Milestones:**
- **Success criteria:**
- **Pause conditions:**
- **Owners:**

### Phase 5: Optimization and consolidation
- **Objective:**
- **Scope:**
- **Dependencies:**
- **Milestones:**
- **Success criteria:**
- **Owners:**

## 7. Risks and Mitigations

| Risk | Impact | Trigger | Mitigation | Contingency | Owner |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

## 8. Architecture Stories / Epics

### Story / Epic
- Description:
- Acceptance criteria:
- Estimate:
- Dependencies:
- Owner:

## 9. Metrics and Fitness Functions

| Metric | Baseline | Target | Measurement method | Review cadence |
| --- | --- | --- | --- | --- |
| | | | | |

## 10. Stakeholder Decisions Needed

- Decision:
- Options considered:
- Recommended choice:
- Decision owner:
- Due date:
