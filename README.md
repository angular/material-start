# Angular Material-Start (Tutorials)

This branch contains the tutorial steps and processes used to implement the start-app shown below:

![material-starter-ux](https://cloud.githubusercontent.com/assets/210413/6443252/4fa82756-c0bb-11e4-9a35-b213b26f49f3.png)

Above is a snaphot of the Starter-App with the Users' *master-detail* view. Also shown is the user experience that will be displayed for smaller device sizes. The responsive layout changes to hide the user list and the **share** button can be used to show the Share bottom sheet view.

This Starter app demonstrates how:

*  Angular Material `layout` and `flex` options can easily configure HTML containers
*  Angular Material components `<md-toolbar>`, `<md-sidenav>`, `<md-icon>` can be quickly used
*  Custom controllers can use and show `<md-bottomsheet>` with HTML templates
*  Custom controller can easily, programmatically open & close the SideNav component.
*  Responsive breakpoints and `$mdMedia` are used
*  Theming can be altered/configured using `$mdThemingProvider`


This sample application is intended to be useful as both a learning tool and a skeleton application for a typical [AngularJS Material](http://angularjs.org/) web app: comprised of a Side navigation area and a content area. You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

<br/>
- - -

#### "How to build an App"

Here are some generalized steps that may be used to conceptualize the app implementation process:

1. Plan your layout and the components you want to use
2. Use hard-coded data to make sure the components appear as desired
3. Wire components to your application logic
> Use the seamless integration with Angular directives<br/>
> Assumes you have unit tested your app logic
4. Add Responsive breakpoints
5. Add Theming support
6. Confirm ARIA compliance
7. Write e2e Tests 
> to validate your app logic with Angular Material UI components.

<br/>
###### Wirefame 

The illustration below shows how we planned the layout and the primary components that will be used in the Starter ap:

<br/>
![plancomponents2](https://cloud.githubusercontent.com/assets/210413/6444676/c247c8f8-c0c4-11e4-8206-208f55cbceee.png)

<br/>
- - -

##### ES5 Tutorials

These tutorials assume that you have already cloned the repository and performed the `npm update` process.

You will notice Tutorials 0..8 that will be used to guide you through the development process. Following these stages, you will be very quickly introduced to the powerful features of Angular Material. Each tutorial presents the starting point for that stage... and you will need to make the changes requested. The effort you invest to implement these changes will highlight specific concepts at each Tutorial stage.

> You can peak at the **next** tutorial stge to see **resulting** changes for the current changes requested. 

<br/>
- - -

### Tutorial_1.html:

Here you modified the shell application in `tutorial_0.html` to use Angular-Material.

* Use Bower to install angular-material:  `bower install angular-material -D`
* In the HTML, load the CSS and JS modules:
* Configure the app dependency on 'ngMaterial'

```html
  <head>
    <link rel="stylesheet" href="./bower_components/angular-material/angular-material.css"/>
  </head>

  <body>

    <script src="./bower_components/angular-animate/angular-animate.js"></script>
    <script src="./bower_components/angular-aria/angular-aria.js"></script>
    <script type="text/javascript" src="./bower_components/angular-material/angular-material.js"></script>

	<script>
		angular.module('starterApp', ['ngMaterial']);
	</script>
  </body>
```

### Tutorial_1.html:

Here you will modified a shell Angular application to use Angular-Material. 

* Use Bower to install angular-material:  `bower install angular-material -D`
* In the HTML, load the CSS and JS modules:

```html
  <head>
    <link rel="stylesheet" href="./bower_components/angular-material/angular-material.css"/>
  </head>

  <body>

    <script src="./bower_components/angular-animate/angular-animate.js"></script>
    <script src="./bower_components/angular-aria/angular-aria.js"></script>
    <script type="text/javascript" src="./bower_components/angular-material/angular-material.js"></script>	
  </body>
```
