const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('media/강아지.jpg', (err, image) => {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(image);
    });
});

server.listen(3000);