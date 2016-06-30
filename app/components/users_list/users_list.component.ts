/**
 * @ngInject
 */
export class UsersListComponent {
  // Define our UsersListComponent component's name
  static componentName:string = "msUsersList";

  // Define our UsersListComponent component's component config
  static componentConfig:ng.IComponentOptions = {
    bindings: {
      users: '<',
      selected: '<',
      selectUser: '&onSelected'
    },
    controller: UsersListComponent,
    templateUrl: 'components/users_list/users_list.component.html'
  };
}
