-- this is command you want to run to set up the 
-- database on you local machine.
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

-- handy commands for psql
-- start psql and enter to eaglton
> psql eagleton
-- enter into eagleton db
> \c eagleton 
-- List tables
> \dt 
-- List users
> \du
-- quit psql
> \q

