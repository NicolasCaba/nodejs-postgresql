const router = require('express').Router();

// Controllers
const { getTrackById } = require('./../controllers/trackController');

// GET track by id
router.get('/tracks/:id', getTrackById);

module.exports = router;