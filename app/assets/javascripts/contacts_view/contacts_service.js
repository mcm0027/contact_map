contactApp.factory('contacts', ['$http', '$rootScope', function($http, $rootScope) {

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
}]);