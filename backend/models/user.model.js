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
        name: { 
            first : { type: String },
            last : { type: String },
        },
        gender: { type: String },
        dob: { type: Date },
        from: { type: String },
        location: { type: String },
        education: { type: String },
        work: { type: String },
        bio: { type: String }
    },
    interests: {
        likes: [{ type: String }],
        music: [{ type: String }],
        movies: [{ type: String }],
        tv: [{ type: String }],
    },
    contact: {
        email: { type: String },
        social: [{ type: String }],
    },
    blogs : [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Blog',
    }],
    works : [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Work',
    }],
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;