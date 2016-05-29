import {IUser} from "../../lib/users/Users";
import {UsersService} from "../../lib/users/services/UsersService";

/**
 * @ngInject
 */
export class App {
  // Define our App component's name
  static componentName:string = "msApp";

  // Define our App component's component config
  static componentConfig:ng.IComponentOptions = {
    bindings: {
    },
    controller: App,
    templateUrl: 'components/app/App.html'
  };
  
  // Define our injectables
  private $mdSidenav:angular.material.ISidenavService;
  private $mdBottomSheet:angular.material.IBottomSheetService;
  private $mdDialog:angular.material.IDialogService;
  private $sce:ng.ISCEService;

  // Define our own variables
  private users:IUser[];
  private selected:IUser;

  // Define our constructor and inject the necessary services
  constructor($mdSidenav:angular.material.ISidenavService, $mdBottomSheet:angular.material.IBottomSheetService,
              $mdDialog:angular.material.IDialogService, $sce:ng.ISCEService, UsersService:UsersService) {
    // Store all of our injectables
    this.$mdSidenav = $mdSidenav;
    this.$mdBottomSheet = $mdBottomSheet;
    this.$mdDialog = $mdDialog;
    this.$sce = $sce;

    // Load our users and store them to a variable
    UsersService.loadAllUsers().then((users:IUser[]) => {
      this.users = users;
      this.selected = users[0];
    });
  }
  
  /**
   * Hide or Show the 'left' sideNav area.
   */
  toggleUsersList() {
    this.$mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * 
   * @param user The user to be selected.
   */
  selectUser(user:number|IUser) {
    this.selected = angular.isNumber(user) ? this.users[<number> user] : <IUser> user;
  }

  /**
   * Show the bottom sheet
   *
   * TODO: Refactor this bottomSheet into it's own component that we can reuse
   */
  share($event:MouseEvent) {
    var self = this;
    var user:IUser = this.selected;
    var config:angular.material.IBottomSheetOptions = {
      parent: angular.element(document.getElementById('content')),
      templateUrl: 'lib/users/view/contactSheet.html',
      controller: UserSheetController,
      controllerAs: "vm",
      bindToController : true,
      targetEvent: $event
    };

    this.$mdBottomSheet.show(config).then((clickedItem) => {
      // Use a fancy TypeScript template string with interpolation
      var html = `<p>You contacted ${this.selected.name} via ${clickedItem.name}!</p>`;

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
      this.user = user;
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
