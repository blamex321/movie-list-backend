const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieListSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  movies: [{ type: Object }],
  isPublic: { type: Boolean, default: false }
});

module.exports = mongoose.model('MovieList', MovieListSchema);
