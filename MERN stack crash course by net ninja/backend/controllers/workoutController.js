const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// get all workouts
const getWorkouts = async (req, res) => {
	const workouts = await Workout.find().sort({ createdAt: -1 });
	if (!workouts) return res.status(400).json({ error: 'failed to get workouts!' });
	else res.status(200).json(workouts);
}

// get single workout
const getSingleWorkout = async (req, res) => {
	const id = req.params.id;

	if (!mongoose.isValidObjectId(id)) res.status(404).json({ error: 'No such workout' });

	const workout = await Workout.findById(id); //If you do not validate the ID format beforehand, you won't know if the problem is due to a malformed ID or if the document doesn't exist.
	if (!workout) return res.status(404).json({ error: 'No such workout.' }); // return keyword just to stop execution further
	else res.status(200).json(workout);
}

// create new workout
const createWorkout = async (req, res) => {
	const { title, reps, load } = req.body;
	try {
		const workout = await Workout.create({ title, reps, load }); // create automatically saves document to db unlike of new keyword
		res.status(200).json(workout);
	}
	catch (error) {
		res.status(400).json({ error: error.message });
	}
}

const deleteWorkout = async (req, res) => {
	const id = req.params.id;

	if (!mongoose.isValidObjectId(id)) return res.status(404).json({ error: 'No such workout!' });

	// or we can do Workout.findOneAndDelete({_id:id}) 
	const workout = await Workout.findByIdAndDelete(id);
	if (!workout) res.status(400).json({ error: 'No such workout to delete' });
	else res.status(200).json(workout);
}

const updateWorkout = async (req, res) => {
	const id = req.params.id;
	if (!mongoose.isValidObjectId(id)) return res.status(400).json({ error: 'not valid id to update workout' });
	const workout = await Workout.findByIdAndUpdate(id, { ...req.body }); // returns the previous workout.

	if (!workout) res.status(400).json({ error: 'No such workout to update' });
	else res.status(200).json(workout);
}

module.exports = {
	getWorkouts,
	createWorkout,
	getSingleWorkout,
	deleteWorkout,
	updateWorkout
}