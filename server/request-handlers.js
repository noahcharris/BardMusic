var fs = require('fs');

getRoutes = {
  '/': serveIndex,
  '/js/main.js': serveApp,
  '/js/angular-route.min.js': serveRoutes,
  '/favicon.ico': serveIcon,
  '/styles.css': serveStyles,
  '/views/blog.html': serveBlogView       //need to abstract these views out somehow, also: band pages
};

postRoutes = {

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


function serveIndex(request, response) {
  fs.readFile(__dirname + '/../client/index.html', function(err, data) {
    if (err) throw err;
    response.writeHead(200, {'Content-type':'text/html'});
    response.end(data);
  });
};

function serveApp(request, response) {
  fs.readFile(__dirname + '/../client/js/main.js', function(err, data) {
    if (err) throw err;
    response.writeHead(200, {'Content-type':'text/javascript'});
    response.end(data);
  });
}

function serveRoutes(request, response) {
  fs.readFile(__dirname + '/../client/js/angular-route.min.js', function(err, data) {
    console.log('hi');
    if (err) throw err;
    response.writeHead(200, {'Content-type':'text/javascript'});
    response.end(data);
  });
}

function serveStyles(request, response) {
  fs.readFile(__dirname + '/../client/styles.css', function(err, data) {
    if (err) throw err;
    response.writeHead(200, {'Content-type':'text/css'});
    response.end(data);
  });
}

function serveBlogView(request, response) {
  fs.readFile(__dirname + '/../client/views/blog.html', function(err, data) {
    if (err) throw err;
    response.writeHead(200, {'Content-type':'text/html'});
    response.end(data);
  });
}

function serveIcon(request, response) {
  //serve icon
}



