angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Lactaid',
    lastText: 'You on your way?',
    lastlastText: "$5?",
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Red Bull',
    lastText: 'Hey, it\'s me',
    lastlastText: "$5?",
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Pepsi',
    lastText: 'I should buy a boat',
    lastlastText: "$5?",
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Doritos',
    lastText: 'Look at my mukluks!',
    lastlastText: "$5?",
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Salats',
    lastText: 'This is wicked good ice cream.',
    lastlastText: "$5?",
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
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
    name: "Garden Eden 10/13/2015", 
    lastText: 'Processed',
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/GardenEden.jpg?raw=true',
    deets: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: " Whole Food's 10/13/2015",
    lastText: 'Processed',
    face: 'https://github.com/andreolf/ajoure/blob/master/www/img/WholeFood.jpg?raw=true',
    deets: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: "Trader's Joes 10/13/2015",
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




