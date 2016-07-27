import angular from 'angular';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'starter-app-bootstrap', [ ] )
      .run(()=>{
        console.log(`Running the 'starter-app-bootstrap' ES6 Material-Start Tutorial`);
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'starter-app-bootstrap' ]);
  });
