System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
  },
  paths: {
    // paths serve as alias
    'npm:': 'node_modules/'
  },

  // Set the Base URL that files will be loaded from to /dist (instead of /app)
  baseURL: '/app/src',

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
