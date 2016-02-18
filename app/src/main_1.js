// Load the Angular Material CSS associated with ngMaterial
// then load the main.css to provide overrides, etc.

import 'angular-material/angular-material.css!'

// Load libraries

import angular from 'angular'
import 'angular-animate'
import 'angular-aria'
import 'angular-material'

let appName = "starter-app";
export default angular
                  .module( appName, ['ngMaterial'] )
                  .run(()=>{
                    console.log(`Running the ${appName} ES6 Angular-Material Tutorial`);
                  });





