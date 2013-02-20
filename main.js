http = require('http');
url = require('url');

var port = 7777;

var routing_table = {};

var defaultHandler = function(req, resp) {
	var body = '<h1>The page you requested could not be found</h1>';
	resp.writeHead(
		200,
		{
			'Content-Length': body.length,
			'Content-Type': 'text/html'
		}
	);
	resp.end(body);
}
routing_table['default_handler'] = defaultHandler;

function onRequest(req, resp){
	path = url.parse(req.url).pathname;
	if ( path != '/favicon.ico' ) { console.log("Routing a request for: " + path); }
	(routing_table['default_handler'])(req, resp);
}

http.createServer(onRequest).listen(port);
console.log("Server started and listenin on port " + port);