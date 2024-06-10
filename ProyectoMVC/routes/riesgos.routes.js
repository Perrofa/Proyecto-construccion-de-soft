
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const { request } = require('http');
const router = express.Router();
const controller = require("../controllers/riesgos.controller.js");

// rutas
router.post('/registro', controller.post_registro);
router.get('/riesgos', controller.get_riesgos);

module.exports = router;