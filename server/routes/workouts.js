const express = require('express')
const Workout = require('../models/workoutModel')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

//get
router.get('/', getWorkouts)

//get 1
router.get('/:id', getWorkout)

//create
router.post('/', createWorkout)

//delete
router.delete('/:id', deleteWorkout)

//update
router.patch('/:id', updateWorkout)

module.exports = router