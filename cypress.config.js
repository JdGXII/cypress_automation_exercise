const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
    env: {
      apiTestingBaseUrl: 'https://petstore.swagger.io'
    }
    
    // Other configurations...
  },
});
