const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
// const Blog = require('./models/blog')
// express app
const app = express();

// connect to mongodb

const dbURI = 'mongodb+srv://shivkumar:test123@nodetuts.fzbwa.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodetuts&ssl=true';
// we have deleted the 'nodetuts' cluster from mongodb atlas

mongoose.connect(dbURI)
	.then((res) => app.listen(3000))
	.catch((err) => console.log(err));

// register view engine

// Set 'ejs' as the view engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Folder where view templates are stored by default if this statement is not written then express automatically searches folder named views.

// listen for request

// middleware & static files
app.use(express.static('public')); // anything insi  de folder public
app.use(express.urlencoded({ extended: true })); // parsing data encoded in url(basically accessing data submitted through form)  to req.body

/*
app.get('/add-blog', (req, res) => {
	const blog = new Blog({
		title: 'new blog2',
		snippet: 'about my new blog',
		body: 'more about my new blog'
	});
	// .save() returns the saved document.
	blog.save()
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			console.log('error occured', err);
		})
})
		*/

/*
// getting all blogs
app.get('/all-blogs', (req, res) => {
	Blog.find()
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
		})
})
*/

/*
// get a single blog
app.get('/single-blog', (req, res) => {
	Blog.findById('672e3aad5f8ff410b050d37c')
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
		})
})
*/

/*
app.use(morgan('dev')); // morgan() automatically calls the next() function in itself.

app.use((req, res, next) => {
	console.log('new request made')
	console.log('hostname: ', req.hostname);
	console.log('path: ', req.path);
	console.log('method: ', req.method);
	next();
	// express doesn't move on to next middleware automatically we have to tell it explicitly
})
*/

app.get('/', (req, res) => {

	/*
	const blogs = [
		{ title: 'Yoshi finds eggs.', snippet: 'Lorem ispus dolor sit amet consectetur' },
		{ title: 'Mario finds stars.', snippet: 'Lorem ispus dolor sit amet consectetur' },
		{ title: 'Yoshi finds bowser.', snippet: 'Lorem ispus dolor sit amet consectetur' },
	]

	// res.sendFile('./views/index.html', { root: __dirname });
	res.render('index', { title: 'home is home', blogs });*/
	res.redirect('/blogs');
});

/*
app.use((req, res, next) => {
	console.log('in next middleware');
	next();
})*/

// blog routes
app.use('/blogs', blogRoutes);

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

// express itself sets the status codes for certain methods
app.get('/download', (req, res) => {
	res.redirect('/adds');
})

// middleware
// executed for every url should be at bottom.
app.use((req, res) => {
	res.status(400).render('404', { title: 'not found -> 404' })
})

