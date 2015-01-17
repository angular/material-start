(function(){
'use strict';

  angular
      .module('starterApp', ['ngMaterial', 'muppets'])
      .controller('AppCtrl', ['$scope', '$mdSidenav', 'muppetsService', MuppetAppController ])
      .config(function($mdThemingProvider) {
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

    $scope.muppets       = allMuppets;
    $scope.selected      = null;
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
    function toggleSideNav( menuId ) {
      $mdSidenav(menuId).toggle();
    }

    /**
     * Select the current muppet
     * @param menuId
     */
    function selectMuppet (muppet) {
        $scope.selected = angular.isNumber(muppet) ? $scope.muppets[muppet] : muppet;
        $scope.toggleSidenav('left');
    }

  }


})();
