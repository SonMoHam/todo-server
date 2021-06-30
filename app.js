const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const todoRouter = require('./router');
app.use(todoRouter);

app.listen(3000);