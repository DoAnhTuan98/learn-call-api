const mongoose = require('mongoose')

const Schema = mongoose.Schema

const REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const authSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        // validate
        validate: {
            validator(email) {
                let isValidEmail = REGEX_EMAIL.test(email)
                if (isValidEmail) {
                    return true
                } else {
                    return 'Email khong hop le!'
                }
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    roles: [
        {
            type: String,
            enum: ['admin', 'user']
        }
    ]
})

module.exports = authSchema