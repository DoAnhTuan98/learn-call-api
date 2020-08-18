const mongoose = require('mongoose')

const Schema = mongoose.Schema

// String,Number,Boolean,Date,Object,Array, ObjectId
const productSchema = new Schema({
    title: {
        type: String,
        required: [true, `Yeu cau 'title'`],
        unique: true,
    },
    description: String,
    categories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'categories'
        }
    ]
    // email: {
    //     type : String,
    //     validate: {
    //         // return true | false | string ~ error message
    //         validator(title) {
    //             let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //             let emailValid = emailRegex.test(email)
    //             if(emailValid) {
    //                 return true
    //             }else {
    //                 return 'Invalid email'
    //             }
    //         }
    //     }
    // }
    // state : { // 'out-stock' ,'in-stock'
    //     type : String,
    //     enum: ['out-stock','in-stock']
    // },
})

module.exports = productSchema