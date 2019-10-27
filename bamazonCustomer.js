const mysql = require('promise-mysql');

const config = require('./config')

const inquirer = require('inquirer')

const Table = require('cli-table2');



async function createConnection() {

    let connect = await mysql.createConnection(config);
    query(connect);
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

async function query(connect) {
    const ask = await inquirer
        .prompt({
            name: "Product-to-buy",
            type: "input",
            message: "Please enter the Product id you wish to purchase "
        })
    const answer = ask["Product-to-buy"]
    connect.query("SELECT * FROM products WHERE item_id=?", answer, (err, res) => {
        if (err) throw err;
        if (res.length === 0) {
            console.log("The ID you chose doesn't exists please type a valid ID.")
        } else {
            console.log(`Thank you for your purchase.`)
            const units = inquirer
                .prompt({
                    name: "Units",
                    type: "input",
                    message: "Please type the amount of units you want to purchase this item."
                })

            const unitsAnswer = units["Units"]
            connect.query("UPDATE products SET stock_quantity = ? ", unitsAnswer, (err, res) => {
                if (err) throw err;
                if (res.length === 0) {
                    console.log(`Please type a valid stock number`)
                } else {
                    console.log(`its working`)
                }
            })
        }
    })



}



createConnection()