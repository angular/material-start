var UserDetails = function() {
  this.load = function() { browser.get('/#'); };

  this.contactUser = function() {
    $('button.contact').click();
  };

};

module.exports = UserDetails;

