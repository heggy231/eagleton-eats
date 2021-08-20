# repo [https://github.com/heggy231/eagleton-eats]

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
