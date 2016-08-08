import UsersListController from './UsersListController'

// Directive definition of the the UsersListDirective.
class UsersListDirective {
  constructor() {
    angular.extend(this, {
      restrict         : 'E',
      scope            : {  users: '=', selected : '=', showDetails : '&onSelected' },
      templateUrl      : 'src/users/components/list/UsersList.html',
      bindToController : true,
      controllerAs     : '$ctrl',
      controller       : ['$scope', UsersListController]
    });

  }
}

export default UsersListDirective;
