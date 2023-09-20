const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment:{
        type: String
    },
    commentId:{
        type: mongoose.Types.ObjectId
    },
    userId:{
        type: mongoose.Types.ObjectId
    },
    rating:{
        type: Number
    },
    name:{
        type: String
    }
},{ timestamps: true })

module.exports = mongoose.model("Comments", commentSchema)