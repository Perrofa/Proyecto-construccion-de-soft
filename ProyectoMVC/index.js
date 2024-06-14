const http = require('http');
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mariadb = require('mariadb');

const app = express();

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Configuración de body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Asegura que también aceptas JSON

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Cookies y sesiones
app.use(cookieParser());
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
  resave: false,
  saveUninitialized: false,
}));

// Configuración de la base de datos
const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "1234",
  database: "appix",
  connectionLimit: 5,
});

// Prueba de conexión a la base de datos
app.get('/test_db', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM proyecto");
    const jsonS = JSON.stringify(rows);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(jsonS);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error en la base de datos");
  } finally {
    if (conn) conn.release();
  }
});

// Carga de rutas
const rutasAppix = require('./routes/appix.routes.js');
app.use('/appix', rutasAppix);

const rutasUsuarios = require('./routes/usuarios.routes.js');
app.use('/usuarios', rutasUsuarios);

const rutasProyectos = require('./routes/proyectos.routes');
app.use('/proyectos', rutasProyectos);

const rutasRiesgos = require('./routes/riesgos.routes');
app.use('/riesgos', rutasRiesgos);

// Apertura del servidor
app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
