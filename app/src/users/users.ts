// Load the TypeScript UsersService
import {UsersDataService} from './services/users-data.service';

// Define our User interface
export interface User {
  name: string;
  avatar: string;
  content: string;
}

// Define the Angular 'Users' module
export module Users {
  export var name:string = 'Users';

  angular
    .module(Users.name, ['ngMaterial'])
    .service("UsersDataService", UsersDataService);
}
