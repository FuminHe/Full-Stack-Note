// $http:make http request:post/get..
function AppCtrl($scope, $http) {
  // get from db
  $http.get("/contactlist").success(function (response) {
    $scope.contactList = response;
  });

  // add to db
  $scope.addContact = function () {
    // console.log($scope.contact);
    $http.post("/contactlist", $scope.contact).success(function (res) {
      //   console.log(res);
      $scope.contactList.push(res);
      $scope.contact = "";
    });
  };

  // delete from db
  $scope.deleteContact = function (id) {
    $http.delete("/contactlist/" + id).success(function (res) {
      //   console.log(res);
      $http.get("/contactlist").success(function (response) {
        $scope.contactList = response;
      });
    });
  };

  // update the db
  $scope.editContact = function (contact) {
    // console.log(contact);
    $scope.contact = contact;
  };
  $scope.updateContact = function (contact) {
    // console.log(id);
    $http.put("/contactlist/" + contact._id, contact).success(function (res) {
      console.log(res);
    });
  };
}
