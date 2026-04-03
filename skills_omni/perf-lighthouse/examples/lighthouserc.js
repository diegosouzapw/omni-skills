module.exports = {
  ci: {
    collect: {
      url: ['http://127.0.0.1:3000/', 'http://127.0.0.1:3000/about'],
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'ready|listening|started',
      numberOfRuns: 3,
      settings: {
        onlyCategories: ['performance'],
        formFactor: 'mobile',
        throttlingMethod: 'devtools',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
