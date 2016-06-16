System.config({
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "utils/*": "src/utils/*.js",
    "app/*": "src/*.js",
    "users/*": "src/users/*.js",
    "material-start/*": "src/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.7",
    "angular-animate": "github:angular/bower-angular-animate@1.5.7",
    "angular-aria": "github:angular/bower-angular-aria@1.5.7",
    "angular-material": "github:angular/bower-material@master",
    "angular-messages": "github:angular/bower-angular-messages@1.5.7",
    "css": "github:systemjs/plugin-css@0.1.23",
    "json": "github:systemjs/plugin-json@0.1.2",
    "text": "github:systemjs/plugin-text@0.0.4",
    "traceur": "github:jmcriffey/bower-traceur@0.0.92",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.92",
    "github:angular/bower-angular-animate@1.5.7": {
      "angular": "github:angular/bower-angular@1.5.7"
    },
    "github:angular/bower-angular-aria@1.5.7": {
      "angular": "github:angular/bower-angular@1.5.7"
    },
    "github:angular/bower-angular-messages@1.5.7": {
      "angular": "github:angular/bower-angular@1.5.7"
    },
    "github:angular/bower-material@master": {
      "angular": "github:angular/bower-angular@1.5.7",
      "angular-animate": "github:angular/bower-angular-animate@1.5.7",
      "angular-aria": "github:angular/bower-angular-aria@1.5.7",
      "angular-messages": "github:angular/bower-angular-messages@1.5.7",
      "css": "github:systemjs/plugin-css@0.1.23"
    }
  }
});
