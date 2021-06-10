const express = require('express');
const youtubeController = require('../controllers/youtubecontroller');
const router = express.Router();

// gets the youtubeURL for react player
// router.get('/song', youtubeController.getYoutubeUrl, (req, res) => {
//   res.status(200).json(res.locals.url);
// });

// router.get('/playlist', youtubeController.getPlaylistURLs, (req, res) => {
//   res.status(200).json(res.locals.url);
// });

module.exports = router;
