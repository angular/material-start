'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  var listView = require('./support/list-view.js');
  var bottomSheetView = require('./support/bottom-sheet-view.js');

  browser.get('index.html');

  it('should load a list of users', function() {
    expect(listView.listItems.count()).toBeGreaterThan(1);
  });

  describe('selecting a user', function() {

    beforeEach(function() {
      element(by.css('button.share')).click();
    });

    it('should handle focus on view change', function() {
      bottomSheetView.actionButtons.then(function(items) {
        expect(items[0].getAttribute('id')).toEqual(browser.driver.switchTo().activeElement().getAttribute('id'));
      });
    });

  });
});
