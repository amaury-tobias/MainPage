var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/error', function (req, res) {
  res.render('error')
})

module.exports = router;
