# Angular Material-Start

This Material **start*** project is a *seed* for AngularJS Material applications. The project contains a sample AngularJS application and is pre-configured to install the Angular framework and a bunch of development and testing tools for instant web development gratification.

This sample application is intended to be useful as both a learning tool and a skeleton application
for a typical [AngularJS Material](http://material.angularjs.org/) web app: comprised of a Side navigation
area and a content area. You can use it to quickly bootstrap your AngularJS webapp projects and dev
environment for these projects.

### What is the UX?

Below is a snapshot of the Starter-App with the Users' *master-detail* view. Also shown is the user
experience that will is displayed for smaller device sizes. The responsive layout changes to hide
the user list, reveal the **menu** button. In the User Details view, you may also click the
**share** button  to show the Contact &lt;User&gt; bottom sheet view.

<br/>

![material-starter-ux2](https://cloud.githubusercontent.com/assets/210413/6448551/70864488-c0e0-11e4-8767-c4e1e4c2f343.png)

<br/>

This Starter app demonstrates how:

*  Angular Material `layout` and `flex` options can easily configure HTML containers
*  Angular Material components `<md-toolbar>`, `<md-sidenav>`, `<md-icon>` can be quickly used
*  Custom controllers can use and show `<md-bottomsheet>` with HTML templates
*  Custom controller can easily, programmatically open & close the SideNav component.
*  Responsive breakpoints and `$mdMedia` are used
*  Theming can be altered/configured using `$mdThemingProvider`
*  ARIA features are supported by Angular Material and warnings can be used to improve accessibility.

### Tutorials

The repository contains both ES5 and ES6 versions of the application. Traditional development with
ES5 standards and solutions are presented here by default. Tutorials are included: step-by-step
instructions that clearly demonstrate how the Starter application can be created in minutes.

> These tutorials will be presented live, on-stage at **ng-conf 2015, Utah**.

Developers should checkout the following repository branches for:

* Branch [**Starter - ES5 Tutorials**](https://github.com/angular/material-start/tree/es5-tutorial):
for  ES5 Tutorial steps & development process.
* Branch [**Starter - ES6**](https://github.com/angular/material-start/tree/es6): same application as created in the **[master](https://github.com/angular/material-start)** branch, but implemented with ES6 and JSPM.

> The **README** for the ES6 branch will provide some details showing how easy, <u>more simplifed</u>,
and <u>more manageable</u> it is to develop ES6 applications with Angular Material 1.x. As time permits, we will expand on that information.<br/><br/> 

## Getting Started

#### Prerequisites

You will need **git** to clone the material-start repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test material-start. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

#### Clone material-start

To get you started you can simply clone `master` branch from the
[Material-Start](https://github.com/angular/material-start) repository and install the dependencies:

> NOTE: The `master` branch contains the traditional, ES5 implementation familiar to Angular developers.

Clone the material-start repository using [git][git]:

```
git clone https://github.com/angular/material-start.git
cd material-start
```

If you just want to start a new project without the material-start commit history then you can do:

```bash
git clone --depth=1 https://github.com/angular/material-start.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

#### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the AngularJS code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the AngularJS framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
material-start changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a web server.*

### Run End-to-End Tests

To run your e2e tests your should install and configure Protractor and the Selenium WebServer.
These are already specified as npm dependencies within `package.json`. Simply run these
terminal commands:

```console
npm update
webdriver-manager update
```

Your can read more details about Protractor and e2e here: http://angular.github.io/protractor/#/
for more details on Protractor.

 1. Start your local HTTP Webserver: `live-server` or `http-server`.

```console
cd ./app; live-server;
```

> Note: since `live-server` is working on port 8080, we configure the `protractor.conf.js` to use
`baseUrl: 'http://localhost:8080'`

 2. In another tab, start a Webdriver instance:
 
```console
webdriver-manager start
```

>This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test
will send requests to this server to control a local browser. You can see information about the
status of the server at `http://localhost:4444/wd/hub`. If you see errors, verify path in
`e2e-tests/protractor.conf.js` for `chromeDriver` and `seleniumServerJar` to your local file system.

 3. Run your e2e tests using the `test` script defined in `package.json`:
 
```console
npm test
```

> This uses the local **Protractor** installed at `./node_modules/protractor`

## Directory Layout

```
app/                    --> all of the source files for the application
  assets/app.css        --> default stylesheet
  src/           --> all app specific modules
     users/              --> package for user features
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the
project. Now that the AngularJS framework library code and tools are acquired through package managers
(npm and bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Serving the Application Files

While AngularJS is client-side-only technology and it's possible to create AngularJS webapps that
don't require a backend server at all, we recommend serving the project files using a local
web server during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.

### Running the App during Development

The angular-seed project comes pre-configured with a local development web server.  It is a node.js
tool called [http-server][http-server].  You can install http-server globally:

```
npm install -g live-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
cd app
live-server
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.


## Contact

For more information on AngularJS please check out http://angularjs.org/
For more information on Angular Material, check out https://material.angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
