var fs = require('fs');

getRoutes = {
  '/': serveIndex,
  '/js/main.js': serveApp,
  '/favicon.ico': serveIcon,
  '/styles.css': serveStyles
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

function serveStyles(request, response) {
  fs.readFile(__dirname + '/../client/styles.css', function(err, data) {
    if (err) throw err;
    response.writeHead(200, {'Content-type':'text/css'});
    response.end(data);
  });
}

function serveIcon(request, response) {
  //serve icon
}



