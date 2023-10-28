require('dotenv').config()

const express = require("express");
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const app = express();
// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// connect to db
mongoose.connect(process.env.ATLAS_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Listening to port & connected to db", process.env.PORT)
})
  })
  .catch((error) => {
    console.log(error)
  })