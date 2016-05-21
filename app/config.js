System.config({
  // Tell System to use .js if we don't provide an extension
  defaultJSExtensions: true,

  // Set the Base URL that files will be loaded from to /dist (instead of /app)
  baseURL: '/dist',

  // Tell it how to find our Angular dependencies
  map: {
    angular: '../node_modules/angular/angular.js'
  },
  
  meta: {
    angular: {
      format: 'global'
    }
  }
});