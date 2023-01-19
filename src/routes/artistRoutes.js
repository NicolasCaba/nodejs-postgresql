const router = require('express').Router();

// Controllers
const { getArtistById, createArtist } = require('./../controllers/artistController');

// GET artist by id
router.get('/artists/:id', getArtistById);

// POST artist by id
router.post('/artists', createArtist);


module.exports = router;