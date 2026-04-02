// Safe cleanup helper.
// Deletes only explicit IDs provided by the caller.

function cleanupOrphans(input) {
  const { nodeIds = [] } = input
  const removed = []
  const missing = []

  for (const id of nodeIds) {
    const node = figma.getNodeById(id)
    if (!node) {
      missing.push(id)
      continue
    }
    removed.push({ id: node.id, name: node.name })
    node.remove()
  }

  return { removed, missing }
}

return cleanupOrphans(input)
