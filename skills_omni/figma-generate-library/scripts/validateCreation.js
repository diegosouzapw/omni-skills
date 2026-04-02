// Validation helper for exact-name and count checks.

async function validateCreation(input) {
  const { expectedPages = [], expectedComponentSets = [], expectedVariables = [] } = input
  const pages = figma.root.children.map((p) => p.name)
  const componentSets = figma.root.findAll((n) => n.type === 'COMPONENT_SET').map((n) => n.name)
  const variables = (await figma.variables.getLocalVariablesAsync()).map((v) => v.name)

  return {
    missingPages: expectedPages.filter((name) => !pages.includes(name)),
    missingComponentSets: expectedComponentSets.filter((name) => !componentSets.includes(name)),
    missingVariables: expectedVariables.filter((name) => !variables.includes(name))
  }
}

return await validateCreation(input)
