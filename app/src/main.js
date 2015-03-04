// Load the Angular Material CSS associated with ngMaterial
// then load the main.css to provide overrides, etc.

import 'angular-material/angular-material.css!'
import 'assets/app.css!'


// Load libraries

import angular from 'angular'
import material from 'angular-material'

import 'angular-animate'
import 'angular-aria'

// Load custom application modules; currently it is only the 'users' module
import users from 'users/Users'

let modules = [ 'ngMaterial' ]
        .concat([ `${users.name}`]);

export default angular.module( 'starter-app', modules ).run();




