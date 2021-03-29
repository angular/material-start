System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "app/*": "src/*.js",
    "users/*": "src/users/*.js",
    "material-start/*": "src/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.8.2",
    "angular-animate": "github:angular/bower-angular-animate@1.8.2",
    "angular-aria": "github:angular/bower-angular-aria@1.8.2",
    "angular-material": "github:angular/bower-material@master",
    "angular-messages": "github:angular/bower-angular-messages@1.8.2",
    "angular-mocks": "github:angular/bower-angular-mocks@1.8.2",
    "css": "github:systemjs/plugin-css@0.1.21",
    "json": "github:systemjs/plugin-json@0.1.0",
    "text": "github:systemjs/plugin-text@0.0.4",
    "traceur": "github:jmcriffey/bower-traceur@0.0.93",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93",
    "github:angular/bower-angular-animate@1.8.2": {
      "angular": "github:angular/bower-angular@1.8.2"
    },
    "github:angular/bower-angular-aria@1.8.2": {
      "angular": "github:angular/bower-angular@1.8.2"
    },
    "github:angular/bower-angular-messages@1.8.2": {
      "angular": "github:angular/bower-angular@1.8.2"
    },
    "github:angular/bower-material@master": {
      "angular": "github:angular/bower-angular@1.8.2",
      "angular-animate": "github:angular/bower-angular-animate@1.8.2",
      "angular-aria": "github:angular/bower-angular-aria@1.8.2",
      "angular-messages": "github:angular/bower-angular-messages@1.8.2",
      "css": "github:systemjs/plugin-css@0.1.21"
    }
  }
});
