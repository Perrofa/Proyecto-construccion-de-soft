const express = require('express');
const path    = require('path');
const fs      = require('fs');
const { request } = require('http');
const router = express.Router();
const controller = require("../controllers/appix.controller.js");

router.get('/index', controller.index);

module.exports = router;