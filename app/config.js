System.config({
  // Tell System to use .js if we don't provide an extension
  defaultJSExtensions: true,

  // Set the Base URL that files will be loaded from to /dist (instead of /app)
  baseURL: '/dist',

  // Tell it how to find our Angular dependencies
  map: {
    'angular': '../node_modules/angular/angular.js',
    'angular-animate': '../node_modules/angular-animate/angular-animate.js',
    'angular-aria': '../node_modules/angular-aria/angular-aria.js',
    'angular-material': '../node_modules/angular-material/angular-material.js',
    'angular-messages': '../node_modules/angular-messages/angular-messages.js',
    'angular-sanitize': '../node_modules/angular-sanitize/angular-sanitize.js'
  },
  
  meta: {
    'angular': { format: 'global' },
    'angular-animate': { format: 'global' },
    'angular-aria': { format: 'global' },
    'angular-material': { format: 'global' },
    'angular-messages': { format: 'global' },
    'angular-sanitize': { format: 'global' }
  }
});