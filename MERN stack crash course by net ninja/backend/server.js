require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');

// creating app
const app = express();

// middleware to log info about request
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
// 	console.log(req.path, req.method);
// 	next();
// })

// routes
app.use(express.json()); // passing any req data(json) to req.body as js data

app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
	.then((response) => {
		app.listen(process.env.PORT, () => {
			console.log('connected to db & listening on port ', process.env.PORT);
		})
	})
	.catch(err => console.log(err));

app.get('/', (req, res) => {
	res.json({ msg: 'Welcome to my app!' });
})
