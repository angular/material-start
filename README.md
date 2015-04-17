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
* `jspm install`

You will notice html Tutorials #0 thru #8: these will be used to guide you through the development process. By following these tutorials stages, you will be very quickly introduced to the powerful features of Angular Material.

Each tutorial presents the resulting changes for that stage. It is recommended, however, that you start with the preceding tutorial and manually make the changes requested. The effort you invest to implement these changes will highlight specific concepts at each Tutorial stage.

> At each tutorial stage, you should use a web-server to view the that tutorial page. Open the dev console to see any warnings and browser the elements.

<br/>
- - -

### Step #1:

Here you modified the shell application to use **jspm** with Angular-Material.

* In the HTML, only load the **System loader** and the configuration module
> Notice no stylesheets are loaded here... they are injected later upon demand
* Configure the system loader to laod the app/boot module.

```html
   <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />

    <title>Angular Material - Starter App</title>
    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:400,700'>

    <style type="text/css">
        /**
         * Hide when Angular is not yet loaded and initialized
         */
        [ng-cloak] {
            display: none;
        }
    </style>
  </head>

  <body ng-cloak layout="column">

    <div ng-include="'src/users/view/browseUsers.html'"
         layout="column" flex tabIndex="-1" role="main" >
    </div>

    <script src="./jspm_packages/system.js" type="text/javascript"></script>
    <script src="./config.js" type="text/javascript"></script>
    <script type="text/javascript">
        System
            .import('app/boot')
            .catch( console.error.bind(console) ); // make sure any errors print to console
    </script>

  </body>
```



## Summary


