const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o banco de dados

mongoose.connect(
    'mongodb://192.168.99.100:27017/node-api',
    {useNewUrlParser: true, 
    useUnifiedTopology: true}
);
requireDir('./src/models');

//const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.listen(3001);