require('dotenv').config();

const {google} = require('googleapis');

export default youtubeController {
  // returns a promise
  google
    .youtube('v3')
    .search.list({
      // API KEY
      key: process.env.YOUTUBE_TOKEN,
      part: 'snippet',
      // search
      q: 'joji',
      maxResults: 10,
    })
    .then((response) => {
      const { data } = response;
      data.items.forEach((item) => {
        console.log(
          `Title: ${item.snippet.title}\nURL: <a href="https://www.youtube.com/watch?v=${item.id.videoId}">`
        );
      });
    })
    .catch((err) => console.log(err));

}