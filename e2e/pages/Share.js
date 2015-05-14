var Share = function() {
  this.load = function() {
    browser.get("/#");
  };
  this.actions = function() {
    return element.all(by.css('[ng-click="vm.performAction(item)"]'));
  };
  this.focusedItem = function() {
    return browser.driver.switchTo().activeElement();
  }
};

module.exports = Share;

