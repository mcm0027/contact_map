var contactApp = angular.module('myApp.AddContacts',['ui.router'])
.controller('ContactsView', ['$scope', 'contacts', '$stateParams', function ($scope, contacts, $stateParams) {

  $scope.contacts = contacts.contacts;

  contacts.getAll();

  $scope.addContact = function() {
      contacts.create({
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

  $scope.deleteContact = function(contact_id) {
    contacts.destroy(contact_id);
  };

}]);