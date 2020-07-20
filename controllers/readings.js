const Reading = require('../models/reading');

module.exports = {
    create,
    pastReadingIndex,
    addReflection
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
        await Reading.reflection(req.body);
    } catch (err) {
        res.json({ err });
    }
}
