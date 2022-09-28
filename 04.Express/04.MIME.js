// MIME: Multipurpose Internet Mail Extensions
const express = require('express');
const fs = require('fs');
const app = express();      

app.get('/', (req, res) => {
    res.send(`<h1>MIME: Multipurpose Internet Mail Extensions</h1>`);
});

app.get('/image', (req, res) => {
    fs.readFile('public/강아지.jpg', (err, image) => {
        res.type('image/jpg');
        res.send(image);
    });
});

app.get('/audio', (req, res) => {
    fs.readFile('public/mp3_sample.mp3', (err, image) => {
        res.type('audio/mp3');
        res.send(image);
    });
});

app.get('*', (req, res) => {
    res.status(404).send('Path not found.');
});
app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000');
});