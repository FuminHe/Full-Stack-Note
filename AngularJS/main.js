// module
var myApp = angular.module("myModule", []);

// controller
// var myController = function ($scope) {
//   $scope.message = "hello world";
// };

// myApp.controller("myController", myController);

// or

// controller
myApp.controller("myController", function ($scope) {
  var employee = {
    firstName: "John",
    lastName: "Smith",
    department: "sales",
    flag: "2.jpg",
  };
  $scope.employee = employee;
  $scope.message = "hello world";
});

myApp.controller("myController1", function ($scope) {
  $scope.message = "new controller";
});
