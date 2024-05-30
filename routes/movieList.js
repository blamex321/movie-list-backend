const express = require('express');
const MovieList = require('../models/MovieList');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a new movie list
router.post('/', auth, async (req, res) => {
  const { name, movies, isPublic } = req.body;
  const userId = req.user.id;

  try {
    const newList = new MovieList({ userId, name, movies, isPublic });
    await newList.save();
    res.status(201).json(newList);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all movie lists for a user
router.get('/', auth, async (req, res) => {
  const userId = req.user.id;

  try {
    const lists = await MovieList.find({ userId });
    res.json(lists);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add a movie to a list
router.post('/:id/movies', auth, async (req, res) => {
  const { imdbID, title, year, poster } = req.body;
  const userId = req.user.id;

  try {
    const list = await MovieList.findById(req.params.id);
    if (list.userId.toString() !== userId) {
      return res.status(403).json({ message: 'You can only update your own lists' });
    }

    list.movies.push({ imdbID, title, year, poster });
    const updatedList = await list.save();
    res.json(updatedList);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Set list visibility
router.patch('/:id/visibility', auth, async (req, res) => {
  const { isPublic } = req.body;
  const userId = req.user.id;

  try {
    const list = await MovieList.findById(req.params.id);
    if (list.userId.toString() !== userId) {
      return res.status(403).json({ message: 'You can only update your own lists' });
    }

    list.isPublic = isPublic;
    const updatedList = await list.save();
    res.json(updatedList);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a movie from a list
router.delete('/:listId/movies/:movieId', auth, async (req, res) => {
  const { listId, movieId } = req.params;
  const userId = req.user.id;
  try {
    const list = await MovieList.findById(listId);
    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    if (list.userId.toString() !== userId) {
      return res.status(403).json({ message: 'You can only update your own lists' });
    }

    list.movies = list.movies.filter(movie => movie.imdbID.toString() !== movieId);
    await list.save();
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a list
router.delete('/:id', auth, async (req, res) => {
  const listId = req.params.id;
  const userId = req.user.id;

  try {
    const list = await MovieList.findById(listId);
    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    if (list.userId.toString() !== userId) {
      return res.status(403).json({ message: 'You can only delete your own lists' });
    }

    await MovieList.findByIdAndDelete(listId);
    res.json({ message: 'List deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
});

module.exports = router;
