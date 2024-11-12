const Blog = require('../models/blog');

const blog_index = (req, res) => {
	Blog.find().sort({ createdAt: -1 }) // this sort is of mongoose
		.then((response) => {
			res.render('index', { title: 'All Blogs', blogs: response })
		})
		.catch((err) => {
			console.log(err);
		})
}

const blog_details = (req, res) => {
	Blog.findById(req.params.id)
		.then((response) => {
			res.render('details', { title: 'Blog Details', blog: response })
		})
		.catch(err => console.log(err));
}

const blog_create_get = (req, res) => {
	res.render('create', { title: 'Create a blog' })
}

const blog_create_post = (req, res) => {
	const blog = new Blog(req.body);

	blog.save()
		.then((response) => { // if successfully saved then redirect to blogs page
			res.redirect('/blogs')
		}).catch(err => {
			console.log(err);
		});
}

const blog_delete = (req, res) => {
	Blog.findByIdAndDelete(req.params.id)
		.then((response) => {
			res.json({ redirect: '/blogs' })// fetch is a AJAX request hence we can not send a redirect as it's response
		})
		.catch((err) => {
			console.log(err);
		});
}


module.exports = {
	blog_index,
	blog_details,
	blog_create_get,
	blog_create_post,
	blog_delete
}