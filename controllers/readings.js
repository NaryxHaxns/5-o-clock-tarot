const Reading = require('../models/reading');

module.exports = {
    create
}

async function create(req,res){
    try {
        await Reading.create(req.body);
        console.log('hittingcontroller')
    }catch(err){
        res.json({err});
    }
}
