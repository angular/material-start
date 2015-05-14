'use strict';

var UserList    = require('../pages/UserList.js');
var UserDetails = require('../pages/UserDetails.js');
var Share       = require('../pages/Share.js');

describe('my app', function() {

  var users   = new UserList();
  var details = new UserDetails();
  var share   = new Share();

  beforeEach(function() {

    users.loadAll();
    details.load();
    share.load();

  });

  it('should load a list of users', function() {
    expect(users.count()).toBeGreaterThan(1);
  });

  describe('selecting a user', function() {

    beforeEach(function() {
      details.contactUser();
    });

    it('should set focus on first Share option in Contact Share view', function() {
      share.actions().then(function(items) {
        expect(items[0].getAttribute('id')).toEqual(share.focusedItem().getAttribute('id'));
      });
    });

  });
});
