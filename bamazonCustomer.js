const mysql = require('promise-mysql');

const config = require('./config')


const Table = require('cli-table2');

async function createConnection() {

    const connect = await mysql.createConnection(config);
    connect.query(`SELECT * FROM products`, (err, res) => {
        if (err) throw err;


        const table = new Table({
            head: ['Product Id', "Product name", 'Department Name', 'Price', 'Stock'],
            colWidths: [12, 40, 20, 20, 8],
            colAligns: ['center', 'left', 'right'],
            style: {
                header: ['blue'],
                border: ['yellow']
            }
        });
        for (let i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity])
        }
        console.log(table.toString());
        console.log("");


    })


}
createConnection()