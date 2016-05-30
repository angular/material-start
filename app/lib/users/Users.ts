// Load the TypeScript UsersService
import {UsersDataService} from './services/UsersDataService';
import {UsersContactService} from './services/UsersContactService';

// Define our IUser interface
export interface IUser {
  name: string;
  avatar: string;
  content: string;
}

// Define the Angular 'Users' module
export module Users {
  export var name:string = 'Users';

  angular
    .module(Users.name, ['ngMaterial'])
    .service("UsersDataService", UsersDataService)
    .service("UsersContactService", UsersContactService);
}
