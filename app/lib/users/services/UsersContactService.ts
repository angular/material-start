import {IUser} from "../Users";

/**
 * Users Contact Service
 *
 * Contains functionality related to contacting (or sharing with) users.
 *
 * @returns {{share: Function}}
 * @constructor
 * @ngInject
 */
export class UsersContactService {

  private $sce:ng.ISCEService;
  private $mdSidenav:angular.material.ISidenavService;
  private $mdDialog:angular.material.IDialogService;
  private $mdBottomSheet:angular.material.IBottomSheetService;

  constructor($sce:ng.ISCEService, $mdSidenav:angular.material.ISidenavService,
              $mdDialog:angular.material.IDialogService, $mdBottomSheet:angular.material.IBottomSheetService) {
    this.$sce = $sce;
    this.$mdSidenav = $mdSidenav;
    this.$mdDialog = $mdDialog;
    this.$mdBottomSheet = $mdBottomSheet;
  }
    
  /**
   * Presents the user with a UI to share with the selected user.
   * 
   * The current implementation uses a $mdBottomSheet to accomplish this.
   */
  share($event:MouseEvent, selectedUser:IUser) {
    var self = this;
    var config:angular.material.IBottomSheetOptions = {
      parent: angular.element(document.getElementById('content')),
      templateUrl: 'lib/users/view/contactSheet.html',
      controller: UserSheetController,
      controllerAs: "$ctrl",
      bindToController : true,
      targetEvent: $event
    };

    this.$mdBottomSheet.show(config).then((clickedItem) => {
      // Use a fancy TypeScript template string with interpolation
      var html = `<p>You contacted ${selectedUser.name} via ${clickedItem.name}!</p>`;

      // Setup our Alert dialog config object
      var alert = this.$mdDialog.alert()
        .title('Sharing Success')
        .htmlContent(this.$sce.trustAsHtml(html))
        .ok('Sweet!');

      // Show the alert
      this.$mdDialog.show(alert);
    });

    /**
     * Bottom Sheet controller for the Avatar Actions
     */
    function UserSheetController() {
      this.user = selectedUser;
      this.items = [
        { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
        { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
        { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
        { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
      ];
      this.performAction = function(action) {
        self.$mdBottomSheet.hide(action);
      };
    }
  }
}
