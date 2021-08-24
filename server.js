require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const path = require("path"); // path comes with node therefore no need extra npm i
const pool = require("./db"); // pg db connection

const app = express(); // app is now express server

const { PORT } = process.env; // same as PORT = process.env.PORT;

// ----------------------------------------------------------------------------
//                                Middleware
// ----------------------------------------------------------------------------
app.use(cors());
// to serve up static files at the root, path comes with node need to require path up above
app.use(express.static(path.resolve(__dirname + "/react-ui/build")));

// req.body parsing middleware so I can get data from client side
app.use(express.json()); // this allows me get access req.body -- only way for me to access to client side, I must communicate thru req.body in json.
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded (converts str => json)

// order matters: session middleware before Passport OAuth
// cookie expires after 10 min
// secrete is key that allows browser know that I am the server
const sess = {
  secret: "keyboard mouse",
  cookie: { maxAge: 600000 },
  id: null,
};
app.use(session(sess));

// ----------------------------------------------------------------------------
//                                Routes
// ----------------------------------------------------------------------------

// create a product
app.post("/product", async (req, res) => {
  try {
    console.log("inside post", req.body); // {name: 'I need to clean'}
    // we get access to req.body from express.json() middleware
    // put post data into db by storing req.body.name
    const { name } = req.body; // obj destructor from req.body.name

    // query db, $1 is a place holder [name] this comes from the client side
    // append RETURNING * command for update, delete, insert (aka create) data into db
    //   so that it returns back the data into my variable newProduct
    const newProduct = await pool.query(
      "INSERT INTO product (name) VALUES($1) RETURNING *",
      [name]
    );

    res.json(newProduct.rows[0]); // { "product_id": 5, "name": "ham" }
  } catch (err) {
    console.error(err.message);
  }
});

// get all products
app.get("/product", async (req, res) => {
  try {
    // no need for return * here since get displays data inherently
    const allProduct = await pool.query("SELECT * FROM product");
    // console.log('inside get', req.body); // => return {} since we are not posting to db simply reading the data
    res.json(allProduct.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a product
app.get("/product/:id", async (req, res) => {
  try {
    // console.log(req.params); // => what I defined in my :id part of my url (funfunfun) => maps to variable id => { id: 'funfunfun' } http://localhost:8080/product/funfunfun

    const { id } = req.params; // destructor from req.params.id
    const product = await pool.query(
      "SELECT * FROM product WHERE product_id = $1",
      [id]
    );
    // {"product_id": 4,"name": "milk"}

    res.json(product.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a product
app.put("/product/:id", async (req, res) => {
  try {
    const { id } = req.params; // url specified variable id
    const { name } = req.body; // name column from what I post to db
    const updateProduct = await pool.query(
      // UPDATE product SET name = "milk" WHERE product_id = 3;
      "UPDATE product SET name = $1 WHERE product_id = $2 RETURNING *",
      [name, id]
    );

    res.json(updateProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// delete a product
app.delete("/product/:id", async (req, res) => {
  try {
    const {id} = req.params; // url ending str now stored inside of id var
    const deleteProduct = await pool.query(
      "DELETE FROM product WHERE product_id = $1 RETURNING *",
      [id]
    );
    res.json(deleteProduct.rows[0]);
  } catch {
    console.error(err.message);
  }
});

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

// PORT needs
app.listen(PORT, () => {
  console.log(`The server is listening at port ${PORT}`);
});
