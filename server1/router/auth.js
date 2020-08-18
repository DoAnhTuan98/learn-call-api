const express = require('express')

const authRouter = new express.Router()
const authHandlers = require('../modules/auth/index')

authRouter.post('/sign-in', authHandlers.signIn)

module.exports = authRouter