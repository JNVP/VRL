const { parse } = require('@babel/core');
const {genSalt} = require('bcrypt');
const btoa = require('btoa');
const fetch = require('node-fetch');
require('dotenv').config();
module.exports = {
  async startAuth(req,res,next) {

    try {
      const state = await genSalt(1);
      
      res.cookie('spotifyState', state);

      const spotifyData = new URLSearchParams({
        client_id: process.env.SPOTIFY_CLIENT,
        response_type: 'code',
        state: state,
        redirect_uri: process.env.SPOTIFY_REDIRECT,
        scope: 'playlist-read-private playlist-read-collaborative user-library-read'
      });

      res.redirect('https://accounts.spotify.com/authorize?' + spotifyData);
    }
    catch (e) {
      console.error(e);
    }

    return;
  },

  async confirmAuth(req,res,next) {

    try {

      if(req.query.error) throw req.query.error;

      const state = req.query.state || null;
      const code = req.query.code || null;

      const cookieState = req.cookies.spotifyState || null;

      if(!state || !cookieState || state !== cookieState) throw 'Invalid state token';

      //console.log(req.query.code);

      const fetchBody = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.SPOTIFY_REDIRECT,
      });

      const spotifyAuth = btoa(process.env.SPOTIFY_CLIENT + ':' + process.env.SPOTIFY_SECRET);

      //console.log(spotifyAuth);

      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + spotifyAuth
        },
        body: fetchBody
      });

      if(response.status !== 200) throw 'Spotify Auth API problem: ' + response.status + ' ' + response.statusText;
      
      const parsedResponse = await response.json();

      //console.log(parsedResponse);

      res.locals.spotifyTokens = {
        accessToken : parsedResponse.access_token || null,
        refreshToken : parsedResponse.refresh_token || null
      }

      res.cookie('refreshToken', parsedResponse.refresh_token);
      res.cookie('accessToken', parsedResponse.access_token);

      return next();
    }
    
    catch (e) {
      console.error(e);
      return;
    }
  },

  async refreshToken(refreshToken) {

    try {

      const fetchBody = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: process.env.SPOTIFY_CLIENT,
        client_secret: process.env.SPOTIFY_SECRET
      });

      const spotifyAuth = btoa(`${process.env.SPOTIFY_CLIENT}:${process.env.SPOTIFY_SECRET}`);

      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + spotifyAuth
        },
        body: fetchBody
      });

      const parsedResponse = await response.json();

      res.cookie('accessToken', parsedResponse.access_token);
      if(parsedResponse.refresh_token) res.cookie('refreshToken', parsedResponse.refresh_token);

      return parsedResponse.access_token;
    }

    catch (e) {
      console.error(e);
      return;
    }
  },

  async sendPlaylists(req,res,next) {
    
    try {

      const {accessToken,refreshToken} = req.cookies;

      console.log(accessToken);

      const queryParams = new URLSearchParams({
        limit: 50
      })
      //const test_token = "BQA5QHd5q4pwqA5Eikvn7kL7kGDZBTHevZIDHt7hLvelqD3Wo6kYsPuM9qd4gS8kHgOOb_Oz5Bnow7A6S6Cbq5l6sRaYrOdIn_Bc72j8fbdn9d2fFkMAzQIE1S87BiPGIZZhd55WCsZB8iMN7N-9yDPRg47DWBEzxxoepEJRGTly_6Vk_ARZ_HoKvis7wLZo"
      const response = await fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      })

      const parsedResponse = await response.json();
      

      if(response.status !== 200) throw parsedResponse;

      const {items} = parsedResponse;
      // console.log(items)
      const playlistArr = [];

      for(let i = 0; i < items.length; i += 1) {

        const {name, id} = items[i];
        
        playlistArr.push({name, id});
      }
      
      res.locals.playlists = playlistArr;

      return next();
    }

    catch (e) {
      console.error(e);
      return;
    }
  }
};
