export default supplant;


/**
 * @author      Thomas Burleson
 * @date        November, 2013
 * @description
 *
 *  String supplant global utility (similar to but more powerful than sprintf() ).
 *
 *  Usages:
 *
 *      var user = {
 *              first : "Thomas",
 *              last  : "Burleson",
 *              address : {
 *                  city : "West Des Moines",
 *                  state: "Iowa"
 *              },
 *              contact : {
 *                  email : "ThomasBurleson@Gmail.com"
 *                  url   : "http://www.gridlinked.info"
 *              }
 *          },
 *          message = "Hello Mr. {first} {last}. How's life in {address.city}, {address.state} ?";
 *
 *     return supplant( message, user );
 *
 *
 * NOTE: this supplant() method is from Crockfords `Remedial Javascript`
 *
 */
function supplant( template, values, pattern ) {
    pattern = pattern || /\{([^\{\}]*)\}/g;

    return template.replace(pattern, function(a, b) {
        var p = b.split('.'),
            r = values;

        try {
            for (var s in p) { r = r[p[s]];  }
        } catch(e){
            r = a;
        }

        return (typeof r === 'string' || typeof r === 'number') ? r : a;
    });
}


// supplant() method from Crockfords `Remedial Javascript`
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

String.method("supplant", function( values, pattern ) {
    var self = this;
    return supplant(self, values, pattern);
});

String.supplant = supplant;

