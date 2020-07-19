const express = require('express');
const router = express.Router();
const readingsCtrl = require('../../controllers/readings');

router.get('/pastReadingIndex/:userid', readingsCtrl.pastReadingIndex);
router.post('/create', readingsCtrl.create);
router.post('/addReflection', readingsCtrl.addReflection);

module.exports = router;