const express = require('express');
const router = express.Router();
const readingsCtrl = require('../../controllers/readings');

router.post('/create', readingsCtrl.create);

module.exports = router;