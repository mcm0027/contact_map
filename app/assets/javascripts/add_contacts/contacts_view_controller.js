var contactApp = angular.module('addContacts',['ui.router'])

.factory('contacts', ['$http', '$rootScope', function($http, $rootScope) {

  $rootScope.o = {
    contacts: []
  };

  $rootScope.o.getAll = function() {
    return $http.get('/contact.json').success(function(data){
      angular.copy(data, $rootScope.o.contacts);
    });
  };

  $rootScope.o.create = function(contact) {
  return $http.post('/contact.json', contact).success(function(data){
    $rootScope.o.contacts.push(data);
    });
  };

  $rootScope.o.destroy = function(contact_id) {
    return $http.delete('/contact/' + contact_id).success(function(data){
      console.log(data);
        $http.get('/contact.json').success(function(data){
        angular.copy(data, $rootScope.o.contacts);
  //   o.contacts.push(data);
      });
    });
  };
  return $rootScope.o;
}])

.controller('AddContactsController', ['$scope', 'contacts', '$stateParams', function ($scope, contacts, $stateParams) {

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