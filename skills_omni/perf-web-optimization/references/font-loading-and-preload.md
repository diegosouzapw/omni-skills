# Font Loading and Preload

## Font loading priorities

- reduce the number of families and weights first
- subset fonts when your pipeline allows it
- use `font-display` intentionally
- preload only fonts that are clearly critical to first render

## When preload is helpful

Preload can help when a truly critical resource is otherwise discovered too late.

## When preload is harmful

- too many resources are preloaded
- non-critical fonts compete with more important content
- multiple alternatives are preloaded unnecessarily
- incorrect attributes cause wasted requests or poor prioritization

## Safe checks after adding preload

- Did the intended resource start earlier?
- Did a more important resource get delayed?
- Did the waterfall become more crowded?
- Is the preload still necessary once markup or resource order is improved?

## Practical guidance

- keep preload targeted
- verify with the Network panel
- remove speculative preloads that do not improve visible loading
