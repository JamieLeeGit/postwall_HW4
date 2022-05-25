const express = require('express');
const router = express.Router();
const PostsControllers = require('../controllers/posts');


router.post('/read', PostsControllers.readPost)
router.post('/create',PostsControllers.createPostsOne);

module.exports = router;
