const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3002;

app.get('/user-list', (req,res) => {
    let result = {
        id : 12,
        name : "User List"
    }
    res.status(200).json(result);
})

app.get('/user-detail', (req,res) => {
    let result = {
        id : 13,
        name : "User Detail"
    }
    res.status(200).json(result);
})

app.listen(port, () => {
    console.log("App is listening at port no ",port);
})