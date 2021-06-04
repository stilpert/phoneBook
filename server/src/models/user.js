const mongoose = require('mongoose')
const Schema = mongoose.Schema
const contactSchema = new Schema({
    name: {
        type: String,
    },
    numbers: {
        type: [String],
        default: []
    }
})

const UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    contacts: {
        type: [contactSchema],
        default: []
    }
})
const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel