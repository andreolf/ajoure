angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Lactaid Milk',
    lastText: 'Real, wholesome low fat milk that delivers all the protein.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Milk.jpg?raw=true'
  }, {
    id: 1,
    name: 'Red Bull',
    lastText: 'Hey, it\'s me',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/RedBull.jpg?raw=true'
  }, {
    id: 2,
    name: 'San Pellegrino',
    lastText: 'I should buy a boat',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/SanPellegrino.jpg?raw=true'
  }, {
    id: 3,
    name: 'Butter',
    lastText: 'Look at my mukluks!',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Kerrygold.jpg?raw=true'
  }, {
    id: 4,
    name: 'Cheese',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Sargento.jpg?raw=true'
  
  }, {
    id: 5,
    name: 'Eggs',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Eggs.jpg?raw=true'

}, {
    id: 6,
    name: 'SourCream',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/SourCream.jpg?raw=true'

}, {
    id: 7,
    name: 'Dannon',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Danone.jpg?raw=true'

    }, {
    id: 8,
    name: 'Beacon',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Beacon.jpg?raw=true'

    }, {
    id: 9,
    name: 'Cereal',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/TotalCereal.jpg?raw=true'

    }, {
    id: 10,
    name: 'Mild Salsa',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/MildSalsa.jpg?raw=true'

    }, {
    id: 11,
    name: "Steak Sauce",
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/SteaksHouse.jpg?raw=true'

    }, {
    id: 12,
    name: 'Popcorn',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Popcorn.jpg?raw=true'

    }, {
    id: 13,
    name: 'Cookies',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Cookies.jpg?raw=true'

    }, {
    id: 14,
    name: 'Chiara Mints',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Mint.jpg?raw=true'

    }, {
    id: 15,
    name: 'Vilma Apple',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Apple.jpg?raw=true'

  }];


  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


.factory('Refs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var refs = [{
    id: 0,
    name: 'Milk',
    lastText: '1 Gallon still',
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Milk.jpg?raw=true'
  }, {
    id: 1,
    name: 'Eggs',
    lastText: '6 still , it\'s me',
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Eggs.jpg?raw=true'
  }, {
    id: 2,
    name: 'Pepsi',
    lastText: '3 still',
    face: 'http://materialsinsight.com/wp-content/uploads/2011/03/pepsi-bottle.jpg'
  }, {
    id: 3,
    name: 'Chips Lays Original',
    lastText: '3 still',
    face: 'http://vignette2.wikia.nocookie.net/community-sitcom/images/9/93/Laysoriginal.gif/revision/latest?cb=20120808122745'
  }, {
    id: 4,
    name: 'Beacon',
    lastText: '1 pound still',
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Beacon.jpg?raw=true'

 }, {
    id: 5,
    name: 'Tuna',
    lastText: '3 cans still',
    face: 'http://starkist.com/sites/default/files/products/3307_Can-in-water-%26-Oil-chunk-light-water_0.png'
  }, {
    id: 6,
    name: 'Zucchini',
    lastText: '3 still',
    face: 'http://mrm-usa.com/wp-content/uploads/2014/01/Zucchini1.jpg'
  }, {
    id: 7,
    name: 'Cheese',
    lastText: '1 pound still',
    face: 'https://www.finlandiacheese.com/wp-content/uploads/2013/03/FIN_LightSwiss_Collage.png?dbab77'
 }, {
    id: 8,
    name: 'Zero Pepsi',
    lastText: '3 still',
    face: 'http://materialsinsight.com/wp-content/uploads/2011/03/pepsi-bottle.jpg'
  }, {
    id: 9,
    name: 'Doritos',
    lastText: '3 still',
    face: 'http://www.underconsideration.com/brandnew/archives/doritos_fix_package_detail_01.jpg'
  }, {
    id: 10,
    name: 'AlphaTuna',
    lastText: '1 pound still',
    face: 'http://starkist.com/sites/default/files/products/3307_Can-in-water-%26-Oil-chunk-light-water_0.png'


  }];




  return {
    all: function() {
      return refs;
    },
    remove: function(ref) {
      refs.splice(refs.indexOf(ref), 1);
    },
    get: function(refId) {
      for (var i = 0; i < refs.length; i++) {
        if (refs[i].id === parseInt(refId)) {
          return refs[i];
        }
      }
      return null;
    }
  };
})




.factory('bChats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var bchats = [{
    id: 0,
    name: "Garden Eden 10/1/2015", 
    lastText: 'Processed',
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/GardenEden.jpg?raw=true',
    deets: 'https://github.com/andreolf/ajoure/blob/master/www/img/ScreenShot1.png?raw=true'
  }, {
    id: 1,
    name: " Whole Food's 10/3/2015",
    lastText: 'Processed',
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/WholeFood.jpg?raw=true',
    deets: 'https://github.com/andreolf/ajoure/blob/master/www/img/ScreenShot2.png?raw=true'
}, {
    id: 2,
    name: " Whole Food's 10/07/2015",
    lastText: 'Processed',
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/WholeFood.jpg?raw=true',
    deets: 'https://github.com/andreolf/ajoure/blob/master/www/img/ScreenShot2.png?raw=true'
}, {
       id: 3,
    name: "Garden Eden 10/1/2015", 
    lastText: 'Processed',
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/GardenEden.jpg?raw=true',
    deets: 'https://github.com/andreolf/ajoure/blob/master/www/img/ScreenShot1.png?raw=true'
}, {
    id: 4,
    name: " Whole Food's 10/14/2015",
    lastText: 'Processed',
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/WholeFood.jpg?raw=true',
    deets: 'https://github.com/andreolf/ajoure/blob/master/www/img/ScreenShot2.png?raw=true'

  }, {
    id: 5,
    name: "Trader's Joes 10/18/2015",
    lastText: 'Unprocessed',
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/TradersJoe.jpg?raw=true',
    deets: 'https://github.com/andreolf/ajoure/blob/master/www/img/traderjoes.jpg?raw=true'
  }];






  return {
    all: function() {
      return bchats;
    },
    remove: function(bchat) {
      bchats.splice(bchats.indexOf(bchat), 1);
    },
    get: function(bchatId) {
      for (var i = 0; i < bchats.length; i++) {
        if (bchats[i].id === parseInt(bchatId)) {
          return bchats[i];
        }
      }
      return null;
    }
  };
})

;




