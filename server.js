const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(express.json());


mongoose.connect('mongodb+srv://DB_Connect:DB_Connect@estudandonode-gobdz.mongodb.net/DB_Connect?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('Connected to DB'));
app.use(routes);



app.listen(3000, () => console.log('Server up and running'));
