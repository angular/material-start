var UserDetails = function() {
  this.load = function() { browser.get('/#'); };

  this.contactUser = function() {
    element(by.css('button.share')).click();
  };

};

module.exports = UserDetails;

