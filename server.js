require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session"); // for github login
const path = require("path"); // path comes with node therefore no need extra npm i
const pool = require("./db"); // pg db connection
const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

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

// !!! order matters: session middleware BEFORE Passport OAuth
// cookie expires after 10 min
// secrete is key that allows browser know that I am the server
const sess = {
  secret: "keyboard mouse",
  cookie: { maxAge: 600000 },
  id: null,
};
app.use(session(sess));

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(JSON.stringify(profile));

      // ASIDE: Access Tokens are super important!! Treat them like pwd (never store in plain text)
      // You can use this to talk to Github API
      console.log("Access Token: *****=======>" + accessToken);

      // Tell passport to move on
      cb(null, profile);
    }
  )
);

app.use(passport.initialize());
app.use(passport.session());

// Configure Passport authenticated session persistence.
// [doc](https://github.com/passport/express-4.x-facebook-example/blob/master/boot/auth.js)
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

console.log(
  "*******process.env.GITHUB_CLIENT_ID******",
  process.env.GITHUB_CLIENT_ID
);

// ----------------------------------------------------------------------------
//                                Routes
// ----------------------------------------------------------------------------

app.get("/", (req, res) => {
  console.log("Here! at the ROOOT!!!!");
  res.send(`<h1>Hello! You are logged IN!</h1>`);
});

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
    const { id } = req.params; // url ending str now stored inside of id var
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

// Place github strategy after the home page
// http://www.passportjs.org/packages/passport-github/
// PUT 2 /auth/github/ endpoints after `/` root home pg

// 1. auth/github takes me to github, user enters github credential to authenticate('github'));
// 2. once profile is received, callback route => redirect `/` homepage
// 1,2 GOAL: 1. go to my app => 2. Github => 3. back to my app
app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    // you have to go back to react localHost 3030
    // environment varialbe local do 3000, heroku for /

    res.redirect(process.env.FRONTEND_URL);
  }
);

app.get("/auth/userinfo", (req, res) => {
  console.log("server user info heeerrr ****===>", req);
  res.json(req.user);
});

app.get("/auth/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.FRONTEND_URL);
});

// PORT needs
app.listen(PORT, () => {
  console.log(`The server is listening at port ${PORT}`);
});
