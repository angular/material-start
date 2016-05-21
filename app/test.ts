import IComponentOptions = angular.IComponentOptions;

export module Test {
  export class Testy {
    static name = "Test";
    static config:IComponentOptions = {
      asdf: ""
    };

    constructor() {
      console.log(' *** new Testy: ', Testy.name);
    }
  }   
}
