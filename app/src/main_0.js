// Load the Angular Material CSS associated with ngMaterial
// then load the main.css to provide overrides, etc.

// Load libraries

import angular from 'angular'

let appName = "starter-app";
export default angular
                  .module( appName, [] )
                  .run(()=>{
                    console.log(`Running the ${appName} ES6 Tutorial`);
                  });




