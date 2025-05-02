const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    lists: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'List', // Reference to the List model
        },
    ], 
    
});

module.exports = mongoose.model('User', userSchema);