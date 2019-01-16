const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("You are Home !");
  return res.status(500).json({"messsage":"Home"});
});

module.exports = router;
