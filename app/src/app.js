// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Users from 'src/users/Users';

export default angular.module( 'starter-app', [ 'ngMaterial', Users.name ] )
  .run(() => {
    console.log(`Starting the 'starter-app' module`);
  })
  .controller('AppController', AppController);
