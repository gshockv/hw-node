
function route(handle, pathname, request, response) {
	console.log("Route a request for " + pathname);

	if (typeof handle[pathname] === 'function') {
		handle[pathname](request, response);
	} else {
		console.log("No request handler for " + pathname);
		response.writeHead(404, {"Content-Type" : "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;
