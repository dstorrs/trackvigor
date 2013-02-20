http = require('http');
url = require('url');

var port = 7777;

function onRequest(req, resp){
	path = url.parse(req.url).pathname;
	if ( path != '/favicon.ico' ) { console.log("Routing a request for: " + path); }
	var body = '<h1>hello world</h1>';
	resp.writeHead(
		200,
		{
			'Content-Length': body.length,
			'Content-Type': 'text/html'
		}
	);
	resp.end(body);
}

http.createServer(onRequest).listen(port);
console.log("Server started and listenin on port " + port);