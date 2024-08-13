const express = require('express');
const { castVote, getResults } = require('../controllers/voteController');
const router = express.Router();

router.post('/cast', castVote);
router.get('/results', getResults);

module.exports = router;
