var fs = require('fs');

getRoutes = {
  '/': serveIndex,
  //serving up all the javascript
  '/js/main.js': serveJS,
  '/js/angular.min.js': serveJS,  //take this out if it doesn't work
  '/js/angular-route.min.js': serveJS,
  '/js/angular-leaflet-directive.min.js': serveJS,
  '/js/jquery.min.js':serveJS,
  '/js/jquery-ui.min.js':serveJS,
  '/js/calendar.js':serveJS,
  '/js/fullcalendar.min.js':serveJS,    //temporary
  '/js/gcal.js':serveJS,
  //serving up favicon
  '/favicon.ico': serveIcon,
  //serving styles
  '/fullcalendar.css' : serveFC,
  '/styles.css': serveStyles,
  //serving up all the partials
  '/views/blog.html': serveView,            //need to abstract these views out somehow, also: band pages
  '/views/calendar.html': serveView,
  '/views/bands.html': serveView,
  '/views/photo.html': serveView,
  '/views/map.html': serveView,
  //serving up all the band pages         //gotta use ng-repeats and a 'getBands' service or something like that
  //serving up images                     // same as ^

};

postRoutes = {

};

headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.mainHandler = function(request, response) {
  console.log('Serving ' + request.method + ' at ' + request.url);

  if (request.method === 'GET') {
    if (getRoutes[request.url])
      getRoutes[request.url](request, response);
  } else if (request.method === 'POST') {
    if (postRoutes[request.url])
      postRoutes[request.url](request, response);
  } else {
  //404 stuff
  response.writeHead(404);
  response.end('NO PAGE YO');
  }
};

function serveStaticAssets(res, folder, asset, type) {    //set up to use client file, so folder means 'within client'
  fs.readFile(__dirname + '/../client/' + folder + "/" + asset, function(err, data) {
    var status = 200;
    if (err) {
      status = 404;
      console.log("Could not load asset.");
    }
    headers['Content-Type'] = type;
    res.writeHead(200, headers);
    res.end(data);
  });
};

function serveView(request, response) {
  serveStaticAssets(response, 'views', request.url.split('/')[2], 'text/html');
}

function serveJS(request, response) {
  serveStaticAssets(response, 'js', request.url.split('/')[2], 'text/javascript');
}

function serveFC(request, response) {
  serveStaticAssets(response, '.', 'fullcalendar.css', 'text/css');     //temporary
}


function serveIndex(request, response) {
  serveStaticAssets(response, '.', 'index.html', 'text/html');
};

function serveStyles(request, response) {
  serveStaticAssets(response, '.', 'styles.css', 'text/css');
}

function serveIcon(request, response) {
  //serve icon
}



