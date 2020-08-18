const express = require('express')
// require module auth

const authRouter = new express.Router()
const authHandlers = require('../modules/auth/index')

authRouter.post('/sign-in', authHandlers.signIn)
// router for sign-in

module.exports = authRouter