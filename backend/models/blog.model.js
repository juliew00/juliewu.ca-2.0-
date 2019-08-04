const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        first: { type: String, default: "Julie" },
        last: {type: String, default: "Wu" },
    },
    content: {
        type: String,
    },
}, {
    timestamps: true,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;