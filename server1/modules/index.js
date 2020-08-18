const productModel = require('./module')

const handlers = {
    async findMany(req, res, next) {
        try {
            let { name = '', status = '' } = req.query
            name = new RegExp(name, 'i')
            conditions = {}
            console.log(name, status)
            console.log(typeof (status))
            if (name) {
                conditions.name = new RegExp(name, 'i')
            }
            if (status == '1') {
                status = true
                conditions.status = status
            }
            if (status == '0') {
                status = false
                conditions.status = status
            }

            // if (status == '-1') {
            //     status = undefined
            // }
            // else {
            //     status = false
            // }
            console.log(status)

            console.log(conditions)
            let items = await productModel.find(conditions)
            res.json(items)
        } catch (err) {
            next(err)
        }
    },
    async findOne(req, res, next) {
        try {
            let id = req.params.id
            let item = await productModel.findById(id)
            res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async create(req, res, next) {
        try {
            let data = req.body
            console.log(data)
            let item = await productModel.create(data)
            res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async update(req, res, next) {
        try {
            let id = req.params.id
            let data = req.body
            if (!id) {
                throw new Error(`Requrie 'id' to update`)
            }
            let item = await productModel.findByIdAndUpdate(
                id,
                data,
                { new: true }
            )
            res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async delete(req, res, next) {
        try {
            let id = req.params.id
            let item = await productModel.findByIdAndRemove(id)
            res.json(item)
        } catch (err) {
            next(err)
        }
    },
}

module.exports = handlers