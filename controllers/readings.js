const Reading = require('../models/reading');

module.exports = {
    create,
    userIndex
}

async function create(req, res) {
    const newReading = {
        ...req.body, 
    }
    try {
        await Reading.create(req.body);
    } catch (err) {
        res.json({ err });
    }
}

async function userIndex(req, res) {
    Reading.find({user: req.params.userid}, function(err,readings){
        res.json(readings);
    })
}