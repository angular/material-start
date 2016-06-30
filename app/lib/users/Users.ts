// Load the TypeScript UsersService
import {UsersDataService} from './services/users_data.service';
import {UsersContactService} from './services/users_contact.service';

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
