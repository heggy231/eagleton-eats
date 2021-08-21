CREATE DATABASE eagleton;

CREATE TABLE product(
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

SELECT * FROM product;

-- inside pqsql handy commands
INSERT INTO product(name) VALUES('Korean brown rice');