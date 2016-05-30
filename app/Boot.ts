/// <reference path="../typings/index.d.ts" />

// Import our Angular dependencies
import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-mocks';
import 'angular-route';
import 'angular-sanitize';

import {App} from "./components/App/App";
import {UsersList} from "./components/UsersList/UsersList";
import {UserDetails} from "./components/UserDetails/UserDetails";

import {Users} from 'lib/users/Users';

module MaterialStart {
  "use strict";

  // Register our module and it's dependencies
  angular.module('MaterialStart', ['ngMaterial', 'ngSanitize', Users.name])
    .config(function ($mdIconProvider:angular.material.IIconProvider, $mdThemingProvider:angular.material.IThemingProvider) {
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

    // Register all of our components
    .component(App.componentName, App.componentConfig)
    .component(UsersList.componentName, UsersList.componentConfig)
    .component(UserDetails.componentName, UserDetails.componentConfig)
  ;
}