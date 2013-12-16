angular.module('BardApp', ['ngRoute'])


.controller('BlogController', ['$scope', function($scope) {
  $scope.name = 'Teh blogz';
}])
.controller('CalendarController', ['$scope', function($scope) {
  $scope.name = 'WHOHWOH';
}])
.controller('BandsController', ['$scope', function($scope) {
  $scope.name = 'Namdsns';
}])
.controller('PhotoController', ['$scope', function($scope) {
  $scope.name = 'ohoph';
}])
.controller('MapController', ['$scope', function($scope) {
  $scope.name = 'mapsl';
}])

angular.module('BardApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'BlogController',
    templateUrl: '/views/blog.html'
  })
  .when('/calendar', {
    controller: 'CalendarController',
    templateUrl: '/views/calendar.html'
  })
  .when('/bands', {
    controller: 'BandsController',
    templateUrl: '/views/bands.html'
  })
  .when('/photo', {
    controller: 'PhotoController',
    templateUrl: '/views/photo.html'
  })
  .when('/map', {
    controller: 'MapController',
    templateUrl: '/views/map.html'
  })
  .otherwise({redirectTo: '/'});
}]);



console.log('Loaded BardApp');