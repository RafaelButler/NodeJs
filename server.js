const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(express.json());


mongoose.connect('mongodb+srv://EstudandoNode:EstudandoNode@estudandonode-gobdz.mongodb.net/EstudandoNode?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('Connected to DB'));
app.use(routes);



app.listen(3000, () => console.log('Server up and running'));