var ContactUser = function() {

  this.load = function() {
    return browser.get("/#");
  };

  this.buttons = function() {
    return element.all(by.css('[ng-click="cp.submitContact(item)"]'));
  };

  this.focusedButton = function() {
    return browser.driver.switchTo().activeElement();
  };

};

module.exports = ContactUser;

