// Load the custom app ES6 modules

import UsersDataService from 'src/users/services/UsersDataService';

import UsersList from 'src/users/components/list/UsersList';
import UserDetails from 'src/users/components/details/UserDetails';

// Define the Angular 'users' module

export default angular
  .module("users", ['ngMaterial'])

  .directive("usersList", () => new UsersList)
  .directive("userDetails", () => new UserDetails)

  .service("UsersDataService", UsersDataService);
