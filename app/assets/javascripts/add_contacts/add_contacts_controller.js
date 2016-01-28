var contactApp = angular.module('myApp.AddContacts',['ui.router'])
.controller('AddContacts', ['$scope', 'contacts', '$stateParams', function ($scope, contacts, $stateParams) {



  $scope.contacts = contacts.contacts;

  $scope.addContact = function() {
      $scope.contacts.push({
        name: $scope.name,
        location: $scope.location,
        timeZone: $scope.timezone
      });
  };

  resolve: {
    contactPromise: ['contacts', function(contacts){
      return contacts.getAll();
    }];
  }

  $scope.deleteContact = function(name) {

  }

}]);