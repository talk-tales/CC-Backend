const express = require('express');
const router = express.Router();

const {getAllStory, getStoryById} = require('../controller/storyController')

// routes
router.route('/').get(getAllStory);
router.route('/:id').get(getStoryById);



module.exports = router;