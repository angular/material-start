# Angular Material-Start (ES6 Tutorials)

This branch contains the tutorial steps and processes used to implement the start-app shown below:

![material-starter-ux2](https://cloud.githubusercontent.com/assets/210413/6448551/70864488-c0e0-11e4-8767-c4e1e4c2f343.png)

Above is a snaphot of the Starter-App with a **Master-Detail** layout: showing a list of users (left) and a user detail view (right). 

Also shown is the user experience that will be displayed for smaller device sizes. The responsive layout reveals the **menu** button that can be used to hide the user list. And the **share** button can be used to show the Share bottom sheet view.

This Starter app demonstrates how:

*  Angular Material `layout` and `flex` options can easily configure HTML containers
*  Angular Material components `<md-toolbar>`, `<md-sidenav>`, `<md-icon>` can be quickly used
*  Custom controllers can use and show `<md-bottomsheet>` with HTML templates
*  Custom controller can easily, programmatically open & close the SideNav component.
*  Responsive breakpoints and `$mdMedia` are used
*  Theming can be altered/configured using `$mdThemingProvider`


This sample application is purposed as both a learning tool and a skeleton application for a typical [AngularJS Material](http://angularjs.org/) web app: comprised of a Side navigation area and a content area. You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

<br/>
- - -

#### "How to build an App"

Here are some generalized steps that may be used to conceptualize the application implementation process:

1. Plan your layout and the components you want to use
2. Use hard-coded HTML and mock content to make sure the components appear as desired
3. Wire components to your application logic
> Use the seamless integration possible with Angular directives and controllers<br/>
> This integration assumes that you have unit tested your app logic
4. Add Responsive breakpoints
5. Add Theming support
6. Confirm ARIA compliance
7. Write e2e Tests 
> It is important to validate your app logic with Angular Material UI components.

<br/>
###### Wirefame 

The illustration below shows how we planned the layout and identified the primary components that will be used in the Starter ap:

<br/>
![plancomponents2](https://cloud.githubusercontent.com/assets/210413/6444676/c247c8f8-c0c4-11e4-8206-208f55cbceee.png)

> Note: that container #2 (above) is a simple `<div>` container and not an Angular Material component.

<br/>
- - -

##### ES6 Tutorials

These tutorial use jspm.io: package manager for SystemJS which is built on top of the dynamic ES6 module loader. This allows developers to load any module format (ES6, CommonJS, AMD, and globals).

These tutorials assume that you have already cloned the repository and executed the following commands:

* `npm install jspm -g`
* `jspm update`

You will notice html Tutorials #0 thru #8: these will be used to guide you through the development process. By following these tutorials stages, you will be very quickly introduced to the powerful features of Angular Material.

Each tutorial presents the resulting changes for that stage. It is recommended, however, that you start with the preceding tutorial and manually make the changes requested. The effort you invest to implement these changes will highlight specific concepts at each Tutorial stage.

> At each tutorial stage, you should use a web-server to view the that tutorial page. Open the dev console to see any warnings and browser the elements. You should also use `git checkout tutorial_<x>` to checkout that tutorial to easily work on the steps shown below. To work on:

*  Tutorial #1 : `git checkout tutorial_0`
*  Tutorial #2 : `git checkout tutorial_1`
*  Tutorial #3 : `git checkout tutorial_2`
*  Tutorial #4 : `git checkout tutorial_3`
*  Tutorial #5 : `git checkout tutorial_4`
*  Tutorial #6 : `git checkout tutorial_5`
*  Tutorial #7 : `git checkout tutorial_6`
*  Tutorial #8 : `git checkout tutorial_7`
*  Tutorial #9 : `git checkout tutorial_8`
*  Tutorial #10 : `git checkout tutorial_9`



<br/>
- - -

Now let's review our initial setup that is used in `tutorial_0.html`:

```html
  <head>
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
          .import('boot_ngOnly')
          .catch( console.error.bind(console) ); // make sure any errors print to console
    </script>

  </body>
```

With `boot.js`:

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
      .module( 'starter-app', [ ] )
      .run(()=>{
        // Use main 'App' module and log startup status
        console.log(`Running the 'starter-app' ES6 Material-Start Tutorial`);
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'starter-app' ]);
  });
```


<br/>
- - -

### Step #1:

<span style="font-size:10px;">@see [tutorial_1.html](https://github.com/angular/material-start/blob/es6-tutorial/app/tutorial_1.html)<span>

As mentioned above, first use `git checkout tutorial_0`. Here you modified the application [available in `tutorial_0.html`] to use Angular-Material.

* In the HTML, load the Angular Material CSS stylesheet.
* Load the Angular Material JS library and its dependent libraries
* Configure the app dependency on 'ngMaterial'

```html
  <head>
   <link rel="stylesheet" href="./jspm_packages/github/angular/bower-material@master/angular-material.css"/>
  </head>
```

> Note the NPM and JSPM configurations already installed the Angular Material libraries. Re-installs are easy done using `jspm install angular-material@master`.

```js
// Load libraries
import angular from 'angular'

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

angular
	.module( 'starter-app', [ 'ngMaterial' ] )
	.run(() => {
	 //....
	});
```

<br/>
- - -

### Step #2:

<span style="font-size:10px;">@see [tutorial_2.html](https://github.com/angular/material-start/blob/es6-tutorial/app/tutorial_2.html)<span>

As mentioned above, first use `git checkout tutorial_1`. Here you used the wireframe planning and layout to identify the components and attributes needed.

* Add the `<md-toolbar>`, `<md-sidenav>`, `<md-content>` containers <br/>
> Note: that the md-sidenav is the container the Users **master** list view, and the md-content is the container for the User **detail** view.
* Add the **layout** and **flex** attributes to configure the container layouts and sizing aspects.
* Use `md-locked-open` to lock the sidenav open on the left
* Use the `md-whiteframe-2dp` to add a shadow the the sidenav

```html
  <body layout="column">

	<!-- Container #1 (see wireframe) -->
    <md-toolbar layout="row" >
      <div class="md-toolbar-tools">
        <h1>Angular Material - Starter App</h1>
      </div>
    </md-toolbar>

	<!-- Container #2 -->
    <div flex layout="row">

		<!-- Container #3 -->
        <md-sidenav md-is-locked-open="true" class="md-whiteframe-2dp"></md-sidenav>

		<!-- Container #4 -->
        <md-content flex id="content"></md-content>

    </div>
	
  </body>
```

<br/>
- - -

### Step #3:

<span style="font-size:10px;">@see [tutorial_3.html](https://github.com/angular/material-start/blob/es6-tutorial/app/tutorial_3.html)<span>

As mentioned above, first use `git checkout tutorial_2`. Here you will use hard-coded elements to confirm rendering and layout of the container child elements and Angular Material components.

```html
  <body layout="column">

	<md-sidenav md-is-locked-open="true" class="md-whiteframe-2dp">
	  <md-list>

		<!-- List item #1 -->
		<md-item >
			<md-button>
			  <md-icon md-svg-src="./assets/svg/avatar-1.svg" class="avatar"></md-icon>
			  Lia Luogo
			</md-button>
		</md-item>

		<!-- List item #2 -->
		<md-item >
			<md-button>
			 <md-icon md-svg-src="./assets/svg/avatar-4.svg" class="avatar"></md-icon>
			  Lawrence Ray
			</md-button>
		</md-item>

	  </md-list>
	</md-sidenav>

	<md-content flex id="content">
	  <!-- User details sample -->

	  <md-icon md-svg-src="./assets/svg/avatar-1.svg" class="avatar"></md-icon>
	  <h2>Lia Luogo</h2>
	  <p>
		I love cheese...
	  </p>
	</md-content>

  </body>
```

<br/>
- - -

### Step #4:

<span style="font-size:10px;">@see [tutorial_4.html](https://github.com/angular/material-start/blob/es6-tutorial/app/tutorial_4.html)<span>

As mentioned above, first use `git checkout tutorial_3`. Here you integrate your custom, application logic.

* Import and add the `/src/App.js` module as a dependency
* `App.js` internally loads the Users module
* `Users.js` defines your data services, models, and controllers

```js
// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import App from '../App';


export default angular.module( "starter-app", [ 'ngMaterial', App.name ] )
```

in `Users.js` 

```js
// Load the custom app ES6 modules

import UsersController from 'users/UsersController'
import UsersService from 'users/UsersDataservice'

// Define the Angular 'users' module

export default angular
    .module( "users", [] )
    .service("usersService"       , UsersService )
    .controller("UsersController" , UsersController );

```
<br/>
- - -

### Step #5:

<span style="font-size:10px;">@see [tutorial_5.html](https://github.com/angular/material-start/blob/es6-tutorial/app/tutorial_5.html)<span>

As mentioned above, first use `git checkout tutorial_4`.
Here you will replace the hardcoded HTML with dynamic markup using Angular directives (eg ng-repeat) and `{{ }}` interpolation markup.

* Use dynamic HTML that will be compiled and rendered by Angular
* Register a custom icon set of 'user' avatars for the user list
* Register **menu** and **share** icon urls for the md-buttons

```html
 <!-- Wireframe Container #2 -->
 <div flex layout="row">
 	<!-- Wireframe Container #3 -->
	<md-sidenav md-is-locked-open="true" class="md-whiteframe-2dp">
	  <md-list>
		<md-list-item ng-repeat="it in ul.users">
			<md-button ng-click="ul.selectUser(it)" ng-class="{'selected' : it === ul.selected }">
			  <md-icon md-svg-icon="{{it.avatar}}" class="avatar"></md-icon>
			  {{it.name}}
			</md-button>
		</md-list-item>
	  </md-list>
	</md-sidenav>

	<!-- Wireframe Container #4 -->
	<md-content flex id="content">
	  <md-icon md-svg-icon="{{ul.selected.avatar}}" class="avatar"></md-icon>
	  <h2>{{ul.selected.name}}</h2>
	  <p>{{ul.selected.content}}</p>

	  <md-button class="action" md-no-ink>
		<md-icon md-svg-icon="share" ></md-icon>
	  </md-button>
	</md-content>
 </div>
```

in `src/App.js`

```js
// Load libraries
import angular from 'angular'
import Users from 'src/users/Users'

export default angular
  .module( "UsersApp", [ 'ngMaterial', Users.name ] )
  .config(function ($mdIconProvider) {
    // Register the user `avatar` icons
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24);
  });
