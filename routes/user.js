const express = require('express');
const router = express.Router();
const UserControllers = require('../controllers/user');

router.route("/")
  .get(UserControllers.readUserAll);

module.exports = router;
