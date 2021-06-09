const express = require('express');

const spotifyController = require('../controllers/spotifycontroller');

const spotifyRouter = express.Router();

spotifyRouter.get('/login', spotifyController.startAuth);

spotifyRouter.get('/auth', spotifyController.confirmAuth, (req,res) => {
  res.status(200).json(res.locals.spotifyTokens);
});

spotifyRouter.get('/playlists', spotifyController.sendPlaylists, (req, res) => {
  res.status(200).json(res.locals.playlists);
})

module.exports = spotifyRouter;