```

<br/>
- - -

### Step #6:

<span style="font-size:10px;">@see [tutorial_6.html](https://github.com/angular/material-start/blob/es6-tutorial/app/tutorial_6.html)<span>

As mentioned above, first use `git checkout tutorial_5`.
Here you will add responsive breakpoints so the application layout will adapt to different device display sizes.

* Lock the Users list open if device display is wider than > 600px; hide otherwise.
* Hide the Toolbar menu icon button if the Users list is open.
* Add `click` support for the **menu** and **share** buttons.
* Register icons for bottomsheet

```html
<body>
	<!-- Wireframe Container #1 -->
    <md-toolbar layout="row">
      <md-button class="menu" hide-gt-sm ng-click="ul.toggleList()"></md-button>
    </md-toolbar>

	<!-- Wireframe Container #2 -->
	<div flex layout="row">

	 <!-- Wireframe Container #3 -->
	 <md-sidenav md-is-locked-open="$media('gt-sm')"
				 md-component-id="left">
	 </md-sidenav>

	 <!-- Wireframe Container #4 -->
	 <md-content flex id="content">
	  <md-button class="share" md-no-ink ng-click="ul.share($event)"></md-button>
	 </md-content>

	</div>
</body>
```

in `src/App.js` register the **share** icons displayed in the User Detail view bottomsheet:

```js
// Load libraries
import angular from 'angular'
import Users from 'src/users/Users'

