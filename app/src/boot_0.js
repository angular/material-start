import angular from 'angular';
import main from 'src/main_0';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {

    var body = document.getElementsByTagName("body")[0];

    angular
      .bootstrap( body, [ main.name ])


  });
