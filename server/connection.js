const { Client } = require('pg')
const client = new
 Client( {
    user:'postgres',
    password: 'mohammad19253',
    host:'localhost',
    port:1919,
    database:'VinciGallery'
})
client.connect()

module.exports = client;