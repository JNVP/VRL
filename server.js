const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
// app.use(express.urlencoded());
const PORT = 3000;
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const spotifyRouter = require(__dirname + '/server/routers/spotifyrouter');
const youtubeRouter = require('./server/routers/youtubeRouter');

app.use('/youtube', youtubeRouter);
app.use('/spotify', spotifyRouter);

app.get('/ping', (req, res) => {
  res.json({message: 'pong'});
});

app.get('/test', (req, res) => {
  res.json({message: 'Hello from test endpoint'});
});

app.get('/api', (req, res) => {
  res.json({message: 'Hello from server this time'});
});

app.get('/mainApp', function (req, res) {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', '/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});


