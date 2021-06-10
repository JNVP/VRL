const express = require('express');
const spotifycontroller = require('../controllers/spotifycontroller');

const spotifyController = require('../controllers/spotifycontroller');

const spotifyRouter = express.Router();

spotifyRouter.get('/login', spotifyController.startAuth);

spotifyRouter.get('/auth', spotifyController.confirmAuth, (req,res) => {
  res.status(200).redirect('/');
});

spotifyRouter.get('/playlists', spotifyController.sendPlaylists, (req, res) => {
  res.status(200).json(res.locals.playlists);
});

spotifyRouter.get('/songs/:playlistID', spotifycontroller.sendPlaylistSongs, (req, res) => {
  res.status(200).json(res.locals.playlistSongs);
})

module.exports = spotifyRouter;
