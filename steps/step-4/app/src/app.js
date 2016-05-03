import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import Users from 'lib/users/Users'

export default angular.module('starter-app', [ 'ngMaterial', Users.name ])
  .run( () => {
    console.log(`Starting 'starter-app' module`);
  });