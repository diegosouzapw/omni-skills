// Narrow helper to bind variables to common component properties.
// Adapt carefully for the target node/property types.

function bindVariablesToComponent(input) {
  const { nodeId, bindings } = input
  const node = figma.getNodeById(nodeId)
  if (!node) throw new Error(`Node not found: ${nodeId}`)

  for (const binding of bindings) {
    if (binding.kind === 'setPluginMarker') {
      node.setSharedPluginData('dsb', binding.key, binding.value)
    }
    // Property-specific binding logic should be added narrowly per workflow.
    // Keep this helper explicit rather than pretending every property binds the same way.
  }

  return { id: node.id, name: node.name, bindingCount: bindings.length }
}

return bindVariablesToComponent(input)
