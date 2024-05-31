
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const { request } = require('http');
const router = express.Router();
const controller = require("../controllers/appix.controller.js");

router.get('/sign_in', controller.sign_in);
router.get('/inicio', controller.inicio);
router.get('/perfil', controller.perfil);
router.get('/proyectos', controller.proyectos);
router.get('/registro', controller.registro);
router.get('/ayuda', controller.ayuda);

module.exports = router;