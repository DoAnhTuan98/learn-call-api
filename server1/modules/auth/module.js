const mongoose = require('mongoose')

const authSchema = require('./schema')
const COLLECTION_NAME = 'user-profiles'
const MODEL_NAME = 'user-profiles'

const userProfileModel = mongoose.model(
    MODEL_NAME,
    authSchema,
    COLLECTION_NAME
)

module.exports = userProfileModel

