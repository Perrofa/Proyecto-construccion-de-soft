// librerias
const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

// configuracion de ejs en el directiorio views
app.set('view engine', 'ejs');
app.set('views', 'views');

// configuracion de body-parser para middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// obtencion de los archivos estaticos en el directorio public
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("Hola Mundo");
    response.end(); 
});

// render dir
app.get('/apix', (rerequest, response, next) => {
    response.render('index')
});

// apertura del servidor
const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);