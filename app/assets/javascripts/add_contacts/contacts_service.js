contactApp.factory('contacts', ['$http', function($http) {
  var o = {
    contacts: []
  };

  o.getAll = function() {
    return $http.get('/contact.json').success(function(data){
      angular.copy(data, o.contacts);
    });
  };

  o.create = function(contact) {
  return $http.post('/contact.json', contact).success(function(data){
    o.contacts.push(data);
  });
};

  return o;
}]);