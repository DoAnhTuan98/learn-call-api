const mongoose = require('mongoose')

const schema = require('./schema')

const COLLECTION_NAME = 'categories'
const MODEL_NAME = 'categories'

const categoryModel = mongoose.model(
    MODEL_NAME,
    schema,
    COLLECTION_NAME
)

module.exports = categoryModel