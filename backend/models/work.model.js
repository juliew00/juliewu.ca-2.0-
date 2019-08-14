const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workSchema = new Schema({
    isProject: {
        type: Boolean
    },
    title: {
        type: String,
        required: true,
    },
    dateFrom: { 
        type: Date,
        required: true,
    },
    dateTo: { 
        type: Date
    },
    location: { type: String },
    organization: { type: String },
    description: { type: String },
    links: [{type: String}]
}, {
    timestamps: true,
});

const Work = mongoose.model('Work', workSchema);

module.exports = Work;