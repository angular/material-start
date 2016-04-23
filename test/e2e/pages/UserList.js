var UserList = function() {
  this.loadAll = function() {
    browser.get('/#');
  };

  this.count = function() {
    return element.all(by.css('md-list-item')).count();
  };
};

module.exports = UserList;

