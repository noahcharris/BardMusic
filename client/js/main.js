angular.module('BardApp', ['ngRoute', 'leaflet-directive', 'ui.calendar'])


.controller('BlogController', ['$scope', function($scope) {
  $scope.name = 'Teh blogz';
}])
.controller('CalendarController', ['$scope', '$timeout', function($scope, $timeout) {

  $scope.eventSource = {
    url: 'https://www.google.com/calendar/feeds/is1pi2pqvskt3f8rtj9rij9i0c%40group.calendar.google.com/public/basic'
    //className: 'gcal-event',           // an option!
    //currentTimezone: 'America/Chicago' // an option!
  };

  $scope.uiConfig = {
    calendar:{
      height: 450,
      editable: true,
      header:{
        //left: 'month basicWeek basicDay agendaWeek agendaDay',
        //center: 'title',
        right: 'today prev,next'
      }
    }
  };

  var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

  $scope.events = [
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false,color:'#C0C0C0'},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false}
    ];

    //// OMOMOMOGMGMGMGMGGGM SOOO MUCH HARDSHOP
  $scope.eventSources = [$scope.events, $scope.eventSource];



}])
.controller('BandsController', ['$scope', '$http', function($scope, $http) {
  $scope.name = 'Namdsns';
}])
.controller('BandPageController', ['$scope', function($scope) {
  $scope.name = 'whachuknowaboutit';
}])
.controller('PhotoController', ['$scope', '$http', function($scope, $http) {
  $scope.name = 'ohoph';
  $http({
    method: 'GET',
    url: '/imagelinks'
  }).then(function(data) { console.log(data.data); $scope.links = data.data });
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
        },
        markers: {
            venue1Marker: {
                lat: 42.0211,
                lng: -73.9150,
                message: "Venue1",
                focus: true,
                draggable: false
            },
            venue2Marker: {
                lat: 42.0240,
                lng: -73.9100,
                message: "Venue2",
                focus: false,
                draggable: false
            }
        }
    });
}])
//.controller("Ban")

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
  //TEMPORARY
  .when('/this-that-and-the-otter', {    //sample for the band stuff, probably need a better system than this
    controller: 'BandPageController',
    templateUrl: '/views/bandpage.html'     //how do I pass information through to these dynamically? via the route url?
  })
  .when('/Okdokey', {
    controller: 'BandPageController',
    templateUrl: '/views/bandpage.html'
  })
  .when('/smoggyMongo', {
    controller: 'BandPageController',
    templateUrl: '/views/bandpage.html'
  })

  .otherwise({redirectTo: '/'});
}]);



console.log('Loaded BardApp');

