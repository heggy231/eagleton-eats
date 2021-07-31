require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const { PORT } = process.env;

app.use(express.static(path.resolve(__dirname + '/react-ui/build')));

app.get('/heartbeat', (req, res) =>{
    res.json({
        "is": "working",
    })
})

app.listen(PORT || 8080, () =>{
    console.log('The server is listening at port 8080')
})