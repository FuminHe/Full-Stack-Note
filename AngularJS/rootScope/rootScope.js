var sample = angular.module("sample", []);

sample.controller("emp", [
  "$scope",
  function ($scope) {
    $scope.Name = "John";
  },
]);

sample.controller("empDetails", [
  "$scope",
  function ($scope) {
    $scope.Sal = 1000000000;
    $scope.Dept = "Sales";
  },
]);

sample.controller("empPayCheck", [
  "$scope",
  function ($scope) {
    $scope.getTaxes = function () {
      return ($scope.Sal * 30) / 100;
    };
    $scope.getNet = function () {
      return $scope.Sal - $scope.getTaxes();
    };
  },
]);
