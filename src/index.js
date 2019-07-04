const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('./helper');
listaasesores = require('./datos.json');


app.set('port', process.env.PORT || 3000);
app.set('view engine', 'hbs');
const directorioPublico = path.join(__dirname, '../public');
const directorioPartials = path.join(__dirname, '../partials');
//const directorioPartials = path.join(__dirname, '../template');

//app.use(bodyParser.json);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(directorioPublico));
hbs.registerPartials(directorioPartials);

app.get('/', (req, res) => {

    //render index.ejs view file
    res.render('index');

});


app.get('/:page', (req, res, next) => {

});


app.listen(app.get('port'), () => {
    console.log(`Èl servidor esta en el puerto: ${app.get('port')}`)
})