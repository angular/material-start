var UserDetails = function() {
  this.load = function() { browser.get('/#'); };

  this.contactUser = function() {
    return $('button.contact').click();
  };

};

module.exports = UserDetails;

