const router = require('express').Router();

// Controllers
const { getAllPlaylists, getPlaylistById, /*createPlaylist*/ } = require('./../controllers/playlistController');

// GET all playlists
router.get('/playlists', getAllPlaylists);

// GET playlist by id
router.get('/playlists/:id', getPlaylistById);

// POST create playlist
// router.post('/playlists', createPlaylist);


module.exports = router;