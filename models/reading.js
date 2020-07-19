const mongoose = require('mongoose');

//embedded comments schema

const readingSchema = new mongoose.Schema({
    reading: [{
        name: String,
        arcana: String,
        meaning: String,
        description: String,
        image: String,
        show: Boolean
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // comments: [{
        //commentsSchema
    // }]
},{
    timestamps: true
})

module.exports = mongoose.model('Reading', readingSchema);