export default angular
  .module( "UsersApp", [ 'ngMaterial', Users.name ] )
  .config(function ($mdIconProvider) {

    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 512)
      .icon("hangouts", "./assets/svg/hangouts.svg", 512)
      .icon("twitter", "./assets/svg/twitter.svg", 512)
      .icon("phone", "./assets/svg/phone.svg", 512);
  });
```

<br/>
- - -

### Step #7:

<span style="font-size:10px;">@see [tutorial_7.html](https://github.com/angular/material-start/blob/es6-tutorial/app/tutorial_7.html)<span>

As mentioned above, first use `git checkout tutorial_6`.
Here you will configure a different, darker theme to be used.

* Use `$mdThemingProvider` to configure a different theme using primary colors from the **brown** color palette and accent colors from the **red** color palette.

```js
// Load libraries
import angular from 'angular'
import Users from 'src/users/Users'

export default angular
  .module( "UsersApp", [ 'ngMaterial', Users.name ] )
  .config(function ($mdIconProvider, $mdThemingProvider) {

    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu", "./assets/svg/menu.svg", 24)
      .icon("share", "./assets/svg/share.svg", 24)
      .icon("google_plus", "./assets/svg/google_plus.svg", 512)
      .icon("hangouts", "./assets/svg/hangouts.svg", 512)
      .icon("twitter", "./assets/svg/twitter.svg", 512)
      .icon("phone", "./assets/svg/phone.svg", 512);

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
  });
