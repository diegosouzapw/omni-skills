new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.hadRecentInput) continue
    console.log('Layout shift value:', entry.value)
    if (entry.sources) {
      for (const source of entry.sources) {
        console.log('Shift source node:', source.node)
      }
    }
  }
}).observe({ type: 'layout-shift', buffered: true })
