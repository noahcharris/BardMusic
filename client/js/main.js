angular.module('BardApp', ['ngRoute', 'leaflet-directive', 'ui.calendar'])


.controller('BlogController', ['$scope', function($scope) {
  $scope.name = 'Teh blogz';
}])
.controller('CalendarController', ['$scope', function($scope) {

  $scope.eventSources = 
    [
        {
            title: 'Event1',
            start: '2013-12-12T13:15:30Z'
        },
        {
            title: 'Event2',
            start: '2013-12-12'
        }
        // etc...
    ];

    $scope.events = [
        {
            title  : 'event1',
            start  : '2013-12-12'
        },
        {
            title  : 'event2',
            start  : '2013-12-12',
            end    : '2013-12-13'
        },
        {
            title  : 'event3',
            start  : '2010-01-09 12:30:00',
            allDay : false // will make the time show
        }
    ];

    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        }
      }
    };

    $scope.thing = function() {
      console.log($scope.myCalendar);
    };


}])
.controller('BandsController', ['$scope', function($scope) {
  $scope.name = 'Namdsns';
}])
.controller('PhotoController', ['$scope', function($scope) {
  $scope.name = 'ohoph';
}])
.controller("MapController", [ '$scope', function($scope) {
    angular.extend($scope, {
        center: {
            lat: 42.0211,
            lng: -73.9076,
            zoom: 15
        },
        defaults: {
            scrollWheelZoom: false
        }
    });
}])

angular.module('BardApp')


//ROUTING
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
  .when('/this-that-and-the-otter', {    //sample for the band stuff, probably need a better system than this
    controller: 'BandPageController',
    templateUrl: '/views/bandPage.html'     //how do I pass information through to these?
  })
  .otherwise({redirectTo: '/'});
}]);



console.log('Loaded BardApp');

