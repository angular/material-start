var ContactUser = function() {

  this.load = function() {
    return browser.get("/#");
  };

  this.buttons = function() {
    return element.all(by.css('[ng-click="cp.contactWith(item)"]'));
  };

  this.focusedAction = function() {
    return browser.driver.switchTo().activeElement().getText();
  }
};

module.exports = ContactUser;

