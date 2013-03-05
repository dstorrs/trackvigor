var http = require('http');
var url = require('url');
var static = require('node-static');
var u = require('app/util');

var port = 7777;
var file = new(static.Server)(__dirname + '/templates/assets');

function get_url_path(req) { return url.parse(req.url).pathname }

http.createServer(function(req, res) {
	// if ( ! get_url_path( req ).match(/\/favicon\./) ) { u.log("Routing a request for: " + get_url_path( req )); }

	//    Add the listeners
	req.addListener(
		'end',
		function() {
			file.serve(
				req,
				res,
				function(err, result) {
					//    File not found?
					if (err && (err.status === 404)) {
						file.serveFile('/html/404.html', 404, {}, req, res);
					}
				}
			)
		}
	);
}).listen(port);

console.log("\n");
u.log("\tSTART ");
u.log(new Date());
u.log("Server started and listening on port " + port + "...\n");