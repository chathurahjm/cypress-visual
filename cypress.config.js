const { defineConfig } = require("cypress");

const { getCompareSnapshotsPlugin } = require('cypress-image-diff-js/dist/plugin');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
     // return getCompareSnapshotsPlugin(on, config);
     return require('cypress-image-diff-js/dist/plugin')(on, config)

    },
  },
};