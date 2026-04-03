# List Performance Review Prompt

```text
Review this React Native list screen for performance problems.

Goals:
- identify whether virtualization is correct
- find obvious render-path waste
- check image and row complexity
- recommend FlatList tuning before switching libraries
- suggest FlashList only if the measured scenario justifies it

Return:
1. likely bottlenecks
2. highest-confidence code changes
3. release-mode validation steps
4. whether the issue is JS-thread, rendering, image, or list-configuration related
```
