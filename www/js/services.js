angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Lactaid',
    lastText: 'You on your way?',
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
    name: 'Kerrygold',
    lastText: 'Look at my mukluks!',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Kerrygold.jpg?raw=true'
  }, {
    id: 4,
    name: 'Sargento',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Sargento.jpg?raw=true'
  
  }, {
    id: 5,
    name: 'CreamOLand',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Eggs.jpg?raw=true'

}, {
    id: 6,
    name: 'CreamOLand1',
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
    name: 'Applegate Farms',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Beacon.jpg?raw=true'

    }, {
    id: 9,
    name: 'General Mills',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/TotalCereal.jpg?raw=true'

    }, {
    id: 10,
    name: 'Newman s Own',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/MildSalsa.jpg?raw=true'

    }, {
    id: 11,
    name: "Ken's Steakhouse",
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'

    }, {
    id: 12,
    name: 'Popcorn Indiana',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/SteaksHouse.jpg?raw=true'

    }, {
    id: 13,
    name: 'Pepperidge Farm',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Cookies.jpg?raw=true'

    }, {
    id: 14,
    name: 'Altoids',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/Mint.jpg?raw=true'

    }, {
    id: 15,
    name: 'Non-Organic',
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
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Eggs',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Pepsi',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Doritos',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Salats',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
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
    name: 'Milk',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Eggs',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Pepsi',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Doritos',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Salats',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
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




