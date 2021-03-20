const mongoose = require('mongoose');


// Create Schema
const movieSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        trim: true,
        required: [true, 'A movie must have a name'],
        unique: true,
      },
      release: {
        type: Number,
        required: [true, 'A movie must have a release year'],
      },
    }
);

// Create model
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;