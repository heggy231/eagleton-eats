# repo [https://github.com/heggy231/eagleton-eats]


- database: https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/


- original repo (https://github.com/JKhariD/eagleton-eats)

- [Live Demo](https://hc-eagleton-eats.herokuapp.com/)
- create build for heroku
first check how it looks locally when creat buind
1. cd to root dir
2. npm run build 
// this runs the script: "build": "cd react-ui/ && npm install && npm run build"
then heroku runs the same 

- [Heroku activity monitor for our app](https://dashboard.heroku.com/apps/hc-eagleton-eats/activity)

## how to make it single col in sm screen

- make the grid sm={7} if you have 2 col grid (7 is little over half of 12 which is the num of columns in total col in a page)

rename burger => favicon.ico

- for license.md use `mit github license`

- https://react-bootstrap.github.io/layout/grid/

- at the top level : express server
to check things are all good: 
http://localhost:8080/heartbeat

- having two servers to connect using static files on root


## Heroku app deployment

- add build script for react which heroku knows to 
  use this.

```json

  "scripts": {
    "build": "cd react-ui/ && npm install && npm run build",
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "cacheDirectories": [
    "node_modules",
    "react-ui/node_modules"
  ],

```

## communicate to backend
```js

// inside of InputProduct.jsx)
// step 1: package up the data I am sending
const body = { name };
// step 2: specify what method CREATE => POST, Update => PUT, Delete => DELETE
const response = await fetch("http://localhost:8080/product", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

// inside of EditProduct.jsx)


// for deleting
// delete fetch request to backend
const deleteProd = await fetch(`http://localhost:8080/product/${id}`, {
  method: "DELETE",
});

// filter in ids that are not passed in id for page display only purpose
//  db has been updated but we don't want user to update the page to 
//  see the page update with deleted dataset.
setProducts(products.filter((product) => product.product_id !== id));



```

## facebook passport
 - how to create your own secret key, id
 * https://developers.facebook.com/docs/facebook-login/web
 * https://youtu.be/KlE9RAOl9KA

Valid OAuth Redirect URIs:
http://localhost:3000/auth/facebook/callback