const mysql = require('promise-mysql');

const config = require('./config');

async function start() {
    const data = await mysql.createConnection(config);

    await read(data)
    data.end()
}

start();

async function read(data) {
    console.log("loading")
    const res = data.query("SELECT * FROM products");
    console.log(res)
}