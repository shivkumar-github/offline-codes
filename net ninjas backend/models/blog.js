const mongoose = require('mongoose');
const Schema = mongoose.Schema; // it is like constructor function.

// defining structure of our document(blog here)
const blogSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	snippet: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	}

}, { timestamps: true }); // timestamps adds timestamps whenever modified or created.	

const Blog = mongoose.model('Blog', blogSchema) // first arguement is name and mongoose pluralises it (Blog->Blogs) and look for that collection. Second is the schema of object that will be saved in this collection.

module.exports = Blog;