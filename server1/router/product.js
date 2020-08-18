const express = require('express')

const productRouter = new express.Router()
const productHandlers = require('../modules/index')

productRouter.get('/', productHandlers.findMany)
productRouter.get('/:id', productHandlers.findOne)
productRouter.post('/', productHandlers.create)
productRouter.put('/:id', productHandlers.update)
productRouter.delete('/:id', productHandlers.delete)

module.exports = productRouter
