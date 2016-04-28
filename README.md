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

> At each tutorial stage, you should use a web-server to view the that tutorial page. Open the dev console to see any warnings and browser the elements.

<br/>
- - -

Let's just review our initial setup used in `tutorial_0.html`:


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
          .import('boot')
          .catch( console.error.bind(console) ); // make sure any errors print to console
    </script>

  </body>
```

With `boot.js`:

```js
import angular from 'angular';
import App from './src/App';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( App.name)
      .run(() => {
        // Use main 'App' module and log startup status
        console.log(`Running the ${App.name} ES6 Material-Start Tutorial`);
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ App.name ]);
  });
```

and with `src/App.js`

```js
// Load libraries
import angular from 'angular'

export default angular.module( "starter-app", [ ] )

```


<br/>
- - -

### Step #1:

<span style="font-size:10px;">@see [tutorial_1.html](https://github.com/angular/material-start/blob/es6-tutorial/app/tutorial_1.html)<span>

Here you modified the application [available in `tutorial_0.html`] to use Angular-Material.

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

export default angular.module( "starter-app", [ 'ngMaterial' ] )
```

<br/>
- - -

### Step #2:

<span style="font-size:10px;">@see [tutorial_2.html](https://github.com/angular/material-start/blob/es6-tutorial/app/tutorial_2.html)<span>

Here you used the wireframe planning and layout to identify the components and attributes needed.

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


Here you will use hard-coded elements to confirm rendering and layout of the container child elements and Angular Material components.

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

Here you integrate your custom, application logic.

* Import and add the `/src/users/Users.js` module as a dependency
* This defines your data services, models, and controllers

```js
// Load libraries
import angular from 'angular'
import Users from 'src/users/Users'

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

export default angular.module( "starter-app", [ 'ngMaterial', Users.name ] )
```

<br/>
- - -

### Step #5:

<span style="font-size:10px;">@see [tutorial_5.html](https://github.com/angular/material-start/blob/es6-tutorial/app/tutorial_5.html)<span>

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

```js
// Load libraries
import angular from 'angular'
import Users from 'src/users/Users'

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

export default angular.module("starter-app", ['ngMaterial', Users.name])
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

Register the **share** icons displayed in the User Detail view bottomsheet:
```js
// Load libraries
import angular from 'angular'
import Users from 'src/users/Users'

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

export default angular.module("starter-app", ['ngMaterial', Users.name])
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

Here you will configure a different, darker theme to be used.

* Use `$mdThemingProvider` to configure a different theme using primary colors from the **brown** color palette and accent colors from the **red** color palette.

```js
// Load libraries
import angular from 'angular'
import Users from 'src/users/Users'

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

export default angular.module("starter-app", ['ngMaterial', Users.name])
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

## Summary

With only eight (8) Tutorial Steps and a few minutes of work, we have quickly created a functional Angular Material application that is beautiful, responsive, theme'ed, accessible, and easily maintained.


