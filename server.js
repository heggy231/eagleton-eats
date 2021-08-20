require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express(); // app is now express server

const { PORT } = process.env;

// to serve up static files at the root, path comes with node need to require path up above
app.use(express.static(path.resolve(__dirname + '/react-ui/build')));

app.get('/heartbeat', (req, res) =>{
    res.json({
        "is": "working",
    })
})

// PORT needs
app.listen(PORT, () =>{
    console.log(`The server is listening at port ${PORT}`)
})