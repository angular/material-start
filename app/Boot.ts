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

import {App} from "./components/app/App";

module MaterialStart {
  "use strict";

  // Register our module and it's dependencies
  angular.module('MaterialStart', ['ngMaterial'])
  
    // Register all of our components
    .component(App.componentName, App.componentConfig);
}