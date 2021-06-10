require('dotenv').config();
const {google} = require('googleapis');
const youtubeController = {};

// youtube query middleware
youtubeController.getYoutubeUrl = (req, res, next) => {
  // req.body.query should be the input to search for
  const query = req.body.query;

  const searchParams = {
    // API KEY
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    // search
    q: query,
    maxResults: 1,
  };

  google
    .youtube('v3')
    .search.list(searchParams)
    // returns a promise
    .then((response) => {
      // destructures response.data
      const {data} = response;
      // iterates through the data.items
      data.items.forEach((item) => {
        // print results of search
        console.log(
          `Title: ${item.snippet.title}\nURL: <a href="https://www.youtube.com/watch?v=${item.id.videoId}">`
        );
        // put url in a const
        const url = `"https://www.youtube.com/watch?v=${item.id.videoId}"`;
        // the url that will be used in server, store in local memory for server
        res.locals.url = url;
      });
    })
    .catch((err) => console.log(err.stack));

  return next();
};

// Running the file will hit up the API
// req.body.query
const query = 'bowling for soup';

const searchParams = {
  // API KEY
  key: process.env.YOUTUBE_TOKEN,
  part: 'snippet',
  // search
  q: query,
  maxResults: 1,
};

// returns a promise
// google
//   .youtube('v3')
//   .search.list(searchParams)
//   .then((response) => {
//     const {data} = response;
//     data.items.forEach((item) => {
//       console.log(
//         `Title: ${item.snippet.title}\nURL: <a href="https://www.youtube.com/watch?v=${item.id.videoId}">`
//       );
//     });
//   })
//   .catch((err) => console.log(err.stack));

youtubeController.getPlaylistURLs = (req, res, next) => {
  const playlistParams = {
    // API KEY
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    playlistId: 'PLCwVd26SHEzRoUMmd8gdgST1SKIRwERdV',
    maxResults: 25,
  };

  google
    .youtube('v3')
    .playlistItems.list(playlistParams)
    .then((response) => {
      const {data} = response;
      data.items.forEach((item) => {
        console.log(
          `<a href="https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}">`
        );
        // put url in a const
        const url = `"https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}"`;
        // the url that will be used in server, store in local memory for server
        // should it be a list?
        res.locals.url = url;
      });
    })
    .catch((err) => console.log(err.stack));

  return next();
};

// const playlistParams = {
//   // API KEY
//   key: process.env.YOUTUBE_TOKEN,
//   part: 'snippet',
//   playlistId: 'PLCwVd26SHEzRoUMmd8gdgST1SKIRwERdV',
//   maxResults: 25,
// };

// google
//   .youtube('v3')
//   .playlistItems.list(playlistParams)
//   .then((response) => {
//     const {data} = response;
//     data.items.forEach((item) => {
//       console.log(
//         `<a href="https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}">`
//       );
//     });
//   });

module.exports = youtubeController;
