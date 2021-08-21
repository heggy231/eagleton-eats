CREATE DATABASE eagleton;

CREATE TABLE product(
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

SELECT * FROM product;

-- inside pqsql handy commands
SELECT * FROM product;
INSERT INTO product(name) VALUES('Korean brown rice');
SELECT * FROM product WHERE product_id = 1;
UPDATE product SET name = "Japanese brown rice" WHERE product_id = 3;
DELETE FROM product WHERE product_id = 1;

SELECT name FROM product;