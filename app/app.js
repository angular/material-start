(function(){
'use strict';

  angular
      .module('starterApp', ['ngMaterial', 'muppets'])
      .controller('AppCtrl', ['$scope', '$mdSidenav', 'muppetsService', MuppetAppController ])
      .config(function($mdThemingProvider) {

        // Use the 'brown' theme - override default 'blue' theme

        $mdThemingProvider.theme('default')
          .primaryColor('brown')
          .accentColor('brown');

      });

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param muppetService
   * @constructor
   */
  function MuppetAppController($scope, $mdSidenav, muppetsService) {
    var allMuppets = [ ];

    $scope.selected      = null;
    $scope.muppets       = allMuppets;
    $scope.selectMuppet  = selectMuppet;
    $scope.toggleSidenav = toggleSideNav;

    loadMuppets();

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Load all available muppets
     * @param menuId
     *
     */
    function loadMuppets() {
      muppetsService
        .loadAll()
        .then( function( muppets ) {
          allMuppets = muppets;

          $scope.muppets = [].concat(muppets);
          $scope.selected = muppets[0];
        });
    }

    /**
     * Hide or Show the sideNav area
     * @param menuId
     */
    function toggleSideNav( name ) {
      $mdSidenav(name).toggle();
    }

    /**
     * Select the current muppet
     * @param menuId
     */
    function selectMuppet ( muppet ) {
        $scope.selected = angular.isNumber(muppet) ? $scope.muppets[muppet] : muppet;
        $scope.toggleSidenav('left');
    }

  }


})();
