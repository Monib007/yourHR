const User = require('../models/userModel');
const Resume = require('../models/resumeModel');

const multer = require('multer')
const path = require('path');

// multer configuration for file upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
})

const upload = multer({ storage: storage })

const registerUser = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const resume = req.file.filename;

        const user = new User ({
            name, 
            email,
            phone,
            resume,
        })

        await user.save();

        res.status(201).json({
            message: 'User registered successfully',
            user,
        })
    } catch (err) {
        res.status(500).json({message: err})
    }
};

module.exports =  { registerUser, upload };