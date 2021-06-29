const express = require('express');

var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(3000);

app.get('/test', getTest);

function getTest(req, res) {
    try {
        res.send({msg: 'getTest() success'});
    } catch (error) {
        console.error('getTest() error / ', error);
    }
}