DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255),
    department_name VARCHAR(255),
    price BIGINT,
    stock_quantity BIGINT,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES               
                      ("Headset", "electronics", 100, 50),
                      ("Airpods", "electronics", 200, 20),
                      ("IPhone11", "electronics", 800, 200),
                      ("Mac-Book-air", "electronics", 1100, 50),
                      ("Solid-State-Drive", "electronics", 100, 30),
                      ("PS4", "electronics", 400, 80),
                      ("Xbox-one", "electronics", 500, 80),
                      ("Tv-4K", "electronics", 700, 90),
                      ("Desktop", "electronics", 800, 40),
                      ("Apple-Watch", "electronics", 400, 30);


SELECT * FROM products;

