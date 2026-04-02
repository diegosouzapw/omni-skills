// Read-only helper for discovery.
// Embed inside a use_figma call and adapt as needed.

async function inspectFileStructure() {
  const pages = figma.root.children.map((page) => ({
    id: page.id,
    name: page.name,
    childCount: page.children.length
  }))

  const localComponents = figma.root.findAll((node) => node.type === 'COMPONENT').map((node) => ({
    id: node.id,
    name: node.name,
    page: node.parent && node.parent.parent ? node.parent.parent.name : undefined
  }))

  const localComponentSets = figma.root.findAll((node) => node.type === 'COMPONENT_SET').map((node) => ({
    id: node.id,
    name: node.name,
    variantCount: node.children.length
  }))

  const variables = await figma.variables.getLocalVariablesAsync()
  const collections = await figma.variables.getLocalVariableCollectionsAsync()
  const textStyles = figma.getLocalTextStyles().map((style) => ({ id: style.id, name: style.name }))
  const effectStyles = figma.getLocalEffectStyles().map((style) => ({ id: style.id, name: style.name }))

  return {
    pages,
    collections: collections.map((c) => ({ id: c.id, name: c.name, modeCount: c.modes.length })),
    variableCount: variables.length,
    variables: variables.map((v) => ({ id: v.id, name: v.name, collectionId: v.variableCollectionId })),
    textStyles,
    effectStyles,
    localComponents,
    localComponentSets
  }
}

return await inspectFileStructure()
