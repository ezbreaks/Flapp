angular.module('flapp')
.controller('PostsCtrl', ['$scope', 'posts', 'post', 
	function($scope, posts, post) {
        'use strict';
        $scope.post = post;

     $scope.addComment = function(){
          if($scope.body === '') { return; }
          posts.addComment(post.id, {
            body: $scope.body,
            author: 'user',
          }).success(function(comment) {
            $scope.post.comments.push(comment);
          });
          $scope.body = '';
        };

        $scope.incrUpvotes = function(comment) {
            posts.upvoteComment(post, comment);
        };
    }]);