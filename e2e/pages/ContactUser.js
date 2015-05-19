var ContactUser = function() {

  this.load = function() {
    return browser.get("/#");
  };

  this.buttons = function() {
    // @Todo - remove sleep() when https://github.com/angular/protractor/issues/2154
    browser.sleep(500);

    return element.all(by.css('[ng-click="cp.submitContact(item)"]'));
  };

  this.focusedButton = function() {
    return browser.driver.switchTo().activeElement();
  };


};

module.exports = ContactUser;

