export class App {
  static componentName:string = "msApp";
  
  static componentConfig:ng.IComponentOptions = {
    bindings: {
    },
    controller: App,
    template: `<h1>I'm the MaterialStart app!</h1>`
  };
  
  constructor() {
    console.log("App component ready...");
  }
}
