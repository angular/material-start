import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import App from '../App';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'starter-app', [  App.name,  'ngMaterial' ] )
      .run(()=>{
        // Use main 'App' module and log startup status
        console.log(`Running the 'starter-app' ES6 Material-Start Tutorial`);
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'starter-app' ]);
  });
