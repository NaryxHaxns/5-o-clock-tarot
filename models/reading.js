const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema({
    reading: [{
        name: String,
        arcana: String,
        meaning: String,
        description: String,
        image: String,
        show: true
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Reading', readingSchema);