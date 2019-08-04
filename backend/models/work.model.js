const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workSchema = new Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    date: {
        from: {
            type: Date,
        },
        to: {
            type: Schema.Types.Mixed, // Can be Date or "current"
        },
    },
    location: {
        type: String,
    },
    organization: {
        type: String,
    },
    description: {
        type: String,
    },
    links: [{
        type: String,
    }]
}, {
    timestamps: true,
});

const Work = mongoose.model('Work', workSchema);

module.exports = Work;