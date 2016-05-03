// Load the custom app ES6 modules

import UsersService from 'lib/users/services/UsersDataservice'
import UsersController from 'lib/users/controllers/UsersController'

// Define the Angular 'users' module

export default angular
    .module( "users", [ 'ngMaterial' ] )
    .service("usersService"             , UsersService )
    .controller("UsersController"       , UsersController );
