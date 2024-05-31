
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const { request } = require('http');
const router = express.Router();
const controller = require("../controllers/proyectos.controller.js");

router.post('/registro', controller.post_registro);
router.get('/proyectos', controller.get_proyectos);

module.exports = router;
