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

// cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// sesiones
const session = require('express-session');
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

// interaccion con la base de datos
const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"1234",
    database:"appix",
    connectionLimit:5
});

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("Hola Mundo");
    response.end(); 
});

app.get('/test_db', async(request, response, next) => {
    let conn;

    try{
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM proyecto")
        console.log(rows);
        const jsonS = JSON.stringify(rows);
        response.writeHead(200, {'Content-type':'text/html'});
        response.end(jsonS);
    }catch(e){
        console.log(e)
    }
});

// carga de las rutas en la carpeta routes
const rutasAppix = require('./routes/appix.routes');
app.use('/appix', rutasAppix);

// apertura del servidor
const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);