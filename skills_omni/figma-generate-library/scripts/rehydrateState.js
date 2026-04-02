// Read-only helper to reconstruct a simple key-to-id inventory.

async function rehydrateState() {
  const pages = {}
  for (const page of figma.root.children) {
    pages[page.name] = page.id
  }

  const components = {}
  for (const node of figma.root.findAll((n) => n.type === 'COMPONENT' || n.type === 'COMPONENT_SET')) {
    components[node.name] = node.id
  }

  const variables = {}
  for (const variable of await figma.variables.getLocalVariablesAsync()) {
    variables[variable.name] = variable.id
  }

  const textStyles = {}
  for (const style of figma.getLocalTextStyles()) {
    textStyles[style.name] = style.id
  }

  return { pages, components, variables, textStyles }
}

return await rehydrateState()
