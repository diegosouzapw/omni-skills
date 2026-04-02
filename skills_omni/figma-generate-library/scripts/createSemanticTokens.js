// Create semantic variables by exact-name lookup.
// Expects aliases to refer to already-created primitive variable IDs.

async function createSemanticTokens(input) {
  const { collection, modeIds, tokens } = input
  const variables = await figma.variables.getLocalVariablesAsync()
  const results = []

  for (const token of tokens) {
    let variable = variables.find(
      (v) => v.variableCollectionId === collection.id && v.name === token.name
    )

    if (!variable) {
      variable = figma.variables.createVariable(token.name, collection, token.resolvedType)
    }

    for (const modeValue of token.values) {
      if (modeValue.kind === 'alias') {
        variable.setValueForMode(modeIds[modeValue.modeName], {
          type: 'VARIABLE_ALIAS',
          id: modeValue.targetVariableId
        })
      } else {
        variable.setValueForMode(modeIds[modeValue.modeName], modeValue.value)
      }
    }

    results.push({ id: variable.id, name: variable.name })
  }

  return { tokens: results }
}

return await createSemanticTokens(input)
