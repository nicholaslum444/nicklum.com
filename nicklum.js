//--- REQUIRE ------------------------------------------------------------------
let express = require('express');
let path = require('path');

//--- SETTINGS -----------------------------------------------------------------
let app = express();
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));
app.locals.basedir = path.join(__dirname, 'views');
app.use(express.static('public'));

//--- CODE ---------------------------------------------------------------------
app.get('/', function(req, res) {
  res.render('home/index', {});
});

app.get('/gallery', function(req, res) {
  res.render('gallery/layout', {title: 'Gallery'});
});

app.get('/about', function(req, res) {
  res.render('about/layout', {title: 'About'});
});

//--- LISTEN -------------------------------------------------------------------
app.listen(9090);
