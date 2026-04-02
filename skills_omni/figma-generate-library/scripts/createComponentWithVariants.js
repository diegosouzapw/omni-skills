// Create a component set from prepared components.
// Keep usage narrow and validate before scaling up.

function layoutAsGrid(nodes, columns = 4, gapX = 120, gapY = 120) {
  nodes.forEach((node, index) => {
    const col = index % columns
    const row = Math.floor(index / columns)
    node.x = col * gapX
    node.y = row * gapY
  })
}

async function createComponentWithVariants(input) {
  const { pageName, setName, variantComponents } = input
  const page = figma.root.children.find((p) => p.name === pageName)
  if (!page) throw new Error(`Page not found: ${pageName}`)

  await figma.setCurrentPageAsync(page)

  const created = []
  for (const variant of variantComponents) {
    const component = figma.createComponent()
    component.name = variant.name
    page.appendChild(component)
    created.push(component)
  }

  layoutAsGrid(created)
  const set = figma.combineAsVariants(created, page)
  set.name = setName
  layoutAsGrid(set.children)

  return {
    componentSetId: set.id,
    componentSetName: set.name,
    childIds: set.children.map((child) => child.id)
  }
}

return await createComponentWithVariants(input)
