const express = require('express');
const router = express.Router();
const readingsCtrl = require('../../controllers/readings');

router.use(require('../../config/auth'));
router.get('/pastReadingIndex/:userid', readingsCtrl.pastReadingIndex);
router.post('/create', checkAuth, readingsCtrl.create);
router.post('/addReflection', checkAuth, readingsCtrl.addReflection);
router.delete('/deleteReflection', checkAuth, readingsCtrl.deleteReflection);

function checkAuth(req,res,next){
    if(req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;