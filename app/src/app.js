// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

export default angular.module( 'starter-app', [ 'ngMaterial' ] )
  .run(() => {
    console.log(`Starting the 'starter-app' module`);
  });
