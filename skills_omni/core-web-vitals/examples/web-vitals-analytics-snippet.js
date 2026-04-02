import { onCLS, onINP, onLCP } from 'web-vitals/attribution'

function safeSelector(node) {
  if (!node || !node.tagName) return undefined
  const tag = node.tagName.toLowerCase()
  const id = node.id ? `#${node.id}` : ''
  const className = typeof node.className === 'string'
    ? '.' + node.className.trim().split(/\s+/).slice(0, 2).join('.')
    : ''
  return `${tag}${id}${className}`.slice(0, 120)
}

function sendToAnalytics(metric) {
  const payload = {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    page: location.pathname,
  }

  if (metric.name === 'LCP') {
    payload.element = safeSelector(metric.attribution?.element)
  }

  if (metric.name === 'INP') {
    payload.eventTarget = safeSelector(metric.attribution?.interactionTargetElement)
    payload.eventType = metric.attribution?.interactionType
  }

  if (metric.name === 'CLS') {
    payload.largestShiftTarget = safeSelector(metric.attribution?.largestShiftTarget)
  }

  console.log('send analytics payload', payload)
}

onLCP(sendToAnalytics)
onINP(sendToAnalytics)
onCLS(sendToAnalytics)
