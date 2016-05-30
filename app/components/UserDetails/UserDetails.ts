/**
 * @ngInject
 */
export class UserDetails {
  // Define our UserDetails component's name
  static componentName:string = "msUserDetails";

  // Define our UserDetails component's component config
  static componentConfig:ng.IComponentOptions = {
    bindings: {
      selected: '<',
      share: '&onShare'
    },
    controller: UserDetails,
    templateUrl: 'components/UserDetails/UserDetails.html'
  };
}