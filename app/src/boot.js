// Load the Angular Material CSS associated with ngMaterial
// then load the main.css to provide overrides, etc.

import 'angular-material/angular-material.css!'
import 'assets/app.css!'

// Load Angular libraries

import angular from 'angular'
import material from 'angular-material'
import 'angular-animate'
import 'angular-aria'

// Load custom application modules

import users from 'users/Users'

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {

    let body = document.getElementsByTagName("body")[0];
    let app  = angular.module( 'starter-app', [ 'ngMaterial', `${users.name}` ] );

    angular.bootstrap( body, [ app.name ], { strictDi: false });

  });



