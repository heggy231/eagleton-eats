# [eagleton-eats](https://hc-eagleton-eats.herokuapp.com)

## how do you run our app?

from root directory:

> npm run dev

```json

// query db, $1 is a place holder [name] this comes from the client side
// append RETURNING * command for update, delete, insert data into db
//   so that it returns back the data into my variable newProduct
const newProduct = await pool.query(
  "INSERT INTO product (name) VALUES($1) RETURNING *",
  [name]
);

// => result when posting new data since I want to return *
"rows": [
    {
        "product_id": 4,
        "name": "milk"
    }
],

// look of all data comes back
// to just see my new data newProduct.rows[0]
{
    "command": "INSERT",
    "rowCount": 1,
    "oid": 0,
    "rows": [
        {
            "product_id": 4,
            "name": "milk"
        }
    ],
    "fields": [
        {
            "name": "product_id",
            "tableID": 17488,
            "columnID": 1,
            "dataTypeID": 23,
            "dataTypeSize": 4,
            "dataTypeModifier": -1,
            "format": "text"
        },
```
