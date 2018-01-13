# Angular Material-Start (ES6 Tutorials)

This branch contains the tutorial steps and processes used to implement the start-app shown below:

![material-starter-ux2](https://cloud.githubusercontent.com/assets/6004537/14996543/b588eb46-1137-11e6-803c-ce23996c9742.png)

Above is a snaphot of the Starter-App with a **Master-Detail** layout: showing a list of users
(left) and a user detail view (right).

Also shown is the user experience that will be displayed for smaller device sizes. The responsive
layout reveals the **menu** button that can be used to hide the user list. And the **share** button
can be used to show the Share bottom sheet view.

This Starter app demonstrates how:

*  Angular Material `layout` and `flex` options can easily configure HTML containers
*  Angular Material components `<md-toolbar>`, `<md-sidenav>`, and `<md-icon>` can quickly provide
   a base application structure
*  Custom controllers can be used and show `<md-bottomsheet>` with HTML templates
*  Custom controller can easily, and programmatically open/close the SideNav component
*  Responsive breakpoints and `$mdMedia` are used
*  Theming can be altered/configured using `$mdThemingProvider`


This sample application is purposed as both a learning tool and a skeleton application for a typical
[AngularJS Material](http://angularjs.org/) web app, comprised of a side navigation area and a
content area. You can use it to quickly bootstrap your angular webapp projects and dev environment
for these projects.

- - -

#### "How to build an App"

Here are some generalized steps that may be used to conceptualize the application implementation
process:

1. Plan your layout and the components you want to use

2. Use hard-coded HTML and mock content to make sure the components appear as desired

3. Wire components to your application logic

   > Use the seamless integration possible with Angular directives and controllers.<br/>
   > This integration assumes that you have unit tested your application logic.

4. Add Responsive breakpoints

5. Add Theming support

6. Confirm ARIA compliance

7. Write End-to-end (e2e) Tests

   > It is important to validate your application logic with Angular Material UI components.

###### Wirefame

The illustration below shows how we planned the layout and identified the primary components that
will be used in the Starter app:

<br/>

![plancomponents2](https://cloud.githubusercontent.com/assets/210413/6444676/c247c8f8-c0c4-11e4-8206-208f55cbceee.png)

> **Note:** The container #2 (above) is a simple `<div>` container and not an Angular Material
  component.

- - -

##### ES6 Tutorial

This tutorial uses [jspm.io](http://jspm.io), a package manager for SystemJS which is built on top
of the dynamic ES6 module loader. This allows developers to load any module format (ES6, CommonJS,
AMD, and globals).

###### Prerequisites

This tutorial assumes that you have already cloned the repository and executed the following
commands:

* `git checkout es6-tutorial`
* `npm install jspm live-server -g`
* `jspm update`
* `live-server --open=app`

> **Note:** You should use a web-server (like live-server above) to view your app at each step. Open
  the dev console to see any warnings and browse the elements.

###### Tutorial Layout

You will notice a few files/directories within this tutorial:

 1. `app/src` - This is where all of your application files will be created and edited.
 2. `app/src/users` - This folder contains some tutorial-provided services and views for you to
    reuse.
 3. `app/assets` - This folder contains some tutorial-provided images and icons which are used by
    the application.
 4. `AppController.js` - A basic implementation of the application logic used throughout this
   tutorial.

> **Note:** You should not need to edit anything in the `app/src/users` and `app/assets` directories
  or the `AppController.js` file until Steps #9 & #10 where we will refactor the code into
  more discrete components.

These folders and files will be used to guide you through the development process. By following
these tutorial steps, you will be very quickly introduced to the powerful features of Angular
Material.

We encourage you to walk through each step yourself and build the application from the ground up.
However, if you get stuck or want to start from a clean slate, each step has an associated Git tag 
that you can checkout to reset your code to match the start of the associated step in the tutorial.

For instance, to start on Step 3, run `git checkout step-3`. Also note that `step-1` is the same as
the `es6-tutorial` branch.

> **Note:** In some of the Steps in this README, we have abbreviated some of the HTML or JavaScript
  in order to show what is being added or changed, so you may not be able copy & paste every example
  into your code. If you wish to start fresh, use the Git tags as described above.

The available step tags (in order) are:

- `step-1` == `es6-tutorial`
- `step-2`
- `step-3`
- `step-4`
- `step-5`
- `step-6`
- `step-7`
- `step-8`
- `step-9`
- `step-10`
- `step-10-finished` == `es6`

###### Initial Setup

Now let's review our initial setup:

`app/index.html`
```html
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Angular Material - Starter App</title>
    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:400,700'>
    <link rel="stylesheet" href="./assets/app.css"/>
  </head>

  <body ng-cloak>
    <!--
        No content yet!
    -->
    <script src="./jspm_packages/system.js" type="text/javascript"></script>
    <script src="config.js" type="text/javascript"></script>
    <script type="text/javascript">
      System
          .import('src/boot/boot')
          .catch( console.error.bind(console) ); // make sure any errors print to console
    </script>

  </body>
```

`app/src/boot/boot.js`
```js
import angular from 'angular';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'starter-app-bootstrap', [ ] )
      .run(()=>{
        console.log(`Running the 'starter-app-bootstrap' module for ES6 Material-Start Tutorial`);
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'starter-app-bootstrap' ]);
  });
```

These files contain the basic building blocks of, and bootstrapping for, our application. The
`index.html` file is the main entry point and it uses System.js to import our boot script which in
turn imports all of our other files and loads them dynamically.

> **Note:** The `config.js` file simply configures how System.js loads all of the files/libraries.

- - -

### Step #1:

Here you will modify the application to use Angular-Material.

* In the HTML, load the Angular Material CSS stylesheet and appropriate `<meta>`/`<title>` tags
* Load the Angular Material JS library and its dependent libraries
* Configure the app dependency on 'ngMaterial'

`app/index.html`
```html
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Angular Material - Starter App</title>
    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:400,700'>
    <link rel="stylesheet" href="./jspm_packages/github/angular/bower-material@master/angular-material.css"/>
    <link rel="stylesheet" href="./assets/app.css"/>
  </head>
```

> **Note:** The NPM and JSPM configurations already installed the Angular Material libraries.
  Re-installs are easily done using `jspm install angular-material@master`.

> **Note:** Note that we have manually included the Material CSS. This is because JSPM does not
  guarantee the order in which CSS files are loaded, and we want to ensure that our `app.css` file
  is loaded after the Material CSS so that it can properly override certain selectors.

`app/src/app.js`
```js
// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

export default angular.module( 'starter-app', [ 'ngMaterial' ] )
  .run(() => {
    console.log(`Starting the 'starter-app' module`);
  });
```

`app/src/boot/boot.js`
```js
import angular from 'angular';

import App from 'src/app';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'starter-app-bootstrap', [ App.name ] )
      .run(()=>{
        console.log(`Running the 'starter-app-bootstrap' module for ES6 Material-Start Tutorial`);
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'starter-app-bootstrap' ]);
  });
```

> **Note:** This version of the `boot.js` file imports our new `app.js` file as well so that it will
  be run and can setup our application module.
  
- - -

### Step #2:

Here we will use the wireframe planning and layout to identify the components and attributes needed.

* Add the `<md-toolbar>`, `<md-sidenav>`, and `<md-content>` containers

  > **Note:** The `<md-sidenav>` is the container for the Users **master list** view, and the
  `<md-content>` is the container for the User **detail** view.
  
* Add the **layout** and **flex** attributes to configure the container layouts and sizing aspects
* Use `md-is-locked-open` to lock the sidenav open on the left
* Use the `md-whiteframe-4dp` class to add a shadow to the sidenav

`app/index.html`
```html
  <body ng-cloak layout="column">

    <!-- Container #1 (see wireframe) -->
    <md-toolbar layout="row" class="md-toolbar-tools">
      <h1>Angular Material - Starter App</h1>
    </md-toolbar>

    <!-- Container #2 -->
    <div flex layout="row">

      <!-- Container #3 -->
      <md-sidenav md-is-locked-open="true" class="md-whiteframe-4dp">
        Sidenav
      </md-sidenav>

      <!-- Container #4 -->
      <md-content flex id="content">
        Content
      </md-content>

    </div>

  </body>
```

- - -

### Step #3:

Here you will use hard-coded elements to confirm rendering and layout of the container child
elements and Angular Material components.

`app/index.html`
```html
<body layout="column">

  <!-- Container #1 (see wireframe) -->
  <md-toolbar layout="row" class="md-toolbar-tools">
    <h1>Angular Material - Starter App</h1>
  </md-toolbar>

  <!-- Container #2 -->
  <div flex layout="row">

    <!-- Container #3 -->
    <md-sidenav md-is-locked-open="true" class="md-whiteframe-4dp">
      <md-list>
        <!-- List item #1 -->
        <md-list-item>
          <md-button>
            <md-icon md-svg-src="./assets/svg/avatar-1.svg" class="avatar"></md-icon>
            Lia Luogo
          </md-button>
        </md-list-item>

        <!-- List item #2 -->
        <md-list-item>
          <md-button>
            <md-icon md-svg-src="./assets/svg/avatar-4.svg" class="avatar"></md-icon>
            Lawrence Ray
          </md-button>
        </md-list-item>

      </md-list>
    </md-sidenav>

    <!-- Container #4 -->
    <md-content flex id="content">
      <!-- User details sample -->

      <md-icon md-svg-src="./assets/svg/avatar-1.svg" class="avatar"></md-icon>
      <h2>Lia Luogo</h2>
      <p>
        I love cheese...
      </p>
    </md-content>

  </div>
</body>
```

- - -

### Step #4:

Here you integrate your custom, application logic.

* `app.js` internally loads the Users module
* `Users.js` defines your data services and the `ContactSheet.html` view (remember that this is
  provided by the tutorial)
* `AppController.js` contains your custom application logic (also provided for your convenience)

`app/src/app.js`
```js
// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Users from 'src/users/Users';

export default angular.module( "starter-app", [ 'ngMaterial', Users.name ] )
  .run(() => {
    // ...
  })
  .controller('AppController', AppController);
```

- - -

### Step #5:

Here you will replace the hardcoded HTML with dynamic markup using Angular directives
(eg `ng-repeat`) and `{{ }}` interpolation markup to utilize the User and App functionality we just
imported in Step #4.

* Add the `ng-controller` tag to the `<body>` element
* Use dynamic HTML that will be compiled and rendered by Angular
* Register a custom icon set of 'user' avatars for the user list
* Register **menu** and **share** icon urls for the md-buttons

`app/index.html`
```html
<body ng-cloak layout="column" ng-controller="AppController as app">

  
  <!-- Container #1 (see wireframe) -->
  <md-toolbar layout="row" class="md-toolbar-tools">
    <md-button class="menu md-icon-button">
      <md-icon md-svg-icon="menu"></md-icon>
    </md-button>
    <h1>Angular Material - Starter App</h1>
  </md-toolbar>

  <!-- Container #2 -->
  <div flex layout="row">

    <!-- Container #3 -->
    <md-sidenav md-is-locked-open="true" class="md-whiteframe-4dp">
      <md-list>
        <md-list-item ng-repeat="user in app.users">
          <md-button ng-click="app.selectUser(user)" ng-class="{'selected' : user === app.selected }">
            <md-icon md-svg-icon="{{user.avatar}}" class="avatar"></md-icon>
            {{user.name}}
          </md-button>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <!-- Container #4 -->
    <md-content flex id="content">
      <md-icon md-svg-icon="{{app.selected.avatar}}" class="avatar"></md-icon>
      <h2>{{app.selected.name}}</h2>
      <p>{{app.selected.content}}</p>

      <md-button class="md-fab md-fab-bottom-right">
        <md-icon md-svg-icon="share"></md-icon>
      </md-button>
    </md-content>

  </div>
</body>
```

in `src/app.js`

```js
// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Users from 'src/users/Users';

export default angular.module( "starter-app", [ 'ngMaterial', Users.name ] )
  .config(($mdIconProvider) => {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24);
  })
  .controller('AppController', AppController);
```

- - -

### Step #6:

Here you will add responsive breakpoints so the application layout will adapt to different device
display sizes.

* Use `$mdMedia` to lock the Users list open if device display is wider than `960px`; hide otherwise
* Hide the Toolbar menu icon button if the Users list is open
* Add `md-component-id="left"` to the sidenav so we can toggle it open/closed
* Add `click` support for the **menu** and **share** buttons
* Register icons for bottom sheet

`app/index.html`
```html
<body ng-cloak layout="column" ng-controller="AppController as app">

<!-- Container #1 (see wireframe) -->
<md-toolbar layout="row" class="md-toolbar-tools">
  <md-button class="menu md-icon-button" hide-gt-sm ng-click="app.toggleList()">
    <md-icon md-svg-icon="menu" ></md-icon>
  </md-button>
  <h1>Angular Material - Starter App</h1>
</md-toolbar>

<!-- Container #2 -->
<div flex layout="row">

  <!-- Container #3 -->
  <md-sidenav class="md-whiteframe-4dp" md-is-locked-open="$mdMedia('gt-sm')"
              md-component-id="left" ng-click="app.toggleList()">
    <md-list>
      <md-list-item ng-repeat="user in app.users">
        <md-button ng-click="app.selectUser(user)" ng-class="{'selected' : user === app.selected }">
          <md-icon md-svg-icon="{{user.avatar}}" class="avatar"></md-icon>
          {{user.name}}
        </md-button>
      </md-list-item>
    </md-list>
  </md-sidenav>

  <!-- Container #4 -->
  <md-content flex id="content">
    <md-icon md-svg-icon="{{app.selected.avatar}}" class="avatar"></md-icon>
    <h2>{{app.selected.name}}</h2>
    <p>{{app.selected.content}}</p>

    <md-button class="md-fab md-fab-bottom-right" ng-click="app.share($event)">
      <md-icon md-svg-icon="share"></md-icon>
    </md-button>
  </md-content>

</div>
</body>
```

In `app.js` register the **share** icons displayed in the detail view's bottomsheet:

`app/src/app.js`
```js
// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Users from 'src/users/Users';

export default angular
  .module( "starter-app", [ 'ngMaterial', Users.name ] )
  .config(($mdIconProvider) => {

    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 24)
      .icon("hangouts", "./assets/svg/hangouts.svg", 24)
      .icon("twitter", "./assets/svg/twitter.svg", 24)
      .icon("phone", "./assets/svg/phone.svg", 24);
  })
  .controller('AppController', AppController);
```

- - -

### Step #7:

Here you will configure a different, darker theme to be used.

* Use `$mdThemingProvider` to configure a different theme using primary colors from the **brown**
  color palette and accent colors from the **red** color palette.

`app/src/app.js`
```js
// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Users from 'src/users/Users';

export default angular
  .module( "starter-app", [ 'ngMaterial', Users.name ] )
  .config(($mdIconProvider, $mdThemingProvider) => {

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
  .controller('AppController', AppController);
```

- - -

### Step #8:

Here you will fix any ARIA warnings that Angular Material may display in the Dev console.

* Insert `aria-label` attributes for `<md-button>` components that do not have labels.

`app/index.html`
```html
<body>

  <!-- Wireframe Container #1 -->
  <md-toolbar layout="row">
    <md-button ... aria-label="Show User List"></md-button>
  </md-toolbar>

  <!-- Wireframe Container #2 -->
  <div flex layout="row">

    <!-- Wireframe Container #3 -->
    <md-sidenav>...</md-sidenav>

    <!-- Wireframe Container #4 -->
    <md-content flex id="content">
      <md-button ... aria-label="Share"></md-button>
    </md-content>

  </div>
</body>
```

Congratulations! You now have a fully functional Angular Material application!

In the next two steps, we'll refactor our code into separate Angular 1.4-style components, and then
once again refactor using the new Angular 1.5 `component()` API.

- - -

### Step #9:

Here you will refactor your HTML and code to create the `<users-list>` and `<user-details>`
components. For the sake of the tutorial, we have provided the following files in the `step-9`
tag to show you how we recommend extracting the components and give you a jump start.

All you need to edit is the `index.html`, and `Users.js` files to properly utilize these new
components.

  - `src/users/components`
    - `details`
      - `ContactSheet.html` <-- Move here since only the details component uses the bottom sheet
      - `UserDetails.html`
      - `UserDetails.js` <-- This is our directive file
      - `UserDetailsController.js`
    - `list`
      - `UsersList.html`
      - `UsersList.js` <-- This is our directive file
      - `UsersListController.js`

If you would like to follow along yourself without checking out the tag, here are the basic steps
that we took to extract the components:

1. Create the proper file/folder structure recommended above
2. Create templates based on your HTML in `index.html`
3. Define your UsersList and UserDetails directives following the
   [Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
  
   > **Note:** Contrary to the style guide, we set `controllerAs: '$ctrl'` to better align with the
    upcoming Angular 2 naming conventions.
  
4. Create your directive controllers and extract the "share" logic from `src/AppController.js` into
  the `UserDetailsController.js`
5. Finally, update the `src/users/Users.js` module to register the new directives

> **Note:** The `UsersListController.js` file is practically empty and could be removed if desired,
  but we show it here for completeness.

> **Note:** In order to stay with the ES6 paradigm of classes, the `UsersList` and `UserDetails`
  have been written as full classes rather than plain functions. This means that we must first
  instantiate the class before we pass it to Angular's `.directive()` method as you can see below.
  We'll change this in Step #10 below to export a simple config object that is more consistent with
  the `.component()` API.

`app/src/users/Users.js`
```js
// Load the custom app ES6 modules

import UsersDataService from 'src/users/services/UsersDataService';

import UsersList from 'src/users/components/list/UsersList';
import UserDetails from 'src/users/components/details/UserDetails';

// Define the Angular 'users' module

export default angular
  .module("users", ['ngMaterial'])
   
  .directive("usersList", () => new UsersList)
  .directive("userDetails", () => new UserDetails)
  
  .service("UsersDataService", UsersDataService);
```

`app/index.html`
```html
<!-- Container #2 -->
<div flex layout="row">

  <!-- Container #3 -->
  <md-sidenav ...>
    <!-- Custom UsersList component -->
    <users-list
        users="app.users"
        selected="app.selected"
        on-selected="app.selectUser(user)">
    </users-list>
  </md-sidenav>

  <!-- Container #4 -->
  <md-content ...>
    <!-- Custom UserDetails component -->
    <user-details
        selected="app.selected" >
    </user-details>
  </md-content>

</div>
```
- - -

### Step #10:

Here you will refactor your directives and controllers to use the Angular 1.5 Component API.

* combine the directives and controllers logic into the **UsersList** and **UserDetails** classes
* use the **bindings** keyword and *1-way* data-binding
* update the Users module to register the new components

> **Note:** If you want to copy/paste the code from the `step-10` directory, you will also need to
  delete the `app/src/users/components/list/UsersListController.js` as it is not used.

`app/src/users/components/details/UserDetails.js`
```js
class UserDetailsController  {
  // previous code here...
}

export default {
  name : 'userDetails',
  config : {
    bindings         : {  selected: '<'  },
    templateUrl      : 'src/users/components/details/UserDetails.html',
    controller       : [ '$mdBottomSheet', '$log', UserDetailsController]
  }
};
```

`app/src/users/components/list/UsersList.js`
```js
export default {
  name : 'usersList',
  config : {
    bindings         : {  users: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl      : 'src/users/components/list/UsersList.html'
  }
};
```

`app/src/users/Users.js`
```js
// Load the custom app ES6 modules

import UsersService from 'src/users/services/UsersDataService';

import UsersList from 'src/users/components/list/UsersList';
import UserDetails from 'src/users/components/details/UserDetails';

// Define the Angular 'users' module

export default angular
  .module("users", ['ngMaterial'])
   
  .component( UsersList.name, UsersList.config )
  .component( UserDetails.name, UserDetails.config )
  
  .service("usersService", UsersService);
```

## Summary

With only ten (10) Tutorial Steps and a few minutes of work, we have quickly created a functional
Angular Material application that is beautiful, responsive, theme'ed, accessible, component-based,
and easily maintained.
