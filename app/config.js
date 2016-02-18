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
    "angular": "github:angular/bower-angular@1.4.9",
    "angular-animate": "github:angular/bower-angular-animate@1.4.9",
    "angular-aria": "github:angular/bower-angular-aria@1.4.9",
    "angular-material": "github:angular/bower-material@1.0.5",
    "angular-messages": "github:angular/bower-angular-messages@1.4.9",
    "angular-mocks": "github:angular/bower-angular-mocks@1.4.9",
    "angular-new-router": "npm:angular-new-router@0.3.0",
    "angular/bower-material": "github:angular/bower-material@1.0.5",
    "css": "github:systemjs/plugin-css@0.1.20",
    "json": "github:systemjs/plugin-json@0.1.0",
    "text": "github:systemjs/plugin-text@0.0.4",
    "traceur": "github:jmcriffey/bower-traceur@0.0.92",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.92",
    "github:angular/bower-angular-animate@1.4.9": {
      "angular": "github:angular/bower-angular@1.4.9"
    },
    "github:angular/bower-angular-animate@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-angular-aria@1.4.9": {
      "angular": "github:angular/bower-angular@1.4.9"
    },
    "github:angular/bower-angular-aria@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-material@1.0.5": {
      "angular": "github:angular/bower-angular@1.5.0",
      "angular-animate": "github:angular/bower-angular-animate@1.5.0",
      "angular-aria": "github:angular/bower-angular-aria@1.5.0",
      "css": "github:systemjs/plugin-css@0.1.20"
    }
  }
});
