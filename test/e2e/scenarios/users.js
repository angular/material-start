'use strict';

var UserList    = require('../pages/UserList.js');
var UserDetails = require('../pages/UserDetails.js');
var ContactUser = require('../pages/ContactUser.js');

describe('my app', function() {

  var users   = new UserList();
  var details = new UserDetails();
  var contact = new ContactUser();

  beforeEach(function() {
    users.loadAll();
  });

  it('should load a list of users', function() {
    expect(users.count()).toBeGreaterThan(1);
  });

  describe('selecting a user', function() {

    beforeEach(function() {
      return details.contactUser();
    });

    it('should set focus on first button in the bottomsheet view', function() {
      expect( contact.buttons().count() ).toBe(4);
      expect( contact.buttons().first().getText() ).toEqual( 'PHONE' );
      expect( contact.focusedButton().getText() ).toEqual( 'PHONE' );
    });

  });
});
