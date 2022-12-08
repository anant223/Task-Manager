const mongoose = require('mongoose');
const todolistSchema = new mongoose.Schema({

    desc: {
        type: String,
        requried: true
    },
    category:{
        type: String,
        requried: true
    },
    date:{
        type: String,
        requried: true
    }

});

const Tasks = mongoose.model('Tasks', todolistSchema);
module.exports = Tasks