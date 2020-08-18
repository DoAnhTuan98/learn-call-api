require('./connnect-mongo')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const app = express()
const port = 9000

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded)


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(router)

app.get('/', (req, res) => {
    res.send('Hello from server')
})
app.use((err, req, res, next) => {
    let message = err.message
    let stack = err.stack
    res.status(400).json({ message, stack })
})


app.listen(port, (err) => {
    console.log(err || 'Server open at port' + port)
})