const express = require('express');
const router = express.Router();
import youtubeController from '../controllers/youtubecontroller';

// gets the youtubeURL for react player
router.get('/', youtubeController.getYoutubeUrl, (req, res) => {
  res.status(200).json(res.locals.url);
});

export default youtubeRouter;
