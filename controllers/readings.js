const Reading = require('../models/reading');

module.exports = {
    create,
    pastReadingIndex,
    addReflection
}

async function create(req, res) {
    try {
        await Reading.create(req.body);
    } catch (err) {
        res.json({ err });
    }
}

async function pastReadingIndex(req, res) {
    Reading.find({ user: req.params.userid }, function (err, readings) {
        res.json(readings);
    })
}

async function addReflection(req, res) {
    try {
        await Reading.reflection.create(req.body);
    } catch (err) {
        res.json({ err });
    }
}
