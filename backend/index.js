const express = require('express');
const server = express();
const movies = require('./src/filmes/filmes.json');

server.get('/movies', (req, res) => {
   return res.json(movies);
});

server.listen(3000, () => {
    console.log('Server is running...');
});