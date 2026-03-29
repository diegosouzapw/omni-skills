# Release Phase Model

Use a visible stability label for tokens, components, and major patterns.

| Phase | Meaning | Consumer expectation | Typical policy |
| :---- | :------ | :------------------- | :------------- |
| Experimental | Early exploration | Not for broad production adoption | rapid iteration, limited guarantees |
| Beta | Usable with caution | Adopt with known constraints and active feedback | contract may still change |
| Stable | Recommended for production | Backward compatibility and migration discipline apply | normal support and release notes |
| Deprecated | Replacement exists or retirement planned | New adoption should stop | migration guidance required |
| Sunset | Support ending or ended | Consumer action required | final removal timing defined |

## Release classification

| Change class | Typical version impact | Consumer action |
| :----------- | :--------------------- | :-------------- |
| Additive | patch or minor depending on policy | optional adoption |
| Behavior-changing | minor or managed internal release | review recommended |
| Breaking | major or explicit coordinated release | migration required |

## Minimum communication fields

- phase
- change class
- affected consumers
- required action
- migration owner
- target date or version

## Notes

If your organization does not publish semver externally, still classify compatibility impact and required consumer action internally.
