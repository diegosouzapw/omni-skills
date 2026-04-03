new PerformanceObserver((list) => {
  const entries = list.getEntries()
  const lastEntry = entries[entries.length - 1]
  if (!lastEntry) return

  console.log('LCP time:', lastEntry.startTime)
  console.log('LCP element:', lastEntry.element)
}).observe({ type: 'largest-contentful-paint', buffered: true })
