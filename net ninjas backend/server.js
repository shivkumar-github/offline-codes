const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => { // this code will not run into browser,  it runs into the server
	// console.log('requeset made');
	// // console.log('new comment added!'); // this doesn't restarts automatically when any change is made
	// console.log(req.url, req.method);

	const num = _.random(0, 20);
	console.log(num);

	const greet = _.once(() => {
		console.log('hello');
	})// function is executed only once

	greet();
	greet();
	// set header content type
	// res.write('<head><link rel="stylsheet" href="#"></head>')// replaces the head given by browser.
	res.setHeader('content-type', 'text/html');
	// res.write('<p> hello ninjas </p>');
	// res.write('<p>hello again</p>')
	// res.end(); // sends the response


	let path = './views/';
	let statusCode = 200;
	switch (req.url) {
		case '/':
			path += 'index.html';
			break;
		case '/about':
			path += 'about.html';
			break;
		case '/adds':
			path += 'adds.html';
			break;
		case '/download':
			statusCode = 301;
			res.setHeader('Location', '/adds')
			break;
		default:
			path += '404.html';
			statusCode = 404;
			break;
	}
	res.statusCode = statusCode;

	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		}
		else {
			// res.write(data);
			res.end(data);
		}
	});

});

server.listen(3000, 'localhost', () => {
	console.log('listening for request on port 3000');
});

// local host directs the browser again to our own computer
// ports are like different doors to your computer.

