# AngularJS Material Starter (Typescript)
[![Gitter](https://badges.gitter.im/angular/material2.svg)](https://gitter.im/angular/material?utm_source=badge&utm_medium=badge)

This branch contains the final/complete version (i.e. `step-10-finished`) of the
[Material Start ES6 Tutorial](https://github.com/angular/material-start/tree/es6-tutorial) branch
but written in Typescript instead of ES6.

You can see the [Live Demo here](https://angularjs-material-start.web.app).

This project uses the latest master branch of AngularJS Material to build the application outlined
below.

![material-starter-ux2](https://cloud.githubusercontent.com/assets/6004537/14996543/b588eb46-1137-11e6-803c-ce23996c9742.png)

Above is a screenshot of the Starter-App with a **Master-Detail** layout: showing a list of users
(left) and a user detail view (right).

Also shown is the user experience that will be displayed for smaller device sizes. The responsive
layout reveals the **menu** button that can be used to hide the user list. And the **share** button
can be used to show the Share bottom sheet view.

This Starter app demonstrates how:

*  AngularJS Material `layout` and `flex` options can easily configure HTML containers
*  AngularJS Material components `<md-toolbar>`, `<md-sidenav>`, and `<md-icon>` can quickly provide
   a base application structure
*  Custom components can be used and show `<md-bottomsheet>` and a `<md-dialog>` with HTML templates
*  Custom component can easily, and programmatically open/close the SideNav component
*  Responsive breakpoints and `$mdMedia` are used
*  Theming can be altered/configured using `$mdThemingProvider`


This sample application is purposed as both a learning tool and a skeleton application for a typical
[AngularJS Material](https://material.angularjs.org) web app, comprised of a side navigation area and a
content area. You can use it to quickly bootstrap your AngularJS webapp projects and dev environment
for these projects.

- - -

#### "How to build an App"

Here are some generalized steps that may be used to conceptualize the application implementation
process:

1. Plan your layout and the components you want to use

2. Use hard-coded HTML and mock content to make sure the components appear as desired

3. Wire components to your application logic

   > Use the seamless integration possible with AngularJS directives and controllers.<br/>
   > This integration assumes that you have unit tested your application logic.

4. Add Responsive breakpoints

5. Add Theming support

6. Confirm ARIA compliance

7. Write End-to-end (e2e) Tests

   > It is important to validate your application logic with AngularJS Material UI components.

###### Wireframe

The illustration below shows how we planned the layout and identified the primary components that
will be used in the Starter app:

![plancomponents2](https://cloud.githubusercontent.com/assets/210413/6444676/c247c8f8-c0c4-11e4-8206-208f55cbceee.png)

> **Note:** The container #2 (above) is a simple `<div>` container and not an AngularJS Material
  component.

- - -

###### Prerequisites

This project assumes that you have NodeJS and any relevant development tools (like XCode) already
installed.

We use NPM for dependency management, and SystemJS (built on top of the dynamic ES6 module loader)
to dynamically load our modules. This allows developers to load any module format (ES6, CommonJS,
AMD, and globals).

SystemJS is also used to transpile the Typescript into plain Javascript in the browser rather than
having to download and configure a separate compiler.
 
###### Getting Started

Clone this repository and execute the following commands in a terminal:

* `git checkout typescript`
* `npm install`
* `npm start`

> **Note:** Open the dev console to see any warnings and browse the elements.

###### Layout

You will notice a few files/directories within this project:

 1. `app/src` - This is where all of your application files are stored.
 2. `app/assets` - This folder contains some tutorial-provided images and icons which are used by
    the application.
 3. `index.html` - The entry point to your application. This uses System.js to load the
    `app/src/boot/boot.ts` bootstrap file which imports all of your dependencies and declares them
    as AngularJS modules. It also configures the icons and theming for the application.

#### Notes

Below are a few important notes about this project.

* Unlike the ES6 version, we have merged the `boot.ts` and `app.ts` files into the `boot.ts` to
  simplify the usage a bit and have only one module.

* Additionally, this version of the project shows how to use the Dialog component to show an alert
  once a sharing icon is clicked. The ES6 version simply logs a message to the console.
  
* The UsersList component inlines the HTML template to show an alternative to the `templateUrl` for
  simple components.
  
* The types provided by @types packages are outdated and use
  references to interfaces beginning with 'I' which is not in-line with Angular standards. These
  typings are provided by the community and not AngularJS Material.

#### Troubleshooting

If you have issues getting the application to run or work as expected:

1. Make sure you have installed NPM and run the `npm install` command (and there were no errors).
2. Reach out on our [Forum](https://groups.google.com/forum/#!forum/ngmaterial) to see if any other
   developers have had the same issue.
3. This project is based against the `master` branch of AngularJS Material, so there may be a newer
   version available which fixes the issue you are seeing.
4. Search for the issue here on [GitHub](https://github.com/angular/material-start/issues?q=is%3Aissue+is%3Aopen).
5. If you don't see an existing issue, please open a new one with the relevant information and the
   details of the problem you are facing.

Note that the `npm run build` command is expected to fail. The project is configured to use
SystemJS to build the TypeScript in the browser. The format required for supporting this in SystemJS
is not compatible with the normal TypeScript compiler (`tsc`).
