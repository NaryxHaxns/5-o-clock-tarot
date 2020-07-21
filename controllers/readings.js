const Reading = require('../models/reading');

module.exports = {
    create,
    pastReadingIndex,
    addReflection,
    deleteReflection
}

async function create(req, res) {
    try {
        await Reading.create(req.body);
        const readings = await Reading.find({ user: req.body.user._id });
        res.json(readings);
    } catch (err) {
        res.json({ err });
    }
}

async function pastReadingIndex(req, res) {
    const readings = await Reading.find({ user: req.params.userid });
        res.json(readings);
}

async function addReflection(req, res) {
    try {
        await Reading.findById(req.body.reading, function(err,reading) {
            reading.reflections.push(req.body);
            reading.save(function(err){
                res.json(reading);
            })
        })
    } catch (err) {
        res.json({ err });
    }
}

async function deleteReflection(req,res) {
    try {
        await Reading.findById(req.body.reading, function(err,reading) {
            for(let i=0; i<reading.reflections.length; i++){
                console.log(reading.reflections[i]._id, req.body._id)
                if(reading.reflections[i]._id == req.body._id){
                    reading.reflections.splice(i, 1)
                }
            }
            reading.save(function(err){
                res.json(reading)
            })
        })
    } catch (err) {
        res.json({ err });
    }
}