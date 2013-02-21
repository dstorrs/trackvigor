http = require('http');
url = require('url');
router = require('app/router');

var port = 7777;

function onRequest(req, resp){
	path = url.parse(req.url).pathname;
	if ( ! path.match(/\/favicon\./) ) { console.log("Routing a request for: " + path); }

	router.get_handler(path)(req, resp);
}

http.createServer(onRequest).listen(port);
console.log("\nServer started and listening on port " + port + "...\n");