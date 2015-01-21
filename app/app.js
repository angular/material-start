(function(){
'use strict';

  angular
      .module('starterApp', ['ngMaterial', 'muppets'])
      .controller('AppCtrl', ['$scope', 'muppetsService', '$mdSidenav', '$mdBottomSheet', '$log', MuppetAppController ])
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
  function MuppetAppController($scope, muppetsService, $mdSidenav, $mdBottomSheet, $log ) {
    var allMuppets = [ ];

    $scope.selected      = null;
    $scope.muppets       = allMuppets;
    $scope.selectMuppet  = selectMuppet;
    $scope.toggleSidenav = toggleSideNav;
    $scope.showActions   = showActions;

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

    /**
     * Show the bottom sheet
     */
    function showActions($event) {

        $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          template: '<md-bottom-sheet class="md-list md-has-header">' +
                      '<md-subheader>Muppet Actions</md-subheader>' +
                        '<md-list>' +
                          '<md-item ng-repeat="item in vm.items">' +
                            '<md-button ng-click="vm.performAction(item)">{{item.name}}</md-button>' +
                          '</md-item>' +
                        '</md-list>' +
                      '</md-bottom-sheet>',
          bindToController : true,
          controllerAs: "vm",
          controller: [ '$mdBottomSheet', MuppetSheetController],
          targetEvent: $event
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Muppet Actions
         */
        function MuppetSheetController( $mdBottomSheet ) {
          this.items = [
            { name: 'Share', icon: 'share' },
            { name: 'Copy', icon: 'copy' },
            { name: 'Impersonate', icon: 'impersonate' },
            { name: 'Singalong', icon: 'singalong' },
          ];
          this.performAction = function(action) {
            $mdBottomSheet.hide(action);
          };
        }
    }

  }



})();
