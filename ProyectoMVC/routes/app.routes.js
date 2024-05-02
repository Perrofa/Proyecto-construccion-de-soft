const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();
const controller = require("../controllers/app.controller.js")

// rutas de la app
router.get('/index', controller.index);

module.exports = router;