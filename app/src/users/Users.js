// Load the custom app ES6 modules

import UsersController from 'users/UsersController'
import UsersService from 'users/UsersDataservice'

// Define the Angular 'users' module

export default angular
    .module( "users", ['ngMaterial'] )
    .service("usersService"       , UsersService )
    .controller("UsersController" , UsersController );
