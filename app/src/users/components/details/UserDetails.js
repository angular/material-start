import UserDetailsController from './UserDetailsController'

// Directive definition of the the UserDetailsDirective.
class UserDetailsDirective {
  constructor() {
    angular.extend(this, {
      restrict         : 'E',
      scope            : {  selected: '='  },
      templateUrl      : 'src/users/components/details/UserDetails.html',
      bindToController : true,
      controllerAs     : '$ctrl',
      controller       : ['$mdBottomSheet', '$log', UserDetailsController]
    });
  }
}
export default UserDetailsDirective;