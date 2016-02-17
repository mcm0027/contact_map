myApp
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html'
    })
    .state('mapView', {
      url: '/mapView',
      templateUrl: 'map_view/_map_view.html',
      controller: 'MapView'
    })
    .state('addContacts', {
      url: '/addContacts',
      templateUrl: 'add_contacts/_add_contacts.html',
      controller: 'AddContactsController'
    });

  $urlRouterProvider.otherwise('home');
}]);