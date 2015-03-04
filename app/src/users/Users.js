const URL_AVATAR_ICONS = 'assets/svg/avatars.svg';
const URL_ICON_MENU     = 'assets/svg/menu.svg';
const URL_ICON_SHARE    = 'assets/svg/share.svg';

// Load the custom app ES6 modules

import UsersController from 'users/UsersController'
import UsersService from 'users/UsersDataservice'

// Define the Angular 'users' module

export default angular
    .module( "users", ['ngMaterial'] )
    .service("usersService"       , UsersService )
    .controller("UsersController" , UsersController )
    .config(($mdIconProvider, $mdThemingProvider) => {

      // Register `dashboard` iconset for $mdIcon service lookups
      // Register icon datasources for future lookups

      $mdIconProvider
        .defaultIconSet( URL_AVATAR_ICONS, 128 )
        .icon('menu' ,URL_ICON_MENU, 24)
        .icon('share',URL_ICON_SHARE, 24);


      $mdThemingProvider
        .theme('default')
        .primaryPalette('brown');

    });
