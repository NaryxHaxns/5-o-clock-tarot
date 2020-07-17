const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema({
    pastReadings: {
        type: Array
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Reading', readingSchema);