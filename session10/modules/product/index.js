const productModel = require('./module')

const handlers = {
    async findMany(req, res, next) {
        try {
            let { pageIndex,
                pageSize,
                sortBy, // 'title'
                sort, // 'asc' | 'desc'
                search = '',
                fields = ''
            } = req.query


            pageSize = parseInt(pageSize) || 20
            pageIndex = parseInt(pageIndex) || 1

            let limit = pageSize
            let skip = (pageIndex - 1) * pageSize
            let sortInfo = `${sort == 'desc' ? '-' : ''}${sortBy}`
            // fields = 'title,description' > fieldsArr = ['title','description']
            let fieldsArr = fields.split(',').map(field => field.trim())
            let conditions = {}
            if (search) {
                conditions.title = new RegExp(search, 'i')
            }
            // if(filter) {
            //     ... add conditions
            // }

            let items = await productModel.find(conditions, fieldsArr).skip(skip).limit(limit).sort(sortInfo).populate('categories', ['title', 'description'])
            res.json(items)
        } catch (err) {
            next(err)
        }
    },
    async findOne(req, res, next) {
        try {
            let id = req.params.id
            let item = await productModel.findById(id).populate('categories', ['title'])
            console.log(item);

            res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async create(req, res, next) {
        try {
            let data = req.body // {title: '123',des: '123'}
            let item = await productModel.create(data) // {_id:'',title:'123',des:'123'}
            res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async update(req, res, next) {
        try {
            let data = req.body
            let id = req.body._id

            if (!id) {
                throw new Error(`Require 'id' to update`)
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
            let item = await productModel.findByIdAndDelete(id)
            res.json(item)
        } catch (err) {
            next(err)
        }
    },
}

module.exports = handlers