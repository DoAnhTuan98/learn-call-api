const express = require('express')

const productRouter = require('./product')
const authRouter = require('./auth')
const categoryRouter = require('./category')


const router = new express.Router()

router.use('/api/auth', authRouter)
router.use('/api/product', productRouter)
router.use('/api/category', categoryRouter)


module.exports = router