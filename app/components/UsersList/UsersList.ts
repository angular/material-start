/**
 * @ngInject
 */
export class UsersList {
  // Define our UsersList component's name
  static componentName:string = "msUsersList";

  // Define our UsersList component's component config
  static componentConfig:ng.IComponentOptions = {
    bindings: {
      users: '<',
      selected: '<',
      selectUser: '&onSelected'
    },
    controller: UsersList,
    templateUrl: 'components/UsersList/UsersList.html'
  };
}
