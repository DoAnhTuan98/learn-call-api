const jwt = require('jsonwebtoken')
// let data = { email: 'doanhtuan@gmail.com', name: 'Do Anh Tuan' }
let SECRET_STRING = 'my secret string'
// let token = jwt.sign(data, SECRET_STRING, { expiresIn: '6h' })

// let dataDecode = jwt.verify(token, SECRET_STRING)
// console.log(token)
// console.log(dataDecode)

function signToken(payLoad) {
    let token = jwt.sign(payLoad, SECRET_STRING, { expiresIn: '12h' })
    return token
}

function verifyToken(token) {
    let payload = jwt.verify(token, SECRET_STRING)
    return payload
}

module.exports = {
    signToken,
    verifyToken
}