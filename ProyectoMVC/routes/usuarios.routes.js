
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const { request } = require('http');
const router = express.Router();
const controller = require("../controllers/usuarios.controller.js");

router.get('/registro', controller.get_registro);
router.post('/registro', controller.post_registro);
//router.get('/login', controller.get_login);
//router.post('/login', controller.post_login);

router.get('/usuarios', controller.get_usuarios);
router.get('/nombre', controller.get_Nombre);
router.get('/contra', controller.get_Contra);
router.get('/encontrar', controller.find);


module.exports = router;