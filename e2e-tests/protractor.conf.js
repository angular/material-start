exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  chromeDriver: '/usr/local/lib/node_modules/protractor/selenium/chromedriver',
  seleniumServerJar: '/usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',

  framework: 'jasmine',

  plugins: [{
    chromeA11YDevTools: true,
    path: '../node_modules/protractor/plugins/accessibility/index.js'
  }],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
