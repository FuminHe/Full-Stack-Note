var myApp = angular
  .module("myModule", [])
  .controller("myController2", function ($scope) {
    $scope.message = "Two way binding";

    var employee = [
      {
        firstName: "John",
        lastName: "Smith",
        department: "sales",
      },
      {
        firstName: "John",
        lastName: "Smith",
        department: "sales",
        flag: "2.jpg",
      },
    ];
    $scope.employee = employee;
  });
