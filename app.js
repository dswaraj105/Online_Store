const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const indexRoutes = require('./routes/index');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRoutes);
app.use(shopRoutes);
// app.get('/dslr', (req, res)  => {
//   res.render('dslr')
// });

app.listen(3000);