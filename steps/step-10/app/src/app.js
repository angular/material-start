import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import Users from 'lib/users/Users';

import UsersList from 'src/users/list/UsersList';
import UserDetails from 'src/users/details/UserDetails';

export default angular.module('starter-app', [ 'ngMaterial', Users.name ])
  .component(UsersList.name, UsersList.config )
  .component(UserDetails.name, UserDetails.config )
  .config(function ($mdIconProvider, $mdThemingProvider) {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 24)
      .icon("hangouts", "./assets/svg/hangouts.svg", 24)
      .icon("twitter", "./assets/svg/twitter.svg", 24)
      .icon("phone", "./assets/svg/phone.svg", 24);

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
  })
  .run( () => {
    console.log(`Starting 'starter-app' module`);
  });