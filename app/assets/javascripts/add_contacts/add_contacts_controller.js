var contactApp = angular.module('myApp.AddContacts',['ui.router'])
.controller('AddContacts', ['$scope', 'contacts', '$stateParams', function ($scope, contacts, $stateParams) {

  $scope.contacts = contacts.contacts;

  $scope.contacts.push({
    name: "Jenny",
    location: "Rio, Rio",
    timeZone: "Europe/Berlin"
  });

  

}]);