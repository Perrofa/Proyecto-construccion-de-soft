
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const { request } = require('http');
const router = express.Router();
const controller = require("../controllers/riesgos.controller.js");

// rutas
router.post('/registro', controller.post_riesgos);
router.get('/riesgos', controller.get_riesgos);

router.get('/NivelRiesgos', controller.get_riesgos_por_nivel);
router.get('/riesgos/:ProyectoID', controller.get_riesgos_por_proyecto);

module.exports = router;