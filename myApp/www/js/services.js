angular.module('starter.services', [])

.factory('Stories', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var stories = [{
    id: 0,
    name: 'Super Hero',
    lastText: 'The Missing Cheese',
    face: '../img/storyIcon-01.png'
  }, {
    id: 1,
    name: 'Princess',
    lastText: 'Her Secret Treasure',
    face: '../img/storyIcon-02.png'
  }, {
    id: 2,
    name: 'Story Genre 3',
    lastText: 'Title of Story 3',
    face: '../img/storyIcon-03.png'
  }, {
    id: 3,
    name: 'Story Genre 4',
    lastText: 'Title of Story 3',
    face: '../img/storyIcon-04.png'
  }, {
    id: 4,
    name: 'Story Genre 5',
    lastText: 'Title of Story 3',
    face: '../img/storyIcon-05.png'
  }];

  return {
    all: function() {
      return stories;
    },
    remove: function(story) {
      stories.splice(stories.indexOf(story), 1);
    },
    get: function(storyId) {
      for (var i = 0; i < stories.length; i++) {
        if (stories[i].id === parseInt(storyId)) {
          return stories[i];
        }
      }
      return null;
    }
  }
})

.factory('StoryData', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var story = [{
    id: 0,
    adjective: 'yellow',
    name: 'Geno',
    noun: 'lard',
    adjective: 'green',
    verb: 'jumped',
    adverb: 'happily'
  }, {
    id: 1,
    name: 'Princess',
    lastText: 'Her Secret Treasure',
    face: '../img/storyIcon-02.png'
  }, {
    id: 2,
    name: 'Story Genre 3',
    lastText: 'Title of Story 3',
    face: '../img/storyIcon-03.png'
  }, {
    id: 3,
    name: 'Story Genre 4',
    lastText: 'Title of Story 3',
    face: '../img/storyIcon-04.png'
  }, {
    id: 4,
    name: 'Story Genre 5',
    lastText: 'Title of Story 3',
    face: '../img/storyIcon-05.png'
  }];

  return {
    all: function() {
      return stories;
    },
    remove: function(story) {
      stories.splice(stories.indexOf(story), 1);
    },
    get: function(storyId) {
      for (var i = 0; i < stories.length; i++) {
        if (stories[i].id === parseInt(storyId)) {
          return stories[i];
        }
      }
      return null;
    }
  }
})


/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
