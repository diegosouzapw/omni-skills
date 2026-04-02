# Domain Overlap Decision Matrix

Use this matrix after semantic validation.

| Option | Best when | Watch for | Avoid when |
| --- | --- | --- | --- |
| Shared library | Logic is stable, local, and easy to version | Ownership, versioning, release policy | Teams need independent runtime policy or scaling |
| Shared service | Capability needs central runtime control, policy, or scaling | Authn/authz, network latency, SLOs, secrets, failure modes | A library would solve the problem with less coupling |
| Component merge | Same owners, same deployment unit, high semantic overlap | Loss of modular clarity | Teams or release units must stay independent |
| Keep separate / intentional duplication | Autonomy, compliance, latency, or bounded-context differences matter more than DRY | Ongoing drift, duplicated fixes | The logic is truly one capability and divergence adds no value |

## Forcing questions

1. Does this need runtime centralization, or only reusable code?
2. Will a shared artifact increase release coordination across teams?
3. Does extraction cross a trust boundary?
4. Is the logic stable enough for packaging?
5. Would intentional duplication preserve autonomy better?
