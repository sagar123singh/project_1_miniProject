const mongoose = require('mongoose')
const validator = require('validator');

const authorSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: 'first name is required',
        trim:true
    },
    lname: {
        type: String,
        required: 'last name is required',
        trim:true
    },
    title: {
        type:String,
        enum: ['Mr', 'Mrs', 'Miss'],
        required:'title is required'
    },
    email: {
        type:String,
        unique: true,
        lowercase:true,
        trim:true,
        required:'email is required',
        validate:{
            validator: function (email){
                return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)
            },message: 'please fill a valid email address', isAsync:false
        }
        },
    password: {
        type: String,
        required: 'password is required'
    }

}, { timestamps: true })
module.exports = mongoose.model('Author', authorSchema , )
