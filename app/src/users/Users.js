// Load the custom app ES6 modules

import UsersService from 'src/users/services/UsersDataservice'
import UsersController from 'src/users/controllers/UsersController'

import UsersList from 'src/users/UsersList'
import UserDetails from 'src/users/UserDetails'


// Define the Angular 'users' module

export default angular
    .module( "users", [ 'ngMaterial' ] )
    .service("usersService"             , UsersService )
    .controller("UsersController"       , UsersController )
    .component( UsersList.name          , UsersList.config )
    .component( UserDetails.name        , UserDetails.config );
