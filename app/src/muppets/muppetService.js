(function(){
  'use strict';

  angular.module('muppets', [ ])
         .service('muppetsService', MuppetDataService);

  /**
   * Muppet DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function MuppetDataService($q){
    var muppets = [
      {
        name: 'Animal',
        iconurl: 'https://lh3.googleusercontent.com/-KGsfSssKoEU/AAAAAAAAAAI/AAAAAAAAAC4/j_0iL_6y3dE/s96-c-k-no/photo.jpg',
        imgurl: 'http://muppethub.com/wp-content/uploads/2014/02/Animal-7.png',
        content: 'Animal is the wild and frenzied drummer of Dr. Teeth and The Electric Mayhem, the fictional band from The Muppet Show. He is one of the Muppets originally created by Michael K. Frith.'
      },
      {
        name: 'Fozzie Bear',
        iconurl: 'https://yt3.ggpht.com/-cEjxni3_Jig/AAAAAAAAAAI/AAAAAAAAAAA/cMW2NEAUf-k/s88-c-k-no/photo.jpg',
        imgurl: 'http://i.ytimg.com/vi/x-OdqmzkuRg/maxresdefault.jpg',
        content: 'Fozzie Bear is a Muppet character created by Jim Henson and developed by Frank Oz. Fozzie is an orange-brown, fozzie bear who often wears a brown pork pie hat and a red-and-white polka-dot necktie. The character debuted on The Muppet Show, as the show\'s stand-up comic, a role where he constantly employed his catchphrase, "Wocka Wocka Wocka!". Shortly after telling the joke, he was usually the target of ridicule, particularly from balcony hecklers Statler and Waldorf.'
      },
      {
        name: 'The Swedish Chef',
        iconurl: 'https://goingforwardblog.files.wordpress.com/2013/01/swedish-chef.jpg',
        imgurl: 'http://muppetmindset.files.wordpress.com/2012/02/8ff4c-ms_sc_05.jpg',
        content: 'The Swedish Chef is a Muppet character that appeared on The Muppet Show. He was originally performed by Jim Henson and Frank Oz simultaneously, with Henson performing the head and voice and Oz performing the character\'s live hands. The Swedish Chef is now performed by Bill Barretta.'
      }
    ];

    // Promise-based API
    return {
      loadAll : function() {
        // Simulate async nature of real remote calls
        return $q.when(muppets);
      }
    };
  }

})();
