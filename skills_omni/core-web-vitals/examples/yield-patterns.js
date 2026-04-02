async function processInChunks(items, chunkSize = 100) {
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize)
    for (const item of chunk) {
      doWork(item)
    }

    if (globalThis.scheduler && typeof globalThis.scheduler.yield === 'function') {
      await globalThis.scheduler.yield()
    } else {
      await new Promise((resolve) => setTimeout(resolve, 0))
    }
  }
}

function doWork(item) {
  return item
}

processInChunks(Array.from({ length: 300 }, (_, i) => i))
