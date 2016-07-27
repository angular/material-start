/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, $mdSidenav, $mdBottomSheet, $log) {
  var self = this;

  self.selected     = null;
  self.users        = [ ];
  self.selectUser   = selectUser;
  self.toggleList   = toggleUsersList;
  self.share        = share;

  // Load all registered users

  UsersDataService
        .loadAllUsers()
        .then( function( users ) {
          self.users    = [].concat(users);
          self.selected = users[0];
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
    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
  }

  /**
   * Show the bottom sheet
   */
  function share() {
    var user = this.selected;

    $mdBottomSheet.show({
      parent: angular.element(document. getElementById('content')),
      templateUrl: 'src/users/view/ContactSheet.html',
      controller: [ '$mdBottomSheet', UserSheetController],
      controllerAs: "$ctrl",
      bindToController : true
    }).then((clickedItem) => {
      $log.debug( clickedItem.name + ' clicked!');
    });

    /**
     * Bottom Sheet controller for the Avatar Actions
     */
    function UserSheetController( $mdBottomSheet ) {
      this.user = user;
      this.items = [
        { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
        { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
        { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
        { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
      ];
      this.performAction = (action) => {
        $mdBottomSheet.hide(action);
      };
    }
  }
}

export default [ 'UsersDataService', '$mdSidenav', '$mdBottomSheet', '$log', AppController ];

