const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name: {
        type: String,
        requied: true,
    },
    Email: {
        type: String,
        requied: true,
        min: 6
    },
    Password: {
        type: String,
        requied: true,
        min: 8
    }
});

module.exports = mongoose.model('User', userSchema);