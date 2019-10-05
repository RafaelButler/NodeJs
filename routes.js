const express = require('express');
const User = require('./Controller/UsersSchema');
const Books = require('./Controller/BooksControllers');
const route = express.Router();

//Asseça s rotas de usuarios
route.post('/users', User.store);
route.get('/users', User.index);
route.get('/users/:id', User.show);
route.put('/users/:id', User.update);
route.delete('./users/:id', User.destroy);


//Books
route.get('/book', Books.index);
route.get('/book/:id', Books.show);
route.post('/book', Books.store);
route.delete('/book/:id', Books.destroy);



module.exports = route;