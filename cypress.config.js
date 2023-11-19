const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://automationexercise.com',
    retries:{ //powtórzenia testów które zfailowały
      runMode: 0, //tryb run czyli bez UI
      openMode: 0 //open czyli z UI
    }
  },
});
