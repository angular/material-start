(function(){

  angular
       .module('users')
       .controller('UsersListController', [
          '$scope', 'usersService', '$mdSidenav', '$mdBottomSheet', '$log',
          UsersListController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function UsersListController($scope, usersService, $mdSidenav, $mdBottomSheet, $log ) {

    $scope.selected        = null;
    $scope.users           = [ ];
    $scope.selectUser      = selectUser;
    $scope.toggleUsersList = toggleUsersList;
    $scope.showActions     = showActions;

    // Load all registered users

    usersService
          .loadAll()
          .then( function( users ) {
            $scope.users    = [].concat(users);
            $scope.selected = users[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser ( user ) {
        $scope.selected = angular.isNumber(user) ? $scope.users[user] : user;
        $scope.toggleUsersList();
    }

    /**
     * Show the bottom sheet
     */
    function showActions($event) {

        $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          template: '<md-bottom-sheet class="md-list md-has-header">' +
                      '<md-subheader>Contact User</md-subheader>' +
                        '<md-list>' +
                          '<md-item ng-repeat="item in vm.items">' +
                            '<md-button ng-click="vm.performAction(item)">{{item.name}}</md-button>' +
                          '</md-item>' +
                        '</md-list>' +
                      '</md-bottom-sheet>',
          bindToController : true,
          controllerAs: "vm",
          controller: [ '$mdBottomSheet', AvatarSheetController],
          targetEvent: $event
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function AvatarSheetController( $mdBottomSheet ) {
          this.items = [
            { name: 'Share'       , icon: 'share' },
            { name: 'Copy'        , icon: 'copy' },
            { name: 'Impersonate' , icon: 'impersonate' },
            { name: 'Singalong'   , icon: 'singalong' },
          ];
          this.performAction = function(action) {
            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