```

<br/>
- - -

### Step #8:

<span style="font-size:10px;">@see [tutorial_8.html](https://github.com/angular/material-start/blob/es6-tutorial/app/tutorial_8.html)<span>

As mentioned above, first use `git checkout tutorial_7`.
Here you will fix any ARIA warnings that Angular Material may display in the Dev console.

* Insert `aria-label` attributes for mdButton components that do not have labels.

```html
<body>
	<!-- Wireframe Container #1 -->
    <md-toolbar layout="row">
      <md-button class="menu" aria-label="Show User List"></md-button>
    </md-toolbar>

	<!-- Wireframe Container #2 -->
	<div flex layout="row">

	 <!-- Wireframe Container #3 -->
	 <md-sidenav>...</md-sidenav>

	 <!-- Wireframe Container #4 -->
	 <md-content flex id="content">
	  <md-button class="share" aria-label="Share"></md-button>
	 </md-content>

	</div>
</body>
```

<br/>
- - -

### Step #9:

<span style="font-size:10px;">@see [tutorial_9.html](https://github.com/angular/material-start/blob/es6-tutorial/app/tutorial_9.html)<span>

As mentioned above, first use `git checkout tutorial_8`.
Here you will refactor your HTML and code to create `<users-list>` and `<user-details>` components.

* creates templates based on HTML in tutorial_9.html
* define your directives UsersListDirective and UserDetailsDirective
* create your directive controllers
* update the Users module to register the new directives

`/src/users/tmpl/userDetails.html`:

```html
<md-icon md-svg-icon="{{$ctrl.selected.avatar}}" class="avatar"></md-icon>
<h2>{{$ctrl.selected.name}}</h2>
<p>{{$ctrl.selected.content}}</p>

<md-button class="share" md-no-ink ng-click="$ctrl.share()"
           aria-label="Share with {{ $ctrl.selected.name }}">
  <md-icon md-svg-icon="share"></md-icon>
</md-button>
```

`/src/users/tmpl/usersList.html`:


```html
<md-list>
  <md-list-item ng-repeat="u in $ctrl.users">
    <md-button ng-click="$ctrl.showDetails({user:u})" ng-class="{'selected' : u === $ctrl.selected }">
      <md-icon md-svg-icon="{{u.avatar}}" class="avatar"></md-icon>
      {{u.name}}
    </md-button>
  </md-list-item>
