var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
    res.render('test', {
      title: '测试测试测试'
    });
});

module.exports = router;
