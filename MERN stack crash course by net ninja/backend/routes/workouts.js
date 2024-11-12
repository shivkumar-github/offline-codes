const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

// to GET all workouts
router.get('/', workoutController.getWorkouts);

// to POST a new workout
router.post('/', workoutController.createWorkout);

// to GET a single workout
router.get('/:id', workoutController.getSingleWorkout);

// to DELETE a single workout
router.delete('/:id', workoutController.deleteWorkout);

// to UPDATE a workout
router.patch('/:id', workoutController.updateWorkout);

module.exports = router;