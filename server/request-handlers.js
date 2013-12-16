var fs = require('fs');

getRoutes = {
  '/': serveIndex,
  '/js/main.js': serveApp,
  '/js/angular-route.min.js': serveRoutes,
  '/js/angular-leaflet-directive.min.js': serveLeafletDirective,
  '/favicon.ico': serveIcon,
  '/styles.css': serveStyles,
  //serving up all the partials
  '/views/blog.html': serveView,            //need to abstract these views out somehow, also: band pages
  '/views/calendar.html': serveView,
  '/views/bands.html': serveView,
  '/views/photo.html': serveView,
  '/views/map.html': serveView,
  //serving up all the band pages
  
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



function serveIndex(request, response) {
  serveStaticAssets(response, '.', 'index.html', 'text/html');
};

function serveApp(request, response) {
  serveStaticAssets(response, 'js', 'main.js', 'text/javascript');
}

function serveRoutes(request, response) {
  serveStaticAssets(response, 'js', 'angular-route.min.js', 'text/javascript');
}

function serveLeafletDirective(request, response) {
  serveStaticAssets(response, 'js', 'angular-leaflet-directive.min.js', 'text/javascript');
}

function serveStyles(request, response) {
  serveStaticAssets(response, '.', 'styles.css', 'text/css');
}

function serveIcon(request, response) {
  //serve icon
}



