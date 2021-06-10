const express = require('express');
const youtubeController = require('../controllers/youtubecontroller');
const router = express.Router();



// gets the youtubeURL for react player
router.get('/:song/:artist', youtubeController.getYoutubeUrl, (req, res) => {
  console.log("in router")
  console.log(res.locals.url)
  res.status(200).json(res.locals.url);
});
 
module.exports = router;
