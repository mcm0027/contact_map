
myApp.controller('MapView', ['$scope', 'lukeContacts', 'lindaContacts', 'coordinateSearch', function ($scope, lukeContacts, lindaContacts, coordinateSearch) {

  $scope.results = [];
  $scope.contact = [];
  $scope.size = 0;
  $scope.markers = [];
  $scope.infoWindows = [];
  $scope.time = [];
  $scope.map;
  $scope.mapUpdate = function () {
    var myCenter = new google.maps.LatLng(0, 0);


    function initialize() {
      var mapProp = {
        center: myCenter,
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

      $('#show').on('click', function () {
        $scope.show();
      });

      $scope.show = function () {
        $scope.hide();

        $scope.markerSet = function () {
          for (var i = 0; i < $scope.contact.length / 2; i++) {
            var a = i * 2;
            var b = a + 1;

            var content = "<div><p>Name: " + $scope.user[i].name + "</p><p>Location: " + $scope.user[i].location + "</p><p>Next Meeting: " + $scope.user[i].meetingTime + "</p><p>Current Time: " + $scope.user[i].time + "</p></div>"
            addMarker({
              lat: $scope.contact[a].lat,
              lng: $scope.contact[b].lng
            });

            function addMarker(location) {
              $scope.marker = new google.maps.Marker({
                position: location,
                map: $scope.map,
                title: $scope.user[i].name
              });

              $scope.infoWindow = new google.maps.InfoWindow({
                content: content,
                position: location
              });

              $scope.infoWindow.open($scope.map, $scope.marker);
              $scope.infoWindows.push($scope.infoWindow);
              $scope.markers.push($scope.marker);

            };
          }
        }
        setTimeout(function () {
          $scope.markerSet();
        }, 100);
      };
      $scope.hide = function () {
        console.log($scope.markers.length);
        for (var i = 0; i < $scope.markers.length; i++) {
          $scope.markers[i].setMap(null);
          $scope.infoWindows[i].close();

        };
        $scope.markers.length = 0;
        $scope.infoWindows.length = 0;
      };
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  }();

  $scope.setUser = function (user) {
    $scope.results = [];
    if (user === 'Luke') {
      $scope.user = lukeContacts.set();
    }
    if (user === 'Linda') {
      $scope.user = lindaContacts.set();
    }
    $scope.size = _.size($scope.user);

    for (var i = 0; i < $scope.size; i++) {
      coordinateSearch.search($scope.user[i].location).then(passCoordinates);

      function passCoordinates(data) {
        $scope.results.push(data);
        return $scope.results;
      }
    }
    setTimeout(function () {
      $scope.resultsClick();
    }, 100);
    return $scope.results;
  };

  $scope.resultsClick = function () {
    $scope.contact = [];
    for (var i = 0; i < $scope.size; i++) {

      $scope.contact.push({
        "lat": $scope.results[i].results[0].geometry.location.lat
      });
      $scope.contact.push({
        "lng": $scope.results[i].results[0].geometry.location.lng
      });
    };
    $scope.show();
    return $scope.contact;
  };

}]);