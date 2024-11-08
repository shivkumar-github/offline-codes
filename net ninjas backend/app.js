const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine

// Set 'ejs' as the view engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Folder where view templates are stored by default if this statement is not written then express automatically searches folder named views.

// listen for request
app.listen(3000);

// middleware & static files
app.use(express.static('public')); // anything inside folder public 

app.use(morgan('dev')); // morgan() automatically calls the next() function in itself.

app.use((req, res, next) => {
	console.log('new request made')
	console.log('hostname: ', req.hostname);
	console.log('path: ', req.path);
	console.log('method: ', req.method);
	next();
	// express doesn't move on to next middleware automatically we have to tell it explicitly
})


app.get('/', (req, res) => {

	const blogs = [
		{ title: 'Yoshi finds eggs.', snippet: 'Lorem ispus dolor sit amet consectetur' },
		{ title: 'Mario finds stars.', snippet: 'Lorem ispus dolor sit amet consectetur' },
		{ title: 'Yoshi finds bowser.', snippet: 'Lorem ispus dolor sit amet consectetur' },
	]

	// res.sendFile('./views/index.html', { root: __dirname });
	res.render('index', { title: 'home is home', blogs });
});


app.use((req, res, next) => {
	console.log('in next middleware');
	next();
})

app.get('/about', (req, res) => {
	// res.sendFile('./views/about.html', {root:__dirname});
	res.render('about', { title: 'about' });
})

// executed for every url
// app.use((req, res) => {
// 	res.sendFile('./views/404.html', { root: __dirname });
// })

app.get('/adds', (req, res) => {
	res.sendFile('./views/adds.html', { root: __dirname })
})
 

app.get('/blogs/create', (req, res) => {
	res.render('create', {title:'create blog'})
})


// express itself sets the status codes 
app.get('/download', (req, res) => {
	res.redirect('/adds');
})

// middleware
// executed for every url should be at bottom.
app.use((req, res) => {
	res.status(400).render('404', { title: 'not found -> 404' })
})

