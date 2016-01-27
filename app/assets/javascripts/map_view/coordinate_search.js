myApp.factory('coordinateSearch', ['$http', '$q', function ($http, $q) {
  var service = {};
  service.search = function (address) {
    var deferred = $q.defer();
    $http.get("http://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&sensor=true")
      .success(function (data) {
        deferred.resolve(data);
      });
    return deferred.promise;
  };
  return service;
}]);