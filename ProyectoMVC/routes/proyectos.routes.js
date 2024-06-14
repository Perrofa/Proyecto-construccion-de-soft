
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const { request } = require('http');
const router = express.Router();
const controller = require("../controllers/proyectos.controller.js");

router.post('/registro', controller.post_registro);

router.get('/proyectos', controller.get_proyectos);
router.get('/encontrar', controller.find);
router.get('/fechafinal', controller.get_proyectos_por_final);

module.exports = router;
