new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('Long task detected:', {
      start: entry.startTime,
      duration: entry.duration,
    })
  }
}).observe({ type: 'longtask', buffered: true })
