// Load the TypeScript Users services

import UsersService from './services/UsersService';
//import UsersController from './controllers/UsersController';

// Define our IUser interface
export interface IUser {
  name: string;
  avatar: string;
  content: string;
}

// Define the Angular 'users' module
export module Users {
  export var name:string = 'Users';

  angular
    .module(Users.name, ['ngMaterial'])
    .service("UsersService", UsersService);
  //.controller("UsersController", UsersController);
}
