import UserDetailsController from './../controllers/UserDetailsController'

// Directive definition of the the UserDetailsDirective.
class UserDetailsDirective {
  constructor() {
    angular.extend(this, {
      restrict         : 'E',
      scope            : {  selected: '='  },
      templateUrl      : 'src/users/tmpl/userDetails.html',
      bindToController : true,
      controllerAs     : '$ctrl',
      controller       : ["$scope", '$mdBottomSheet', '$log', UserDetailsController]
    });
  }
}
export default UserDetailsDirective;
