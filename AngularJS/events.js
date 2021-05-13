var app = angular
  .module("myModule", [])
  .controller("myController3", function ($scope) {
    var tech = [
      { name: "C#", likes: 0, dislikes: 0 },
      { name: "Angular", likes: 0, dislikes: 0 },
      { name: "React", likes: 0, dislikes: 0 },
      { name: "Vue", likes: 0, dislikes: 0 },
      { name: "graphql", likes: 0, dislikes: 0 },
    ];

    $scope.tech = tech;

    $scope.incrementLikes = function (tech) {
      tech.likes++;
    };

    $scope.decrementLikes = function (tech) {
      tech.dislikes++;
    };
  });
