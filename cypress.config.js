module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.na-kd.com/en',
    viewportWidth: 3000,
    viewportHeight: 2000,
    "chromeWebSecurity": false,
    "retries": {
      "runMode": 2,
      "openMode": 2
    }
  },
  
};

