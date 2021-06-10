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
        const url = `<a href="https://www.youtube.com/watch?v=${item.id.videoId}">`;
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

// // try to find the url for the react player to load

// // Make sure the client is loaded before calling this method.
// function execute() {
//     const searchString = keywordInput.value;
//     const maxresult = maxresultInput.value;
//     const orderby = orderInput.value;

//     var arr_search = {
//         "part": 'snippet',
//         "type": 'video',
//         "order": orderby,
//         "maxResults": maxresult,
//         "q": searchString
//     };

//     if (pageToken != '') {
//         arr_search.pageToken = pageToken;
//     }

//   // response.result.item  item.id.videoId
//     return gapi.client.youtube.search.list(arr_search)
//     .then(function(response) {
//         // Handle the results here (response.result has the parsed body).
//         const listItems = response.result.items;
//         if (listItems) {
//             let output = '<h4>Videos</h4><ul>';

//           // list items are response.result.items
//           listItems.forEach(item => {
//               // each item has videoId and Title
//                 const videoId = item.id.videoId;
//                 const videoTitle = item.snippet.title;
//               // output is the url` <a href="https://youtube.com/watch?v=${videoId}"> `
//                 output += `
//                     <li><a data-fancybox href="https://www.youtube.com/watch?v=${videoId}"><img src="http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg" /></a><p>${videoTitle}</p></li>
//                 `;
//             });
//             output += '</ul>';

//             if (response.result.prevPageToken) {
//                 output += `<br><a class="paginate" href="#" data-id="${response.result.prevPageToken}" onclick="paginate(event, this)">Prev</a>`;
//             }

//             if (response.result.nextPageToken) {
//                 output += `<a href="#" class="paginate" data-id="${response.result.nextPageToken}" onclick="paginate(event, this)">Next</a>`;
//             }

//             // Output list
//             videoList.innerHTML = output;
//         }
//     },
//     function(err) { console.error("Execute error", err); });
// }


module.exports = youtubeController;