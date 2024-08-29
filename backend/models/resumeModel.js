const mongoose = require('mongoose')

const resumeModel = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    fileName : {
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
})

const Resume = mongoose.model('Resume', resumeModel);

module.exports = Resume;