</md-list>
```

`tutorial_9.html`:

```html
<md-sidenav md-component-id="left" md-is-locked-open="$mdMedia('gt-sm')" ng-click="ul.toggleList()" class="md-whiteframe-4dp" >
  <!-- Custom UsersList component -->
  <users-list
	  users="ul.users"
	  selected="ul.selected"
	  on-selected="ul.selectUser(user)">
  </users-list>
</md-sidenav>

<md-content flex id="content">
  <!-- Custom UserDetails component -->
  <user-details
	  selected="ul.selected" >
  </user-details>
</md-content>
```

Now create your directives.

`/src/users/directives/UsersListDirective.js`:

```js
import UsersListController from './../controllers/UsersListController'

// Directive definition of the the UsersListDirective.
class UsersListDirective {
  constructor() {
    angular.extend(this, {
      restrict         : 'E',
      scope            : {  users: '=', selected : '=', showDetails : '&onSelected' },
      templateUrl      : 'src/users/tmpl/usersList.html',
      bindToController : true,
      controllerAs     : '$ctrl',
      controller       : ['$scope', '$log', UsersListController]
    });

  }
}
export default UsersListDirective;
```

`/src/users/directives/UserDetailsDirective.js`:

```js
import UserDetailsController from './../controllers/UserDetailsController'

// Directive definition of the the UserDetailsDirective.
class UserDetailsDirective {
  constructor() {
    angular.extend(this, {
      restrict         : 'E',
      scope            : {  selected: '='  },
      templateUrl      : 'src/users/tmpl/userDetails.html',
      bindToController : true,
      controllerAs     : '$ctrl',
      controller       : ["$scope", '$mdBottomSheet', '$log', UserDetailsController]
    });
  }
}
export default UserDetailsDirective;
```

Then update the `src/users/Users.js` modules registrations:

```js
import UsersService from 'users/UsersDataservice'
import UsersController from 'users/controllers/UsersController'
import UsersListDirective from 'users/directives/UsersListDirective'
import UserDetailsDirective from 'users/directives/UserDetailsDirective'

export default angular
    .module( "users", [ 'ngMaterial' ] )
    .service("usersService"             , UsersService )
    .controller("UsersController"       , UsersController )
    .directive("usersList"              , () => new UsersListDirective() )
    .directive("userDetails"            , () => new UserDetailsDirective() );
```


<br/>
- - -

### Step #10:

<span style="font-size:10px;">@see [tutorial_10.html](https://github.com/angular/material-start/blob/es6-tutorial/app/tutorial_10.html)<span>

As mentioned above, first use `git checkout tutorial_10`.
Here you will refactor your directives and controllers to use the Angular 1.5 Component API.

* combine the directives and controllers logic to create component classes **UsersList** and **UserDetails**
* Use the **bindings** key and *1-way* data-binding
* update the Users module to register the new components

in `src/users/UserDetails.js`

```js
class UserDetailsController  {
  // previous code here...
}

export default {
  name : 'userDetails',
  config : {
    bindings         : {  selected: '<'  },
    templateUrl      : 'src/users/tmpl/userDetails.html',
    controller       : [ '$mdBottomSheet', '$log', UserDetailsController]
  }
};
```

in `src/users/UsersList.js`

```js
export default {
  name : 'usersList',
  config : {
    bindings         : {  users: '<', selected : '=', showDetails : '&onSelected' },
    templateUrl      : 'src/users/tmpl/usersList.html'
  }
};
```

in `src/users/Users.js`

```js
import UsersService from 'src/users/services/UsersDataservice'
import UsersController from 'src/users/controllers/UsersController'
import UsersList from 'src/users/UsersList'
import UserDetails from 'src/users/UserDetails'

export default angular
    .module( "users", [ 'ngMaterial' ] )
    .service("usersService"             , UsersService )
    .controller("UsersController"       , UsersController )
    .component( UsersList.name          , UsersList.config )
    .component( UserDetails.name        , UserDetails.config );
```

## Summary

With only ten (10) Tutorial Steps and a few minutes of work, we have quickly created a functional Angular Material application that is beautiful, responsive, theme'ed, accessible, component-based, and easily maintained.


