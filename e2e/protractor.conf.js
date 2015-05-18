exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    './**/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8080',


  chromeDriver: '/usr/local/lib/node_modules/protractor/selenium/chromedriver',
  seleniumServerJar: '/usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  //seleniumAddress:'http://127.0.0.1:4444/wd/hub',

  framework: 'jasmine',

  //plugins: [{
  //  chromeA11YDevTools: true,
  //  path: '../node_modules/protractor/plugins/accessibility/index.js'
  //}],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
