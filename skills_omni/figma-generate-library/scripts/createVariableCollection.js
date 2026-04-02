// Create a variable collection with named modes.
// Safe pattern: exact-name lookup before create.

async function createVariableCollection(input) {
  const { name, modes } = input
  const existing = (await figma.variables.getLocalVariableCollectionsAsync()).find((c) => c.name === name)

  if (existing) {
    return {
      reused: true,
      collectionId: existing.id,
      modeIds: existing.modes.map((m) => ({ name: m.name, modeId: m.modeId }))
    }
  }

  const collection = figma.variables.createVariableCollection(name)
  const modeIds = [{ name: collection.modes[0].name, modeId: collection.modes[0].modeId }]

  for (let i = 1; i < modes.length; i += 1) {
    const modeId = collection.addMode(modes[i])
    modeIds.push({ name: modes[i], modeId })
  }

  return {
    reused: false,
    collectionId: collection.id,
    modeIds
  }
}

return await createVariableCollection(input)
