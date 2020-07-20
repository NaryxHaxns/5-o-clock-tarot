const mongoose = require('mongoose');

const reflectionSchema = new mongoose.Schema({
    user: String,
    reflection: String
},{
    timestamps: true
})

const readingSchema = new mongoose.Schema({
    reading: [{
        name: String,
        arcana: String,
        meaning: String,
        description: String,
        image: String,
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reflections: [reflectionSchema]
},{
    timestamps: true
})

module.exports = mongoose.model('Reading', readingSchema);