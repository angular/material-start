describe('UserService', function () {

  beforeEach(module('users'));

  it('should provide a valid user list', inject(function (userService, $timeout) {
    var list= [];

    userService
      .loadAllUsers()
      .then(function(knownUsers){
        list = knownUsers;
      });
    $timeout.flush();

    expect(list.length).toBe(6);
  }));

});
