angular.module('BardApp', ['ngRoute'])
// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/', {
//     console.log('home');
//     controller: 'HomeController',
//     template: '<div>HI!!</div>'          //use templateUrl when providing a path
//   })
//   .otherwise({redirectTo: '/'});
// }])
.controller('BlogController',['$scope', function($scope) {
  $scope.name = 'Teh blogz';
}]);

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