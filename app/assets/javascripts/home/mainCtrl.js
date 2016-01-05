angular.module('flapp')
.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
        $scope.test = 'Hello World!';
        $scope.posts = posts.posts;

        $scope.addPost = function(){
          if(!$scope.title || $scope.title === '') { return; }
          posts.create({
            title: $scope.title,
            link: $scope.link,
          });
          $scope.title = '';
          $scope.link = '';
        };

        $scope.incrUpvotes = function(post) {
            posts.upvote(post);
        };
    }]);
