import angular from 'angular';
import App from './src/app';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    // angular
    //   .module( App.name)
    //   .run(()=>{
    //     // Use main 'App' module and log startup status
    //     console.log(`Running the ${App.name} ES6 Material-Start Tutorial`);
    //   });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ App.name ]);
  });
