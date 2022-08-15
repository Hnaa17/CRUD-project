CREATE DATABASE crud_db;

CREATE TABLE products (
    id serial primary key, 
    product_name varchar not null,
    product_category int not null,
    price decimal not null,
    stock int not null
);

CREATE TABLE categories (
    id serial primary key, 
    category_name varchar not null
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    transaction_date DATE NOT NULL,
    customer VARCHAR NOT NULL
);

CREATE TABLE transaction_detail(
    id SERIAL PRIMARY KEY,
    transaction_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL
);

DROP TABLE products CASCADE;

SELECT * FROM products;

SELECT * FROM products WHERE id=3;


SELECT * FROM categories;

SELECT * FROM categories WHERE id=3;

SELECT products.product_name, categories.category_name, products.price, products.stock 
FROM products 
INNER JOIN categories 
ON products.product_category = categories.id;

INSERT INTO categories(id,category_name) VALUES (18, 'pants')

INSERT INTO categories(category_name) VALUES ('pants');

UPDATE categories SET category_name='shoes' WHERE id=3;

DELETE FROM categories WHERE id=5;