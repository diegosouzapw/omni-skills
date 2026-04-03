import { onCLS, onINP, onLCP } from 'web-vitals/attribution';

function sendToAnalytics(metric) {
  const payload = {
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    id: metric.id,
    page: window.location.pathname,
    attribution: metric.attribution,
  };

  // Replace with your analytics transport.
  console.log('web-vitals', payload);
}

onLCP(sendToAnalytics);
onINP(sendToAnalytics);
onCLS(sendToAnalytics);
