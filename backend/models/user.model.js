const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    profile: {
        name : { type: String },
        dob: { type: Date },
        from: { type: String },
        location: { type: String },
        education: { type: String },
        work: { type: String },
        bio: { type: String }
    },
    interests: {
        likes: { type: String },
        music: { type: String },
        movies: { type: String },
        tv: { type: String },
    },
    contact: {
        email: { type: String },
        social: [{ type: String }],
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;