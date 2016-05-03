import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import Users from 'lib/users/Users'

export default angular.module('starter-app', [ 'ngMaterial', Users.name ])
  .config(function ($mdIconProvider) {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24);
  })
  .run( () => {
    console.log(`Starting 'starter-app' module`);
  });