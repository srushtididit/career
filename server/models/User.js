// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    academicRecords: [{ 
        institution: { type: String },
        degree: { type: String },
        yearOfGraduation: { type: Number }
    }],
    skills: [{ type: String }],
    interests: [{ type: String }]
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;