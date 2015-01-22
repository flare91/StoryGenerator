angular.module('starter.controllers', [])

.controller('StoriesCtrl', function($scope, Stories) {
  $scope.stories = Stories.all();
  $scope.remove = function(story) {
    Stories.remove(story);
  }
})

.controller('StorySetupCtrl', function($scope, $stateParams, Stories) {
  $scope.story = Stories.get($stateParams.storyId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    $scope.data = {}

};
// A confirm dialog
$scope.showConfirm = function() {
  var confirmPopup = $ionicPopup.confirm({
    title: '{{story.lastText}}',
    template: 'In a magical castle there lived a {{story.adjective}} princess. Her name was {{story.name}}. Her favorited food was {{story.noun}}. On this day her castle ran out of her {{story.adjective}} food. She {{story.verb}} all her servants as hard as she could. In the end she found her treasure and lived {{story.adverb}} ever after. The End.'
  });
  confirmPopup.then(function(res) {
    if(res) {
      console.log('You are sure');
    } else {
      console.log('You are not sure');
    }
  });
};
})

.controller('GlossaryCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
