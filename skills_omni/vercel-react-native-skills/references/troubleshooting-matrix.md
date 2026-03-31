# Troubleshooting Matrix

| Symptom | Likely cause | Check first | Reference |
| --- | --- | --- | --- |
| Slow only in debug | dev overhead | repro in release build | `react-native-performance-triage.md` |
| Native module not available | Expo Go limitation or missing native build | runtime type | `expo-workflow-decision-tree.md` |
| Config change ignored | prebuild/regeneration not applied | app config and plugin path | `expo-native-config-checklist.md` |
| List shows blank cells | virtualization tuning or heavy rows | keys, row memo, batch settings | `list-performance-playbook.md` |
| Gesture animation stutters during state work | JS-thread contention | overlapping render/update work | `animation-and-gestures-playbook.md` |
| Metro fails in monorepo | workspace resolution drift | app package ownership and versions | `monorepo-native-dependencies-checklist.md` |
| Touch / safe area advice seems stale | outdated guidance | current platform primitive | SKILL.md best practices |
