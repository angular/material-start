// Load the custom app ES6 modules

import UsersService from 'users/UsersDataservice'
import UsersController from 'users/controllers/UsersController'

import UsersListDirective from 'users/directives/UsersListDirective'
import UserDetailsDirective from 'users/directives/UserDetailsDirective'


// Define the Angular 'users' module

export default angular
    .module( "users", [ 'ngMaterial' ] )
    .service("usersService"             , UsersService )
    .controller("UsersController"       , UsersController )
    .directive("usersList"              , () => new UsersListDirective() )
    .directive("userDetails"            , () => new UserDetailsDirective() );
