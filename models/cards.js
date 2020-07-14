var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    arcana: {
        type: String,
        required: true
    },
    meaning: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Card', cardSchema);