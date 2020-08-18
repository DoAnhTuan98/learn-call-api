const express = require('express')
const productHandlers = require('../modules/product')
const { validateAccessToken } = require('../modules/auth')

const productRouter = new express.Router()

productRouter.get('/', productHandlers.findMany)

productRouter.get('/:id', productHandlers.findOne)

productRouter.post('/', validateAccessToken, productHandlers.create)

productRouter.put('/', validateAccessToken, productHandlers.update)

productRouter.delete('/:id', validateAccessToken, productHandlers.delete)


module.exports = productRouter