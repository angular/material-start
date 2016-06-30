/**
 * @ngInject
 */
export class UserDetailsComponent {
  // Define our user_details component's name
  static componentName:string = "msUserDetails";

  // Define our user_details component's component config
  static componentConfig:ng.IComponentOptions = {
    bindings: {
      selected: '<',
      share: '&onShare'
    },
    controller: UserDetailsComponent,
    templateUrl: 'components/user_details/user_details.component.html'
  };
}