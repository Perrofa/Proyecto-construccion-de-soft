
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const { request } = require('http');
const router = express.Router();
const controller = require("../controllers/usuarios.controller.js");

router.get('/registro', controller.get_registro);
router.post('/registro', controller.post_registro);

router.post('/delete', controller.delete);

//router.get('/login', controller.do_Login);
//router.post('/login', controller.post_login);

router.get('/usuarios', controller.get_usuarios);
router.get('/encontrar', controller.find);


module.exports = router;